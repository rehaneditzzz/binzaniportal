const events = [
    {
      id: 1,
      date: "Dec 11, 2024",
      title: "Innovation Campus 2024",
    },
    {
      id: 2,
      date: "Nov 29, 2024",
      title: "IDE Bootcamp for School Teachers",
    },
    {
        id: 2,
        date: "Nov 29, 2024",
        title: "IDE Bootcamp for School Teachers",
      },
    {
      id: 4,
      date: "Oct 12, 2024",
      title: "Coding Hackathon 2024",
    },
    {
      id: 5,
      date: "Sep 5, 2024",
      title: "Teacher's Day Celebration",
    },
  ];
  
  const UpcomingEvents = () => {
    return (
      <div className="flex flex-col items-center justify-center w-full px-4  pt-24">
        {/* Title and Description */}
        <div className="w-full md:w-3/4 lg:w-2/3 text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Extracurricular activities help students refresh their minds and gain
            valuable experiences. Here are some exciting upcoming events at our
            institution.
          </p>
        </div>
  
        {/* Scrollable Cards Section */}
        <div className="flex overflow-x-auto w-full px-4 space-x-4  justify-center scrollbar-hide">
          <div className="flex gap-2  p-2  snap-x snap-mandatory items-center justify-center">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 w-40  bg-gradient-to-r from-orange-700 via-yellow-400 to-orange-700 shadow-md border rounded-lg p-4 hover:shadow-lg transition duration-300 snap-center"
              >
                {/* Event Date */}
                <div className="flex items-center text-center justify-center w-16 h-16 bg-purple-100 text-purple-700 font-semibold text-sm mb-4 rounded-full mx-auto">
                  {event.date}
                </div>
                {/* Event Title */}
                <h3 className="text-sm font-semibold text-gray-800 text-center">
                  {event.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default UpcomingEvents;
  