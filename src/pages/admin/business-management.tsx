import FacebookImg from "@/assets/images/facebook.svg";
import WhatsappImg from "@/assets/images/whatsapp.svg";
import InstagramImg from "@/assets/images/instagram.svg";
import AvatarImg from "@/assets/images/avatar.png";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import {
	Search,
	Users,
	MessageCircle,
	DollarSign,
	MoreHorizontal,
	Facebook,
	Star,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DashboardHeader from "@/components/common/dashboard-header";
import { useState } from "react";

interface Business {
	id: string;
	name: string;
	joinDate: string;
	ownerName: string;
	ownerEmail: string;
	plan: "Professional" | "Basic";
	status: "Active" | "Confirm" | "Pending" | "Suspended";
	memberCount: number;
	conversationCount: number;
	revenue: number;
	avatar: string;
}

const businesses: Business[] = [
	{
		id: "1",
		name: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		ownerName: "Sarah Chen",
		ownerEmail: "sarah@glowspa.com",
		plan: "Professional",
		status: "Active",
		memberCount: 4,
		conversationCount: 2000,
		revenue: 200,
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "2",
		name: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		ownerName: "Sarah Chen",
		ownerEmail: "sarah@glowspa.com",
		plan: "Basic",
		status: "Confirm",
		memberCount: 4,
		conversationCount: 2000,
		revenue: 200,
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "3",
		name: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		ownerName: "Sarah Chen",
		ownerEmail: "sarah@glowspa.com",
		plan: "Professional",
		status: "Pending",
		memberCount: 4,
		conversationCount: 2000,
		revenue: 200,
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "4",
		name: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		ownerName: "Sarah Chen",
		ownerEmail: "sarah@glowspa.com",
		plan: "Professional",
		status: "Suspended",
		memberCount: 4,
		conversationCount: 2000,
		revenue: 200,
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "5",
		name: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		ownerName: "Sarah Chen",
		ownerEmail: "sarah@glowspa.com",
		plan: "Professional",
		status: "Active",
		memberCount: 4,
		conversationCount: 2000,
		revenue: 200,
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "6",
		name: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		ownerName: "Sarah Chen",
		ownerEmail: "sarah@glowspa.com",
		plan: "Basic",
		status: "Active",
		memberCount: 4,
		conversationCount: 2000,
		revenue: 200,
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "7",
		name: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		ownerName: "Sarah Chen",
		ownerEmail: "sarah@glowspa.com",
		plan: "Professional",
		status: "Pending",
		memberCount: 4,
		conversationCount: 2000,
		revenue: 200,
		avatar: "/placeholder.svg?height=40&width=40",
	},
	{
		id: "8",
		name: "Glow Beauty Spa",
		joinDate: "2024-01-15",
		ownerName: "Sarah Chen",
		ownerEmail: "sarah@glowspa.com",
		plan: "Professional",
		status: "Suspended",
		memberCount: 4,
		conversationCount: 2000,
		revenue: 200,
		avatar: "/placeholder.svg?height=40&width=40",
	},
];

interface BusinessRowProps {
	business: Business;
}

function BusinessRow({ business }: BusinessRowProps) {
	return (
		<TableRow className="hover:bg-secondary">
			{/* Business Column */}
			<TableCell>
				<div className="flex items-center gap-3">
					<Avatar className="h-10 w-10">
						<AvatarImage
							src={AvatarImg}
							alt="AvatarImg"
							className="object-cover object-center border border-theme rounded-full"
						/>
						<AvatarFallback>
							{business.name.charAt(0)}
						</AvatarFallback>
					</Avatar>
					<div>
						<div className="font-medium text-gray-900">
							{business.name}
						</div>
						<div className="text-sm text-muted-foreground">
							Joined {business.joinDate}
						</div>
					</div>
				</div>
			</TableCell>

			{/* Owner Column */}
			<TableCell>
				<div>
					<div className="font-medium text-gray-900">
						{business.ownerName}
					</div>
					<div className="text-sm text-muted-foreground">
						{business.ownerEmail}
					</div>
				</div>
			</TableCell>

			{/* Plan Column */}
			<TableCell>
				<Badge>{business.plan}</Badge>
			</TableCell>

			{/* Status Column */}
			<TableCell>
				{/* <StatusBadge status={business.status} /> */}
				<Badge variant="secondary">{business.plan}</Badge>
			</TableCell>

			{/* Member Column */}
			<TableCell>
				<div className="flex items-center gap-2">
					<Users className="h-4 w-4 text-muted-foreground" />
					<span className="text-sm font-medium">
						{business.memberCount}
					</span>
				</div>
			</TableCell>

			{/* Conversation Column */}
			<TableCell>
				<div className="flex items-center gap-2">
					<MessageCircle className="h-4 w-4 text-muted-foreground" />
					<span className="text-sm font-medium">
						{business.conversationCount}
					</span>
				</div>
			</TableCell>

			{/* Revenue Column */}
			<TableCell>
				<div className="flex items-center gap-1">
					<DollarSign className="h-4 w-4 text-orange-500" />
					<span className="text-sm font-medium text-orange-500">
						{business.revenue}
					</span>
				</div>
			</TableCell>

			{/* Actions Column */}
			<TableCell className="flex items-end justify-end">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>View details</DropdownMenuItem>
						<DropdownMenuItem className="text-rose-500">
							Suspend account
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</TableCell>
		</TableRow>
	);
}

export default function BusinessManagement() {
	return (
		<section className="w-full">
			{/* dashboard header */}
			<DashboardHeader
				title="Business Management"
				description="Manage all businesses on the platform"
			/>

			<div className="w-full bg-background p-6">
				<div className="w-full border border-secondary rounded-lg p-6">
					{/* Header Section */}
					<div className="flex items-center justify-between mb-8">
						<div>
							<h1 className="text-2xl font-semibold text-primary mb-2">
								All Businesses
							</h1>
							<p className="text-muted-foreground">
								Manage and monitor business accounts
							</p>
						</div>

						<div className="relative">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
							<Input
								type="text"
								placeholder="Search businesses..."
								className="pl-10 w-80"
							/>
						</div>
					</div>

					{/* Table */}
					<div className="rounded-md border">
						<Table>
							<TableHeader>
								<TableRow className="bg-primary *:text-white hover:bg-primary hover:text-white">
									<TableHead>Business</TableHead>
									<TableHead>Owner</TableHead>
									<TableHead>Plan</TableHead>
									<TableHead>Status</TableHead>
									<TableHead>Member</TableHead>
									<TableHead>Conversation</TableHead>
									<TableHead>Revenue</TableHead>
									<TableHead className="text-right">
										Actions
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{businesses.map((business) => (
									<BusinessRow
										key={business.id}
										business={business}
									/>
								))}
							</TableBody>
						</Table>
					</div>
				</div>
			</div>
		</section>
	);
}

interface BusinessDetailsModalProps {
	isOpen: boolean;
	onClose: () => void;
	business: {
		id: string;
		name: string;
		ownerName: string;
		plan: string;
		joinDate: string;
		totalBookings: number;
		monthlyRevenue: number;
		customerRating: number;
		botStatus: "Active" | "Inactive";
		totalCustomers: number;
		teamMembers: number;
		integrations: string[];
	};
}

function BusinessDetailsModal({
	isOpen,
	onClose,
	business,
}: BusinessDetailsModalProps) {
	const integrationIcons = {
		facebook: <Facebook className="h-5 w-5 text-blue-600" />,
		whatsapp: <MessageCircle className="h-5 w-5 text-green-600" />,
		instagram: (
			<div className="h-5 w-5 rounded-sm bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
				<div className="h-3 w-3 rounded-full border-2 border-white"></div>
			</div>
		),
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="max-w-4xl bg-gradient-to-br from-purple-400 to-purple-600 p-1 border-0">
				<div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
					<DialogHeader className="mb-6">
						<DialogTitle className="text-2xl font-bold text-gray-900">
							Bella's Hair Salon - Business Details
						</DialogTitle>
						<p className="text-gray-600 text-sm">
							Complete business profil
						</p>
					</DialogHeader>

					{/* Metrics Cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
						<Card className="bg-white border border-gray-200">
							<CardContent className="p-4">
								<h3 className="text-sm font-medium text-gray-700 mb-2">
									Total Bookings
								</h3>
								<p className="text-2xl font-bold text-purple-600">
									{business.totalBookings}
								</p>
							</CardContent>
						</Card>

						<Card className="bg-white border border-gray-200">
							<CardContent className="p-4">
								<h3 className="text-sm font-medium text-gray-700 mb-2">
									Monthly Revenue
								</h3>
								<p className="text-2xl font-bold text-purple-600">
									${business.monthlyRevenue}
								</p>
							</CardContent>
						</Card>

						<Card className="bg-white border border-gray-200">
							<CardContent className="p-4">
								<h3 className="text-sm font-medium text-gray-700 mb-2">
									Customer Rating
								</h3>
								<div className="flex items-center gap-2">
									<Star className="h-5 w-5 text-orange-500 fill-current" />
									<p className="text-2xl font-bold text-orange-500">
										{business.customerRating}
									</p>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Main Content */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Business Information */}
						<Card className="bg-white border border-gray-200">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Business Information
								</h3>

								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<span className="text-gray-600">
											Owner:
										</span>
										<span className="font-medium text-purple-600">
											{business.ownerName}
										</span>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-gray-600">
											Business name:
										</span>
										<span className="font-medium text-purple-600">
											Hair Salon
										</span>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-gray-600">
											Plan:
										</span>
										<Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
											{business.plan}
										</Badge>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-gray-600">
											Join Date:
										</span>
										<span className="font-medium text-purple-600">
											{business.joinDate}
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Integrations & Status */}
						<Card className="bg-white border border-gray-200">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">
									Integrations & Status
								</h3>

								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<span className="text-gray-600">
											Bot Status:
										</span>
										<Badge className="bg-green-100 text-green-700 hover:bg-green-100">
											{business.botStatus}
										</Badge>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-gray-600">
											Active Integrations:
										</span>
										<div className="flex gap-2">
											{integrationIcons.facebook}
											{integrationIcons.whatsapp}
											{integrationIcons.instagram}
										</div>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-gray-600">
											Total Customers:
										</span>
										<span className="font-medium text-purple-600">
											{business.totalCustomers}
										</span>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-gray-600">
											Team member:
										</span>
										<span className="font-medium text-purple-600">
											{business.teamMembers}
										</span>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
