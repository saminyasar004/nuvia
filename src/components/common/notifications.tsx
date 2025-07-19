import AvatarImg from "@/assets/images/avatar.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Info, Trash } from "lucide-react";
import DashboardHeader from "./dashboard-header";
import { Button } from "../ui/button";

interface Notification {
	id: string;
	type: "password_change" | "meeting_reminder";
	title: string;
	description: string;
	timestamp: string;
	avatar: string;
	userInitials: string;
}

interface NotificationCardProps {
	notification: Notification;
}

function NotificationCard({ notification }: NotificationCardProps) {
	return (
		<div className="bg-secondary border border-theme/10 rounded-lg p-4 flex items-start gap-3 hover:bg-secondary/40 transition-colors">
			<Avatar className="h-10 w-10 flex-shrink-0">
				<AvatarImage
					src={AvatarImg}
					alt="User avatar"
					className="object-cover object-center rounded-full border border-e-theme"
				/>
				<AvatarFallback className="bg-theme/10 text-theme">
					{notification.userInitials}
				</AvatarFallback>
			</Avatar>

			<div className="flex-1 min-w-0">
				<div className="flex items-start justify-between gap-2">
					<div className="flex-1">
						<div className="flex items-center gap-2 mb-1">
							<h3 className="font-medium text-foreground text-sm">
								{notification.title}
							</h3>
							<span className="text-xs text-theme">
								{notification.timestamp}
							</span>
						</div>
						<p className="text-sm text-foreground leading-relaxed">
							{notification.description}
						</p>
					</div>
					<Button size="icon" className="bg-theme/10">
						<Trash className="h-4 w-4 text-theme flex-shrink-0" />
					</Button>
				</div>
			</div>
		</div>
	);
}

interface NotificationSectionProps {
	title: string;
	count: number;
	notifications: Notification[];
}

function NotificationSection({
	title,
	count,
	notifications,
}: NotificationSectionProps) {
	return (
		<div className="space-y-4">
			<div className="flex items-center gap-2">
				<h2 className="text-lg font-medium text-foreground">{title}</h2>
				<Badge className="w-2.5 h-2.5 flex items-center justify-center rounded-full p-2.5">
					{count}
				</Badge>
			</div>

			<div className="space-y-3">
				{notifications.map((notification) => (
					<NotificationCard
						key={notification.id}
						notification={notification}
					/>
				))}
			</div>
		</div>
	);
}

export default function Notifications() {
	const todayNotifications: Notification[] = [
		{
			id: "1",
			type: "password_change",
			title: "Password change email sent",
			description:
				"This is to inform you that your password has been successfully changed for your account.",
			timestamp: "5 min ago",
			avatar: "/placeholder.svg?height=40&width=40",
			userInitials: "SC",
		},
		{
			id: "2",
			type: "meeting_reminder",
			title: "Meeting at 07:45 PM",
			description:
				"Meeting Reminder: Just a quick heads-up about your meeting tonight at 07:45 PM. Don't forget to prep any necessary materials and jot down any questions or topics you'd like to discuss.",
			timestamp: "3 min ago",
			avatar: "/placeholder.svg?height=40&width=40",
			userInitials: "JD",
		},
	];

	const yesterdayNotifications: Notification[] = [
		{
			id: "3",
			type: "password_change",
			title: "Password change email sent",
			description:
				"This is to inform you that your password has been successfully changed for your account.",
			timestamp: "5 min ago",
			avatar: "/placeholder.svg?height=40&width=40",
			userInitials: "SC",
		},
		{
			id: "4",
			type: "meeting_reminder",
			title: "Meeting at 07:45 PM",
			description:
				"Meeting Reminder: Just a quick heads-up about your meeting tonight at 07:45 PM. Don't forget to prep any necessary materials and jot down any questions or topics you'd like to discuss.",
			timestamp: "3 min ago",
			avatar: "/placeholder.svg?height=40&width=40",
			userInitials: "JD",
		},
	];

	return (
		<>
			<section className="w-full">
				{/* dashboard header */}
				<DashboardHeader
					title="Notification"
					description="Manage all notifications on the platform"
				/>
			</section>

			<div className="py-6 px-5 w-full">
				<div className="w-full p-6 bg-background">
					<div className="space-y-8">
						<NotificationSection
							title="Today"
							count={todayNotifications.length}
							notifications={todayNotifications}
						/>

						<NotificationSection
							title="Yesterday"
							count={5} // Shows 5 as in the image, even though we only display 2
							notifications={yesterdayNotifications}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
