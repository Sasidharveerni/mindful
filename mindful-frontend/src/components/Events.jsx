import React, { useState, useEffect } from 'react';

const Events = () => {
  // Mock data - replace with your actual data fetching logic
  const mockEvents = [
    {
      id: 1,
      title: "Mindful Living Expo",
      description: "Explore the latest in mental wellness and self-care. Featuring workshops, talks, and exhibitors.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8ndLzvhJ4UllWgfGmpWRtPEv17dEYx7PAfbemI0_EpWproDxqfGbW81hX47bYeDfiK4lP9_KtfUsrQ1N1bHGd7i8YT1nMB0tk9Q-GeAinRZUsXhSex84m1gdlXq2lzLpTrGy-s0ZV9-PIxPf88NLCrlTutwGpFtk5ggOe-7a8cJNzHaBsAX46ncW6sWr8ceYvxNAFnVhaMsQJpP0G_DWg9oel84de3EqeYtLEFQv9EH3oXo38oGKd6pzziptAX_N6oARrKrv76q1b"
    },
    {
      id: 2,
      title: "Therapy & Counseling Summit",
      description: "A professional gathering for therapists and counselors, focusing on innovative techniques and research.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7BX1gyPt2Qu67HOfZvjZ_ra-zc-qaaDuH6tAnlNtzizy97Ruf3p61pTeozb9bOd5f79cO5rtIGkBZp1v6aCfy86G2c2RDXqKDGv_lWAMQJeLzndiO6iss0VkfSJ1MEt4hiC6PyGZe35wA3Y50dsQAP2qApRb17Na9T8A_u7xd8Y0GIJZM4vuipN-A7hU8yArGJK9yb0krIHdJemIqbVRFT1rfdVTQtEM_bsSFisQaCJ08uuESjMok6rDvIfTH2ABWu2OQkyaCucMx"
    },
    {
      id: 3,
      title: "Youth Mental Health Forum",
      description: "Addressing the unique mental health challenges faced by young people in today's world.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuADPFiz7-O1lmwEMuGO6EbL9CBMWmdh7CUxcTcfBn7jUZ_96kWMp2kJJzErvQJtkk3GL9Qm68vohSAPG6gMoIK23jp4N2mXbY10v-G3C6ytMhqhV8bEShjfJ6fyujB_RJdjFY9tZuyAj5EPnPcj_apmREexxNst_nZFpMjFCueDZgPNsHC9wZGb-8ylP0gyGDb0yo_nCvJORSDFNvIfDFIW_GcScJ0hg_pBdkS_1btF9BDBaCBUm8XFdGg7pFZd0ucZdSzXQs6BsZ87"
    },
    {
      id: 4,
      title: "Corporate Wellness Symposium",
      description: "Strategies for fostering mental well-being in the workplace, enhancing productivity and employee satisfaction.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqi14jsowwD54k7MtI1RREQhZ9CNV7RCDUw7Ll8M9QPlUpza11j-leSMraUhb9qSfi_ssz4eC9f95xHgdRnwuogDIvsGfnVeK3cFSPVsXEisjatoJ_kYMXtnzmFfKPcUCpfbe-dai8_bkN6isU52fUcAP7WKu1fzGQzkfCYR4aUG5BXowesDfTAV-REfph35p0nysd4dxWotcppW3F3jfaD4XNBftOFMmj08wx1XZ9X9mKNVQSsXcg_u-fEGkFwfZCVtuioY5eaPgv"
    },
    // Add more mock data as needed
    { id: 5, title: "Event 5", description: "Description 5", imageUrl: "" },
    { id: 6, title: "Event 6", description: "Description 6", imageUrl: "" },
    { id: 7, title: "Event 7", description: "Description 7", imageUrl: "" },
    { id: 8, title: "Event 8", description: "Description 8", imageUrl: "" },
    { id: 9, title: "Event 9", description: "Description 9", imageUrl: "" },
    { id: 10, title: "Event 10", description: "Description 10", imageUrl: "" },
  ];

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
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4efe7] px-10 py-3">
          <div className="flex items-center gap-4 text-[#1c160d]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#1c160d] text-lg font-bold leading-tight tracking-[-0.015em]">Mindful Connect</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#1c160d] text-sm font-medium leading-normal" href="/">Home</a>
              <a className="text-[#1c160d] text-sm font-medium leading-normal" href="#">About</a>
              <a className="text-[#1c160d] text-sm font-medium leading-normal" href="#">Events</a>
              <a className="text-[#1c160d] text-sm font-medium leading-normal" href="#">Resources</a>
              <a className="text-[#1c160d] text-sm font-medium leading-normal" href="#">Contact</a>
            </div>
            <div className="flex gap-2">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f29e0d] text-[#1c160d] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Login</span>
              </button>
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f4efe7] text-[#1c160d] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Sign Up</span>
              </button>
            </div>
          </div>
        </header>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
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
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f4efe7] pl-4 pr-2">
                <p className="text-[#1c160d] text-sm font-medium leading-normal">Category</p>
                <div className="text-[#1c160d]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
              </button>
              <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-[#f4efe7] pl-4 pr-2">
                <p className="text-[#1c160d] text-sm font-medium leading-normal">Location</p>
                <div className="text-[#1c160d]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
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
                            {event.description}
                          </p>
                        </div>
                        <button
                          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#f4efe7] text-[#1c160d] text-sm font-medium leading-normal w-fit"
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                      </svg>
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
                    <div className="text-[#1c160d]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="currentColor" viewBox="0 0 256 256">
                        <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                      </svg>
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