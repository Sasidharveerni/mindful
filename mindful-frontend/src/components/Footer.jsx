import React from 'react'
import { Link } from 'react-router'
import { FaceBook, Instagram, Twitter } from '../assets/svg'

function Footer() {
  return (
     <footer className="flex justify-center">
              <div className="flex max-w-[960px] flex-1 flex-col">
                <footer className="flex flex-col gap-6 px-5 py-10 text-center">
                  <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-4 md:gap-6">
                    <Link className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" to='/'>Home </Link>
                    <Link className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" to='/events'>Events </Link>
                    <Link className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" to='/aboutus'>About </Link>
                    <Link className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" to='/contact'>Contact </Link>
                    <Link className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" to='/'>Privacy Policy </Link>
                    <Link className="text-[#9c7e49] text-base font-normal leading-normal min-w-40" to='/'>Terms of Service </Link>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    <Link to="#">
                      <Twitter />
                    </Link>
                    <Link to="#">
                       <Instagram />
                    </Link>
                    <Link to="#">
                      <FaceBook />
                    </Link>
                  </div>

                  <p className="text-[#9c7e49] text-base font-normal leading-normal">© 2024 Mindful Meetings. All rights reserved.</p>
                </footer>
              </div>
            </footer>
  )
}

export default Footer