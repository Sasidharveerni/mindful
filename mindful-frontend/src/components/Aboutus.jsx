import React from 'react';
import { useNavigate } from 'react-router';
import logo from '../assets/icon-logo.png'
import Header from './Header';
import Footer from './Footer';

const Aboutus = () => {
    const navigate = useNavigate();
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden" 
         style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      
      {/* Header */}
      
      <Header />

      {/* Main Content */}
      <div className="px-4 md:px-40 flex flex-1 justify-center py-5">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          
          {/* Title Section */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <h1 className="text-[#1c160d] tracking-light text-2xl md:text-[32px] font-bold leading-tight min-w-72">About ICON STAR CONFERENCES </h1>
          </div>
          
          {/* Introduction */}
          <p className="text-[#1c160d] text-base font-normal leading-normal pb-3 pt-1 px-4">
           Welcome to ICON STAR CONFERENCES the premier destination for ambitious entrepreneurs, innovative startups, and visionary small business owners ready to scale new heights.
           At ICON STAR CONFERENCE we are passionate about empowering the next generation of business leaders. Our mission is to provide a transformative platform where dynamic ideas and actionable strategies converge. As the essential business-to-business event of the year, we are dedicated to creating an environment that fosters growth, collaboration, and success.
          </p>
          
          {/* Mission Section */}
          <h2 className="text-[#1c160d] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Vision</h2>
          <p className="text-[#1c160d] text-base font-normal leading-normal pb-3 pt-1 px-4">
           At ICON STAR CONFERENCES our vision is to create a vibrant ecosystem where innovative ideas flourish and entrepreneurial dreams become reality. We aim to be the catalyst for transformative growth by connecting visionaries with the resources, knowledge, and networks essential for success. Our goal is to inspire and empower a new generation of business leaders who are ready to shape the future.
          </p>
          
          {/* Team Section */}
          <h2 className="text-[#1c160d] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meet the Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
            {/* Team Member 1 */}
            <div className="flex flex-col gap-3 text-center pb-3">
              <div className="px-4">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full mx-auto max-w-[200px]"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCaCDGwlQCT8ipXtCtSqeau3ilaP35fr3gsz4ZbxfhfBa3FDhowD77j2m3C-E9uDI2Btzm32D9jnLK7d7ykHzdznmNrQYJ0t1dSP0ILy2EwEo8temP5illP8kaFcxe_vedbhfFHt5rXJa9aIbme4ylKCCGybItLAslensxJRhxaE3vmqIdd8jLCpoInMfDFwYdDJUv4C1oKx5dCrEJjvn-P48L36XaE5foaFG9qKhWgeN7-SnMlHiat_LeK0ApP53THlWMMj625x5nE")' }}
                ></div>
              </div>
              <div>
                <p className="text-[#1c160d] text-base font-medium leading-normal">Dr. Aisha Al Mansoori</p>
                <p className="text-[#9c7e49] text-sm font-normal leading-normal">Clinical Psychologist</p>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="flex flex-col gap-3 text-center pb-3">
              <div className="px-4">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full mx-auto max-w-[200px]"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBiZ9AlcIfj6MhEOTWvBCLiUTUJyH9FC3kU73xv2AKkuysnOBAbSG3Gc_jpLRpbzJSQDxhG2tyz9v83-0aPzEUeXXRI_yk7Vr2rIKP9k0fV_hiEW3vpFVONxXBbnDpFllZ-sXanZaOoeRAfNlOw2FEBju_8ALYPgo0gUhxaxLhciZMfU23fHNiHKJMpyhuy9Zkv2nGcW68NqFJeVHxD-kGHPtzZtzQE8Y5WrHTi9z4zkNYf-ZrTV9BolFhPKhP_Q7qbjF7dsqLvIr1R")' }}
                ></div>
              </div>
              <div>
                <p className="text-[#1c160d] text-base font-medium leading-normal">Omar Hassan</p>
                <p className="text-[#9c7e49] text-sm font-normal leading-normal">Conference Organizer</p>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="flex flex-col gap-3 text-center pb-3">
              <div className="px-4">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full mx-auto max-w-[200px]"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9NANqssiP9nIwPgevQU7ei4x_695L74IOzggDBcFhhgpCVycmfUNXz1DMH7Ofg9p4KXw78n4gbJos9uL1ipHDR_d9YgcDlyh-JLCGfs_GiTzEkiYfh68xc3ZGzl6L6PrLXKRi3QOccZiJD8Xo2zylTWEJSjCs4XkOuR3eijSAsFPb8y1NwZVJEqQefxSIyIQdtzOpjQCALsXj2t2xz0xUdj4aIY5aLRGGZJq0wWgRFlHyjSc5K65UJO8p6yLV4ej8zOiyekU4GViS")' }}
                ></div>
              </div>
              <div>
                <p className="text-[#1c160d] text-base font-medium leading-normal">Fatima Al Ali</p>
                <p className="text-[#9c7e49] text-sm font-normal leading-normal">Community Outreach Manager</p>
              </div>
            </div>
          </div>
          
          {/* Impact Section */}
          <h2 className="text-[#1c160d] text-xl md:text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Impact</h2>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 p-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f4efe7]">
              <p className="text-[#1c160d] text-base font-medium leading-normal">Conferences Held</p>
              <p className="text-[#1c160d] tracking-light text-2xl font-bold leading-tight">15+</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f4efe7]">
              <p className="text-[#1c160d] text-base font-medium leading-normal">Participants Impacted</p>
              <p className="text-[#1c160d] tracking-light text-2xl font-bold leading-tight">5,000+</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-lg p-6 bg-[#f4efe7]">
              <p className="text-[#1c160d] text-base font-medium leading-normal">Expert Speakers</p>
              <p className="text-[#1c160d] tracking-light text-2xl font-bold leading-tight">100+</p>
            </div>
          </div>
          
          {/* Impact Description */}
          <p className="text-[#1c160d] text-base font-normal leading-normal pb-3 pt-1 px-4">
            Since our inception, Mindful Oasis has been at the forefront of mental health advocacy in Dubai. We've hosted over 15 conferences, impacting more than 5,000
            participants, and featured over 100 expert speakers. Our commitment to excellence and accessibility has made us a trusted resource for mental health support in the
            region.
          </p>
          
          {/* Full-width Image */}
          <div className="flex w-full grow bg-[#fcfaf8] py-3">
            <div className="w-full gap-1 overflow-hidden bg-[#fcfaf8] aspect-[3/2] flex">
              <div
                className="w-full bg-center bg-no-repeat bg-cover aspect-auto rounded-none flex-1"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBduzD4wUCOMfVeFk7b0oSeU1qCA4igreUonFt74U8_Ijb07a8ksZFW0ROasJJKj7xVJJPqJHgN7PcmzXe_1OU8lyj86hg9fhhbbguG0EtD9wUNv3duXArbtJKja6Uy5E9hblABeWWjn3xFKvvq9QTkFmPNkagqgNaorkTfHvYQ3Qt4Sokx1KmIJnK7BOWT9BgpX9533rC7Ai78OA57VQTRaSXYq1Jq5uRe_OUdj1pN3cyxHmV4gL5_Nkq2wpH1z9VIlK-70AFtN-Q7")' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
       <Footer />
    </div>
  );
};

export default Aboutus;