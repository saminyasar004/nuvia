import SectionHeading from "@/components/common/section-heading";
import FAQBanner from "@/assets/images/faq-banner.svg";
import HeadingUnderline from "@/assets/images/heading-underline.svg";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function FAQ() {
	const faqs = [
		{
			id: 0,
			question: "What is Newvía, and how can it benefit my business?",
			answer: "Newvía is an AI-powered SaaS platform that enhances customer engagement with a customizable chatbot, simplifies appointment booking, and provides feedback management. It benefits your business by automating interactions, improving customer satisfaction, and streamlining operations.",
		},
		{
			id: 1,
			question: "Do I need technical skills to use Newvía?",
			answer: "No technical skills are required! Newvía offers an intuitive interface for business owners to customize the chatbot and manage appointments, with full support from our team to get you started.",
		},
		{
			id: 2,
			question: "Can I integrate Newvía with my existing tools?",
			answer: "Yes, Newvía supports integration with popular APIs like Open AI, Twilio, and Calendly, allowing you to connect with your existing business tools for a seamless experience.",
		},
		{
			id: 3,
			question: "Is my data secure on the Newvía platform?",
			answer: "Absolutely. Newvía prioritizes data security with robust encryption and compliance standards, ensuring your customer interactions and business data remain safe and private.",
		},
		{
			id: 4,
			question:
				"What kind of support can I expect after subscribing to Newvía?",
			answer: "We provide 90 days of free ongoing support post-subscription to assist with setup and initial issues, followed by continuous customer service to ensure your success with Newvía.",
		},
	];

	const [expandedFaqId, setExpandedFaqId] = useState<number>(0);

	return (
		<section className="py-24 bg-[#A8B4A2]/40" id="faq">
			<div className="container">
				<SectionHeading
					title={
						<h2 className="mb-4">
							Frequently{" "}
							<span className="text-theme relative">
								Asked Questions
								<img
									className="max-w-[150px] lg:max-w-[200px] absolute -bottom-4 left-1/2 -translate-x-1/2"
									src={HeadingUnderline}
									alt=""
								/>
							</span>
						</h2>
					}
					description="Find answers to common questions about ChatFlow and our services"
				/>

				<div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3 py-8">
					<div className="w-full flex items-start">
						<img src={FAQBanner} alt="Faq Banner" />
					</div>

					<div className="py-10 w-full h-auto flex flex-col gap-5">
						{faqs.map((faq, index) => (
							<FaqCard
								key={index}
								id={faq.id}
								question={faq.question}
								answer={faq.answer}
								expandedFaqId={expandedFaqId}
								onClick={() => setExpandedFaqId(faq.id)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function FaqCard({
	id,
	question,
	answer,
	expandedFaqId,
	onClick,
}: {
	id: number;
	question: string;
	answer: string;
	expandedFaqId: number;
	onClick: () => void;
}) {
	return (
		<div
			onClick={onClick}
			className="w-full h-auto border rounded-lg p-3 pb-0 lg:pl-8 flex flex-col gap-4 overflow-hidden relative cursor-pointer transition-all duration-300 bg-[#F1EEE3]"
		>
			<div className="w-full flex items-center justify-between">
				<h3 className="text-theme font-semibold text-base lg:text-2xl">
					{question}
				</h3>

				{expandedFaqId === id ? (
					<div className="min-w-max">
						<ArrowUpRight className="text-theme" />
					</div>
				) : (
					<div className="min-w-max">
						<ArrowDownRight className="text-theme" />
					</div>
				)}
			</div>
			<div
				className={cn(
					"transition-all duration-300 ease-in-out overflow-hidden",
					expandedFaqId === id ? "max-h-[200px]" : "max-h-0"
				)}
				style={{
					transitionProperty: "max-height",
					transitionDuration: "0.3s",
					transitionTimingFunction: "ease-in-out",
				}}
			>
				<p className="font-montserrat text-sm lg:text-base py-2 pb-3">
					{answer}
				</p>
			</div>
		</div>
	);
}
