import AvatarImg from "@/assets/images/avatar.png";
import DashboardHeader from "@/components/common/DashboardHeader";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Phone, Search, Star } from "lucide-react";
import WhatsappIcon from "@/assets/images/whatsapp.svg";
import FacebookIcon from "@/assets/images/facebook.svg";
import InstagramIcon from "@/assets/images/instagram.svg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface CustomerProps {
	name: string;
	status: "Active" | "Inactive";
	phone: string;
	totalVisits: number;
	totalSpent: string;
	rating: number;
	lastVisit: string;
	socialPlatform: "whatsapp" | "instagram" | "facebook";
}

const customers: CustomerProps[] = [
	{
		name: "John Smith",
		status: "Active",
		phone: "+60 12-345 6789",
		totalVisits: 8,
		totalSpent: "2400",
		rating: 4.5,
		lastVisit: "2024-01-10",
		socialPlatform: "whatsapp",
	},
	{
		name: "John Smith",
		status: "Active",
		phone: "+60 12-345 6789",
		totalVisits: 8,
		totalSpent: "2400",
		rating: 4.5,
		lastVisit: "2024-01-10",
		socialPlatform: "whatsapp",
	},
	{
		name: "John Smith",
		status: "Active",
		phone: "+60 12-345 6789",
		totalVisits: 8,
		totalSpent: "2400",
		rating: 4.5,
		lastVisit: "2024-01-10",
		socialPlatform: "instagram",
	},
	{
		name: "John Smith",
		status: "Active",
		phone: "+60 12-345 6789",
		totalVisits: 8,
		totalSpent: "2400",
		rating: 4.5,
		lastVisit: "2024-01-10",
		socialPlatform: "whatsapp",
	},
	{
		name: "John Smith",
		status: "Active",
		phone: "+60 12-345 6789",
		totalVisits: 8,
		totalSpent: "2400",
		rating: 4.5,
		lastVisit: "2024-01-10",
		socialPlatform: "facebook",
	},
	{
		name: "John Smith",
		status: "Active",
		phone: "+60 12-345 6789",
		totalVisits: 8,
		totalSpent: "2400",
		rating: 4.5,
		lastVisit: "2024-01-10",
		socialPlatform: "whatsapp",
	},
];

export default function Customers() {
	const [filteredBy, setFilteredBy] = useState<
		"all" | "whatsapp" | "instagram" | "facebook"
	>("all");

	return (
		<section className="w-full">
			{/* dashboard header */}
			<DashboardHeader
				title="Manage Your Customers"
				description="View and manage customer profiles and interaction history"
			/>

			<div className="py-10 flex flex-col gap-6 w-full px-8 border rounded-lg">
				<div className="flex gap-4 items-center justify-between">
					<h3 className="text-primary font-semibold text-2xl">
						All Customers
					</h3>

					<div className="flex gap-4 items-center">
						<div className="relative">
							<Search
								size={14}
								className="absolute top-1/2 -translate-y-1/2 left-4"
							/>
							<Input
								placeholder="Search customers..."
								className="pl-10 w-full"
							/>
						</div>

						<Select
							value={filteredBy}
							onValueChange={(e) => setFilteredBy(e as any)}
						>
							<SelectTrigger className="w-[150px]">
								<SelectValue placeholder="" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="all">All</SelectItem>
									<SelectItem value="whatsapp">
										Whatsapp
									</SelectItem>
									<SelectItem value="instagram">
										Instagram
									</SelectItem>
									<SelectItem value="facebook">
										Facebook
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="w-full grid grid-cols-3 gap-6">
					{customers.map((customer, index) => (
						<CustomerCard key={index} customer={customer} />
					))}
				</div>
			</div>
		</section>
	);
}

const CustomerCard = ({ customer }: { customer: CustomerProps }) => {
	return (
		<div className="bg-accent rounded-lg border p-6 px-8 flex flex-col gap-6 relative">
			<div className="flex items-center justify-end">
				<Badge variant="success">{customer.status}</Badge>
			</div>
			<div className="flex flex-col items-center gap-1">
				<div className="relative">
					<div className="w-16 h-16 rounded-full flex items-center justify-center overflow-hidden border border-primary">
						<img
							src={AvatarImg}
							alt="avatar"
							className="max-w-full"
						/>
					</div>
					<div className="absolute bottom-0 right-0">
						<div className="flex items-center justify-center w-5 h-5">
							<img
								src={
									customer.socialPlatform === "facebook"
										? FacebookIcon
										: customer.socialPlatform ===
										  "instagram"
										? InstagramIcon
										: WhatsappIcon
								}
								alt={customer.socialPlatform}
								className="max-w-full"
							/>
						</div>
					</div>
				</div>

				<h3 className="font-semibold text-lg">{customer.name}</h3>
				<div className="flex gap-2 items-center">
					<Phone size={14} className="text-primary" />
					<span className="">+60 12-345 6789</span>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-5">
				<div className="flex flex-col gap-2">
					<h4 className="text-lg">Total Visits</h4>
					<h4 className="font-semibold text-lg">
						{customer.totalVisits}
					</h4>
				</div>

				<div className="flex flex-col gap-2">
					<h4 className="text-lg">Total Spent</h4>
					<h4 className="font-semibold text-lg text-warning">
						{customer.totalSpent}
					</h4>
				</div>

				<div className="flex flex-col gap-2">
					<h4 className="text-lg">Rating</h4>
					<div className="flex gap-1 items-center">
						<Star size={12} className="text-warning fill-warning" />
						<h4 className="font-semibold text-lg text-warning">
							{customer.rating}
						</h4>
					</div>
				</div>

				<div className="flex flex-col gap-2">
					<h4 className="text-lg">Last Visit</h4>
					<h4 className="font-semibold text-lg text-warning">
						{customer.lastVisit}
					</h4>
				</div>
			</div>
			<div className="w-full flex items-center justify-center *:w-full">
				<Button>View Details</Button>
			</div>
		</div>
	);
};
