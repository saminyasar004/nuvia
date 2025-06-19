import SectionHeading from "@/components/common/SectionHeading";

import MultiPlatformImg from "@/assets/images/multi-platform.svg";
import CalendarImg from "@/assets/images/calendar.svg";
import AIResponseImg from "@/assets/images/ai-response.svg";
import LoyalCustomersImg from "@/assets/images/loyal-customers.svg";
import StatisticsImg from "@/assets/images/statistics.svg";
import R247Img from "@/assets/images/24-7.svg";

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
		<section className="py-24">
			<div className="container">
				<SectionHeading
					title={
						<>
							<h2>Everything You Need to Automate</h2>
							<h2 className="text-primary">
								Customer Interactions
							</h2>
						</>
					}
					description="Our platform provides all the tools you need to create intelligent chatbots that handle appointments, answer questions, and delight your customers."
				/>

				<div className="w-full grid grid-cols-3 gap-5 py-8">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center gap-4 bg-accent drop-shadow-md p-4 rounded-md text-center"
						>
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
					))}
				</div>
			</div>
		</section>
	);
}
