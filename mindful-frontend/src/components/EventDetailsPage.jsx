import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import EventBanner from "./EventBanner";
import AgendaCard from "./AgendaCard";

export default function EventDetailsPage({ mockEvents }) {
  const navigate = useNavigate()
  // Extract the id from URL parameters
  const { id } = useParams();
  
  // Find the event with the matching ID
  console.log(id)
  const event = mockEvents.find(event => event.id === parseInt(id));
  
  // If event is not found, show a loading or error state
  if (!event) {
    return (
      <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8]">
        <Header />
        <div className="flex justify-center items-center h-64">
          <p className="text-[#1b160e] text-lg">Event not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  console.log(event)

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />

        {/* Insert banner here */}
        <EventBanner event={event}/>
        
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            
            {/* Event Title Section */}
            <div className="flex flex-col gap-4 p-4">
              {/* <div className="flex flex-col gap-3">
                <p className="text-[#1b160e] tracking-light text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight">
                  {event.title}
                </p>
                <p className="text-[#977e4e] text-sm sm:text-base font-normal leading-normal">
                  {event.theme}
                </p>
              </div> */}

              {/* About Event */}

             
          
          {/* Title Section */}
          <div className="flex flex-col gap-4 p-4">
            <h1 className="text-[#1c160d] tracking-light text-2xl md:text-[32px] font-bold leading-tight min-w-72">About the {event.title}  </h1>
          </div>
          
          {/* Introduction */}
          <p className="text-[#977e4e] text-sm sm:text-base font-normal leading-normal">
           {event.desc1}
          </p>
          
          {/* Mission Section */}
          <p className="text-[#977e4e] text-sm sm:text-base font-normal leading-normal">
           {event.desc2}
          </p>
      
              {/* Event Image */}
              <div className="w-full mt-4">
                <img
                  src={event.imageUrl}
                  alt="Event banner"
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Event Details Section */}
            <h3 className="text-[#1b160e] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">
              Event Details
            </h3>
            
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between border-t border-t-[#e7dfd0] pt-4 pb-2 gap-2">
                  <p className="text-[#977e4e] text-sm font-normal leading-normal sm:w-1/4">Venue</p>
                  <p className="text-[#1b160e] text-sm font-normal leading-normal sm:w-3/4">{event.location}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row sm:justify-between border-t border-t-[#e7dfd0] pt-4 pb-2 gap-2">
                  <p className="text-[#977e4e] text-sm font-normal leading-normal sm:w-1/4">Date</p>
                  <p className="text-[#1b160e] text-sm font-normal leading-normal sm:w-3/4">{event.Date}</p>
                </div>
              </div>
            </div>

            {/* Registration Section */}
            <h3 className="text-[#1b160e] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">
              Registration
            </h3>

            <div className="bg-[#f4efe7] px-4 sm:px-6 py-8 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {[
                  {
        title: "Speaker Registration",
        price: "$599",
        features: ["Certificate", "CPD Credits", "Breakfast & Lunch", "Speaker Slot"],
      },
      {
        title: "Package-A",
        price: "$899",
        features: ["Certificate", "CPD Credits", "Breakfast & Lunch", "Speaker Slot + 2 Nights Accommodation"],
      },
      {
        title: "Package-B",
        price: "$1,099",
        features: ["Certificate", "CPD Credits", "Breakfast & Lunch", "Speaker Slot + 3 Nights Accommodation"],
      },
      {
        title: "Exhibitor Pass",
        price: "$1,399",
        features: ["Certificate", "CPD Credits", "Exhibitor Booth", "Speaker Slot"],
      },
      {
        title: "Delegate Pass",
        price: "$299",
        features: ["Certificate", "CPD Credits", "Breakfast & Lunch"],
      },
      {
        title: "Virtual Pass",
        price: "$299",
        features: ["Certificate", "CPD Credits",],
      },
                ].map((plan, index) => (
                  <div
                    key={index}
                    className="relative flex flex-col justify-between bg-white rounded-xl p-6 shadow-lg border border-[#e8dfce]"
                  >
                    {/* Title pill */}
                    <span className="absolute -top-3 left-6 bg-[#f29e0d] text-[#1c160d] px-4 py-1 rounded-full text-sm font-semibold shadow-md">
                      {plan.title}
                    </span>

                    {/* Features */}
                    <div className="mt-6 space-y-3">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <div className="text-[#f29e0d] mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                              <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
                            </svg>
                          </div>
                          <p className="text-[#1c160d] text-sm">{feature}</p>
                        </div>
                      ))}
                    </div>

                    {/* Price & Button */}
                    <div className="flex flex-col items-start mt-6">
                      <p className="text-2xl font-bold text-[#1c160d]">{plan.price}</p>
                      <button className="mt-4 bg-[#f29e0d] hover:bg-[#e68c00] text-[#1c160d] px-5 py-2 rounded-lg font-semibold text-sm flex items-center gap-2 transition-colors">
                        Register Now 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
              
              {event.agenda && <AgendaCard agenda={event.agenda} />}

            {/* Benefits Section */}
            <h3 className="text-[#1b160e] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">
              Benefits
            </h3>
            <p className="text-[#1b160e] text-sm sm:text-base font-normal leading-normal pb-3 pt-1 px-4">
              Attending this event offers numerous benefits, including access to cutting-edge research, networking opportunities with leading experts, and insights into the latest innovations. Participants will gain valuable knowledge to enhance their practice and contribute to the advancement of their field.
            </p>

            {/* Sessions/Tracks Section */}
            <h3 className="text-[#1b160e] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-6">
              Sessions/Tracks
            </h3>
            
            <div className="p-4">
              <div className="space-y-4">
                {event.sessions.map((track, index) => (
                  <div key={index} className="flex flex-col border-t border-t-[#e7dfd0] pt-4 pb-2">
                    <p className="text-[#977e4e] text-xs sm:text-sm font-normal leading-normal">
                      Track {index + 1}: {track}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-[#f4efe7] rounded-lg mx-4 my-8 p-6 text-center">
              <h3 className="text-[#1c160d] text-lg sm:text-xl font-bold mb-3">Ready to Join Us?</h3>
              <p className="text-[#9c7e49] text-sm sm:text-base mb-4">
                Don't miss this opportunity to connect with leading experts and advance your knowledge.
              </p>
              <button 
                className="bg-[#f29e0d] hover:bg-[#e68c00] text-[#1c160d] px-6 py-3 rounded-lg font-bold text-sm sm:text-base transition-colors" 
                onClick={() => navigate("/register")}
              >
                Register Now
              </button>
            </div>

          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}