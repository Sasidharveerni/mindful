import React, { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    profileImage: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration submission here
    console.log('Registration form submitted:', formData);
    // You would typically send this data to your backend
  };

  const handleImageUpload = () => {
    // Handle image upload logic here
    console.log('Profile image upload triggered');
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[512px] py-5">
            <h2 className="text-[#1b160e] tracking-light text-2xl sm:text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Create Your Account</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                  <input
                    name="fullName"
                    placeholder="Full Name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b160e] focus:outline-0 focus:ring-0 border-none bg-[#f3efe7] focus:border-none h-14 placeholder:text-[#977e4e] p-4 text-base font-normal leading-normal"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b160e] focus:outline-0 focus:ring-0 border-none bg-[#f3efe7] focus:border-none h-14 placeholder:text-[#977e4e] p-4 text-base font-normal leading-normal"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b160e] focus:outline-0 focus:ring-0 border-none bg-[#f3efe7] focus:border-none h-14 placeholder:text-[#977e4e] p-4 text-base font-normal leading-normal"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                  <input
                    name="profileImage"
                    placeholder="Profile Image Link"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b160e] focus:outline-0 focus:ring-0 border-none bg-[#f3efe7] focus:border-none h-14 placeholder:text-[#977e4e] p-4 text-base font-normal leading-normal"
                    value={formData.profileImage}
                    onChange={handleChange}
                  />
                </label>
              </div>

              
              <div className="flex px-4 py-3">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#e69e19] text-[#1b160e] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d68c0a] transition-colors"
                >
                  <span className="truncate">Register</span>
                </button>
              </div>

              <p className="text-[#977e4e] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center">
                Already have an account? <Link to="/login" className="text-[#e69e19] hover:underline">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;