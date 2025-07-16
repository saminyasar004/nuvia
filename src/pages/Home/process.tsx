import SectionHeading from "@/components/common/SectionHeading";
import AtomicBoomImg from "@/assets/images/atomic-boom.svg";
import VerticalPathImg from "@/assets/images/vertical-path.svg";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Star } from "lucide-react";
import HeadingUnderline from "@/assets/images/heading-underline.svg";
import { useEffect, useState, useRef } from "react";

export default function Process() {
	const [activeStep, setActiveStep] = useState(0);
	const sectionRef = useRef<HTMLElement>(null);

	const steps = [
		{
			title: "Sign Up & Connect Your Channels",
			description:
				"Create your NuVía account and securely connect your WhatsApp Business, Instagram, or Messenger.",
			position: "left",
		},
		{
			title: "Choose a Plan That Fits",
			description:
				"Select your ideal subscription. Whether you're solo or scaling, NuVía grows with your needs.",
			position: "right",
		},
		{
			title: "Build Your Service Profil",
			description:
				"Input your business hours, pricing, services, and policies — everything your AI needs to serve clients accurately.",
			position: "left",
		},
		{
			title: "Personalize Your Chatbot's Voice",
			description:
				"Make your assistant sound like you. Customize tone, language, and conversation flow.",
			position: "right",
		},
		{
			title: "Launch and Start Helping Clients Instantly",
			description:
				"Go live and watch NuVía manage inquiries, fill slots, and respond around the clock — all from one dashboard.",
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
			const sectionStart = sectionTop - windowHeight * 0;
			const sectionEnd = sectionTop + sectionHeight - windowHeight * 0.8;

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
			id="how-it-works"
			className="relative pb-24 overflow-hidden bg-white/25"
		>
			<img
				src={AtomicBoomImg}
				alt="AtomicBoomImg"
				className="absolute left-0 top-0 max-w-full -z-10"
			/>

			<img
				src={VerticalPathImg}
				alt="VerticalPathImg"
				className="absolute right-5 top-0 h-full -z-10"
			/>

			<img
				src={AtomicBoomImg}
				alt="AtomicBoomImg"
				className="absolute left-1/2 bottom-2 max-w-full -z-10"
			/>

			<div className="container py-24">
				<SectionHeading
					title={
						<h2 className="mb-4">
							Set Up Your{" "}
							<span className="text-theme relative">
								NuVía{" "}
								<img
									className="max-w-[150px] lg:max-w-[200px] absolute -bottom-4 left-1/2 -translate-x-1/2"
									src={HeadingUnderline}
									alt=""
								/>
							</span>
							In Minutes
						</h2>
					}
					description="From WhatsApp integration to smart client conversations — your AI assistant is ready in just a few 
clicks."
				/>
			</div>

			<div className="container relative">
				{/* Background decorative elements */}
				<div className="absolute -top-16 md:top-0 right-32 text-[#A8B4A2] animate-pulse">
					<Star className="w-8 h-8 fill-current" />
				</div>
				<div className="absolute -top-20 md:top-32 right-48 text-[#A8B4A2] animate-bounce">
					<Sparkles className="w-5 h-5 fill-current" />
				</div>
				<div className="absolute -bottom-16 md:bottom-0 right-12 md:right-96 text-[#A8B4A2] animate-pulse">
					<Star className="w-8 h-8 fill-current" />
				</div>
				<div className="absolute -bottom-24 md:bottom-32 md:right-52 right-52 text-[#A8B4A2] animate-bounce">
					<Sparkles className="w-6 h-6 fill-current" />
				</div>

				{/* Connecting line with animated progress */}
				<div className="absolute left-5 md:left-0 lg:left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-px">
					{/* Background line */}
					<div className="absolute inset-0 bg-background" />

					{/* Animated progress line */}
					<div
						className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary/20 to-primary transition-all duration-500 ease-out"
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
									? "bg-primary scale-110 shadow-lg shadow-primary/300"
									: "bg-primary/20 scale-100"
							}`}
							style={{
								top: `${(index * 100) / (steps.length - 2)}%`,
								transitionDelay: `${index * 100}ms`,
							}}
						>
							{/* Pulsing ring for active dot */}
							{index === activeStep && (
								<div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
							)}
						</div>
					))}
				</div>

				<div className="space-y-12 lg:space-y-16">
					{steps.map((step, index) => (
						<div
							key={index}
							className={`flex items-center transition-all duration-700 ease-out ${
								step.position === "right"
									? "lg:flex-row-reverse"
									: ""
							} ${
								index <= activeStep
									? "opacity-100 translate-y-0"
									: "opacity-50 translate-y-8"
							}`}
							style={{ transitionDelay: `${index * 150}ms` }}
						>
							<div
								className={`w-full lg:w-1/2 ${
									step.position === "right"
										? "lg:pl-12"
										: "lg:pr-12"
								}`}
							>
								<Card
									className={`bg-accent/50 border-2 backdrop-blur-lg ml-3 md:ml-0 ${
										index <= activeStep
											? "border-theme"
											: "border-secondary"
									}`}
								>
									<CardContent className="p-6">
										<h3
											className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
												index <= activeStep
													? "text-theme"
													: "text-theme/50"
											}`}
										>
											{step.title}
										</h3>
										<p
											className={`leading-relaxed transition-colors duration-500 ${
												index <= activeStep
													? "text-foreground"
													: "text-foreground/50"
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
