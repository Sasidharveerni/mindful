import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add API call or auth logic here
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[#fcfaf8] font-['Plus_Jakarta_Sans','Noto_Sans',sans-serif]"
    >
      {/* Header */}
      <header className="flex items-center justify-between border-b border-[#f4efe7] px-6 sm:px-10 py-3">
        <div className="flex items-center gap-3 text-[#1c160d]">
          <svg
            className="w-5 h-5"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
            />
          </svg>
          <h2 className="text-lg font-bold">Mindful Oasis</h2>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#1c160d]">
          <a href="/">Home</a>
          <a href="/events">Events</a>
          <a href="/aboutus">About Us</a>
          <a href="/contact">Contact</a>
        </nav>

        <button className="ml-4 rounded-lg h-10 px-4 bg-[#f4efe7] text-[#1c160d] font-bold text-sm">
          Login
        </button>
      </header>

      {/* Form */}
      <main className="flex flex-1 items-center justify-center px-4 sm:px-10 py-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/50 rounded-xl p-6 shadow-sm"
        >
          <h2 className="text-[#1c160d] text-2xl font-bold text-center mb-6">
            Create Your Account
          </h2>

          {/* Full Name */}
          <label className="block mb-4">
            <p className="text-[#1c160d] font-medium mb-2">Full Name</p>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg bg-[#f4efe7] text-[#1c160d] placeholder:text-[#9c7e49] focus:outline-none"
            />
          </label>

          {/* Email */}
          <label className="block mb-4">
            <p className="text-[#1c160d] font-medium mb-2">Email</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg bg-[#f4efe7] text-[#1c160d] placeholder:text-[#9c7e49] focus:outline-none"
            />
          </label>

          {/* Phone */}
          <label className="block mb-4">
            <p className="text-[#1c160d] font-medium mb-2">Phone Number</p>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg bg-[#f4efe7] text-[#1c160d] placeholder:text-[#9c7e49] focus:outline-none"
            />
          </label>

          {/* Password */}
          <label className="block mb-4">
            <p className="text-[#1c160d] font-medium mb-2">Password</p>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg bg-[#f4efe7] text-[#1c160d] placeholder:text-[#9c7e49] focus:outline-none"
            />
          </label>

          {/* Confirm Password */}
          <label className="block mb-4">
            <p className="text-[#1c160d] font-medium mb-2">Confirm Password</p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full h-12 px-4 rounded-lg bg-[#f4efe7] text-[#1c160d] placeholder:text-[#9c7e49] focus:outline-none"
            />
          </label>

          {/* Checkbox */}
          <label className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="h-5 w-5 rounded border-2 border-[#e8dfce] text-[#f29e0d] focus:ring-0"
            />
            <span className="text-sm text-[#1c160d]">
              I agree to the{" "}
              <a href="#" className="underline text-[#f29e0d]">
                Terms and Conditions
              </a>
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-12 bg-[#f29e0d] text-[#1c160d] font-bold rounded-lg"
          >
            Sign Up
          </button>

          <p className="text-[#9c7e49] text-sm text-center mt-4">
            Already have an account?{" "}
            <a href="#" className="underline">
              Login
            </a>
          </p>
        </form>
      </main>
    </div>
  );
}
