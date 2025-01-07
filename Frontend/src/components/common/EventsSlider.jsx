import { useState } from "react";

const events = [
  {
    id: 1,
    date: "Dec 11, 2024",
    title: "Smart India Hackathon 2024",
  },
  {
    id: 2,
    date: "Nov 29, 2024",
    title:
      "Innovation Design and Entrepreneurship IDE Bootcamp for School Teachers",
  },
  {
    id: 3,
    date: "Nov 18, 2024",
    title: "Annual Function",
  },
  {
    id: 4,
    date: "Nov 5, 2024",
    title: "Annual Sports Meet 2024",
  },
  // Add more events here
];

const EventsSlider = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % events.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className="flex flex-col m-auto items-center  justify-center w-[80vw] p-2 py-10">
      <h2 className="text-4xl font-bold text-purple-700 mb-6">Our Events</h2>
      <p className="mt-2 text-gray-600 ">Empowering Engagement</p>

      {/* Event Slider */}
      <div className="relative flex items-center justify-center w-full max-w-4xl mt-6 space-x-4">
        {/* Previous Button */}
        <button
          className="absolute flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full shadow-lg hover:bg-purple-300 transition-all duration-300 lg:-left-12 left-0"
          onClick={handlePrev}
        >
          &lt;
        </button>

        {/* Event Cards */}
        <div className="flex overflow-hidden ">
          {events
            .slice(current, current + 2) // Show only 2 event cards at a time
            .map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 w-80 h-40 p-4 m-2 bg-gradient-to-r from-orange-700 via-yellow-400 to-orange-700 border rounded-lg shadow-lg"
              >
                <p className="text-purple-700">
                  <span role="img" aria-label="calendar">
                    📅
                  </span>{" "}
                  {event.date}
                </p>
                <h3 className="mt-2 text-lg font-bold truncate">
                  {event.title}
                </h3>
              </div>
            ))}
        </div>

        {/* Next Button */}
        <button
          className="absolute flex justify-center items-center w-8 h-8 bg-gray-200 rounded-full shadow-lg hover:bg-purple-300 transition-all duration-300 lg:-right-12 right-0"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default EventsSlider;
