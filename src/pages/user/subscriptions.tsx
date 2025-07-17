import DashboardHeader from "@/components/common/dashboard-header";
import { Button } from "@/components/ui/button";

export default function Subscriptions() {
	return (
		<section className="w-full">
			{/* dashboard header */}
			<DashboardHeader
				title="Subscription management"
				description="View and manage customer profiles and interaction history"
			/>

			<div className="w-full p-5 flex items-center">
				<div className="py-6 flex justify-between gap-6 w-full px-6 border-2 border-secondary rounded-lg">
					<div className="flex flex-col gap-2">
						<h4 className="text-foreground font-medium">
							Current Plan
						</h4>

						<h3 className="text-primary font-semibold text-xl">
							Professional Plan
						</h3>
						<span className="text-sm">
							Perfect for growing businesses
						</span>

						<Button size="sm">Upgrade Plan</Button>
					</div>
					<div className="flex flex-col gap-2 items-end">
						<h4 className="text-2xl font-semibold text-primary">
							$299
						</h4>

						<span className="text-sm">per month</span>
					</div>
				</div>
			</div>
		</section>
	);
}
