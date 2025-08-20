import React from 'react';
import { useNavigate } from 'react-router';
import { DubaiMap, WhatsApp } from '../assets/svg';
import logo from '../assets/icon-logo.png'
import Header from './Header';
import Footer from './Footer';

const Contactus = () => {
    const navigate = useNavigate();
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        {/* Header */}
       
       <Header />

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
                  <WhatsApp />
                </div>
                <span className="truncate">Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
         <Footer />
      </div>
    </div>
  );
};

export default Contactus;