import SectionHeading from "@/components/common/SectionHeading";
import FAQBanner from "@/assets/images/faq-banner.svg";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function FAQ() {
	const faqs = [
		{
			id: 0,
			question: "How Accurate Are The Product Recommendations?",
			answer: "Yes, we take data security seriously. All conversations are encrypted and we never share your personal data with third parties without your consent.",
		},
		{
			id: 1,
			question: "How Do I Cancel My Subscription?",
			answer: "To cancel your subscription, please visit the account settings on the platform where you subscribed (e.g., grok.com or x.com) and follow the cancellation instructions provided.",
		},
		{
			id: 2,
			question: "How Do Affiliate Links Work?",
			answer: "Affiliate links are used to track referrals. When you click an affiliate link and make a purchase, the merchant may share a small commission with us, at no extra cost to you.",
		},
		{
			id: 3,
			question: "What Happens If A Recommended Product Is Unavailable?",
			answer: "If a recommended product is unavailable, we will suggest alternative products that match your preferences or notify you when the product becomes available again.",
		},
	];

	const [expandedFaqId, setExpandedFaqId] = useState<number>(0);

	return (
		<section className="py-24" id="faq">
			<div className="container">
				<SectionHeading
					title={
						<h2>
							Frequently{" "}
							<span className="text-primary">
								Asked Questions
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
			className="w-full h-auto border rounded-lg p-3 pb-0 lg:pl-8 flex flex-col gap-4 overflow-hidden relative cursor-pointer transition-all duration-300 bg-accent"
		>
			<div className="w-full flex items-center justify-between">
				<h3 className="text-primary font-semibold text-base lg:text-2xl">
					{question}
				</h3>

				{expandedFaqId === id ? (
					<div className="min-w-max">
						<ArrowUpRight className="text-primary" />
					</div>
				) : (
					<div className="min-w-max">
						<ArrowDownRight className="text-primary" />
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
