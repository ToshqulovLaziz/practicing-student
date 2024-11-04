import { PiStudent } from "react-icons/pi";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
const Header = () => {
  const now = new Date();

  const date = now.toISOString().split("T")[0];
  const formattedDate = date.split("-").reverse().join(":");

  const time = now.toTimeString().split(" ")[0];
  return (
    <>
      <header className="py-[16px] bg-[#ECECF1]">
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
                  <span>{formattedDate}</span> |
                  <time className="pl-1" dateTime={time}>
                    {time}
                  </time>
                </span>
              </div>
              <Link>
                <RxAvatar className="text-[50px]"/>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
