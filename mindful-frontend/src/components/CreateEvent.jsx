import React, { useState } from 'react';
import Header from './Header';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    theme: '',
    imageLink: '',
    venue: '',
    date: '',
    sessions: ''
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
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You would typically send this data to your backend
  };

  const handleImageUpload = () => {
    // Handle image upload logic here
    console.log('Image upload triggered');
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden" style={{ fontFamily: 'Inter, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#1b160e] tracking-light text-2xl sm:text-3xl md:text-[32px] font-bold leading-tight min-w-72">Create New Event</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-[#1b160e] text-base font-medium leading-normal pb-2">Event Name</p>
                  <input
                    name="eventName"
                    placeholder="Enter event name"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b160e] focus:outline-0 focus:ring-0 border border-[#e7dfd0] bg-[#fcfaf8] focus:border-[#e7dfd0] h-14 placeholder:text-[#977e4e] p-[15px] text-base font-normal leading-normal"
                    value={formData.eventName}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-[#1b160e] text-base font-medium leading-normal pb-2">Theme</p>
                  <input
                    name="theme"
                    placeholder="Enter event theme"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b160e] focus:outline-0 focus:ring-0 border border-[#e7dfd0] bg-[#fcfaf8] focus:border-[#e7dfd0] h-14 placeholder:text-[#977e4e] p-[15px] text-base font-normal leading-normal"
                    value={formData.theme}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-[#1b160e] text-base font-medium leading-normal pb-2">Image Link</p>
                  <input
                    name="imageLink"
                    placeholder="Enter image link or upload"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b160e] focus:outline-0 focus:ring-0 border border-[#e7dfd0] bg-[#fcfaf8] focus:border-[#e7dfd0] h-14 placeholder:text-[#977e4e] p-[15px] text-base font-normal leading-normal"
                    value={formData.imageLink}
                    onChange={handleChange}
                  />
                </label>
              </div>


              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-[#1b160e] text-base font-medium leading-normal pb-2">Venue</p>
                  <input
                    name="venue"
                    placeholder="Enter venue"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b160e] focus:outline-0 focus:ring-0 border border-[#e7dfd0] bg-[#fcfaf8] focus:border-[#e7dfd0] h-14 placeholder:text-[#977e4e] p-[15px] text-base font-normal leading-normal"
                    value={formData.venue}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-[#1b160e] text-base font-medium leading-normal pb-2">Date</p>
                  <input
                    name="date"
                    type="date"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b160e] focus:outline-0 focus:ring-0 border border-[#e7dfd0] bg-[#fcfaf8] focus:border-[#e7dfd0] h-14 placeholder:text-[#977e4e] p-[15px] text-base font-normal leading-normal"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col w-full">
                  <p className="text-[#1b160e] text-base font-medium leading-normal pb-2">Sessions</p>
                  <textarea
                    name="sessions"
                    placeholder="Enter sessions (one per line)"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1b160e] focus:outline-0 focus:ring-0 border border-[#e7dfd0] bg-[#fcfaf8] focus:border-[#e7dfd0] min-h-36 placeholder:text-[#977e4e] p-[15px] text-base font-normal leading-normal"
                    value={formData.sessions}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <div className="flex px-4 py-3 justify-end">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#e69e19] text-[#1b160e] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#d68c0a] transition-colors"
                >
                  <span className="truncate">Create Event</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;