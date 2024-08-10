import { FiBell } from "react-icons/fi";
import Image from "next/image";
import profilePicc from "../public/profilepicc.png";

const ProfileSection = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-white text-lg font-bold ml-52">Upload CSV</h1>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <FiBell className="text-gray-600 text-2xl cursor-pointer" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </div>
        <div className="flex items-center space-x-4">
          <Image
            src={profilePicc}
            width={40}
            height={40}
            alt="Profile"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
