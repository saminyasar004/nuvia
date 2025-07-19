import AvatarImg from "@/assets/images/avatar.png";
import { Search, MoreHorizontal, BadgeCheck } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DashboardHeader from "@/components/common/dashboard-header";
import { pricingPlans } from "../home/pricing";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface Subscription {
	id: string;
	businessName: string;
	joinDate: string;
	ownerName: string;
	ownerEmail: string;
	plan: "Professional" | "Basic";
	status: "Active" | "Confirm" | "Past Due" | "Canceled";
	amount: number;
	nextBilling: string;
	avatar: string;
}

interface StatusBadgeProps {
	status: Subscription["status"];
}

function StatusBadge({ status }: StatusBadgeProps) {
	const statusVariants = {
		Active: "bg-green-100 text-green-700 hover:bg-green-100",
		Confirm: "bg-green-100 text-green-700 hover:bg-green-100",
		"Past Due": "bg-red-100 text-red-700 hover:bg-red-100",
		Canceled: "bg-gray-100 text-gray-700 hover:bg-gray-100",
	};

	return (
		<Badge variant="secondary" className={statusVariants[status]}>
			{status}
		</Badge>
	);
}

interface SubscriptionRowProps {
	subscription: Subscription;
}

function SubscriptionRow({ subscription }: SubscriptionRowProps) {
	return (
		<TableRow className="hover:bg-secondary">
			{/* Business Column */}
			<TableCell>
				<div className="flex items-center gap-3">
					<Avatar className="h-10 w-10">
						<AvatarImage
							src={AvatarImg}
							alt={"AvatarImg"}
							className="object-cover object-center border border-theme rounded-full"
						/>
						<AvatarFallback>
							{subscription.businessName.charAt(0)}
						</AvatarFallback>
					</Avatar>
					<div className="space-y-1">
						<div className="font-medium text-foreground">
							{subscription.businessName}
						</div>
						<div className="text-xs text-neutral-500">
							Joined {subscription.joinDate}
						</div>
					</div>
				</div>
			</TableCell>

			{/* Owner Column */}
			<TableCell>
				<div className="space-y-1">
					<div className="font-medium text-foreground">
						{subscription.ownerName}
					</div>
					<div className="text-xs text-neutral-500">
						{subscription.ownerEmail}
					</div>
				</div>
			</TableCell>

			{/* Plan Column */}
			<TableCell>
				<Badge
					variant={
						subscription.plan === "Professional"
							? "theme"
							: "default"
					}
				>
					{subscription.plan}
				</Badge>
			</TableCell>

			{/* Status Column */}
			<TableCell>
				<Badge
					variant={
						subscription.status === "Active" ||
						subscription.status === "Confirm"
							? "success"
							: subscription.status === "Past Due"
							? "warning"
							: subscription.status === "Canceled"
							? "destructive"
							: "secondary"
					}
				>
					{subscription.status}
				</Badge>
			</TableCell>

			{/* Amount Column */}
			<TableCell>
				<span className="font-medium text-warning">
					${subscription.amount}
				</span>
			</TableCell>

			{/* Next Billing Column */}
			<TableCell>
				<span className="text-sm text-foreground">
					{subscription.nextBilling}
				</span>
			</TableCell>

			{/* Actions Column */}
			<TableCell className="text-right">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>View details</DropdownMenuItem>
						<DropdownMenuItem>Edit subscription</DropdownMenuItem>
						<DropdownMenuItem>Pause subscription</DropdownMenuItem>
						<DropdownMenuItem className="text-rose-500">
							Cancel subscription
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</TableCell>
		</TableRow>
	);
}

export default function AdminSubscriptions() {
	const subscriptions: Subscription[] = [
		{
			id: "1",
			businessName: "Glow Beauty Spa",
			joinDate: "2024-01-15",
			ownerName: "Sarah Chen",
			ownerEmail: "sarah@glowspa.com",
			plan: "Professional",
			status: "Active",
			amount: 299,
			nextBilling: "2024-02-15",
			avatar: "/placeholder.svg?height=40&width=40",
		},
		{
			id: "2",
			businessName: "Glow Beauty Spa",
			joinDate: "2024-01-15",
			ownerName: "Sarah Chen",
			ownerEmail: "sarah@glowspa.com",
			plan: "Basic",
			status: "Confirm",
			amount: 399,
			nextBilling: "2024-02-15",
			avatar: "/placeholder.svg?height=40&width=40",
		},
		{
			id: "3",
			businessName: "Glow Beauty Spa",
			joinDate: "2024-01-15",
			ownerName: "Sarah Chen",
			ownerEmail: "sarah@glowspa.com",
			plan: "Professional",
			status: "Past Due",
			amount: 299,
			nextBilling: "2024-02-15",
			avatar: "/placeholder.svg?height=40&width=40",
		},
		{
			id: "4",
			businessName: "Glow Beauty Spa",
			joinDate: "2024-01-15",
			ownerName: "Sarah Chen",
			ownerEmail: "sarah@glowspa.com",
			plan: "Professional",
			status: "Canceled",
			amount: 299,
			nextBilling: "2024-02-15",
			avatar: "/placeholder.svg?height=40&width=40",
		},
		{
			id: "5",
			businessName: "Glow Beauty Spa",
			joinDate: "2024-01-15",
			ownerName: "Sarah Chen",
			ownerEmail: "sarah@glowspa.com",
			plan: "Basic",
			status: "Confirm",
			amount: 399,
			nextBilling: "2024-02-15",
			avatar: "/placeholder.svg?height=40&width=40",
		},
		{
			id: "6",
			businessName: "Glow Beauty Spa",
			joinDate: "2024-01-15",
			ownerName: "Sarah Chen",
			ownerEmail: "sarah@glowspa.com",
			plan: "Professional",
			status: "Past Due",
			amount: 299,
			nextBilling: "2024-02-15",
			avatar: "/placeholder.svg?height=40&width=40",
		},
		{
			id: "7",
			businessName: "Glow Beauty Spa",
			joinDate: "2024-01-15",
			ownerName: "Sarah Chen",
			ownerEmail: "sarah@glowspa.com",
			plan: "Professional",
			status: "Canceled",
			amount: 299,
			nextBilling: "2024-02-15",
			avatar: "/placeholder.svg?height=40&width=40",
		},
		{
			id: "8",
			businessName: "Glow Beauty Spa",
			joinDate: "2024-01-15",
			ownerName: "Sarah Chen",
			ownerEmail: "sarah@glowspa.com",
			plan: "Professional",
			status: "Canceled",
			amount: 299,
			nextBilling: "2024-02-15",
			avatar: "/placeholder.svg?height=40&width=40",
		},
	];

	return (
		<>
			<section className="w-full">
				{/* dashboard header */}
				<DashboardHeader
					title="Subscriptions & Billing"
					description="Manage subscription plans and billing information"
				/>

				<div className="py-6 px-5 w-full">
					<div className="w-full border-secondary rounded-lg p-6">
						{/* Header Section */}
						<div className="flex items-center justify-between mb-8">
							<div>
								<h1 className="text-2xl font-semibold text-primary mb-2">
									Active Subscriptions
								</h1>
								<p className="text-muted-foreground">
									Manage all active subscription accounts
								</p>
							</div>

							<div className="relative">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
								<Input
									type="text"
									placeholder="Search Subscriptions"
									className="pl-10 w-80"
								/>
							</div>
						</div>

						{/* Tabs */}
						<Tabs
							defaultValue="all-subscriptions"
							className="w-full"
						>
							<TabsList className="grid gap-3 w-fit grid-cols-2 mb-6">
								<TabsTrigger
									value="all-subscriptions"
									className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg"
								>
									All Subscriptions
								</TabsTrigger>
								<TabsTrigger
									value="subscription-plans"
									className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg"
								>
									Subscriptions Plans
								</TabsTrigger>
							</TabsList>

							<TabsContent
								value="all-subscriptions"
								className="space-y-4"
							>
								{/* Table */}
								<div className="rounded-md border">
									<Table>
										<TableHeader>
											<TableRow className="bg-primary/50 hover:bg-primary/50 *:text-foreground hover:text-foreground">
												<TableHead>Business</TableHead>
												<TableHead>Owner</TableHead>
												<TableHead>Plan</TableHead>
												<TableHead>Status</TableHead>
												<TableHead>Amount</TableHead>
												<TableHead>
													Next Billing
												</TableHead>
												<TableHead className="text-right">
													Actions
												</TableHead>
											</TableRow>
										</TableHeader>
										<TableBody>
											{subscriptions.map(
												(subscription) => (
													<SubscriptionRow
														key={subscription.id}
														subscription={
															subscription
														}
													/>
												)
											)}
										</TableBody>
									</Table>
								</div>
							</TabsContent>

							<TabsContent
								value="subscription-plans"
								className="space-y-4"
							>
								<div className="w-full px-24 grid grid-cols-1 lg:grid-cols-3 gap-40 items-start pt-12">
									{pricingPlans.map((plan, index) => (
										<Card
											key={index}
											className="bg-accent border-primary rounded-3xl p-2 h-full"
										>
											<CardHeader className="space-y-3">
												<h3 className="font-bold text-3xl lg:text-4xl text-theme">
													{plan.title}
												</h3>
												<p className="leading-normal text-sm lg:text-base">
													{plan.description}
												</p>
											</CardHeader>
											<CardContent className="relative pt-24">
												<div className="w-full absolute top-0 -left-8 lg:-left-16 before:absolute before:-bottom-5 lg:before:-bottom-14 before:left-0 before:w-0 before:h-0 before:border-l-[25px] lg:before:border-l-[55px] before:border-r-[0px] before:border-t-[20px] lg:before:border-t-[60px] before:border-l-transparent before:border-r-transparent before:border-t-primary/30 before:z-20">
													<div
														className="w-full lg:w-[100%] h-24 lg:h-32 p-3 bg-primary/80 text-white flex items-center"
														style={{
															clipPath:
																"polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
														}}
													>
														<h2 className="font-bold text-5xl lg:text-6xl flex items-end w-full text-center pl-10 lg:pl-20">
															{plan.price}
															<span className="font-normal text-base">
																/month
															</span>
														</h2>
													</div>
												</div>

												<ul className="w-full flex flex-col gap-3 py-4 my-5 lg:my-12">
													{plan.features.map(
														(feature, index) => (
															<li
																key={index}
																className="flex items-center gap-2"
															>
																<BadgeCheck className="text-white fill-theme" />
																<span className="font-medium text-sm lg:text-base">
																	{feature}
																</span>
															</li>
														)
													)}
												</ul>

												<Button
													size="lg"
													className="w-full rounded-full"
												>
													{plan.buttonText}
												</Button>
											</CardContent>
										</Card>
									))}
								</div>

								<div className="w-full px-24 grid grid-cols-1 lg:grid-cols-3 gap-40 items-start pt-12">
									<Card className="bg-accent border-primary rounded-3xl p-2 h-full">
										<CardHeader className="space-y-3">
											<h3 className="font-bold text-3xl lg:text-4xl text-foreground/20">
												Add title...
											</h3>
											<p className="leading-normal text-sm lg:text-base text-foreground/20">
												Add details...
											</p>
										</CardHeader>
										<CardContent className="relative pt-24">
											<div className="w-full absolute top-0 -left-8 lg:-left-16 before:absolute before:-bottom-5 lg:before:-bottom-14 before:left-0 before:w-0 before:h-0 before:border-l-[25px] lg:before:border-l-[55px] before:border-r-[0px] before:border-t-[20px] lg:before:border-t-[60px] before:border-l-transparent before:border-r-transparent before:border-t-primary/10 before:z-20">
												<div
													className="w-full lg:w-[100%] h-24 lg:h-32 p-3 bg-primary/40 text-foreground/20 flex items-center"
													style={{
														clipPath:
															"polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
													}}
												>
													<h2 className="font-bold text-5xl lg:text-6xl flex items-end w-full text-center pl-10 lg:pl-20">
														$
														<span className="font-normal text-base">
															/month
														</span>
													</h2>
												</div>
											</div>

											<ul className="w-full flex flex-col gap-3 py-4 my-5 lg:my-12">
												{Array.from({ length: 5 }).map(
													(_, index) => (
														<li
															key={index}
															className="flex items-center gap-2"
														>
															<BadgeCheck className="text-white fill-theme" />
															<span className="font-medium text-sm lg:text-base text-foreground/20">
																...
															</span>
														</li>
													)
												)}
											</ul>

											<Button
												size="lg"
												className="w-full rounded-full"
											>
												Add New Plan
											</Button>
										</CardContent>
									</Card>
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</div>
			</section>
		</>
	);
}
