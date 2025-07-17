import AvatarImg from "@/assets/images/avatar.png";
import FacebookIcon from "@/assets/images/facebook.svg";
import InstagramIcon from "@/assets/images/instagram.svg";
import WhatsappIcon from "@/assets/images/whatsapp.svg";
import DashboardHeader from "@/components/common/dashboard-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	CalendarDays,
	Clock3,
	MapPin,
	Phone,
	Search,
	Star,
} from "lucide-react";
import { useState } from "react";
import { AppointmentProps, appointments } from "./appointments";

interface CustomerProps {
	id: number;
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
		id: 1,
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
		id: 2,
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
		id: 3,
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
		id: 4,
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
		id: 5,
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
		id: 6,
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
							onValueChange={(e) => setFilteredBy(e)}
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
	const [openCustomerDetailsId, setOpenCustomerDetailsId] = useState<
		number | null
	>(null);

	return (
		<div className="bg-primary/10 rounded-lg border p-6 px-8 flex flex-col gap-6 relative">
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
				<Button onClick={() => setOpenCustomerDetailsId(customer.id)}>
					View Details
				</Button>

				<CustomerDetailsModal
					customer={customer}
					openCustomerDetailsId={openCustomerDetailsId}
					setOpenCustomerDetailsId={setOpenCustomerDetailsId}
				/>
			</div>
		</div>
	);
};

const CustomerDetailsModal = ({
	customer,
	openCustomerDetailsId,
	setOpenCustomerDetailsId,
}: {
	customer: CustomerProps;
	openCustomerDetailsId: number | null;
	setOpenCustomerDetailsId: React.Dispatch<
		React.SetStateAction<number | null>
	>;
}) => {
	return (
		<Dialog
			open={openCustomerDetailsId === customer.id}
			onOpenChange={(isOpen) =>
				setOpenCustomerDetailsId(isOpen ? customer.id : null)
			}
		>
			<DialogContent className="sm:max-w-4xl bg-background">
				<DialogHeader>
					<div className="w-full flex gap-3 items-center py-3">
						<div className="w-12 h-12 rounded-full flex items-center justify-center border border-theme overflow-hidden">
							<img
								src={AvatarImg}
								alt="avatar"
								className="max-w-full"
							/>
						</div>

						<div className="flex flex-col gap-1">
							<div className="flex gap-3 items-center">
								<h2 className="font-semibold text-lg">
									{customer.name}
								</h2>
								<Badge variant="success" size="sm">
									{customer.status}
								</Badge>
							</div>
							<div className="flex gap-2 items-center">
								<img
									src={WhatsappIcon}
									alt="whatsapp"
									className="w-4 h-4"
								/>

								<h6 className="text-xs text-gray-500">
									Whatsapp
								</h6>

								<div className="w-2 h-2 bg-gray-500 rounded-full"></div>
								<h6 className="text-gray-500 text-xs">
									Customer since 2023-06-15
								</h6>
							</div>
						</div>
					</div>
				</DialogHeader>

				<div className="w-full grid grid-cols-5 gap-5">
					<div className="col-span-2 flex flex-col gap-5">
						<div className="border border-theme/10 rounded-lg p-4">
							<h4 className="text-lg font-medium">
								Contact Information
							</h4>

							<div className="flex flex-col gap-2 py-3">
								<div className="flex items-center gap-2">
									<Phone size={16} className="text-primary" />
									<span className="text-sm">
										{customer.phone}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<MapPin
										size={16}
										className="text-primary"
									/>
									<span className="text-sm">
										123 Main St, New York, NY 10001
									</span>
								</div>
							</div>
						</div>

						<div className="border border-theme/10 rounded-lg p-4">
							<h4 className="text-lg font-medium">
								Customer Stats
							</h4>

							<div className="grid grid-cols-2 gap-4 py-3">
								<div className="bg-accent/80 border border-theme/10 flex flex-col gap-2 p-3 rounded-lg items-center justify-center">
									<h5 className="font-semibold text-xl">
										{customer.totalVisits}
									</h5>
									<span>Total Visits</span>
								</div>

								<div className="bg-accent/80 border border-theme/10 flex flex-col gap-2 p-3 rounded-lg items-center justify-center">
									<h5 className="font-semibold text-lg flex items-center gap-1">
										<Star
											size={14}
											className="fill-warning text-warning"
										/>
										{customer.rating}
									</h5>
									<span>Avg Rating</span>
								</div>

								<div className="col-span-2 bg-accent/80 border border-theme/10 flex flex-col gap-2 p-3 rounded-lg items-center justify-center">
									<span>Total Spent</span>
									<h5 className="font-semibold text-lg text-warning">
										${customer.totalSpent}
									</h5>
								</div>
							</div>
						</div>

						<div className="w-full flex items-center">
							<Button variant="warning" className="w-full">
								Follow Up
							</Button>
						</div>
					</div>
					<div className="col-span-3 border border-theme/10 rounded-lg p-4">
						<h3 className="font-medium text-lg">
							Appointment History
						</h3>

						<ScrollArea className="flex-1 p-4 space-y-4 h-96">
							<div className="w-full flex flex-col gap-3 pb-5">
								<h4 className="text-primary">
									Upcoming Appointments (1)
								</h4>

								{appointments.map((appointment, index) => (
									<UpcommingAppointmentCard
										key={index}
										appointment={appointment}
									/>
								))}
							</div>

							<div className="w-full flex flex-col gap-3 pb-5">
								<h4 className="text-theme">
									Completed Appointments (1)
								</h4>

								{appointments.map((appointment, index) => (
									<CompletedAppointmentCard
										key={index}
										appointment={appointment}
									/>
								))}
							</div>
						</ScrollArea>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

const UpcommingAppointmentCard = ({
	appointment,
}: {
	appointment: AppointmentProps;
}) => {
	return (
		<div className="border border-primary/10 bg-primary/10 rounded-lg flex flex-col gap-3 p-4">
			<div className="flex items-center justify-between">
				<div className="flex gap-3 items-center">
					<h4 className="font-medium">{appointment.name}</h4>
					<Badge
						variant={
							appointment.status === "Confirm"
								? "success"
								: appointment.status === "Canceled"
								? "destructive"
								: appointment.status === "Completed"
								? "warning"
								: appointment.status === "Pending"
								? "warning"
								: "default"
						}
						size="sm"
					>
						{appointment.status}
					</Badge>
				</div>

				<h5 className="text-primary text-xl font-semibold">
					${appointment.cost}
				</h5>
			</div>

			<div className="flex items-end justify-between gap-3 py-3">
				<div className="flex flex-col gap-3">
					<div className="flex gap-2 items-center">
						<CalendarDays size={16} className="text-primary" />

						<span className="text-sm">{appointment.date}</span>
					</div>

					<div className="flex gap-2 items-center">
						<Clock3 size={16} className="text-primary" />

						<span className="text-sm">
							{appointment.time} ({appointment.duration})
						</span>
					</div>
				</div>

				<div className="flex items-center">
					<Button variant="default" size="sm">
						View Conversations
					</Button>
				</div>
			</div>
		</div>
	);
};

const CompletedAppointmentCard = ({
	appointment,
}: {
	appointment: AppointmentProps;
}) => {
	return (
		<div className="border border-theme/10 bg-theme/10 rounded-lg flex flex-col gap-3 p-4">
			<div className="flex items-center justify-between">
				<div className="flex gap-3 items-center">
					<h4 className="font-medium">{appointment.name}</h4>
					<Badge
						variant={
							appointment.status === "Confirm"
								? "success"
								: appointment.status === "Canceled"
								? "destructive"
								: appointment.status === "Completed"
								? "warning"
								: appointment.status === "Pending"
								? "warning"
								: "default"
						}
						size="sm"
					>
						{appointment.status}
					</Badge>
				</div>

				<h5 className="text-theme text-xl font-semibold">
					${appointment.cost}
				</h5>
			</div>

			<div className="flex items-end justify-between gap-3 py-3">
				<div className="flex flex-col gap-3">
					<div className="flex gap-2 items-center">
						<CalendarDays size={16} className="text-theme" />

						<span className="text-sm">{appointment.date}</span>
					</div>

					<div className="flex gap-2 items-center">
						<Clock3 size={16} className="text-theme" />

						<span className="text-sm">
							{appointment.time} ({appointment.duration})
						</span>
					</div>
				</div>

				<div className="flex items-center">
					<Button variant="outline" size="sm">
						View Conversations
					</Button>
				</div>
			</div>
		</div>
	);
};
