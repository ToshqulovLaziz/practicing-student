import { useState } from "react";
import Header from "../components/Header";
import Modals from "../components/Modals";
import University from "../components/University";
import Authentication from "../components/Authentication";

const Root = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // This function will be passed down as a prop
  const handleLoginSuccess = () => {
    setIsAdminLoggedIn(true); // This updates the login state when login is successful
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
