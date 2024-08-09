import Sidebar from "../../components/Sidebar";
import MainSection from "../../components/MainSection";
import ProfileSection from "../../components/ProfileSection";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <ProfileSection />
        <MainSection />
      </div>
    </div>
  );
};

export default Dashboard;
