import SectionHeading from "@/components/common/SectionHeading";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { BadgeCheck, CheckCircle } from "lucide-react";

interface PricingPlan {
	title: string;
	description: string;
	price: string;
	features: string[];
	buttonText: string;
}

export default function Pricing() {
	const pricingPlans: PricingPlan[] = [
		{
			title: "Starter",
			description:
				"Perfect for small businesses just getting started with automation.",
			price: "$29",
			features: [
				"Up to 1,000 conversations/month",
				"1 WhatsApp Business account",
				"Basic appointment booking",
				"Email support",
			],
			buttonText: "Get Started",
		},
		{
			title: "Professional",
			description:
				"Ideal for growing businesses with multiple service offerings.",
			price: "$79",
			features: [
				"Up to 5,000 conversations/month",
				"WhatsApp + Facebook + Instagram",
				"Payment integration",
				"Advanced analytics",
			],
			buttonText: "Get Started",
		},
		{
			title: "Enterprise",
			description:
				"For established businesses with high volume requirements.",
			price: "$199",
			features: [
				"Unlimited Chatbots",
				"Unlimited conversations",
				"All calendar integrations",
				"Custom analytics & reporting",
				"24/7 dedicated support",
			],
			buttonText: "Get Started",
		},
	];

	return (
		<section className="py-24" id="pricing">
			<div className="container">
				<SectionHeading
					title={
						<h2>
							Simple,{" "}
							<span className="text-primary">Transparent</span>{" "}
							Pricing
						</h2>
					}
					description="Choose the plan that's right for your business"
				/>

				<div className="w-full grid grid-cols-3 gap-20 items-start pt-12">
					{pricingPlans.map((plan, index) => (
						<Card
							key={index}
							className="bg-accent border-primary rounded-3xl p-2 h-full"
						>
							<CardHeader className="space-y-3">
								<h3 className="font-bold text-4xl text-primary">
									{plan.title}
								</h3>
								<p className="leading-normal">
									{plan.description}
								</p>
							</CardHeader>
							<CardContent className="relative pt-24">
								<div className="w-full absolute top-0 -left-16 before:absolute before:-bottom-14 before:left-0 before:w-0 before:h-0 before:border-l-[55px] before:border-r-[0px] before:border-t-[60px] before:border-l-transparent before:border-r-transparent before:border-t-primary/30 before:z-20">
									<div
										className="w-[110%] h-32 p-3 bg-primary/80 text-white flex items-center"
										style={{
											clipPath:
												"polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
										}}
									>
										<h2 className="font-bold text-6xl flex items-end w-full text-center pl-20">
											{plan.price}
											<span className="font-normal text-base">
												/month
											</span>
										</h2>
									</div>
								</div>

								<ul className="w-full flex flex-col gap-3 py-4 my-12">
									{plan.features.map((feature, index) => (
										<li
											key={index}
											className="flex items-center gap-2"
										>
											<BadgeCheck
												className="text-white"
												fill="#9A70D3"
											/>
											<span className="font-medium">
												{feature}
											</span>
										</li>
									))}
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
			</div>
		</section>
	);
}
