import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const ViewEvents = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [registrations, setRegistrations] = useState([]);
  const [selectedRegistration, setSelectedRegistration] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [registrationsPerPage] = useState(6);

  const token = localStorage.getItem('iconStarToken')

  // Fetch all registrations
  const fetchAllRegistrations = async () => {
    try {
      setLoading(true);
      
      const response = await axios.get('https://us-central1-iconstar-conference.cloudfunctions.net/api/view/all/registrations', {
        headers: {
            Authorization: `Bearer ${token}`
        }
      });
      if (response.data.status === 'Success') {
        setRegistrations(response.data.events);
      } else {
        setError('Failed to fetch registrations');
      }
    } catch (err) {
      setError('Error fetching registrations: ' + (err.response?.data?.message || err.message));
      console.error('Error fetching registrations:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch single registration by ID
  const fetchRegistrationById = async (registrationId) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://us-central1-iconstar-conference.cloudfunctions.net/api/view/registration/${registrationId}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
      });
      if (response.data.status === 'Success') {
        setSelectedRegistration(response.data.event);
      } else {
        setError('Failed to fetch registration details');
      }
    } catch (err) {
      setError('Error fetching registration details: ' + (err.response?.data?.message || err.message));
      console.error('Error fetching registration:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      // If there's an ID in URL, fetch single registration
      fetchRegistrationById(id);
    } else {
      // Otherwise fetch all registrations
      fetchAllRegistrations();
    }
  }, [id]);

  // Pagination calculations
  const indexOfLastRegistration = currentPage * registrationsPerPage;
  const indexOfFirstRegistration = indexOfLastRegistration - registrationsPerPage;
  const currentRegistrations = registrations.slice(indexOfFirstRegistration, indexOfLastRegistration);
  const totalPages = Math.ceil(registrations.length / registrationsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      if (currentPage <= 3) {
        endPage = 4;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }
      
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleCardClick = (registration) => {
    setSelectedRegistration(registration);
    navigate(`/view/registration/${registration._id}`);
  };

  const handleBackClick = () => {
    setSelectedRegistration(null);
    navigate('/view/registrations');
  };

  if (loading) {
    return (
      <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] overflow-x-hidden"
           style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f29e0d]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] overflow-x-hidden"
           style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[#1c160d] text-lg mb-4">{error}</p>
            <button 
              onClick={fetchAllRegistrations}
              className="bg-[#f29e0d] hover:bg-[#e68c00] text-[#1c160d] px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] overflow-x-hidden"
         style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      
      <Header />
      
      <div className="flex-1 py-8">
        <div className="container mx-auto px-4 md:px-8">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-[#1c160d] text-3xl md:text-4xl font-bold mb-4">
              {selectedRegistration ? 'Registration Details' : 'Event Registrations'}
            </h1>
            <p className="text-[#9c7e49] text-lg">
              {selectedRegistration ? 'View detailed registration information' : 'Manage and view all event registrations'}
            </p>
          </div>

          {!selectedRegistration ? (
            <>
              {/* Registrations Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {currentRegistrations.map((registration) => (
                  <div
                    key={registration._id}
                    className="bg-white rounded-xl border border-[#e8dfce] p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
                    onClick={() => handleCardClick(registration)}
                  >
                    {/* Status Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        registration.paymentCompletion 
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {registration.paymentCompletion ? 'Paid' : 'Pending'}
                      </span>
                      <span className="text-[#9c7e49] text-xs">
                        {formatDate(registration.createdAt)}
                      </span>
                    </div>

                    {/* Registration Details */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-[#1c160d] font-bold text-lg mb-2">{registration.name}</h3>
                        <p className="text-[#9c7e49] text-sm">{registration.email}</p>
                      </div>
                      
                      <div className="border-t border-[#e8dfce] pt-3">
                        <p className="text-[#1c160d] font-semibold text-sm mb-1">Event</p>
                        <p className="text-[#9c7e49] text-sm">{registration.eventName}</p>
                      </div>
                      
                      <div className="border-t border-[#e8dfce] pt-3">
                        <p className="text-[#1c160d] font-semibold text-sm mb-1">Package</p>
                        <p className="text-[#9c7e49] text-sm">{registration.interestedPackage}</p>
                      </div>
                    </div>

                    {/* Click Indicator */}
                    <div className="mt-4 pt-3 border-t border-[#e8dfce]">
                      <p className="text-[#f29e0d] text-sm font-semibold text-center">
                        Click to view details →
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mt-8">
                  <button
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f4efe7] text-[#1c160d] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"/>
                    </svg>
                  </button>

                  {getPageNumbers().map((number, index) => (
                    number === '...' ? (
                      <span key={`ellipsis-${index}`} className="px-3 py-2 text-[#9c7e49]">...</span>
                    ) : (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`flex items-center justify-center w-10 h-10 rounded-full ${
                          currentPage === number 
                            ? 'bg-[#f29e0d] text-[#1c160d] font-bold' 
                            : 'bg-[#f4efe7] text-[#1c160d]'
                        }`}
                      >
                        {number}
                      </button>
                    )
                  ))}

                  <button
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#f4efe7] text-[#1c160d] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"/>
                    </svg>
                  </button>
                </div>
              )}
            </>
          ) : (
            /* Single Registration Detail View */
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <button
                onClick={handleBackClick}
                className="flex items-center gap-2 text-[#f29e0d] hover:text-[#e68c00] mb-6 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"/>
                </svg>
                Back to All Registrations
              </button>

              {/* Detail Card */}
              <div className="bg-white rounded-xl border border-[#e8dfce] p-6 shadow-lg">
                {/* Header with Status */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div>
                    <h2 className="text-[#1c160d] text-2xl font-bold">{selectedRegistration.name}</h2>
                    <p className="text-[#9c7e49] mt-1">{selectedRegistration.email}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold mt-3 sm:mt-0 ${
                    selectedRegistration.paymentCompletion 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {selectedRegistration.paymentCompletion ? 'Payment Completed' : 'Payment Pending'}
                  </span>
                </div>

                {/* Registration Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-[#1c160d] font-semibold mb-2">Event Information</h3>
                      <div className="bg-[#f4efe7] rounded-lg p-4">
                        <p className="text-[#1c160d] font-medium">{selectedRegistration.eventName}</p>
                        <p className="text-[#9c7e49] text-sm mt-1">Selected Package: {selectedRegistration.interestedPackage}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#1c160d] font-semibold mb-2">Timestamps</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-[#9c7e49]">Registered:</span>
                          <span className="text-[#1c160d]">{formatDate(selectedRegistration.createdAt)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-[#9c7e49]">Last Updated:</span>
                          <span className="text-[#1c160d]">{formatDate(selectedRegistration.updatedAt)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-[#1c160d] font-semibold mb-2">Registration ID</h3>
                      <div className="bg-[#f4efe7] rounded-lg p-4">
                        <p className="text-[#9c7e49] text-sm font-mono break-all">{selectedRegistration._id}</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-[#1c160d] font-semibold mb-2">Actions</h3>
                      <div className="flex gap-3">
                        <button className="bg-[#f29e0d] hover:bg-[#e68c00] text-[#1c160d] px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                          Edit Registration
                        </button>
                        <button className="bg-[#f4efe7] hover:bg-[#e8dfce] text-[#1c160d] px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                          Contact User
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ViewEvents;