import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

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

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden"
      style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            
            {/* Event Title Section */}
            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-3">
                <p className="text-[#1b160e] tracking-light text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight">
                  {event.title}
                </p>
                <p className="text-[#977e4e] text-sm sm:text-base font-normal leading-normal">
                  {event.theme}
                </p>
              </div>
              
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
            
            <div className="px-4 py-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { title: "Only Registration", price: "$599" },
                  { title: "Plan A", price: "$899" },
                  { title: "Plan B", price: "$1099" },
                  { title: "Virtual", price: "$299" }
                ].map((plan, index) => (
                  <div key={index} className="flex flex-col gap-4 rounded-lg border border-solid border-[#e7dfd0] bg-[#fcfaf8] p-4 sm:p-6">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-[#1b160e] text-sm sm:text-base font-bold leading-tight">{plan.title}</h1>
                      <span className="text-[#1b160e] text-2xl sm:text-3xl lg:text-4xl font-black leading-tight tracking-[-0.033em]">
                        {plan.price}
                      </span>
                    </div>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f3efe7] text-[#1b160e] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e69e19] transition-colors">
                      <span className="truncate">Buy Ticket</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>

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
            <div className="bg-[#f3efe7] rounded-lg mx-4 my-8 p-6 text-center">
              <h3 className="text-[#1b160e] text-lg sm:text-xl font-bold mb-3">Ready to Join Us?</h3>
              <p className="text-[#977e4e] text-sm sm:text-base mb-4">
                Don't miss this opportunity to connect with leading experts and advance your knowledge.
              </p>
              <button className="bg-[#e69e19] text-[#1b160e] px-6 py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-[#d68c0a] transition-colors" onClick={() => navigate("/register")}>
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