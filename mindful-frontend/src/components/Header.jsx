import React from 'react'
import logo from '../assets/icon-logo.png'
import { Link, useNavigate } from 'react-router'

function Header() {
  const navigate = useNavigate()
  return (
    <div>
        <header className="flex flex-col md:flex-row items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f4efe7] px-4 md:px-10 py-3">
                  <div className="flex items-center gap-4 text-[#1c160d] mb-4 md:mb-0">
                    <div className="size-4">
                       <img src={logo} alt='ICONSTAR logo' />
                    </div>
                    <h2 className="text-[#1c160d] text-lg font-bold leading-tight tracking-[-0.015em]">ICON STAR CONFERENCES</h2>
                  </div>
                  <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="flex flex-wrap justify-center gap-4 md:gap-9">
                      <Link className="text-[#1c160d] text-sm font-medium leading-normal" to="/">Home</Link>
                      <Link className="text-[#1c160d] text-sm font-medium leading-normal" to="/events">Events</Link>
                      <Link className="text-[#1c160d] text-sm font-medium leading-normal" to="/aboutus">About</Link>
                      <Link className="text-[#1c160d] text-sm font-medium leading-normal" to="/contact">Contact</Link>
                    </div>
                    <div className="flex gap-2 mt-2 md:mt-0">
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f29e0d] text-[#1c160d] text-sm font-bold leading-normal tracking-[0.015em]">
                        <span className="truncate">Book Now</span>
                      </button>
                      <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#f4efe7] text-[#1c160d] text-sm font-bold leading-normal tracking-[0.015em]"
                      onClick={() => navigate("/login")}
                      >
                        <span className="truncate">Login</span>
                      </button>
                    </div>
                  </div>
                </header>
    </div>
  )
}

export default Header