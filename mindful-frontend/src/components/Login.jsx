import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import logo from '../assets/icon-logo.png'
import Header from "./Header";
import axios from 'axios'

export default function Login() {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
    console.log("Form Submitted:", formData);
    const response = await axios.post('http://localhost:3000/login', formData)
    if(response.status === 200) {
      alert('You have logged in successfully!')
      localStorage.setItem('iconStarToken', response.data.token)
      navigate('/view/registrations')
    } else {
      alert("We can't login you now")
      //console.log(respons)
    }
    } catch (error) {
      alert('There is error in logging in')
      console.error('Error in logging', error)
    }
    
    // Add API call or auth logic here
    
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-[#fcfaf8] font-['Plus_Jakarta_Sans','Noto_Sans',sans-serif]"
    >
      {/* Header */}
      
      <Header />

      {/* Form */}
      <main className="flex flex-1 items-center justify-center px-4 sm:px-10 py-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white/50 rounded-xl p-6 shadow-sm"
        >
          <h2 className="text-[#1c160d] text-2xl font-bold text-center mb-6" onClick={() => navigate('/register')}>
            Log in to your account
          </h2>


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

        

      

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-12 bg-[#f29e0d] text-[#1c160d] font-bold rounded-lg"
          >
           Login
          </button>

          <p className="text-[#9c7e49] text-sm text-center mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Register
            </Link>
          </p>
        </form>
      </main>
    </div>
  );
}
