import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Modals from "../components/Modals";
import University from "../components/University";
import Authentication from "../components/Authentication";

const Root = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Foydalanuvchini localStorage orqali tekshirish
    const user = JSON.parse(localStorage.getItem("user"));
    const role = localStorage.getItem("role");

    if (user && role === "admin") {
      setIsAdminLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true);
    navigate("/dashboard"); // Tizimga kirgandan so‘ng, dashboardga yo'naltirish
  };

  return (
    <>
      <Modals />
      {isAdminLoggedIn ? (
        <>
          <Header />
          <University />
        </>
      ) : (
        <Authentication onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
};

export default Root;
