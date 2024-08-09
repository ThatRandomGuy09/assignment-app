import Sidebar from "../../components/Sidebar";
import MainSection from "../../components/MainSection";
import ProfileSection from "../../components/ProfileSection";

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar />
      <div className="flex-1 p-4 md:ml-20">
        <ProfileSection />
        <MainSection />
      </div>
    </div>
  );
};

export default Dashboard;
