import R247Img from "@/assets/images/24-7.svg";
import AIResponseImg from "@/assets/images/ai-response.svg";
import CalendarImg from "@/assets/images/calendar.svg";
import LoyalCustomersImg from "@/assets/images/loyal-customers.svg";
import MultiPlatformImg from "@/assets/images/multi-platform.svg";
import StatisticsImg from "@/assets/images/statistics.svg";
import HeadingUnderline from "@/assets/images/heading-underline.svg";
import SectionHeading from "@/components/common/SectionHeading";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Feature() {
	const features = [
		{
			img: MultiPlatformImg,
			title: "Multi-Platform Integration",
			description:
				"Connect WhatsApp, Facebook Messenger, and Instagram from one dashboard.",
		},
		{
			img: CalendarImg,
			title: "Smart Appointment Booking",
			description:
				"AI automatically handles scheduling, cancellations, and reminders.",
		},
		{
			img: AIResponseImg,
			title: "AI-Powered Responses",
			description:
				"Intelligent responses based on your business information and services.",
		},
		{
			img: LoyalCustomersImg,
			title: "Customer Management",
			description:
				"Track customer interactions, preferences, and booking history.",
		},
		{
			img: StatisticsImg,
			title: "Analytics & Insights",
			description:
				"Monitor performance across platforms and track booking conversions.",
		},
		{
			img: R247Img,
			title: "24/7 Availability",
			description:
				"Your AI assistant works around the clock, never missing a customer.",
		},
	];

	return (
		<section className="py-24" id="feature">
			<div className="container">
				<SectionHeading
					title={
						<div className="leading-snug mb-4">
							<h2>Everything You Need to Automate</h2>
							<h2 className="relative text-primary">
								Customer Interactions
								<img
									className="max-w-[150px] lg:max-w-[200px] absolute -bottom-4 left-1/2 -translate-x-1/2"
									src={HeadingUnderline}
									alt=""
								/>
							</h2>
						</div>
					}
					description="Our platform provides all the tools you need to create intelligent chatbots that handle appointments, answer questions, and delight your customers."
				/>

				<div className="container py-8">
					<HoverEffect features={features} />
				</div>
			</div>
		</section>
	);
}

export const HoverEffect = ({
	features,
	className,
}: {
	features: {
		img: string;
		title: string;
		description: string;
	}[];
	className?: string;
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-2",
				className
			)}
		>
			{features.map((feature, idx) => (
				<div
					className="relative group block p-2 h-full w-full"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full bg-primary block -z-10 rounded-md"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<div className="h-full flex flex-col items-center justify-center gap-4 bg-accent drop-shadow-md p-4 rounded-md text-center hover:cursor-pointer">
						<div className="flex items-center justify-center">
							<img
								src={feature.img}
								alt={feature.title}
								className="max-w-full"
							/>
						</div>
						<h3 className="font-semibold text-xl text-primary">
							{feature.title}
						</h3>
						<p className="text-sm leading-normal">
							{feature.description}
						</p>
					</div>
				</div>
			))}
		</div>
	);
};
