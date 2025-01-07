import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/user/profile", {
          withCredentials: true, // Send cookies with the request
        });
        setProfileData(response.data);
      } catch (err) {
        setError(err.response?.data?.message || "Not Authorized");
        navigate("/login"); // Redirect to login page if not authorized
      }
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : profileData ? (
        <div>
          <h1>Welcome, {profileData.username}</h1>
          <p>Email: {profileData.email}</p>
          <p>Role: {profileData.role}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Profile;
