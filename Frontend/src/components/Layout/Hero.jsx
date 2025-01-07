import CollegeCardSection from "../common/CollegeCardSection";

const Hero = () => {
  return (
    <div className="relative bg-slate-950">
      {/* Image Section */}
      <div className="overflow-hidden relative">
        <img
          src="/bg2.jpg"
          alt="building"
          className="w-full min-h-[60vh] object-cover"
        />
        {/* <video 
         autoPlay
         muted
         loop
         className="w-full min-h-[60vh] object-cover"
         src="/bgv2.mp4"
         type="video/mp4"  // Specify the video type
        /> */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Card Section */}
      <CollegeCardSection />
    </div>
  );
};

export default Hero;
