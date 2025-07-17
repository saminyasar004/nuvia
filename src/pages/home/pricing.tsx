import LeafLeftImg from "@/assets/images/leaf-left.svg";
import LeafRightImg from "@/assets/images/leaf-right.svg";
import SectionHeading from "@/components/common/section-heading";
import { Button } from "@/components/ui/button";
import HeadingUnderline from "@/assets/images/heading-underline.svg";
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
			price: "RM 0",
			features: [
				"Up to 50 AI replies/month",
				"Appointment scheduling",
				" WhatsApp Web only",
				"Email support",
			],
			buttonText: "Start Free",
		},
		{
			title: "Growth",
			description:
				"Ideal for growing businesses with multiple service offerings.",
			price: "RM 99",
			features: [
				"Unlimited AI replies/month",
				"Auto reminders",
				"Client dashboard",
				" Priority chat suppor",
			],
			buttonText: "Get Started",
		},
		{
			title: "Pro",
			description:
				"For established businesses with high volume requirements.",
			price: "RM 299",
			features: [
				"Cross-platform (WA/IG/Messenger",
				"Voice note detection",
				"Smart suggestion",
				"Promo tools",
				"Full analytics",
			],
			buttonText: "Get Started",
		},
	];

	return (
		<section className="py-24 relative my-6" id="pricing">
			<img
				src={LeafLeftImg}
				alt="leaf-left"
				className="absolute top-50 left-0 max-w-full -z-10"
			/>

			<img
				src={LeafRightImg}
				alt="leaf-right"
				className="absolute bottom-0 right-0 max-w-full -z-10"
			/>

			<div className="container">
				<SectionHeading
					title={
						<h2 className="mb-4">
							Simple,{" "}
							<span className="text-theme relative">
								Transparent
								<img
									className="max-w-[150px] lg:max-w-[200px] absolute -bottom-4 left-1/2 -translate-x-1/2"
									src={HeadingUnderline}
									alt=""
								/>
							</span>{" "}
							Pricing
						</h2>
					}
					description="Choose the plan that's right for your business"
				/>

				<div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-20 items-start pt-12">
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
										className="w-full lg:w-[110%] h-24 lg:h-32 p-3 bg-primary/80 text-white flex items-center"
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
									{plan.features.map((feature, index) => (
										<li
											key={index}
											className="flex items-center gap-2"
										>
											<BadgeCheck className="text-white fill-theme" />
											<span className="font-medium text-sm lg:text-base">
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
