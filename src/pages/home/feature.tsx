import R247Img from "@/assets/images/24-7.svg";
import AIResponseImg from "@/assets/images/ai-response.svg";
import CalendarImg from "@/assets/images/calendar.svg";
import LoyalCustomersImg from "@/assets/images/loyal-customers.svg";
import MultiPlatformImg from "@/assets/images/multi-platform.svg";
import StatisticsImg from "@/assets/images/statistics.svg";
import LeafRightImg from "@/assets/images/leaf-right.svg";
import HeadingUnderline from "@/assets/images/heading-underline.svg";
import SectionHeading from "@/components/common/section-heading";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export default function Feature() {
	const features = [
		{
			img: MultiPlatformImg,
			title: "One inbox. No more platform-hopping.",
			description:
				"Connect WhatsApp, Instagram, and Messenger into a single calm, focused workspace",
		},
		{
			img: CalendarImg,
			title: "Smart Booking with Auto-Fill & Reschedulin",
			description:
				"Never leave time slots empty again. NuVía automates scheduling, reminders, cancellations — and fills in your calendar gaps with intelligent suggestions",
		},
		{
			img: AIResponseImg,
			title: "AI That Speaks Your Language",
			description:
				"Your assistant mirrors your tone and services. Every client message sounds like you — not a bot. NuVía learns your offerings and adapts naturally.",
		},
		{
			img: LoyalCustomersImg,
			title: "Client Profiles with Preferences & Visit History",
			description:
				"Personalize every session with ease. Track each client's habits, past bookings, and special notes — so they feel remembered and valued.",
		},
		{
			img: StatisticsImg,
			title: "Clear Analytics for Smarter Growth",
			description:
				"Spot what's working. Fix what's not. Get simple, visual insights into booking trends, campaign performance, and client behavior",
		},
		{
			img: R247Img,
			title: "24/7 Smart Assistant On-Duty",
			description:
				"Let it work — even when you're offline. NuVía handles chats and bookings while you rest, teach, or take time off",
		},
	];

	return (
		<section className="py-24 relative" id="feature">
			<div className="container">
				<SectionHeading
					title={
						<div className="leading-snug mb-4">
							<h2>Everything You Need to Automate</h2>
							<h2 className="relative text-theme">
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

				<div className="py-8">
					<img
						src={LeafRightImg}
						alt="leaf-right"
						className="absolute top-50 right-0 max-w-full z-10"
					/>

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
								className="absolute inset-0 h-full w-full bg-theme block -z-10 rounded-md"
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
					<div className="h-full flex flex-col items-center justify-center gap-4 drop-shadow-sm p-4 rounded-md text-center hover:cursor-pointer bg-white">
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
