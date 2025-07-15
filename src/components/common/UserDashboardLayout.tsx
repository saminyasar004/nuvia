import LogoIconImg from "@/assets/images/favicon.svg";
import LogoBlack from "@/assets/images/logo.svg";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import {
	Blocks,
	BriefcaseBusiness,
	CalendarDays,
	ChevronsLeftRight,
	MessageSquareMore,
	Settings,
	Tags,
	Users,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function UserDashboardLayout({ children }) {
	const location = useLocation();

	const links = [
		{
			label: "Dashboard",
			href: "/user/dashboard",
			icon: <Blocks size={20} className="shrink-0" />,
		},
		{
			label: "Conversations",
			href: "/user/conversations",
			icon: <MessageSquareMore size={20} className="shrink-0" />,
		},
		{
			label: "Appointments",
			href: "/user/appointments",
			icon: <CalendarDays size={20} className="shrink-0" />,
		},
		{
			label: "Customers",
			href: "/user/customers",
			icon: <Users size={20} className="shrink-0" />,
		},
		{
			label: "Business Profile",
			href: "/user/business-profile",
			icon: <BriefcaseBusiness size={20} className="shrink-0" />,
		},
		{
			label: "Subscriptions",
			href: "/user/subscriptions",
			icon: <Tags size={20} className="shrink-0" />,
		},
		{
			label: "Settings",
			href: "/user/settings",
			icon: <Settings size={20} className="shrink-0" />,
		},
	];
	const [open, setOpen] = useState(false);

	return (
		<div className="w-full h-screen flex flex-1 rounded-md bg-background relative">
			<Sidebar open={open} setOpen={setOpen}>
				<SidebarBody className="justify-between gap-10 border-r border-primary">
					<div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
						{open ? <Logo /> : <LogoIcon />}
						<div className="mt-8 flex flex-col gap-2 pt-10">
							{links.map((link, idx) => (
								<SidebarLink
									key={idx}
									link={link}
									isActive={location.pathname === link.href}
								/>
							))}
						</div>
					</div>
				</SidebarBody>
				<span
					onClick={() => setOpen(!open)}
					className={cn(
						"bg-primary text-white rounded-md w-8 h-8 flex items-center justify-center absolute cursor-pointer z-30 transition-all duration-300",
						open
							? "top-[5.5rem] left-0 translate-x-[14.5rem]"
							: "top-[5.5rem] left-0 translate-x-[2.6rem]"
						// open
						// 	? "top-[5.5rem] left-[14.5rem]"
						// 	: "top-[5.5rem] left-[2.7rem]"
					)}
				>
					<ChevronsLeftRight />
				</span>
			</Sidebar>
			<div className="w-full min-h-full overflow-y-scroll">
				{children}
			</div>
		</div>
	);
}

export const Logo = () => {
	return (
		<Link
			to="/"
			className="relative z-20 flex items-center justify-center space-x-2 py-1 text-sm font-normal text-black pl-1"
		>
			<img
				src={LogoBlack}
				alt="nuvía"
				className="max-w-full h-16 transition-all duration-300"
			/>
		</Link>
	);
};
export const LogoIcon = () => {
	return (
		<Link
			to="/"
			className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black pl-1"
		>
			<img
				src={LogoIconImg}
				alt="nuvía"
				className="max-w-full h-16 transition-all duration-300"
			/>
		</Link>
	);
};
