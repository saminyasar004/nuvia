import AvatarImg from "@/assets/images/avatar.png";
import DashboardHeader from "@/components/common/DashboardHeader";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Calendar,
	CalendarDays,
	Clock3,
	DollarSign,
	Phone,
	Search,
} from "lucide-react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { CalendarDay } from "react-day-picker";
import { useState } from "react";

interface AppointmentProps {
	name: string;
	status: "Confirm" | "Pending" | "Canceled" | "Completed";
	date: string;
	time: string;
	duration: string;
	cost: string;
	phone: string;
	service: string;
}

const appointments: AppointmentProps[] = [
	{
		name: "James Lim",
		status: "Confirm",
		date: "2025-01-15",
		time: "2:00 PM",
		duration: "60 min",
		cost: "180",
		phone: "+60 12-345 6789",
		service: "Hydrating Facial",
	},
	{
		name: "James Lim",
		status: "Pending",
		date: "2025-01-15",
		time: "2:00 PM",
		duration: "60 min",
		cost: "180",
		phone: "+60 12-345 6789",
		service: "Hydrating Facial",
	},
	{
		name: "James Lim",
		status: "Confirm",
		date: "2025-01-15",
		time: "2:00 PM",
		duration: "60 min",
		cost: "180",
		phone: "+60 12-345 6789",
		service: "Hydrating Facial",
	},
	{
		name: "James Lim",
		status: "Canceled",
		date: "2025-01-15",
		time: "2:00 PM",
		duration: "60 min",
		cost: "0",
		phone: "+60 12-345 6789",
		service: "Hydrating Facial",
	},
	{
		name: "James Lim",
		status: "Completed",
		date: "2025-01-15",
		time: "2:00 PM",
		duration: "60 min",
		cost: "180",
		phone: "+60 12-345 6789",
		service: "Hydrating Facial",
	},
];

export default function Appointments() {
	const [filteredByTime, setFilteredByTime] = useState<
		"today" | "this-week" | "this-month"
	>("today");
	const [filteredByStatus, setFilteredByStatus] = useState<
		"all" | "confirmed" | "pending" | "canceled" | "completed"
	>("all");

	return (
		<section className="w-full">
			{/* dashboard header */}
			<DashboardHeader
				title="Appointments"
				description="Manage your bookings and schedule"
			/>

			<div className="py-10 flex flex-col gap-6 w-full px-8 border rounded-lg">
				<div className="flex gap-4 items-center justify-between">
					<h3 className="text-primary font-semibold text-2xl">
						Appointment Schedule
					</h3>

					<div className="flex gap-4 items-center">
						<div className="relative">
							<Search
								size={14}
								className="absolute top-1/2 -translate-y-1/2 left-4"
							/>
							<Input
								placeholder="Search appointments..."
								className="pl-10 w-full"
							/>
						</div>

						<Select
							value={filteredByTime}
							onValueChange={(e) =>
								setFilteredByTime((e as any).target.value)
							}
						>
							<SelectTrigger className="w-[150px]">
								<SelectValue placeholder="" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="today">Today</SelectItem>
									<SelectItem value="this-week">
										This Week
									</SelectItem>
									<SelectItem value="this-month">
										This Month
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>

						<Select
							value={filteredByStatus}
							onValueChange={(e) =>
								setFilteredByStatus((e as any).target.value)
							}
						>
							<SelectTrigger className="w-[150px]">
								<SelectValue placeholder="" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="all">All</SelectItem>
									<SelectItem value="confirmed">
										Confirmed
									</SelectItem>
									<SelectItem value="pending">
										Pending
									</SelectItem>
									<SelectItem value="canceled">
										Canceled
									</SelectItem>
									<SelectItem value="completed">
										Completed
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>

				{appointments.map((appointment, index) => (
					<AppointmentCard key={index} appointment={appointment} />
				))}
			</div>
		</section>
	);
}

const AppointmentCard = ({
	appointment,
}: {
	appointment: AppointmentProps;
}) => {
	return (
		<div className="bg-accent border rounded-lg p-4 flex gap-3">
			<div className="w-16 h-16 flex items-center justify-center rounded-full overflow-hidden border border-primary">
				<img src={AvatarImg} alt="avatar" className="max-w-full" />
			</div>

			<div className="flex-1 flex flex-col gap-4">
				<div className="flex gap-3">
					<h4>{appointment.name}</h4>
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
					>
						{appointment.status}
					</Badge>
				</div>

				<div className="flex gap-4">
					<div className="flex gap-1 items-center">
						<CalendarDays size={14} />
						<span>{appointment.date}</span>
					</div>

					<div className="flex gap-1 items-center">
						<Clock3 size={14} />
						<span>
							{appointment.time} ({appointment.duration})
						</span>
					</div>

					<div className="flex gap-1 items-center text-success">
						<DollarSign size={14} />
						<span>{appointment.cost}</span>
					</div>

					<div className="flex gap-1 items-center">
						<Phone size={14} />
						<span>{appointment.phone}</span>
					</div>
				</div>

				<h4 className="font-semibold text-primary text-lg">
					{appointment.service}
				</h4>
			</div>

			<div className="flex flex-col gap-2 items-center justify-center *:w-full">
				{appointment.status === "Completed" && (
					<Button variant="warning">Follow Up</Button>
				)}
				{appointment.status === "Canceled" && (
					<Button>Reschedule</Button>
				)}
				<Button variant="secondary">View Conversations</Button>
			</div>
		</div>
	);
};
