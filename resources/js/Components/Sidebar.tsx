import { Role } from "@/types";
import { Link } from "@inertiajs/react";
import { ChevronLeftCircle, ChevronRightCircle, Home, LayoutDashboard, MessageSquare, Ticket } from "lucide-react";
import { ReactNode } from "react";

const SidebarLabel = ({ sidebarShow, label } : { sidebarShow : boolean, label : string }) => {
    return (
        <div
            className={`mt-2 text-sm font-semibold text-slate-800 ${ sidebarShow ? "block" : "hidden" }`}>
                { label }</div>
    );
}

const SidebarItem = ({ sidebarShow, href, isActive, label, icon } :
    { sidebarShow : boolean, href : string, isActive : boolean, label : string, icon : ReactNode }) => {

    return (
        <Link
            href={ href }
            className= { `p-1 rounded flex my-1 ${ isActive ? "bg-slate-600 text-white" : "bg-slate-200" }` }>
                { icon }
                <div className={ `${ sidebarShow ? "" : "hidden"}` }>{ label }</div>
            </Link>
    );
}

const Sidebar = ({ sidebarShow, setSidebarShow, isAuthenticated, roles, currRoute } :
    { sidebarShow : boolean, setSidebarShow : React.Dispatch<React.SetStateAction<boolean>>,
        isAuthenticated : boolean, roles : Role[], currRoute : string }) => {

    return (
        <div
            className={ `relative flex flex-col flex-none h-screen p-2 bg-slate-100 shadow border-slate-600 text-slate-700 transition-[width] duration-500 ${ sidebarShow ? "w-72" : "w-[60px] place-items-center"}` }>
            <div
                className="p-1 rounded"
                onClick={() => setSidebarShow(!sidebarShow)}>
                    { sidebarShow ? <ChevronLeftCircle /> : <ChevronRightCircle /> }
                </div>

            <SidebarLabel
                sidebarShow={ sidebarShow }
                label="Home" />
            <SidebarItem
                sidebarShow={ sidebarShow }
                isActive={ currRoute === "home" }
                href={ route("home") }
                label="Home"
                icon={ <Home
                    className={ `delay-150 ${ currRoute === "home" ? "text-white" : "text-slate-700" } ${ sidebarShow ? "mr-2" : ""}` } /> } />

            {
                isAuthenticated ?
                <>
                    <SidebarLabel
                        sidebarShow={ sidebarShow }
                        label="General" />
                    <SidebarItem
                        sidebarShow={ sidebarShow }
                        isActive={ currRoute === "dashboard" }
                        href={ route("dashboard") }
                        label="Dasboard"
                        icon={ <LayoutDashboard
                            className={ `delay-150 ${ currRoute === "dashboard" ? "text-white" : "text-slate-700" } ${ sidebarShow ? "mr-2" : ""}` } /> } />
                </> : <></>
            }


            {
                roles !== null ?
                roles.map((r, i) => (
                    <div key={ i }>
                        <SidebarLabel
                            sidebarShow={ sidebarShow }
                            label={ r.display_name } />
                        {
                            getRouteItems(r.id, sidebarShow, currRoute).map((e, i) => (
                                <SidebarItem
                                    key={ i }
                                    sidebarShow={ sidebarShow }
                                    isActive={ currRoute === e.route }
                                    href={ route(e.route) }
                                    label={ e.label }
                                    icon={ e.icon } />
                            ))
                        }
                    </div>
                )) : <></>
            }
        </div>
    );
}

interface RouteItem {
    route: string,
    label: string,
    icon: ReactNode
}

const getRouteItems = (role_id : string, sidebarShow : boolean, currRoute : string) : RouteItem[] => {
    const getClassName = (isActive : boolean) =>
        (`delay-150 ${ isActive ? "text-white" : "text-slate-700" } ${ sidebarShow ? "mr-2" : ""}`);

    console.log(currRoute);

    switch (role_id) {
        case "role_admin":
            return [
                {
                    route: "admin.tickets",
                    label: "Tickets",
                    icon:<Ticket className={ getClassName(currRoute === "admin.tickets") } />
                }
            ]

        case "role_user":
            return [
                {
                    route: "user.requests",
                    label: "My Requests",
                    icon:<MessageSquare className={ getClassName(currRoute === "user.requests") }/>
                }
            ]

        default:
            return [

            ]
    }
}

export default Sidebar;
