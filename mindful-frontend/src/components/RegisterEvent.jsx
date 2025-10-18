import axios from 'axios'
import React, { useState } from 'react'

function RegisterEvent({ event, plan, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eventName: event.title,
        interestedPackage: plan.title,
        paymentCompletion: 0
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handlePaymentChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            paymentCompletion: e.target.value === 'yes' ? 1 : 0
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        
        try {
            const response = await axios.post('https://us-central1-iconstar-conference.cloudfunctions.net/api/register/event', formData)
            if (response.status === 200) {
                alert('Thank you for showing your interest, we will contact you soon!')
                onClose() // Close the modal after successful registration
            } else {
                alert('Unable to register!')
            }
        } catch (error) {
            alert('Error in registering!')
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-[#1c160d] text-2xl font-bold">Register for Event</h2>
                    <button 
                        onClick={onClose}
                        className="text-[#9c7e49] hover:text-[#1c160d] transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/>
                        </svg>
                    </button>
                </div>

                {/* Event Info */}
                <div className="bg-[#f4efe7] rounded-lg p-4 mb-6">
                    <h3 className="text-[#1c160d] font-semibold">{event.title}</h3>
                    <p className="text-[#9c7e49] text-sm">Package: {plan.title}</p>
                    <p className="text-[#f29e0d] font-bold text-lg mt-2">{plan.price}</p>
                </div>

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-[#1c160d] text-sm font-medium block mb-2">
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-[#e8dfce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f29e0d] focus:border-transparent transition-all"
                            placeholder="Enter your full name"
                        />
                    </div>

                    <div>
                        <label className="text-[#1c160d] text-sm font-medium block mb-2">
                            Email Address *
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-[#e8dfce] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f29e0d] focus:border-transparent transition-all"
                            placeholder="Enter your email address"
                        />
                    </div>

                    <div>
                        <label className="text-[#1c160d] text-sm font-medium block mb-2">
                            Have you completed the payment? *
                        </label>
                        <div className="flex gap-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="paymentStatus"
                                    value="yes"
                                    onChange={handlePaymentChange}
                                    className="mr-2 text-[#f29e0d] focus:ring-[#f29e0d]"
                                />
                                <span className="text-[#1c160d]">Yes</span>
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="paymentStatus"
                                    value="no"
                                    onChange={handlePaymentChange}
                                    className="mr-2 text-[#f29e0d] focus:ring-[#f29e0d]"
                                    defaultChecked
                                />
                                <span className="text-[#1c160d]">No</span>
                            </label>
                        </div>
                    </div>

                    {/* Auto-filled hidden fields */}
                    <input type="hidden" name="eventName" value={formData.eventName} />
                    <input type="hidden" name="interestedPackage" value={formData.interestedPackage} />
                    <input type="hidden" name="paymentCompletion" value={formData.paymentCompletion} />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#f29e0d] hover:bg-[#e68c00] text-[#1c160d] py-3 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#1c160d]"></div>
                                Registering...
                            </>
                        ) : (
                            <>
                                Complete Registration
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
                                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
                                </svg>
                            </>
                        )}
                    </button>
                </form>

                {/* Footer Note */}
                <p className="text-[#9c7e49] text-xs text-center mt-4">
                    By registering, you agree to our terms and conditions. We'll contact you shortly with further details.
                </p>
            </div>
        </div>
    )
}

export default RegisterEvent