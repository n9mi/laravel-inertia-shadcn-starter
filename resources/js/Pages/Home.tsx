import MasterLayout from "@/Layouts/MasterLayout";
import { ReactNode } from "react";

const Home = () => {
    return (
        <div>Home</div>
    );
}

Home.layout = (page: ReactNode) => <MasterLayout title={ "Home" } children={ page } />

export default Home;
