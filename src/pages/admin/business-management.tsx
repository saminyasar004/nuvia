import AvatarImg from "@/assets/images/avatar.png";
import {
	Search,
	Users,
	MessageCircle,
	DollarSign,
	MoreHorizontal,
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

interface StatusBadgeProps {
	status: Business["status"];
}

function StatusBadge({ status }: StatusBadgeProps) {
	const statusVariants = {
		Active: "bg-green-100 text-green-700 hover:bg-green-100",
		Confirm: "bg-green-100 text-green-700 hover:bg-green-100",
		Pending: "bg-orange-100 text-orange-700 hover:bg-orange-100",
		Suspended: "bg-red-100 text-red-700 hover:bg-red-100",
	};

	return (
		<Badge variant="secondary" className={statusVariants[status]}>
			{status}
		</Badge>
	);
}

interface PlanBadgeProps {
	plan: Business["plan"];
}

function PlanBadge({ plan }: PlanBadgeProps) {
	const planVariants = {
		Professional: "bg-purple-100 text-purple-700 hover:bg-purple-100",
		Basic: "bg-gray-100 text-gray-700 hover:bg-gray-100",
	};

	return (
		<Badge variant="secondary" className={planVariants[plan]}>
			{plan}
		</Badge>
	);
}

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
