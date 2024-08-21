import MasterLayout from "@/Layouts/MasterLayout";
import { ReactNode } from "react";

const Tickets = () => {
    return (
        <div>Tickets</div>
    );
}

Tickets.layout = (page : ReactNode) => <MasterLayout title={ "Tickets" } children={ page } />

export default Tickets;
