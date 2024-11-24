import { Link, Route, Routes } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { IoChatboxOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { GrOrganization } from "react-icons/gr";
import { PiStudent } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import LeaderUniver from "./LeaderUniver";
import StudentUniver from "./StudentUniver";
import CalendarPage from "../../Calendar";
import FormedGroup from "./FormedGroup";
import Home from "./Home";
import AddOrganization from "./AddOrganization";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="max-w-full mx-auto">
          <div className="flex">
            <div className="w-[400px] h-[100vh] bg-[#1D2D5B] pt-[20px] text-white">
              <Link
                className="font-medium flex items-center gap-2 text-[#beb5b5] pl-[65px] pb-[20px] border-[#888585] border-b-[1px]"
                to="/"
              >
                <AiOutlineDashboard className="border-none text-[20px]" />
                <span>Dashboard</span>
              </Link>
              <div className="pl-[65px] pt-[20px]">
                <h3 className="text-[10px] font-semibold tracking-[1.5px]">
                  UNIVERSITY
                </h3>
              </div>
              <div className="flex flex-col gap-4 pl-[65px]  pt-[20px]">
                <Link
                  className="flex items-center gap-3 hover:text-[#beb5b5]"
                  to="/leader/univer"
                >
                  <GoPerson className="text-[22px]" />
                  <span className="font-normal text-[18px] tracking-[1.3px]">
                    Leaders
                  </span>
                </Link>
                <Link
                  className="flex items-center gap-3 hover:text-[#beb5b5]"
                  to="/student/univer"
                >
                  <PiStudent className="text-[22px]" />
                  <span className="font-normal text-[18px] tracking-[1.3px]">
                    Students
                  </span>
                </Link>
                <Link
                  className="flex items-center gap-3 hover:text-[#beb5b5]"
                  to="/add/organization"
                >
                  <GrOrganization className="text-[22px]" />
                  <span className="font-normal text-[18px] tracking-[1.3px]">
                    Organizations
                  </span>
                </Link>
                <Link
                  className="flex items-center gap-3 hover:text-[#beb5b5]"
                  to="/groups/univer"
                >
                  <GrGroup className="text-[22px]" />
                  <span className="font-normal text-[18px] tracking-[1.3px]">
                    Formed Group
                  </span>
                </Link>
                <Link
                  className="flex items-center gap-3 hover:text-[#beb5b5]"
                  to="/chat/univer"
                >
                  <IoChatboxOutline className="text-[22px]" />
                  <span className="font-normal text-[18px] tracking-[1.3px]">
                    Chat
                  </span>
                </Link>
                <Link
                  className="flex items-center gap-3 hover:text-[#beb5b5]"
                  to="/calendar/univer"
                >
                  <LuCalendarDays className="text-[22px]" />
                  <span className="font-normal text-[18px] tracking-[1.3px]">
                    Calendar
                  </span>
                </Link>
              </div>
            </div>
            <div className="w-[100%] h-[100vh] bg-[#F1F5F8] text-[#1D2D5B]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/leader/univer" element={<LeaderUniver />} />
                <Route path="/student/univer" element={<StudentUniver />} />
                <Route path="/groups/univer" element={<FormedGroup />} />
                <Route path="/calendar/univer" element={<CalendarPage />} />
                <Route path="/add/organization" element={<AddOrganization />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
