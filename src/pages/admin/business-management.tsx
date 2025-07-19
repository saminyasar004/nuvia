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
	teamMembers: number;
	totalCustomers: number;
	customerRating: number;
	totalBookings: number;
	monthlyRevenue: number;
	botStatus: "active" | "inactive";
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
		teamMembers: 4,
		totalCustomers: 1300,
		customerRating: 4.5,
		totalBookings: 500,
		monthlyRevenue: 560,
		botStatus: "active",
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
		teamMembers: 4,
		totalCustomers: 1300,
		customerRating: 4.5,
		totalBookings: 500,
		monthlyRevenue: 560,
		botStatus: "active",
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
		teamMembers: 4,
		totalCustomers: 1300,
		customerRating: 4.5,
		totalBookings: 500,
		monthlyRevenue: 560,
		botStatus: "active",
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
		teamMembers: 4,
		totalCustomers: 1300,
		customerRating: 4.5,
		totalBookings: 500,
		monthlyRevenue: 560,
		botStatus: "active",
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
		teamMembers: 4,
		totalCustomers: 1300,
		customerRating: 4.5,
		totalBookings: 500,
		monthlyRevenue: 560,
		botStatus: "active",
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
		teamMembers: 4,
		totalCustomers: 1300,
		customerRating: 4.5,
		totalBookings: 500,
		monthlyRevenue: 560,
		botStatus: "active",
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
		teamMembers: 4,
		totalCustomers: 1300,
		customerRating: 4.5,
		totalBookings: 500,
		monthlyRevenue: 560,
		botStatus: "active",
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
		teamMembers: 4,
		totalCustomers: 1300,
		customerRating: 4.5,
		totalBookings: 500,
		monthlyRevenue: 560,
		botStatus: "active",
	},
];

export default function BusinessManagement() {
	const [openBusinessModalId, setOpenBusinessModalId] = useState<
		string | null
	>(null);

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
														{business.name.charAt(
															0
														)}
													</AvatarFallback>
												</Avatar>
												<div>
													<div className="font-medium text-gray-900">
														{business.name}
													</div>
													<div className="text-sm text-muted-foreground">
														Joined{" "}
														{business.joinDate}
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
											<Badge variant="secondary">
												{business.plan}
											</Badge>
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
												<DollarSign className="h-4 w-4 text-warning" />
												<span className="text-sm font-medium text-warning">
													{business.revenue}
												</span>
											</div>
										</TableCell>

										{/* Actions Column */}
										<TableCell className="flex items-end justify-end">
											<DropdownMenu>
												<DropdownMenuTrigger asChild>
													<Button
														variant="ghost"
														className="h-8 w-8 p-0"
													>
														<span className="sr-only">
															Open menu
														</span>
														<MoreHorizontal className="h-4 w-4" />
													</Button>
												</DropdownMenuTrigger>
												<DropdownMenuContent align="end">
													<DropdownMenuItem
														onClick={() =>
															setOpenBusinessModalId(
																business.id
															)
														}
													>
														View details
													</DropdownMenuItem>
													<DropdownMenuItem className="text-rose-500">
														Suspend account
													</DropdownMenuItem>
												</DropdownMenuContent>
											</DropdownMenu>
										</TableCell>

										<BusinessDetailsModal
											isOpen={
												openBusinessModalId ===
												business.id
											}
											onClose={() =>
												setOpenBusinessModalId(null)
											}
											business={business}
										/>
									</TableRow>
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
	business: Business;
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
			<DialogContent className="max-w-4xl p-1 bg-background">
				<div className="rounded-lg p-6">
					<DialogHeader className="mb-6">
						<DialogTitle className="text-2xl font-bold text-foreground">
							Bella's Hair Salon - Business Details
						</DialogTitle>
						<p className="text-gray-600 text-sm">
							Complete business profile
						</p>
					</DialogHeader>

					{/* Metrics Cards */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
						<Card className="bg-secondary border border-primary/10">
							<CardContent className="p-4">
								<h3 className="text-sm font-medium text-foreground mb-2">
									Total Bookings
								</h3>
								<p className="text-2xl font-bold text-theme">
									{business.totalBookings}
								</p>
							</CardContent>
						</Card>

						<Card className="bg-secondary border border-primary/10">
							<CardContent className="p-4">
								<h3 className="text-sm font-medium text-foreground mb-2">
									Monthly Revenue
								</h3>
								<p className="text-2xl font-bold text-theme">
									${business.revenue}
								</p>
							</CardContent>
						</Card>

						<Card className="bg-secondary border border-primary/10">
							<CardContent className="p-4">
								<h3 className="text-sm font-medium text-foreground mb-2">
									Customer Rating
								</h3>
								<div className="flex items-center gap-2">
									<Star className="h-5 w-5 text-warning fill-current" />
									<p className="text-2xl font-bold text-theme">
										{business.customerRating}
									</p>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Main Content */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{/* Business Information */}
						<Card className="bg-secondary border border-primary/10">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold text-foreground mb-4">
									Business Information
								</h3>

								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<span className="text-foreground">
											Owner:
										</span>
										<span className="font-medium text-theme">
											{business.ownerName}
										</span>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-foreground">
											Business name:
										</span>
										<span className="font-medium text-theme">
											Hair Salon
										</span>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-foreground">
											Plan:
										</span>
										<Badge>{business.plan}</Badge>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-foreground">
											Join Date:
										</span>
										<span className="font-medium text-theme">
											{business.joinDate}
										</span>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Integrations & Status */}
						<Card className="bg-secondary border border-primary/10">
							<CardContent className="p-6">
								<h3 className="text-lg font-semibold text-foreground mb-4">
									Integrations & Status
								</h3>

								<div className="space-y-4">
									<div className="flex justify-between items-center">
										<span className="text-foreground">
											Bot Status:
										</span>
										<Badge variant="success">
											{business.botStatus}
										</Badge>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-foreground">
											Active Integrations:
										</span>
										<div className="flex items-center justify-center gap-1">
											<div className="w-6 h-6 flex items-center justify-center overflow-hidden">
												<img
													src={FacebookImg}
													alt="Facebook"
													className="max-w-full"
												/>
											</div>
											<div className="w-6 h-6 flex items-center justify-center overflow-hidden">
												<img
													src={WhatsappImg}
													alt="Whatsapp"
													className="max-w-full"
												/>
											</div>

											<div className="w-6 h-6 flex items-center justify-center overflow-hidden">
												<img
													src={InstagramImg}
													alt="Instagram"
													className="max-w-full"
												/>
											</div>
										</div>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-foreground">
											Total Customers:
										</span>
										<span className="font-medium text-theme">
											{business.totalCustomers}
										</span>
									</div>

									<div className="flex justify-between items-center">
										<span className="text-foreground">
											Team member:
										</span>
										<span className="font-medium text-theme">
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
