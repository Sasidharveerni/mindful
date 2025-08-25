import React, { useEffect, useState } from "react";
import { Calendar, MapPin, FileText, ArrowRight } from "lucide-react";

function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timerItems = [
    { label: "DAYS", value: timeLeft.days, color: "border-blue-500" },
    { label: "HOURS", value: timeLeft.hours, color: "border-yellow-500" },
    { label: "MINUTES", value: timeLeft.minutes, color: "border-teal-500" },
    { label: "SECONDS", value: timeLeft.seconds, color: "border-pink-500" },
  ];

  return (
    <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
      {timerItems.map((item, i) => (
        <div
          key={i}
          className={`w-20 h-20 flex flex-col items-center justify-center rounded-full bg-white shadow-md border-4 ${item.color}`}
        >
          <span className="text-xl font-bold text-black">{item.value ?? 0}</span>
          <span className="text-xs font-medium text-gray-600">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function EventBanner({ event }) {
  return (
    <div
      className="relative text-black flex flex-col items-center justify-center px-6 py-16 bg-cover bg-center bg-opacity-80"
      style={{ backgroundImage: `url(${event.imageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#f3efe7]"></div>

      <div className="relative z-10 max-w-4xl text-center">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4">
          {event.title}
        </h1>
        <p className="italic text-lg sm:text-xl mb-6">{event.theme}</p>

        {/* Date & Location */}
        <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base mb-6">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{event.Dates}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{event.location}</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2">
            <FileText className="w-4 h-4" /> Brochure
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2">
            Abstract <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Countdown Timer */}
        <CountdownTimer targetDate={event.Dates} />
      </div>
    </div>
  );
}
