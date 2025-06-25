export interface PrivacyContentItem {
	type: "paragraph" | "list";
	text?: string; // For paragraphs or list lead-ins
	items?: string[]; // For list items
}

export interface PrivacySection {
	id: number;
	title: string;
	content: PrivacyContentItem[];
}

export const privacyData: PrivacySection[] = [
	{
		id: 1,
		title: "Information We Collect",
		content: [
			{
				type: "paragraph",
				text: "We collect information in the following ways:",
			},
			{
				type: "list",
				items: [
					"Business Information: Name, email, phone number, company name, and business details provided when you sign up or use ChatFlow.",
					"Usage Data: Information on how you interact with our platform, including log data, browser type, device information, and IP address.",
					"Communications: Any information you provide through messages, chats, or customer support",
				],
			},
		],
	},
	{
		id: 2,
		title: "How We Use Your Information",
		content: [
			{
				type: "paragraph",
				text: "We use your information to:",
			},
			{
				type: "list",
				items: [
					"Provide and improve our services",
					"Communicate important updates and customer support.",
					"Analyze usage trends for business insights.",
					"Ensure security, prevent fraud, and comply with legal obligations.",
				],
			},
		],
	},
	{
		id: 3,
		title: "Data Storage & Security",
		content: [
			{
				type: "paragraph",
				text: "Your data is stored on secure servers and protected by industry-standard encryption and security measures. We retain data only as long as necessary to fulfill the purposes outlined in this policy, unless required by law.",
			},
		],
	},
	{
		id: 4,
		title: "Your Rights",
		content: [
			{
				type: "paragraph",
				text: "You have the right to:",
			},
			{
				type: "list",
				items: [
					"Access, update, or delete your personal information.",
					"Opt out of marketing communications at any time.",
					"Request a copy of your data by contacting us at hello@chatflow.io",
				],
			},
		],
	},
	{
		id: 5,
		title: "Third-Party Services",
		content: [
			{
				type: "paragraph",
				text: "ChatFlow may use trusted third-party services (such as payment processors or analytics providers). We ensure these providers comply with data protection laws.",
			},
		],
	},
	{
		id: 6,
		title: "Cookies",
		content: [
			{
				type: "paragraph",
				text: "ChatFlow may use trusted third-party services (such as payment processors or analytics providers). We ensure these providers comply with data protection laws.",
			},
		],
	},
	{
		id: 6,
		title: "Updates to This Policy",
		content: [
			{
				type: "paragraph",
				text: "We may update this policy from time to time. Changes will be posted on this page with an updated effective date.",
			},
		],
	},
];

export default function PrivacyPolicy() {
	return (
		<section className="py-24">
			<div className="container">
				<div className="w-full flex flex-col gap-5 items-center text-center">
					<h1 className="font-bold text-5xl">Terms & Condition</h1>

					<h6 className="font-medium">
						Effective Date: June 1st, 2025
					</h6>

					<div className="bg-accent rounded-lg shadow-sm py-4 px-2 text-left">
						<p className="text-sm">
							At ChatFlow (Ease Chat Global), we are committed to
							protecting your privacy and ensuring transparency in
							how we collect, use, and store your information.
							This Privacy Policy outlines the types of data we
							collect, how we use it, and your rights regarding
							your personal information.
						</p>
					</div>
				</div>

				<div className="w-full flex flex-col gap-20 py-16">
					{privacyData.map((section: PrivacySection) => (
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

const renderContent = (contentItem: PrivacyContentItem, index: number) => {
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
