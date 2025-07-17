import FacebookIcon from "@/assets/images/facebook.svg";
import InstagramIcon from "@/assets/images/instagram.svg";
import WhatsappIcon from "@/assets/images/whatsapp.svg";
import DashboardHeader from "@/components/common/dashboard-header";
import {
	CalendarDays,
	DollarSign,
	LucideProps,
	MessageSquareMore,
	Users,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import Avatar from "@/assets/images/avatar.png";
import { Badge } from "@/components/ui/badge";

interface DashboardItem {
	id: number;
	title: string;
	value: number | string;
	icon?: ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
	>; // Optional for the main stat icon
	platforms?: {
		name: string;
		icon: string;
		count: number;
	}[];
}

const dashboardData: DashboardItem[] = [
	{
		id: 1,
		title: "Total Conversations",
		value: 1234,
		icon: MessageSquareMore,
		platforms: [
			{
				name: "WhatsApp",
				icon: WhatsappIcon,
				count: 865,
			},
			{
				name: "Facebook",
				icon: FacebookIcon,
				count: 369,
			},
			{
				name: "Instagram",
				icon: InstagramIcon,
				count: 0,
			},
		],
	},
	{
		id: 2,
		title: "Appointments Booked",
		value: 89,
		icon: CalendarDays,
		platforms: [
			{
				name: "WhatsApp",
				icon: WhatsappIcon,
				count: 62,
			},
			{
				name: "Facebook",
				icon: FacebookIcon,
				count: 150,
			},
			{
				name: "Instagram",
				icon: InstagramIcon,
				count: 12,
			},
		],
	},
	{
		id: 3,
		title: "Active Customers",
		value: 500,
		icon: Users,
		platforms: [
			{
				name: "WhatsApp",
				icon: WhatsappIcon,
				count: 200,
			},
			{
				name: "Facebook",
				icon: FacebookIcon,
				count: 150,
			},
			{
				name: "Instagram",
				icon: InstagramIcon,
				count: 150,
			},
		],
	},
	{
		id: 4,
		title: "Revenue",
		value: 12450,
		icon: DollarSign,
		platforms: [
			{
				name: "WhatsApp",
				icon: WhatsappIcon,
				count: 8000,
			},
			{
				name: "Facebook",
				icon: FacebookIcon,
				count: 3690,
			},
			{
				name: "Instagram",
				icon: InstagramIcon,
				count: 4561,
			},
		],
	},
];

export default function Dashboard() {
	return (
		<section className="w-full">
			{/* dashboard header */}
			<DashboardHeader
				title="Dashboard Overview"
				description="Monitor your AI-powered customer service performance across all platforms"
			/>

			<div className="w-full grid grid-cols-4 gap-5 px-5 py-8">
				{dashboardData.map((data, index) => (
					<DashboardDataCard key={index} data={data} />
				))}
			</div>

			<div className="w-full px-5 grid grid-cols-5 gap-8">
				<div className="col-span-3 w-full border rounded-lg border-primary/10 my-5 px-5 py-6">
					<div className="space-y-4">
						<h3 className="text-primary font-semibold text-2xl">
							Live Conversations
						</h3>

						{Array.from({ length: 6 }).map((_, index) => (
							<div
								key={index}
								className="w-full p-4 rounded-lg border border-primary/10 flex items-start justify-between transition-all duration-150 group hover:bg-secondary"
							>
								<div className="flex gap-3">
									<div className="w-14 h-14 flex items-center justify-center overflow-hidden relative">
										<div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full border border-primary">
											<img
												src={Avatar}
												alt="avatar"
												className="max-w-full rounded-full"
											/>
										</div>
										<img
											src={WhatsappIcon}
											alt="whatsapp"
											className="absolute bottom-0 right-0"
										/>
									</div>
									<div className="flex flex-col justify-center gap-1">
										<h5 className="font-semibold">
											Pappu Don
										</h5>
										<p className="text-xs font-medium text-gray-500 transition-all duration-150">
											Hi! Can I book a facial for
											tomorrow?
										</p>
									</div>
								</div>
								<div className="flex flex-col gap-2 items-end">
									<span className="text-xs text-gray-500 transition-all duration-150">
										2 min ago
									</span>
									<Badge variant={"success"}>Active</Badge>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="col-span-2 w-full border rounded-lg border-primary/10 my-5 px-5 py-6">
					<div className="space-y-4">
						<h3 className="text-primary font-semibold text-2xl">
							Today's Schedule
						</h3>

						{Array.from({ length: 6 }).map((_, index) => (
							<div
								key={index}
								className="bg-secondary p-3 px-6 rounded-md flex flex-col gap-1"
							>
								<div className="w-full flex items-center justify-between">
									<h5 className="font-semibold text-lg">
										Sarah Chen
									</h5>

									<img src={FacebookIcon} alt="Facebook" />
								</div>

								<h4 className="text-primary">
									Hydrating Facial
								</h4>

								<div className="w-full flex items-center justify-between">
									<div className="flex gap-1 items-center text-gray-500">
										<span>Today</span>
										<div className="w-1 h-1 bg-gray-500 rounded-full"></div>
										<span>2:00 PM</span>
									</div>
									<h5 className="text-xl font-semibold text-warning">
										$500
									</h5>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

const DashboardDataCard = ({ data }: { data: DashboardItem }) => {
	return (
		<div className="w-full bg-background border border-primary/10 rounded-lg flex flex-col gap-3 p-5 shadow-md">
			<div className="w-full flex items-center justify-between">
				<div className="">
					<h3 className="font-semibold">{data.title}</h3>
					<span className="text-warning font-semibold text-3xl">
						{data.value}
					</span>
				</div>

				<div className="w-12 h-12 flex items-center justify-center bg-secondary rounded-lg p-3">
					<data.icon className="text-primary" />
				</div>
			</div>

			{data.platforms.map((platform, index) => (
				<div
					key={index}
					className="w-full flex items-center justify-between py-1"
				>
					<div className="flex gap-2">
						<img
							src={platform.icon}
							alt={platform.name}
							className="max-w-full"
						/>
						<h5 className="">{platform.name}</h5>
					</div>
					<h5 className="text-sm">{platform.count}</h5>
				</div>
			))}
		</div>
	);
};
