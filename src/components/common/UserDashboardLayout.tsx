import LogoIconImg from "@/assets/images/favicon.svg";
import LogoBlack from "@/assets/images/logo-black.svg";
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
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

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
			href: "/user/customers",
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
			{/* <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" /> */}
			<img
				src={LogoBlack}
				alt="Easechat"
				className="max-w-full h-10 transition-all duration-300"
			/>
			{/* <motion.span
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="font-medium whitespace-pre text-primary"
			>
				Easechat
			</motion.span> */}
		</Link>
	);
};
export const LogoIcon = () => {
	return (
		<Link
			to="/"
			className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black pl-1"
		>
			{/* <div className="h-5 w-6 shrink-0 rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm bg-black dark:bg-white" /> */}
			<img
				src={LogoIconImg}
				alt="Easechat"
				className="max-w-6 h-10 transition-all duration-300"
			/>
		</Link>
	);
};

// Dummy dashboard component with content
const Dashboard = () => {
	return (
		<div className="flex flex-1">
			<div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
				<div className="flex gap-2">
					{[...new Array(4)].map((i, idx) => (
						<div
							key={"first-array-demo-1" + idx}
							className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
						></div>
					))}
				</div>
				<div className="flex flex-1 gap-2">
					{[...new Array(2)].map((i, idx) => (
						<div
							key={"second-array-demo-1" + idx}
							className="h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
						></div>
					))}
				</div>
			</div>
		</div>
	);
};
