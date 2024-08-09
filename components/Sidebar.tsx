"use client";
import { useState } from "react";
import {
  FiHome,
  FiUpload,
  FiFileText,
  FiCalendar,
  FiBell,
  FiSettings,
} from "react-icons/fi";
import Image from "next/image";
import logo from "../public/logoo.png";
import menuIcon from "../public/hamburger.png";
import { ModeToggle } from "./toggle-mode";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("Upload");

  return (
    <div
      className={`flex flex-col justify-between ${
        isOpen ? "w-64" : "w-20"
      } duration-300 bg-gray-900 h-screen p-5 pt-8 relative`}
    >
      <div>
        <div className="flex gap-x-4 items-center mb-8">
          <Image
            src={logo}
            width={40}
            height={40}
            alt="Logo"
            className="rounded-full mr-4"
          />
          {isOpen && (
            <h1 className="text-white origin-left font-medium text-xl duration-200">
              Base
            </h1>
          )}
        </div>
        <div
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${
            !isOpen && "rotate-180"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Image src={menuIcon} width={28} height={28} alt="Toggle Sidebar" />
        </div>
        <ul className="pt-6 flex-grow">
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
              activeSection === "Dashboard" && "bg-[#346BD4]"
            } font-nunito`}
            onClick={() => setActiveSection("Dashboard")}
          >
            <FiHome className="text-2xl" />
            {isOpen && (
              <span className="origin-left duration-200">Dashboard</span>
            )}
          </li>
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
              activeSection === "Upload" && "bg-[#346BD4]"
            } font-nunito`}
            onClick={() => setActiveSection("Upload")}
          >
            <FiUpload className="text-2xl" />
            {isOpen && <span className="origin-left duration-200">Upload</span>}
          </li>
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
              activeSection === "Invoice" && "bg-[#346BD4]"
            } font-nunito`}
            onClick={() => setActiveSection("Invoice")}
          >
            <FiFileText className="text-2xl" />
            {isOpen && (
              <span className="origin-left duration-200">Invoice</span>
            )}
          </li>
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
              activeSection === "Schedule" && "bg-[#346BD4]"
            } font-nunito`}
            onClick={() => setActiveSection("Schedule")}
          >
            <FiCalendar className="text-2xl" />
            {isOpen && (
              <span className="origin-left duration-200">Schedule</span>
            )}
          </li>
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
              activeSection === "Notifications" && "bg-[#346BD4]"
            } font-nunito`}
            onClick={() => setActiveSection("Notifications")}
          >
            <FiBell className="text-2xl" />
            {isOpen && (
              <span className="origin-left duration-200">Notifications</span>
            )}
          </li>
          <li
            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${
              activeSection === "Settings" && "bg-[#346BD4]"
            } font-nunito`}
            onClick={() => setActiveSection("Settings")}
          >
            <FiSettings className="text-2xl" />
            {isOpen && (
              <span className="origin-left duration-200">Settings</span>
            )}
          </li>
        </ul>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Sidebar;
