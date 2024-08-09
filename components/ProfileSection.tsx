import Image from "next/image";
import { FiBell } from "react-icons/fi";
import profilePicc from "../public/profilepicc.png";
const ProfileSection = () => {
  return (
    <div className="flex items-center space-x-4 absolute top-4 right-4">
      <FiBell className="text-2xl text-white" />
      <Image
        src={profilePicc}
        alt="Profile Picture"
        className="w-10 h-10 rounded-lg object-cover"
      />
    </div>
  );
};

export default ProfileSection;
