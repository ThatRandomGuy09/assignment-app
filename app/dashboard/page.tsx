import dynamic from "next/dynamic";

// Dynamically import components to only render on the client side
const Sidebar = dynamic(() => import("../../components/Sidebar"), {
  ssr: false,
});
const ProfileSection = dynamic(
  () => import("../../components/ProfileSection"),
  {
    ssr: false,
  }
);
const MainSection = dynamic(() => import("../../components/MainSection"), {
  ssr: false,
});

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
