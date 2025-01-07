import { Routes, Route } from "react-router-dom";
import LoginForm from "../features/auth/LoginForm";
import SignupForm from "../features/auth/SignupForm";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import CampusLife from "../pages/CampusLife";
import Form from "../pages/Form";
import MainCarousal from "../pages/CarousalPage";
import President from "../pages/team/President";
import Secretary from "../pages/team/Secretary";
import Principle from "../pages/team/Principle";
import Vision from "../pages/Vision";
import MapComponent from "../components/common/MapComponent ";
import EventPage from "../pages/EventPage";


const AppRoutes = () => {
  return (
    <Routes>
            <Route path="/about/vision" element={<Vision/>} />
      <Route path="/about/president" element={<President/>} />
      <Route path="/about/secretary" element={<Secretary/>} />
      <Route path="/about/principle" element={<Principle/>} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/campus" element={<CampusLife />} />
      <Route path="/campus/events" element={<EventPage/>} />
      <Route path="/apply/now" element={<Form />} />
      <Route path="/academic/graduation" element={<MainCarousal />} />
      <Route path="/contact/address" element={<MapComponent/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
