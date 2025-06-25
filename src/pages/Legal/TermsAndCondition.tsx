export interface TermsContentItem {
	type: "paragraph" | "list";
	text?: string; // For paragraphs or list lead-ins
	items?: string[]; // For list items
}

export interface TermsSection {
	id: number;
	title: string;
	content: TermsContentItem[];
}

export const TermsData: TermsSection[] = [
	{
		id: 1,
		title: "1. Acceptance of Terms",
		content: [
			{
				type: "paragraph",
				text: "By creating an account or using ChatFlow services, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use our services.",
			},
		],
	},
	{
		id: 2,
		title: "2. Service Description",
		content: [
			{
				type: "paragraph",
				text: "ChatFlow provides:",
			},
			{
				type: "list",
				items: [
					"AI-powered chatbot services for appointment booking",
					"Integration with WhatsApp, Facebook, and Instagram",
					"Customer management and analytics tools",
					"Business automation and workflow management",
				],
			},
		],
	},
	{
		id: 3,
		title: "3. User Responsibilities",
		content: [
			{
				type: "paragraph",
				text: "You agree to:",
			},
			{
				type: "list",
				items: [
					"Provide accurate and complete information",
					"Use the service only for lawful business purposes",
					"Maintain the security of your account credentials",
					"Comply with all applicable laws and regulation",
				],
			},
		],
	},
	{
		id: 4,
		title: "4. Payment Terms",
		content: [
			{
				type: "list",
				items: [
					"Subscription fees are billed monthly or annually as selected",
					"All fees are non-refundable unless otherwise stated",
					"We reserve the right to change pricing with 30 days notice",
					"Failure to pay may result in service suspension",
				],
			},
		],
	},
	{
		id: 5,
		title: "5. Service Availability",
		content: [
			{
				type: "list",
				items: [
					"We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service. Scheduled maintenance will be announced in advance when possible.",
				],
			},
		],
	},
	{
		id: 6,
		title: "6. Data Ownership",
		content: [
			{
				type: "list",
				items: [
					"You retain ownership of all data you input into ChatFlow. We may use aggregated, anonymized data for service improvement and analytics purposes.",
				],
			},
		],
	},
	{
		id: 7,
		title: "7. Prohibited Uses",
		content: [
			{
				type: "paragraph",
				text: "You may not use ChatFlow to:",
			},
			{
				type: "list",
				items: [
					"Send spam or unsolicited messages",
					"Violate any laws or regulations",
					"Attempt to hack or compromise our systems",
					"Share inappropriate or harmful content",
				],
			},
		],
	},
	{
		id: 8,
		title: "8. Limitation of Liability",
		content: [
			{
				type: "list",
				items: [
					"ChatFlow shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability is limited to the amount paid for services in the preceding 12 months.",
				],
			},
		],
	},
	{
		id: 9,
		title: "9. Termination",
		content: [
			{
				type: "list",
				items: [
					"Either party may terminate this agreement at any time. Upon termination, your access to the service will cease, and we may delete your data after a reasonable period unless required by law to retain it.",
				],
			},
		],
	},
	{
		id: 10,
		title: "10. Changes to Terms",
		content: [
			{
				type: "list",
				items: [
					"We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Continued use of the service constitutes acceptance of the modified Terms.",
				],
			},
		],
	},
];

export default function TermsAndCondition() {
	return (
		<section className="py-24">
			<div className="container">
				<div className="w-full flex flex-col gap-5 items-center text-center">
					<h1 className="font-bold text-5xl">Terms & Condition</h1>

					<h6 className="font-medium">
						Effective Date: June 1st, 2025
					</h6>

					<div className="bg-accent rounded-lg shadow-sm py-4 px-2">
						<p className="text-sm">
							Welcome to ChatFlow. These Terms and Conditions
							("Terms") govern your use of our AI-powered
							appointment booking platform and services. By
							accessing or using ChatFlow, you agree to be bound
							by these Terms.
						</p>
					</div>
				</div>

				<div className="w-full flex flex-col gap-20 py-16">
					{TermsData.map((section: TermsSection) => (
						<div
							key={section.id}
							className="rounded-lg bg-accent p-6 shadow-sm"
						>
							<h2 className="text-2xl font-bold text-primary mb-4">
								{section.title}
							</h2>
							<div className="space-y-4">
								{section.content.map(renderContent)}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

const renderContent = (contentItem: TermsContentItem, index: number) => {
	if (contentItem.type === "paragraph" && contentItem.text) {
		return (
			<p key={index} className="text-foreground">
				{contentItem.text}
			</p>
		);
	}

	if (contentItem.type === "list" && contentItem.items) {
		return (
			<ul
				key={index}
				className="list-disc space-y-2 pl-5 text-foreground"
			>
				{contentItem.items.map((item, itemIndex) => (
					<li key={itemIndex}>{item}</li>
				))}
			</ul>
		);
	}

	return null;
};
