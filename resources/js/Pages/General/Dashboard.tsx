import MasterLayout from "@/Layouts/MasterLayout";
import { ReactNode } from "react";

const Dashboard = () => {
  return (
    <div>Dashboard</div>
  )
}

Dashboard.layout = (page: ReactNode) => <MasterLayout title={ "Dashboard" } children={ page } />

export default Dashboard;
