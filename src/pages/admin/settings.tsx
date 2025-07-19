import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
	Bold,
	Italic,
	Underline,
	List,
	ListOrdered,
	AlignLeft,
	AlignCenter,
	AlignRight,
	AlignJustify,
	MoreHorizontal,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import DashboardHeader from "@/components/common/dashboard-header";

interface ToolbarButtonProps {
	icon: React.ReactNode;
	isActive?: boolean;
	onClick?: () => void;
}

function ToolbarButton({
	icon,
	isActive = false,
	onClick,
}: ToolbarButtonProps) {
	return (
		<Button
			variant="ghost"
			size="sm"
			className={`h-8 w-8 p-0 ${
				isActive ? "bg-theme/10 text-theme" : "hover:bg-gray-100"
			}`}
			onClick={onClick}
		>
			{icon}
		</Button>
	);
}

export default function AdminSettings() {
	const [content, setContent] = useState(
		`Admin Dashboard, administrators agree to follow all platform terms, including data confidentiality, accurate management of user submissions, and adherence to security protocols. Misuse of data or platform features may lead to termination of access. The platform provides tools for user management, form review, notifications, payments, and reporting, which must be used responsibly. The platform is not liable for admin-caused errors. Terms may be updated, with notifications sent to admins. For assistance, contact support.`
	);

	const [font, setFont] = useState("Inter");
	const [fontSize, setFontSize] = useState("24");
	const [activeFormats, setActiveFormats] = useState<string[]>([]);

	const toggleFormat = (format: string) => {
		setActiveFormats((prev) =>
			prev.includes(format)
				? prev.filter((f) => f !== format)
				: [...prev, format]
		);
	};

	const handleSave = () => {
		// Handle save logic here
		console.log("Saving terms and conditions:", content);
	};

	const handleCancel = () => {
		// Handle cancel logic here
		console.log("Canceling changes");
	};

	return (
		<>
			<section className="w-full">
				{/* dashboard header */}
				<DashboardHeader
					title="Dashboard"
					description="Welcome back! Here's what's happening with your platform today."
				/>
			</section>

			<div className="w-full py-14 px-8">
				<div className="p-6 bg-background border border-primary/10">
					<div className="space-y-6">
						{/* Header */}
						<h1 className="text-2xl font-semibold text-primary">
							Terms & conditions
						</h1>

						{/* Editor Container */}
						<div className="bg-secondary rounded-lg border border-primary/10 overflow-hidden">
							{/* Toolbar */}
							<div className="bg-background border-b border-theme/10 p-3">
								<div className="flex items-center gap-2 flex-wrap">
									{/* Font Family */}
									<Select
										value={font}
										onValueChange={setFont}
									>
										<SelectTrigger className="w-24 h-8 text-sm">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Inter">
												Inter
											</SelectItem>
											<SelectItem value="Arial">
												Arial
											</SelectItem>
											<SelectItem value="Helvetica">
												Helvetica
											</SelectItem>
											<SelectItem value="Times">
												Times
											</SelectItem>
										</SelectContent>
									</Select>

									{/* Font Size */}
									<Select
										value={fontSize}
										onValueChange={setFontSize}
									>
										<SelectTrigger className="w-16 h-8 text-sm">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="12">
												12
											</SelectItem>
											<SelectItem value="14">
												14
											</SelectItem>
											<SelectItem value="16">
												16
											</SelectItem>
											<SelectItem value="18">
												18
											</SelectItem>
											<SelectItem value="20">
												20
											</SelectItem>
											<SelectItem value="24">
												24
											</SelectItem>
											<SelectItem value="28">
												28
											</SelectItem>
											<SelectItem value="32">
												32
											</SelectItem>
										</SelectContent>
									</Select>

									<Separator
										orientation="vertical"
										className="h-6"
									/>

									{/* Text Formatting */}
									<ToolbarButton
										icon={<Bold className="h-4 w-4" />}
										isActive={activeFormats.includes(
											"bold"
										)}
										onClick={() => toggleFormat("bold")}
									/>
									<ToolbarButton
										icon={<Italic className="h-4 w-4" />}
										isActive={activeFormats.includes(
											"italic"
										)}
										onClick={() => toggleFormat("italic")}
									/>
									<ToolbarButton
										icon={<Underline className="h-4 w-4" />}
										isActive={activeFormats.includes(
											"underline"
										)}
										onClick={() =>
											toggleFormat("underline")
										}
									/>

									<Separator
										orientation="vertical"
										className="h-6"
									/>

									{/* Lists */}
									<ToolbarButton
										icon={<List className="h-4 w-4" />}
										isActive={activeFormats.includes(
											"bullet"
										)}
										onClick={() => toggleFormat("bullet")}
									/>
									<ToolbarButton
										icon={
											<ListOrdered className="h-4 w-4" />
										}
										isActive={activeFormats.includes(
											"numbered"
										)}
										onClick={() => toggleFormat("numbered")}
									/>

									<Separator
										orientation="vertical"
										className="h-6"
									/>

									{/* Alignment */}
									<ToolbarButton
										icon={<AlignLeft className="h-4 w-4" />}
										isActive={activeFormats.includes(
											"left"
										)}
										onClick={() => toggleFormat("left")}
									/>
									<ToolbarButton
										icon={
											<AlignCenter className="h-4 w-4" />
										}
										isActive={activeFormats.includes(
											"center"
										)}
										onClick={() => toggleFormat("center")}
									/>
									<ToolbarButton
										icon={
											<AlignRight className="h-4 w-4" />
										}
										isActive={activeFormats.includes(
											"right"
										)}
										onClick={() => toggleFormat("right")}
									/>
									<ToolbarButton
										icon={
											<AlignJustify className="h-4 w-4" />
										}
										isActive={activeFormats.includes(
											"justify"
										)}
										onClick={() => toggleFormat("justify")}
									/>

									<Separator
										orientation="vertical"
										className="h-6"
									/>

									{/* More Options */}
									<ToolbarButton
										icon={
											<MoreHorizontal className="h-4 w-4" />
										}
										onClick={() =>
											console.log("More options")
										}
									/>
								</div>
							</div>

							{/* Editor Content */}
							<div className="p-6">
								<Textarea
									value={content}
									onChange={(e) => setContent(e.target.value)}
									className="min-h-[300px] bg-secondary/10 border-0 resize-none focus-visible:ring-0 text-gray-700 leading-relaxed"
									style={{
										fontFamily: font,
										fontSize: `${fontSize}px`,
										fontWeight: activeFormats.includes(
											"bold"
										)
											? "bold"
											: "normal",
										fontStyle: activeFormats.includes(
											"italic"
										)
											? "italic"
											: "normal",
										textDecoration: activeFormats.includes(
											"underline"
										)
											? "underline"
											: "none",
										textAlign: activeFormats.includes(
											"center"
										)
											? "center"
											: activeFormats.includes("right")
											? "right"
											: activeFormats.includes("justify")
											? "justify"
											: "left",
									}}
									placeholder="Enter your terms and conditions here..."
								/>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="flex items-center gap-3">
							<Button onClick={handleSave}>SAVE</Button>
							<Button
								variant="destructive"
								onClick={handleCancel}
							>
								Cancel
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
