import AvatarImg from "@/assets/images/avatar.png";
import DashboardHeader from "@/components/common/dashboard-header";
import { Badge } from "@/components/ui/badge";
import {
	BarChart3,
	DollarSign,
	LucideProps,
	MessagesSquare,
	Users,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface DashboardDataProps {
	title: string;
	value: number;
	period: string;
	icon?: ForwardRefExoticComponent<
		Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
	>;
}

const dashboardData = [
	{
		title: "Total Businesses",
		value: 247,
		period: "this month",
		icon: BarChart3,
	},
	{
		title: "Active Users",
		value: 1247,
		period: "this week",
		icon: Users,
	},
	{
		title: "Total Conversations",
		value: 45200,
		period: "last month",
		icon: MessagesSquare,
	},
	{
		title: "Monthly Revenue",
		value: 73990,
		period: "this month",
		icon: DollarSign,
	},
];

const recentlyJoinedBusinesses: BusinessProps[] = [
	{
		id: "1",
		ownerName: "Sarah Chen",
		businessName: "Hydrating Facial",
		joinedDaysAgo: 2,
		status: "Active",
		plan: "Professional Plan",
		price: "$299/month",
		avatar: "/placeholder.svg?height=48&width=48",
	},
	{
		id: "2",
		ownerName: "Mike Johnson",
		businessName: "Elite Barbershop",
		joinedDaysAgo: 2,
		status: "Pending",
		plan: "Professional Plan",
		price: "$299/month",
		avatar: "/placeholder.svg?height=48&width=48",
	},
	{
		id: "3",
		ownerName: "Sarah Chen",
		businessName: "Hydrating Facial",
		joinedDaysAgo: 2,
		status: "Active",
		plan: "Professional Plan",
		price: "$299/month",
		avatar: "/placeholder.svg?height=48&width=48",
	},
	{
		id: "4",
		ownerName: "Sarah Chen",
		businessName: "Hydrating Facial",
		joinedDaysAgo: 2,
		status: "Active",
		plan: "Professional Plan",
		price: "$299/month",
		avatar: "/placeholder.svg?height=48&width=48",
	},
	{
		id: "5",
		ownerName: "Sarah Chen",
		businessName: "Hydrating Facial",
		joinedDaysAgo: 2,
		status: "Active",
		plan: "Professional Plan",
		price: "$299/month",
		avatar: "/placeholder.svg?height=48&width=48",
	},
];

export default function AdminDashboard() {
	return (
		<section className="w-full">
			{/* dashboard header */}
			<DashboardHeader
				title="Dashboard Overview"
				description="Welcome back! Here's what's happening with your platform today."
			/>

			<div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6 px-5">
				{dashboardData.map((stat, index) => (
					<DashboardDataCard data={stat} key={index} />
				))}
			</div>

			<div className="w-full p-6 bg-background">
				<div className="px-5 py-6 border rounded-lg">
					<div className="mb-6">
						<h2 className="text-xl font-semibold text-primary mb-2">
							Recently Joined Businesses
						</h2>
						<p className="text-foreground text-sm">
							New businesses that joined the platform
						</p>
					</div>

					<div className="space-y-4">
						{recentlyJoinedBusinesses.map((business) => (
							<BusinessCard
								key={business.id}
								business={business}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

const DashboardDataCard = ({ data }: { data: DashboardDataProps }) => {
	return (
		<div className="w-full bg-background border border-primary/50 rounded-lg flex flex-col gap-3 p-5 shadow-sm">
			<div className="w-full flex items-center justify-between">
				<div className="flex flex-col gap-1">
					<h3 className="font-semibold">{data.title}</h3>
					<span className="text-warning font-semibold text-3xl">
						{data.value}
					</span>
					<span className="text-sm text-neutral-500">
						{data.period}
					</span>
				</div>

				<div className="w-12 h-12 flex items-center justify-center bg-theme/10 rounded-lg p-3">
					<data.icon className="text-theme" />
				</div>
			</div>
		</div>
	);
};

interface BusinessProps {
	id: string;
	ownerName: string;
	businessName: string;
	joinedDaysAgo: number;
	status: "Active" | "Pending";
	plan: string;
	price: string;
	avatar: string;
}

function BusinessCard({ business }: { business: BusinessProps }) {
	return (
		<div className="bg-secondary border border-gray-200 rounded-lg p-4 flex items-start gap-4">
			<div className="w-12 h-12 flex items-center justify-center border border-theme rounded-full overflow-hidden">
				<img src={AvatarImg} alt="AvatarImg" className="max-w-full" />
			</div>

			<div className="flex-1">
				<div className="flex items-center justify-between mb-1">
					<h3 className="font-semibold text-gray-900">
						Owner: {business.ownerName}
					</h3>
					<Badge
						variant={
							business.status === "Active"
								? "success"
								: "secondary"
						}
					>
						{business.status}
					</Badge>
				</div>

				<div className="flex items-center justify-between">
					<div className="">
						<p className="text-sm text-neutral-500 mb-2">
							Joined {business.joinedDaysAgo} days ago
						</p>
						<p className="text-primary font-medium mb-2">
							{business.businessName}
						</p>
					</div>
					<div className="flex flex-col gap-3 items-end">
						<span className="text-sm text-neutral-600">
							{business.plan}
						</span>
						<span className="text-sm font-semibold text-warning">
							{business.price}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
