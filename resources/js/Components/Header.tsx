import { CircleUser, Hand } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/shadcn/ui/dropdown-menu";
import { User } from "@/types";
import { Link } from "@inertiajs/react";

const Header = ({ title, sidebarShow, isMobile, user } :
    { title : string, sidebarShow : boolean, isMobile : boolean, user : User }) => {
    return (
        <div className="w-screen p-2 bg-slate-100">
            <div
                className={ `flex justify-between transition-[width] duration-500 ml-4 px-2
                    ${ sidebarShow ? (isMobile ? "" : "w-9/12") : (isMobile ? "w-3/4" : "w-11/12") }` }>
                <div className="font-bold text-lg text-slate-800">{ title }</div>
                {
                    user === null ?
                    <div className="flex gap-4">
                        <Link
                            className="font-semibold text-slate-600"
                            href={ route('login') }>
                                Login
                            </Link>
                        <Link
                            className="font-semibold text-slate-800"
                            href={ route('register') }>
                                Register
                            </Link>
                    </div>
                    :
                    <DropdownMenu>
                        <DropdownMenuTrigger className="focus:outline-none focus-visible:outline-none">
                            <CircleUser className="text-slate-500" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="mr-2">
                            <DropdownMenuLabel>
                                My account
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <Link
                                    className="text-slate-800"
                                    href={ route('profile.edit') }>
                                        Profile
                                    </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link
                                    className="text-slate-800"
                                    href={ route('logout') }
                                    method="post"
                                    as="button">
                                        Logout
                                    </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                }
            </div>
        </div>
    );
}

export default Header;
