import MasterLayout from "@/Layouts/MasterLayout";
import { ReactNode } from "react";

const Requests = () => {
    return (
        <div>Requests</div>
    );
}

Requests.layout = (page : ReactNode) => <MasterLayout title={ "My Requests" } children={ page } />

export default Requests;
