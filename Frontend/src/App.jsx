import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import MainCarousal from "./pages/CarousalPage";
import Hero from "./components/Layout/Hero";
import CampusLife from "./pages/CampusLife";
import MapComponent from "./components/common/MapComponent ";
import EventsSlider from "./components/common/EventsSlider";
import TestimonialSlider from "./components/common/TestimonialSlider";
import UpcomingEvents from "./components/common/UpcomingEvents";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Root path */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MainCarousal />
              <CampusLife />
              <UpcomingEvents/>
              <EventsSlider/>
              <TestimonialSlider/>
              <MapComponent />
            </>
          }
        />
        {/* Include AppRoutes directly */}
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
