import Header from "@/Components/Header";
import Sidebar from "@/Components/Sidebar";
import { PageProps } from "@/types";
import { usePage } from "@inertiajs/react";
import { ReactNode, useEffect, useState } from "react";

const MasterLayout = ({ title, children } : { title : string, children : ReactNode }) => {
    const [ width, setWidth ] = useState<number>(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;
    const [ sidebarShow, setSidebarShow ] = useState<boolean>(!isMobile);

    const page = usePage<PageProps>();
    const isAuthenticated = page.props.auth.user !== null;
    const roles = page.props.auth.roles;
    const currRoute = route().current() || "";

    // console.log(page.props.auth.roles[0].display_name);

    return (
        <div className="flex">
            <Sidebar
                sidebarShow={ sidebarShow }
                setSidebarShow={ setSidebarShow }
                isAuthenticated={ isAuthenticated }
                roles={ roles }
                currRoute={ currRoute }/>
            <div className="flex flex-col overflow-hidden">
                <Header
                    title={ title }
                    sidebarShow={ sidebarShow }
                    isMobile={ isMobile }
                    user={ page.props.auth.user }/>
                <div className="px-8">
                    {  children }
                </div>
            </div>
        </div>
    );
}

export default MasterLayout;
