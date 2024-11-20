import { Link, Route, Routes } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { IoSettingsOutline, IoChatboxOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { PiStudent } from "react-icons/pi";
import { GrGroup } from "react-icons/gr";
import LeaderUniver from "./LeaderUniver";
import StudentUniver from "./StudentUniver";
import SettingsUniver from "./SettingsUniver";
import Chat from "../../Chat";
import Calendar from "../../Calendar";
import AddGroup from "./AddGroup";

const Dashboard = () => {
  return (
    <>
      <div>
        <div className="max-w-full mx-auto">
          <div className="flex">
            <div className="w-[400px] h-[100vh] bg-[#1D2D5B] pt-[20px] text-white">
              <Link className="font-medium flex items-center gap-2 text-[#beb5b5] pl-[65px] pb-[20px] border-[#888585] border-b-[1px]">
                <AiOutlineDashboard className="border-none text-[20px]" />
                <span>Dashboard</span>
              </Link>
              <div className="pl-[65px] pt-[20px]">
                <h3 className="text-[10px] font-semibold tracking-[1.5px]">
                  UNIVERSITY
                </h3>
              </div>
              <div className="flex flex-col gap-3 pl-[65px]  pt-[20px]">
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
                  to="/groups/univer"
                >
                  <GrGroup className="text-[22px]" />
                  <span className="font-normal text-[18px] tracking-[1.3px]">
                   Add  Groups
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
                  to="/settings/univer"
                >
                  <IoSettingsOutline className="text-[22px]" />
                  <span className="font-normal text-[18px] tracking-[1.3px]">
                    Settings
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
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/leader/univer" element={<LeaderUniver />} />
                <Route path="/student/univer" element={<StudentUniver />} />
                <Route path="/groups/univer" element={<AddGroup />} />
                <Route path="/settings/univer" element={<SettingsUniver />} />
                <Route path="/chat/univer" element={<Chat />} />
                <Route path="/calendar/univer" element={<Calendar />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
