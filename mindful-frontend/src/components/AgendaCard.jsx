import React, { useState } from "react";

const AgendaCard = ({ agenda }) => {
  const [activeDay, setActiveDay] = useState("day1");

//   console.log(agenda)

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#1c160d] text-center mb-6">
        Scientific Agenda
      </h2>

      {/* Day Switch Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setActiveDay("day1")}
          className={`px-6 py-2 rounded-md font-semibold ${
            activeDay === "day1"
              ? "bg-[#f29e0d] text-[#1c160d]"
              : "bg-[#f3efe7] text-[#1c160d] border border-[#e8dfce]"
          }`}
        >
          Day 1
        </button>
        <button
          onClick={() => setActiveDay("day2")}
          className={`px-6 py-2 rounded-md font-semibold ${
            activeDay === "day2"
              ? "bg-[#f29e0d] text-[#1c160d]"
              : "bg-[#f3efe7] text-[#1c160d] border border-[#e8dfce]"
          }`}
        >
          Day 2
        </button>
      </div>

      {/* Agenda Table */}
      <div className="overflow-x-auto rounded-lg border border-[#e8dfce]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#f29e0d] text-[#1c160d]">
              <th className="px-4 py-2 border border-[#e8dfce]">Time</th>
              <th className="px-4 py-2 border border-[#e8dfce]">Speaker Name</th>
              <th className="px-4 py-2 border border-[#e8dfce]">Talk Title</th>
            </tr>
          </thead>
          <tbody>
            {agenda[activeDay].time.map((time, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-[#f3efe7]" : "bg-white"
                } text-[#1c160d]`}
              >
                <td className="px-4 py-2 border border-[#e8dfce]">{time}</td>
                <td className="px-4 py-2 border border-[#e8dfce]">
                  {agenda[activeDay].speaker[index]}
                </td>
                <td className="px-4 py-2 border border-[#e8dfce]">
                  {agenda[activeDay].talkTitle[index]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgendaCard;
