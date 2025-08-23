import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { DownArrow, LeftArrow, SearchIcon } from '../assets/svg';
import logo from '../assets/icon-logo.png'
import Header from './Header';

const Events = ({mockEvents}) => {
  const navigate = useNavigate();
  // Mock data - replace with your actual data fetching logic

 

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(4); // Number of events per page
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);

  // Calculate pagination values
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = events.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(events.length / eventsPerPage);

  // Load data - replace with your actual API call
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        // Simulate API call with timeout
        await new Promise(resolve => setTimeout(resolve, 500));
        setEvents(mockEvents);
      } catch (error) {
        console.error("Error loading events:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5; // Maximum number of visible page buttons
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Determine which pages to show in the middle
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if we're at the beginning or end
      if (currentPage <= 3) {
        endPage = 4;
      } else if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }
      
      // Add middle pages
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Always show last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        
        <Header />

        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#1c160d] tracking-light text-[32px] font-bold leading-tight min-w-72">Upcoming Mental Health Conferences in Dubai</p>
            </div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div
                    className="text-[#9c7e49] flex border-none bg-[#f4efe7] items-center justify-center pl-4 rounded-l-lg border-r-0"
                  >
                     <SearchIcon />
                  </div>
                  <input
                    placeholder="Search for events"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1c160d] focus:outline-0 focus:ring-0 border-none bg-[#f4efe7] focus:border-none h-full placeholder:text-[#9c7e49] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  />
                </div>
              </label>
            </div>
            <div className="flex gap-3 p-3 flex-wrap pr-4">
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f4efe7] pl-4 pr-2">
                <p className="text-[#1c160d] text-sm font-medium leading-normal">Date Range</p>
                <div className="text-[#1c160d]">
                  <DownArrow />
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f4efe7] pl-4 pr-2">
                <p className="text-[#1c160d] text-sm font-medium leading-normal">Category</p>
                <div className="text-[#1c160d]">
                 <DownArrow />
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f4efe7] pl-4 pr-2">
                <p className="text-[#1c160d] text-sm font-medium leading-normal">Location</p>
                <div className="text-[#1c160d]">
                  <DownArrow />
                </div>
              </button>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center p-10">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#f29e0d]"></div>
              </div>
            ) : (
              <>
                {currentEvents.map((event) => (
                  <div key={event.id} className="p-4">
                    <div className="flex items-stretch justify-between gap-4 rounded-lg">
                      <div className="flex flex-[2_2_0px] flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <p className="text-[#1c160d] text-base font-bold leading-tight">{event.title}</p>
                          <p className="text-[#9c7e49] text-sm font-normal leading-normal">
                            {event.theme}
                          </p>
                        </div>
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#f4efe7] text-[#1c160d] text-sm font-medium leading-normal w-fit"
                         onClick={() => {
                          console.log(event.id)
                          navigate(`/eventdetails/${event.id}`)}
                         }
                        >
                          <span className="truncate">View Details</span>
                        </button>
                      </div>
                      {event.imageUrl && (
                        <div
                          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
                          style={{ backgroundImage: `url("${event.imageUrl}")` }}
                        ></div>
                      )}
                    </div>
                  </div>
                ))}

                <div className="flex items-center justify-center p-4">
                  <button 
                    onClick={() => paginate(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="flex size-10 items-center justify-center disabled:opacity-50"
                  >
                    <div className="text-[#1c160d]">
                      <LeftArrow />
                    </div>
                  </button>

                  {getPageNumbers().map((number, index) => (
                    number === '...' ? (
                      <span key={`ellipsis-${index}`} className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#1c160d] rounded-full">
                        ...
                      </span>
                    ) : (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`text-sm leading-normal flex size-10 items-center justify-center rounded-full ${currentPage === number ? 'font-bold bg-[#f4efe7] text-[#1c160d]' : 'font-normal text-[#1c160d]'}`}
                      >
                        {number}
                      </button>
                    )
                  ))}

                  <button 
                    onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="flex size-10 items-center justify-center disabled:opacity-50"
                  >
                    <div className="text-[#1c160d] rotate-180">
                      <LeftArrow />
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;