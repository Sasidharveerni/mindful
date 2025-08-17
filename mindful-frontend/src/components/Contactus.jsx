import React from 'react';
import { useNavigate } from 'react-router';

const Contactus = () => {
    const navigate = useNavigate();
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4efe7] px-4 md:px-10 py-3">
          <div className="flex items-center gap-4 text-[#1c160d] mb-4 md:mb-0">
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
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 w-full md:w-auto">
            <div className="flex flex-wrap justify-center gap-4 md:gap-9">
              <a className="text-[#1c160d] text-sm font-medium leading-normal" onClick={() => navigate('/')}>Home</a>
              <a className="text-[#1c160d] text-sm font-medium leading-normal" onClick={() => navigate('/events')}>Events</a>
              <a className="text-[#1c160d] text-sm font-medium leading-normal" onClick={() => navigate('/aboutus')}>About Us</a>
              <a className="text-[#1c160d] text-sm font-medium leading-normal" onClick={() => navigate('/contact')}>Contact</a>
            </div>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f29e0d] text-[#1c160d] text-sm font-bold leading-normal tracking-[0.015em] mt-2 md:mt-0"
            >
              <span className="truncate">Book Now</span>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Title Section */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-[#1c160d] tracking-light text-2xl md:text-[32px] font-bold leading-tight">Contact Us</h1>
                <p className="text-[#9c7e49] text-sm font-normal leading-normal">We're here to help. Reach out to us with any questions or feedback.</p>
              </div>
            </div>

            {/* Image */}
            <div className="flex px-4 py-3">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg object-cover"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDiivIMCvRLgltgbUNJGjJLFkbNidVfBwze3F5QtR2bc3OofxUUE7-ivrPEVBPd_nUTjudqts_XsIUYUcGdRSAwFpKteq34KeYb2kR19LJgIubu-F3yRd1gmzJ5ANmgJgNU-7p-1BXtXcJurA2xGvhdaR3sLoC2AYOf7luDhj4EwfXKDSkf2uMUCKlcmO82cKKHkwweVPc5esSIxtNXl6vTEaaZiIydDpTkm1MsOBqRSP5tsLMnUmvRL4RD7RH3HREcgsNQ8orjeotm")' }}
              ></div>
            </div>

            {/* Contact Form */}
            <form className="w-full">
              {/* Name Field */}
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 w-full">
                <label className="flex flex-col min-w-40 flex-1 w-full">
                  <p className="text-[#1c160d] text-base font-medium leading-normal pb-2">Name</p>
                  <input
                    placeholder="Your Name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1c160d] focus:outline-0 focus:ring-0 border border-[#e8dfce] bg-[#fcfaf8] focus:border-[#e8dfce] h-14 placeholder:text-[#9c7e49] p-[15px] text-base font-normal leading-normal"
                  />
                </label>
              </div>

              {/* Email Field */}
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 w-full">
                <label className="flex flex-col min-w-40 flex-1 w-full">
                  <p className="text-[#1c160d] text-base font-medium leading-normal pb-2">Email</p>
                  <input
                    placeholder="Your Email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1c160d] focus:outline-0 focus:ring-0 border border-[#e8dfce] bg-[#fcfaf8] focus:border-[#e8dfce] h-14 placeholder:text-[#9c7e49] p-[15px] text-base font-normal leading-normal"
                  />
                </label>
              </div>

              {/* Message Field */}
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 w-full">
                <label className="flex flex-col min-w-40 flex-1 w-full">
                  <p className="text-[#1c160d] text-base font-medium leading-normal pb-2">Message</p>
                  <textarea
                    placeholder="Your Message"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1c160d] focus:outline-0 focus:ring-0 border border-[#e8dfce] bg-[#fcfaf8] focus:border-[#e8dfce] min-h-36 placeholder:text-[#9c7e49] p-[15px] text-base font-normal leading-normal"
                  ></textarea>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex px-4 py-3 justify-start">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f29e0d] text-[#1c160d] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Send Message</span>
                </button>
              </div>
            </form>

            {/* WhatsApp Option */}
            <p className="text-[#9c7e49] text-sm font-normal leading-normal pb-3 pt-1 px-4">Or connect with us directly via WhatsApp</p>
            <div className="flex px-4 py-3 justify-start">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f4efe7] text-[#1c160d] gap-2 pl-4 text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <div className="text-[#1c160d]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                    <path
                      d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"
                    ></path>
                  </svg>
                </div>
                <span className="truncate">Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-col gap-6 px-5 py-10 text-center">
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" onClick={() => navigate('/')}>Home</a>
                <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" onClick={() => navigate('/events')}>Events</a>
                <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" onClick={() => navigate('/aboutus')}>About Us</a>
                <a className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" onClick={() => navigate('/contact')}>Contact</a>
              </div>
              <p className="text-[#9c7e49] text-base font-normal leading-normal">@2024 Mindful Connect. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contactus;