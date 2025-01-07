import { useRef } from "react";
import { IoShareSocial } from "react-icons/io5";
import { WiTime3 } from "react-icons/wi";
import { PiCalendarLight } from "react-icons/pi";

const Carousal = () => {
  const sliderRef = useRef(null);
  let isScrolling = false;

  const scrollSlider = (direction) => {
    if (isScrolling) return; // Prevent multiple triggers
    isScrolling = true;

    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth / 3; // Smooth scrolling by 1/3rd of visible area
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      isScrolling = false; // Reset scrolling lock
    }, 300); // Match with transition duration
  };

  const programs = [
    {
      image: "/bg1.jpg",
      title: "Bachelor of Arts (B.A.)",
      duration: "3 Years",
      type: "Full Time",
    },
    {
      image: "/bg2.jpg",
      title: "Bachelor of Commerce (B.Com)",
      duration: "3 Years",
      type: "Full Time",
    },
    {
      image: "/bg3.jpg",
      title: "B.Com in Computer Applications",
      duration: "3 Years",
      type: "Full Time",
    },
    {
      image: "/bg4.jpg",
      title: "Bachelor of Business Administration (BBA)",
      duration: "3 Years",
      type: "Full Time",
    },
    {
      image: "/bg5.jpg",
      title: "Master of Arts (M.A.) in English",
      duration: "2 Years",
      type: "Full Time",
    },
    {
      image: "/bg6.jpg",
      title: "Master of Commerce (M.Com)",
      duration: "2 Years",
      type: "Full Time",
    },
    {
      image: "/bg7.jpg",
      title: "Ph.D. in Commerce & Management",
      duration: "3+ Years",
      type: "Full Time/Part Time",
    },
  ];

  return (
    <div className="h-96">
      <div className="relative">
        {/* Left Scroll Button */}
        <button
          className="absolute z-40 left-4 top-1/2 transform -translate-y-1/2 bg-zinc-200 rounded-full px-2 hover:bg-zinc-300"
          onClick={() => scrollSlider("left")}
        >
          &#10094;
        </button>

        {/* Carousal Content */}
        <div
          ref={sliderRef}
          className="m-auto flex h-96 lg:w-[71vw] p-2 overflow-x-auto space-x-4 snap-x snap-mandatory"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="shadow-lg carousal-item relative h-full rounded-lg p-3 w-64 flex-shrink-0 snap-center"
            >
              {/* Image */}
              <div className="contMainTop h-2/4">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="rounded-t-lg h-full object-cover w-full"
                />
              </div>

              {/* Program Info */}
              <div className="contMainBottom h-2/4 bg-slate-50 grid px-1">
                <div className="titleDiv1 flex justify-between items-center w-full">
                  <h3 className="text-lg font-semibold w-4/5">
                    {program.title}
                  </h3>
                  <span className="w-1/5">
                    <IoShareSocial size={20} color="blue" />
                  </span>
                </div>

                <div className="durationDiv2 flex justify-between">
                  <div className="span1 flex items-center gap-2">
                    <span>
                      <WiTime3 size={20} />
                    </span>
                    <p className="text-sm text-zinc-600">{program.duration}</p>
                  </div>
                  <div className="span2 flex items-center gap-2">
                    <span>
                      <PiCalendarLight size={20} />
                    </span>
                    <p className="text-sm text-zinc-600">{program.type}</p>
                  </div>
                </div>

                <div className="btnDiv3 bottom-4 w-full px-1">
                  <div className="mt-4 flex justify-between items-center">
                    <a
                      href="#"
                      className="bg-purple-600 text-white rounded-tr-xl rounded-bl-xl py-2 px-3"
                    >
                      Learn More
                    </a>
                    <button className="border border-orange-600 rounded-tl-xl rounded-br-xl py-2 px-3">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-zinc-200 rounded-full px-2 hover:bg-zinc-300"
          onClick={() => scrollSlider("right")}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousal;
