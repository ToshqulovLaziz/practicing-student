import { PiStudent } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import TuitLogo from "../../assets/tuit.png"

const Header = () => {
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const date = now.toISOString().split("T")[0];
      const formattedDate = date.split("-").reverse().join(".");

      const time = now.toTimeString().split(" ")[0];

      setCurrentDate(formattedDate);
      setCurrentTime(time);
    };

    updateDateTime();

    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <header className="py-[16px] bg-[#ECECF1] sticky top-0 z-50">
        <div className="container max-w-full px-4 mx-auto">
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <PiStudent className="text-[40px] text-[#3b65e2]" />
              <Link className="font-extrabold w-[100px] text-[13px] tracking-[2px] text-[#3b65e2]">
                PRACTICING <span className="tracking-[6.3px]">STUDENT</span>
              </Link>
            </div>
            <div className="flex items-center gap-[60px]">
              <div className="text-end">
                <p className="mb-0 font-normal text-[14px]">Server vaqti</p>
                <span className="font-semibold text-[13px] mt-0 tracking-[1.3px]">
                  <span>{currentDate}</span> |
                  <time className="pl-1" dateTime={currentTime}>
                    {currentTime}
                  </time>
                </span>
              </div>
              <Link to="/profile">
              <img src={TuitLogo} alt="Tuit logo" width={55}/>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
