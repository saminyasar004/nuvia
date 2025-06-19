import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Star } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Process() {
	const [activeStep, setActiveStep] = useState(0);
	const sectionRef = useRef<HTMLElement>(null);

	const steps = [
		{
			title: "Sign Up and Connect",
			description:
				"Create your account and connect your WhatsApp Business account to get started.",
			position: "left",
		},
		{
			title: "Choose Your Subscription Plan",
			description:
				"Add your business details, services, pricing, and availability to train your chatbot.",
			position: "right",
		},
		{
			title: "Configure Your Business Profile",
			description:
				"Add your business details, services, pricing, and availability to train your chatbot.",
			position: "left",
		},
		{
			title: "Customize Your Chatbot",
			description:
				"Personalize your chatbot's personality, responses, and conversation flow.",
			position: "right",
		},
		{
			title: "Launch and Monitor",
			description:
				"Activate your chatbot and track its performance through our comprehensive dashboard.",
			position: "left",
		},
	];

	useEffect(() => {
		const handleScroll = () => {
			if (!sectionRef.current) return;

			const section = sectionRef.current;
			const sectionTop = section.offsetTop;
			const sectionHeight = section.offsetHeight;
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;

			// Calculate how much of the section is visible
			const sectionStart = sectionTop - windowHeight * 0.8;
			const sectionEnd = sectionTop + sectionHeight - windowHeight * 0.2;

			if (scrollY >= sectionStart && scrollY <= sectionEnd) {
				// Calculate progress through the section (0 to 1)
				const progress =
					(scrollY - sectionStart) / (sectionEnd - sectionStart);
				const stepProgress = Math.min(Math.max(progress, 0), 1);

				// Calculate which step should be active based on scroll progress
				const currentStep = Math.floor(stepProgress * steps.length);
				setActiveStep(Math.min(currentStep, steps.length - 1));
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll(); // Check initial position

		return () => window.removeEventListener("scroll", handleScroll);
	}, [steps.length]);

	return (
		<section
			ref={sectionRef}
			className="relative mb-32 py-32 px-4 overflow-hidden"
		>
			{/* Background decorative elements */}
			<div className="absolute top-8 right-16 text-purple-400 animate-pulse">
				<Star className="w-6 h-6 fill-current" />
			</div>
			<div className="absolute top-20 right-32 text-purple-400 animate-bounce">
				<Sparkles className="w-4 h-4 fill-current" />
			</div>
			<div className="absolute bottom-16 left-20 text-purple-400 animate-pulse">
				<Star className="w-5 h-5 fill-current" />
			</div>
			<div className="absolute bottom-32 right-24 text-purple-400 animate-bounce">
				<Sparkles className="w-3 h-3 fill-current" />
			</div>

			<div className="max-w-4xl mx-auto relative">
				{/* Connecting line with animated progress */}
				<div className="absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-px hidden md:block">
					{/* Background line */}
					<div className="absolute inset-0 bg-purple-200" />

					{/* Animated progress line */}
					<div
						className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-400 to-purple-600 transition-all duration-500 ease-out"
						style={{
							height: `${
								((activeStep + 1) / steps.length) * 100
							}%`,
						}}
					/>

					{/* Connection dots */}
					{steps.map((_, index) => (
						<div
							key={index}
							className={`absolute w-4 h-4 rounded-full transform -translate-x-1/2 transition-all duration-500 ease-out ${
								index <= activeStep
									? "bg-purple-500 scale-110 shadow-lg shadow-purple-300"
									: "bg-purple-200 scale-100"
							}`}
							style={{
								top: `${(index * 100) / (steps.length - 1)}%`,
								transitionDelay: `${index * 100}ms`,
							}}
						>
							{/* Pulsing ring for active dot */}
							{index === activeStep && (
								<div className="absolute inset-0 rounded-full bg-purple-400 animate-ping opacity-75" />
							)}
						</div>
					))}
				</div>

				<div className="space-y-12 md:space-y-16">
					{steps.map((step, index) => (
						<div
							key={index}
							className={`flex items-center transition-all duration-700 ease-out ${
								step.position === "right"
									? "md:flex-row-reverse"
									: ""
							} ${
								index <= activeStep
									? "opacity-100 translate-y-0"
									: "opacity-50 translate-y-8"
							}`}
							style={{ transitionDelay: `${index * 150}ms` }}
						>
							<div
								className={`w-full md:w-1/2 ${
									step.position === "right"
										? "md:pl-12"
										: "md:pr-12"
								}`}
							>
								<Card
									className={`bg-white/80 backdrop-blur-sm border-2 shadow-lg hover:shadow-xl transition-all duration-500 ${
										index <= activeStep
											? "border-purple-300 shadow-purple-100"
											: "border-purple-100"
									}`}
								>
									<CardContent className="p-6">
										<h3
											className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
												index <= activeStep
													? "text-purple-600"
													: "text-purple-400"
											}`}
										>
											{step.title}
										</h3>
										<p
											className={`leading-relaxed transition-colors duration-500 ${
												index <= activeStep
													? "text-gray-700"
													: "text-gray-500"
											}`}
										>
											{step.description}
										</p>
									</CardContent>
								</Card>
							</div>

							{/* Spacer for the other half */}
							<div className="hidden md:block w-1/2" />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
