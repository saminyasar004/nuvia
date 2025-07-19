import FacebookImg from "@/assets/images/facebook.svg";
import LogoIcon from "@/assets/images/favicon.svg";
import InstagramImg from "@/assets/images/instagram.svg";
import QrImg from "@/assets/images/qr.png";
import WhatsappImg from "@/assets/images/whatsapp.svg";
import { DatePicker } from "@/components/common/date-picker";
import { TimePicker } from "@/components/common/time-picker";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { Stepper } from "@mantine/core";
import {
	ArrowLeft,
	ArrowRight,
	BotMessageSquare,
	BriefcaseBusiness,
	Cable,
	Check,
	Eye,
	EyeOff,
	Menu,
	MonitorCheck,
	PlusIcon,
	Settings,
	Upload,
	Users,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { serviceHoursDetails } from "../user/business-profile";

interface TeamMemberProps {
	member: string;
	email: string;
	number: string;
	userType: string;
}

const teamMembers = [
	{
		member: "Pappu roy (you)",
		email: "Papppyro6393@gmail.com",
		number: "01405366393",
		userType: "Owner",
	},
];

export default function Onboarding() {
	const [active, setActive] = useState(0);
	const nextStep = () =>
		setActive((current) => (current < 4 ? current + 1 : current));
	const prevStep = () =>
		setActive((current) => (current > 0 ? current - 1 : current));

	return (
		<section className="py-20">
			<div className="container flex flex-col gap-4 items-center">
				<h3 className="text-5xl font-semibold text-primary">
					Business Profile
				</h3>

				<div className="w-full flex items-center">
					<Stepper
						active={active}
						onStepClick={setActive}
						color="rgba(181, 168, 138, 1)"
						className="w-full"
						allowNextStepsSelect={false}
					>
						<Stepper.Step
							icon={<BriefcaseBusiness size={18} />}
							label="Business Info"
						>
							<div className="w-full flex flex-col gap-3">
								<BusinessInfo
									previousStep={prevStep}
									nextStep={nextStep}
								/>
							</div>
						</Stepper.Step>
						<Stepper.Step
							icon={<MonitorCheck size={18} />}
							label="Platform Setup"
						>
							<PlatformSetup
								previousStep={prevStep}
								nextStep={nextStep}
							/>
						</Stepper.Step>
						<Stepper.Step
							icon={<Users size={18} />}
							label="Team Members"
						>
							<TeamMembers
								previousStep={prevStep}
								nextStep={nextStep}
							/>
						</Stepper.Step>
						<Stepper.Step
							icon={<BotMessageSquare size={18} />}
							label="AI Configuration"
						>
							<AIConfiguration
								previousStep={prevStep}
								nextStep={nextStep}
							/>
						</Stepper.Step>
						<Stepper.Completed
						// label="Go Live"
						// icon={<CheckCircle size={18} />}
						>
							<AllSet previousStep={prevStep} />
						</Stepper.Completed>
					</Stepper>
				</div>
			</div>
		</section>
	);
}

const BusinessInfo = ({
	previousStep,
	nextStep,
}: {
	previousStep: () => void;
	nextStep: () => void;
}) => {
	const [dragActive, setDragActive] = useState(false);

	const handleDrag = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		if (e.type === "dragenter" || e.type === "dragover") {
			setDragActive(true);
		} else if (e.type === "dragleave") {
			setDragActive(false);
		}
	};

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setDragActive(false);
		// Handle file drop logic here
	};

	return (
		<>
			<div className="w-full py-5 flex items-center">
				<div className="py-6 flex flex-col gap-6 w-full px-6 border-2 border-secondary rounded-lg">
					<div className="flex gap-4 items-center justify-between">
						<h3 className="font-semibold text-2xl">
							Business Details
						</h3>
					</div>

					<div className="w-full form-group flex gap-4 items-start py-2">
						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="business-name">Business Name</Label>
							<Input
								id="business-name"
								type="text"
								placeholder="Enter your business name"
							/>
						</div>

						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="business-type">Business Type</Label>
							<Input
								id="business-type"
								type="text"
								placeholder="Enter your business type"
							/>
						</div>
					</div>

					<div className="w-full form-group flex gap-4 items-start py-2">
						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="business-address">
								Business Address
							</Label>
							<Input
								id="business-address"
								type="text"
								placeholder="Enter your business address"
							/>
						</div>

						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="business-number">
								Business Number
							</Label>
							<Input
								id="business-number"
								type="text"
								placeholder="Enter your business number"
							/>
						</div>
					</div>

					<div className="w-full form-group flex gap-4 items-start py-2">
						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="business-email">
								Business Email
							</Label>
							<Input
								id="business-email"
								type="text"
								placeholder="Enter your business email"
							/>
						</div>

						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="website">Website (Optional)</Label>
							<Input
								id="website"
								type="text"
								placeholder="Enter your business website"
							/>
						</div>
					</div>

					<div className="w-full form-group flex gap-4 items-start py-2">
						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="business-description">
								Business Description
							</Label>
							<Textarea
								id="business-description"
								placeholder="Enter your business description"
								rows={5}
							/>
						</div>

						<div className="w-full flex flex-col gap-4">
							<Label className="text-sm font-medium text-gray-700">
								Business logo/photo
							</Label>
							<div
								className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
									dragActive
										? "border-theme bg-background"
										: "border-primary bg-secondary"
								}`}
								onDragEnter={handleDrag}
								onDragLeave={handleDrag}
								onDragOver={handleDrag}
								onDrop={handleDrop}
							>
								<Upload className="mx-auto h-8 w-8 text-gray-400 mb-3" />
								<p className="text-sm text-gray-500 mb-3">
									drag and drop your logo here, or click to
									browse
								</p>
								<Button variant="outline" size="sm">
									Choose File
								</Button>
							</div>
						</div>
					</div>

					{/* <div className="space-y-2 w-full form-group flex gap-4 items-start py-2"></div> */}

					<div className="flex gap-4 items-center justify-between">
						<h3 className="font-semibold text-2xl">
							Services & Pricing
						</h3>
					</div>

					<div className="w-full form-group flex gap-4 items-start py-2">
						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="service-name">Service Name</Label>
							<Input
								id="service-name"
								type="text"
								placeholder="Enter your business address"
							/>
						</div>

						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="price">Price</Label>
							<Input
								id="price"
								type="text"
								placeholder="Enter your business number"
							/>
						</div>
					</div>

					<div className="w-full form-group flex flex-col gap-4 items-start py-2">
						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="service-description">
								Service Description
							</Label>
							<Textarea
								id="service-description"
								placeholder="Enter your service description"
								rows={5}
							/>
						</div>
						<Button size="sm">
							Add Service
							<PlusIcon size={12} />
						</Button>
					</div>

					<div className="flex gap-4 items-center justify-between">
						<h3 className="font-semibold text-2xl">
							Services & Hours
						</h3>
					</div>

					<div className="w-full flex flex-col gap-4">
						{serviceHoursDetails.map((serviceHourDetail, index) => (
							<div className="w-full grid grid-cols-10 gap-2">
								<div className="col-span-2 flex items-center justify-start">
									<Switch id={`day-${index}`} />
								</div>

								<div className="col-span-2 flex items-center justify-start">
									<Label
										htmlFor={`day-${index}`}
										className="cursor-pointer"
									>
										{serviceHourDetail.day}
									</Label>
								</div>

								<div className="col-span-2 flex items-center justify-start">
									<TimePicker />
								</div>

								<div className="flex items-center text-center">
									<h5 className="text-theme font-medium w-full">
										To
									</h5>
								</div>

								<div className="col-span-2 flex items-center justify-start">
									<TimePicker />
								</div>
							</div>
						))}
					</div>

					<div className="flex gap-4 items-center justify-between">
						<h3 className="font-semibold text-2xl">
							Connected Platforms
						</h3>
					</div>

					<div className="bg-secondary border border-theme rounded-lg p-4 flex gap-4 items-center">
						<div className="w-12 h-12 overflow-hidden flex items-center justify-center">
							<img
								src={FacebookImg}
								alt="Facebook"
								className="w-full h-full"
							/>
						</div>
						<div className="flex-1 flex flex-col items-center gap-1">
							<div className="w-full flex items-center justify-between">
								<h4 className="font-medium text-lg">
									Facebook Messenger
								</h4>

								<Button variant="outline">Configure</Button>
							</div>

							<div className="w-full flex items-center justify-between">
								<div className="flex flex-col gap-2">
									<h4 className="text-sm">
										Integrate with Facebook Page messages
									</h4>
									<div className="flex items-center gap-2">
										<div className="w-3 h-3 rounded-full bg-success"></div>
										<span className="text-sm">Active</span>
									</div>
								</div>

								<Button variant="destructive">
									Disconnect
								</Button>
							</div>
						</div>
					</div>

					<div className="bg-secondary border border-theme rounded-lg p-4 flex gap-4 items-center">
						<div className="w-12 h-12 overflow-hidden flex items-center justify-center">
							<img
								src={WhatsappImg}
								alt="Whatsapp"
								className="w-full h-full"
							/>
						</div>
						<div className="flex-1 flex flex-col items-center gap-1">
							<div className="w-full flex items-center justify-between">
								<h4 className="font-medium text-lg">
									WhatsApp Business
								</h4>

								<Button variant="outline">Configure</Button>
							</div>

							<div className="w-full flex items-center justify-between">
								<div className="flex flex-col gap-2">
									<h4 className="text-sm">
										Connect your WhatsApp Business API
									</h4>
									<div className="flex items-center gap-2">
										<div className="w-3 h-3 rounded-full bg-success"></div>
										<span className="text-sm">Active</span>
									</div>
								</div>

								<Button variant="destructive">
									Disconnect
								</Button>
							</div>
						</div>
					</div>

					<div className="bg-secondary border border-theme rounded-lg p-4 flex gap-4 items-center">
						<div className="w-12 h-12 overflow-hidden flex items-center justify-center">
							<img
								src={InstagramImg}
								alt="Instagram"
								className="w-full h-full"
							/>
						</div>
						<div className="flex-1 flex flex-col items-center gap-1">
							<div className="w-full flex items-center justify-between">
								<h4 className="font-medium text-lg">
									Instagram
								</h4>

								<Button variant="outline">Configure</Button>
							</div>

							<div className="w-full flex items-center justify-between">
								<div className="flex flex-col gap-2">
									<h4 className="text-sm">
										Handle Instagram direct messages
									</h4>
									<div className="flex items-center gap-2">
										<div className="w-3 h-3 rounded-full bg-success"></div>
										<span className="text-sm">Active</span>
									</div>
								</div>

								<Button variant="destructive">
									Disconnect
								</Button>
							</div>
						</div>
					</div>

					<div className="flex gap-4 items-center justify-between">
						<h3 className="font-semibold text-2xl">
							AI Configuration
						</h3>
					</div>

					<div className="w-full form-group flex gap-4 items-start py-2">
						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="assistant-name">
								Assistant Name
							</Label>
							<Input
								id="assistant-name"
								type="text"
								placeholder="Assistant, or you business name"
							/>
						</div>
					</div>

					<div className="w-full form-group flex gap-4 items-start py-2">
						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="welcome-message">
								Welcome Message
							</Label>
							<Textarea
								id="welcome-message"
								placeholder="Describe your Business and services..."
								rows={5}
							/>
						</div>
					</div>

					<div className="w-full form-group flex flex-col gap-6 items-center py-2">
						<div className="w-full flex flex-col gap-3">
							<Label>AI Conversation Tone</Label>

							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select Voice Tone" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="calmAndReassuring">
											Calm And Reassuring
										</SelectItem>
										<SelectItem value="professionalAndSophisticated">
											Professional And Sophisticated
										</SelectItem>
										<SelectItem value="friendlyAndConversational">
											Friendly And Conversational
										</SelectItem>
										<SelectItem value="luxuriousAndMinimalist">
											Luxurious And Minimalist
										</SelectItem>
										<SelectItem value="smartAndEffective">
											Smart And Effective
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="w-full form-group flex flex-col gap-4 items-start py-2">
						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="payment-link">
								Payment Method Link
							</Label>
							<Input
								id="payment-link"
								type="text"
								placeholder="http://"
							/>
						</div>
						<Button size="sm">Add Payment Method</Button>
					</div>

					<div className="flex gap-4 items-center justify-between">
						<div className="flex flex-col gap-2">
							<h3 className="font-semibold text-2xl">
								Discount Management(%)
							</h3>
							<p className="">
								Set up seasonal discounts and special offers for
								your customers
							</p>
						</div>
						<Switch id="discount-management" />
					</div>

					<div className="w-full form-group flex gap-4 items-start py-2">
						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="discount-title">
								Discount Title
							</Label>
							<Input
								id="discount-title"
								type="text"
								placeholder="Summer sale , holiday special"
							/>
						</div>

						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="discount-percentage">
								Discount Percentage
							</Label>
							<Input
								id="discount-percentage"
								type="text"
								placeholder="10%"
							/>
						</div>
					</div>

					<div className="w-full form-group flex gap-4 items-start py-2">
						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="start-date">Start Date</Label>
							<DatePicker />
						</div>

						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="end-date">End Date</Label>
							<DatePicker />
						</div>
					</div>

					<div className="w-full form-group flex flex-col gap-4 items-start py-2">
						<div className="w-full flex flex-col gap-3">
							<Label htmlFor="description">Description</Label>
							<Textarea
								id="description"
								placeholder="Describe the discount terms and conditions"
								rows={5}
							/>
						</div>

						<Button size="sm">Add Discount</Button>
					</div>
				</div>
			</div>

			<div className="w-full flex items-center justify-between">
				<Button variant="secondary" onClick={previousStep}>
					<ArrowLeft size={12} />
					Previous
				</Button>
				<Button onClick={nextStep}>
					Continue
					<ArrowRight size={12} />
				</Button>
			</div>
		</>
	);
};

const PlatformSetup = ({
	previousStep,
	nextStep,
}: {
	previousStep: () => void;
	nextStep: () => void;
}) => {
	const [isWhatsappQrConnectDialogOpen, setIsWhatsappQrConnectDialogOpen] =
		useState(false);

	return (
		<>
			<div className="w-full grid grid-cols-3 gap-6 py-8">
				<div className="w-full h-full p-8 py-16 rounded-lg border border-theme bg-background flex flex-col gap-3 items-center hover:bg-secondary transition-all duration-300 cursor-pointer">
					<img
						src={FacebookImg}
						alt="Facebook"
						className="w-24 h-24"
					/>

					<h3 className="font-semibold text-xl text-theme">
						Facebook Messenger
					</h3>
					<p className="text-sm">
						Integrate with Facebook Messenger for your business page
					</p>
				</div>

				<Dialog>
					<DialogTrigger asChild>
						<div
							onClick={() =>
								setIsWhatsappQrConnectDialogOpen(true)
							}
							className="w-full h-full p-8 py-16 rounded-lg border border-theme bg-background flex flex-col gap-3 items-center hover:bg-secondary transition-all duration-300 cursor-pointer"
						>
							<img
								src={WhatsappImg}
								alt="WhatsApp"
								className="w-24 h-24"
							/>

							<h3 className="font-semibold text-xl text-theme">
								WhatsApp
							</h3>
							<p className="text-sm">
								Connect your WhatsApp Business account for
								customer messaging
							</p>
						</div>
					</DialogTrigger>

					<DialogContent className="sm:max-w-6xl bg-background">
						<WhatsAppConnect />
					</DialogContent>
				</Dialog>

				<div className="w-full h-full p-8 py-16 rounded-lg border border-theme bg-background flex flex-col gap-3 items-center hover:bg-secondary transition-all duration-300 cursor-pointer">
					<img
						src={InstagramImg}
						alt="Instagram"
						className="w-24 h-24"
					/>

					<h3 className="font-semibold text-xl text-theme">
						Instagram
					</h3>
					<p className="text-sm">
						Connect Instagram Direct Messages for your business
						account
					</p>
				</div>
			</div>

			<div className="w-full flex items-center justify-between py-8">
				<Button variant="secondary" onClick={previousStep}>
					<ArrowLeft size={12} />
					Previous
				</Button>
				<Button onClick={nextStep}>
					Continue
					<ArrowRight size={12} />
				</Button>
			</div>
		</>
	);
};

const WhatsAppConnect = () => {
	const [type, setType] = useState<"qr" | "phone">("qr");
	const [selectedCountry, setSelectedCountry] = useState("BD");
	const [phoneNumber, setPhoneNumber] = useState("");

	const countries = [
		{ code: "BD", name: "Bangladesh", dialCode: "+880" },
		{ code: "US", name: "United States", dialCode: "+1" },
		{ code: "GB", name: "United Kingdom", dialCode: "+44" },
		{ code: "IN", name: "India", dialCode: "+91" },
		{ code: "AU", name: "Australia", dialCode: "+61" },
		{ code: "CA", name: "Canada", dialCode: "+1" },
		{ code: "DE", name: "Germany", dialCode: "+49" },
		{ code: "FR", name: "France", dialCode: "+33" },
		{ code: "JP", name: "Japan", dialCode: "+81" },
		{ code: "CN", name: "China", dialCode: "+86" },
	];

	const selectedCountryData = countries.find(
		(c) => c.code === selectedCountry
	);

	if (type === "qr") {
		return (
			<div className="w-full flex items-center justify-center p-4">
				<div className="p-8 md:p-12">
					{/* Header with logos */}
					<div className="flex items-center gap-3 mb-8">
						<div className="flex items-center gap-1">
							<div className="w-10 h-10 flex items-center justify-center">
								<img src={WhatsappImg} alt="Whatsapp" />
							</div>
							<span className="text-sm font-medium">
								WhatsApp
							</span>
						</div>
						<div className="flex items-center gap-2">
							<div className="w-8 h-8 flex items-center justify-center">
								<img
									src={LogoIcon}
									alt="Nuvía"
									className="max-w-full"
								/>
							</div>
						</div>
					</div>

					<div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
						<div className="space-y-4">
							<div className="flex flex-col gap-4">
								<h1 className="text-3xl md:text-4xl font-bold text-foreground">
									Connect WhatsApp to Nuvía
								</h1>

								<p className="text-xl md:text-2xl text-foreground mb-8">
									Scan the QR code
								</p>
							</div>
							<div className="space-y-4">
								<p className="text-foreground font-medium text-lg">
									Open WhatsApp on your Phone
								</p>

								<div className="flex items-start gap-3">
									<p className="text-foreground">
										Tap Menu{" "}
										<Menu className="inline w-4 h-4 mx-1" />{" "}
										or Settings{" "}
										<Settings className="inline w-4 h-4 mx-1" />{" "}
										and Select Linked Devices
									</p>
								</div>

								<p className="text-foreground">
									Tap on Link a Device
								</p>

								<p className="text-foreground">
									Point your phone to this screen to capture
									the QR code
								</p>
							</div>
						</div>

						{/* QR Code */}
						<div className="flex justify-center">
							<div className="p-6 rounded-2xl bg-white">
								<img
									src={QrImg}
									alt="WhatsApp QR Code"
									className="w-64 h-64 md:w-80 md:h-80"
								/>
							</div>
						</div>
					</div>

					{/* Bottom link */}
					<div className="mt-12 text-center">
						<Button
							variant="link"
							onClick={() => setType("phone")}
							className="text-theme font-medium text-base"
						>
							LINK WITH PHONE NUMBER
						</Button>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="flex items-center justify-center p-4">
				<div className="p-8 md:p-12">
					<div className="flex items-center justify-center gap-3 mb-8">
						<div className="flex items-center justify-center gap-3">
							<div className="w-8 h-8 bg-whatsapp rounded-full flex items-center justify-center">
								<img
									src={WhatsappImg}
									alt="Whatsapp"
									className="max-w-full"
								/>
							</div>
							<Cable className="text-primary rotate-90 w-6 h-6" />
							<div className="w-8 h-8 flex items-center justify-center">
								<img
									src={LogoIcon}
									alt="Nuvía"
									className="max-w-full"
								/>
							</div>
						</div>
					</div>

					<h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
						Connect WhatsApp to Nuvía
					</h1>

					<p className="text-lg text-foreground mb-8 text-center">
						Select a country and enter Business phone number.
					</p>

					<div className="max-w-md mx-auto space-y-6">
						<div className="flex gap-2">
							<Select
								value={selectedCountry}
								onValueChange={setSelectedCountry}
							>
								<SelectTrigger className="w-32 bg-secondary/50 border-border/50">
									<SelectValue />
								</SelectTrigger>
								<SelectContent>
									{countries.map((country) => (
										<SelectItem
											key={country.code}
											value={country.code}
										>
											{country.code}
										</SelectItem>
									))}
								</SelectContent>
							</Select>

							<div className="flex-1 flex">
								<div className="bg-secondary/50 border border-border/50 rounded-l-md px-3 flex items-center text-sm text-muted-foreground border-r-0">
									{selectedCountryData?.dialCode}
								</div>
								<Input
									type="tel"
									value={phoneNumber}
									onChange={(e) =>
										setPhoneNumber(e.target.value)
									}
									placeholder="Enter phone number"
									className="rounded-l-none bg-secondary/50 border-border/50 focus:border-ease"
								/>
							</div>
						</div>

						<div className="w-full flex items-center justify-center">
							<Button>Next</Button>
						</div>
					</div>

					{/* Bottom link */}
					<div className="mt-12 text-center">
						<Button
							variant="link"
							onClick={() => setType("qr")}
							className="text-theme font-medium text-base"
						>
							LINK WITH QR CODE
						</Button>
					</div>
				</div>
			</div>
		);
	}
};

const TeamMembers = ({
	previousStep,
	nextStep,
}: {
	previousStep: () => void;
	nextStep: () => void;
}) => {
	return (
		<>
			<div className="w-full border border-theme rounded-lg p-8 flex flex-col gap-4">
				<h3 className="font-semibold text-lg">Team Members</h3>

				<Table className="border-collapse rounded-lg">
					<TableHeader>
						<TableRow className="bg-primary *:text-white rounded-lg hover:text-white hover:bg-primary">
							<TableHead>Members</TableHead>
							<TableHead>Email</TableHead>
							<TableHead>Number</TableHead>
							<TableHead>User Type</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{teamMembers.map((member) => (
							<TableRow
								key={member.email}
								className="bg-secondary"
							>
								<TableCell className="font-medium">
									{member.member}
								</TableCell>
								<TableCell>{member.email}</TableCell>
								<TableCell>{member.number}</TableCell>
								<TableCell>{member.userType}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>

			<Dialog>
				<DialogTrigger asChild>
					<div className="flex items-start py-8">
						<Button>
							Add Member
							<PlusIcon size={12} />
						</Button>
					</div>
				</DialogTrigger>
				<DialogContent className="bg-background sm:max-w-4xl">
					<AddTeamMemberCard />
				</DialogContent>
			</Dialog>

			<div className="w-full flex items-center justify-between py-8">
				<Button variant="secondary" onClick={previousStep}>
					<ArrowLeft size={12} />
					Previous
				</Button>
				<Button onClick={nextStep}>
					Continue
					<ArrowRight size={12} />
				</Button>
			</div>
		</>
	);
};

const AddTeamMemberCard = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [formData, setFormData] = useState({
		fullName: "",
		role: "",
		email: "",
		password: "",
	});

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};

	return (
		<div className="w-full p-8 bg-background">
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-foreground mb-2">
					Create Member
				</h1>
				<p className="text-muted-foreground">
					Create a member manually and share credentials with your
					team members.
				</p>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<Label
							htmlFor="fullName"
							className="text-sm font-medium text-foreground"
						>
							Full Name
						</Label>
						<Input
							id="fullName"
							type="text"
							placeholder="Enter name"
							value={formData.fullName}
							onChange={(e) =>
								handleInputChange("fullName", e.target.value)
							}
						/>
					</div>

					<div className="space-y-2">
						<Label
							htmlFor="role"
							className="text-sm font-medium text-foreground"
						>
							Role
						</Label>
						<Select
							value={formData.role}
							onValueChange={(value) =>
								handleInputChange("role", value)
							}
						>
							<SelectTrigger className="h-12 bg-input/20 border-input/40 focus:border-primary">
								<SelectValue placeholder="Agent" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="agent">Agent</SelectItem>
								<SelectItem value="admin">Admin</SelectItem>
								<SelectItem value="viewer">Viewer</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					<div className="space-y-2">
						<Label
							htmlFor="email"
							className="text-sm font-medium text-foreground"
						>
							Email
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="Enter email"
							value={formData.email}
							onChange={(e) =>
								handleInputChange("email", e.target.value)
							}
						/>
					</div>

					<div className="space-y-2">
						<Label
							htmlFor="password"
							className="text-sm font-medium text-foreground"
						>
							Password
						</Label>
						<div className="relative">
							<Input
								id="password"
								type={showPassword ? "text" : "password"}
								placeholder="••••••••••••"
								value={formData.password}
								onChange={(e) =>
									handleInputChange(
										"password",
										e.target.value
									)
								}
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
							>
								{showPassword ? (
									<EyeOff className="h-5 w-5 text-primary" />
								) : (
									<Eye className="h-5 w-5 text-primary" />
								)}
							</button>
						</div>
					</div>
				</div>

				<div className="pt-4">
					<Button type="submit">Add User</Button>
				</div>
			</form>
		</div>
	);
};

const AIConfiguration = ({
	previousStep,
	nextStep,
}: {
	previousStep: () => void;
	nextStep: () => void;
}) => {
	const [formData, setFormData] = useState({
		assistantName: "",
		welcomeMessage: "",
		voiceTone: "",
		conversationTones: [] as string[],
	});

	const conversationToneOptions = [
		"Calm And Reassuring",
		"Professional And Sophisticated",
		"Friendly And Conversational",
		"Luxurious And Minimalist",
		"Smart And Effective",
	];

	const handleInputChange = (field: string, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const toggleConversationTone = (tone: string) => {
		setFormData((prev) => ({
			...prev,
			conversationTones: prev.conversationTones.includes(tone)
				? prev.conversationTones.filter((t) => t !== tone)
				: [...prev.conversationTones, tone],
		}));
	};

	return (
		<>
			<div className="w-full p-8 bg-orange-50/30 rounded-2xl border border-orange-200/50">
				<div className="space-y-6">
					<h1 className="text-2xl font-semibold text-gray-900 mb-6">
						AI Configuration
					</h1>

					<div className="space-y-6">
						{/* Assistant Name */}
						<div className="space-y-3">
							<Label
								htmlFor="assistantName"
								className="text-base font-medium text-gray-900"
							>
								Assistant Name
							</Label>
							<Input
								id="assistantName"
								type="text"
								placeholder="Assistant, or you business name"
								value={formData.assistantName}
								onChange={(e) =>
									handleInputChange(
										"assistantName",
										e.target.value
									)
								}
								className="h-14 bg-orange-50/50 border-orange-200 focus:border-orange-300 text-base placeholder:text-gray-500 rounded-lg"
							/>
						</div>

						{/* Welcome Message */}
						<div className="space-y-3">
							<Label
								htmlFor="welcomeMessage"
								className="text-base font-medium text-gray-900"
							>
								Welcome message
							</Label>
							<Textarea
								id="welcomeMessage"
								placeholder="Describe your Business and services..."
								value={formData.welcomeMessage}
								onChange={(e) =>
									handleInputChange(
										"welcomeMessage",
										e.target.value
									)
								}
								className="min-h-[120px] bg-orange-50/50 border-orange-200 focus:border-orange-300 text-base placeholder:text-gray-500 rounded-lg resize-none"
							/>
						</div>

						{/* AI Conversation Tone */}
						<div className="space-y-4">
							<Label className="text-base font-medium text-gray-900">
								AI Conversation Tone
							</Label>

							{/* Voice Tone Dropdown */}
							<Select
								value={formData.voiceTone}
								onValueChange={(value) =>
									handleInputChange("voiceTone", value)
								}
							>
								<SelectTrigger className="h-14 bg-orange-50/50 border-orange-200 focus:border-orange-300 text-base rounded-lg">
									<SelectValue placeholder="Select Voice Tone" />
								</SelectTrigger>
								<SelectContent className="bg-white border-orange-200 rounded-lg">
									{conversationToneOptions.map((tone) => (
										<SelectItem
											key={tone}
											value={tone
												.toLowerCase()
												.replace(/\s+/g, "-")}
											className="text-base"
										>
											{tone}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex items-center justify-between py-8">
				<Button variant="secondary" onClick={previousStep}>
					<ArrowLeft size={12} />
					Previous
				</Button>
				<Button onClick={nextStep}>
					Continue
					<ArrowRight size={12} />
				</Button>
			</div>
		</>
	);
};

const AllSet = ({ previousStep }: { previousStep: () => void }) => {
	return (
		<>
			<div className="p-4 flex items-center justify-center bg-background">
				<div className="w-full p-1 rounded-2xl">
					<div className="rounded-xl p-8">
						{/* Logo Section */}
						<div className="flex flex-col items-center justify-center text-center mb-4">
							<div className="flex items-center justify-center w-20 h-20">
								<img
									src={LogoIcon}
									alt="nuvía"
									className="max-w-full"
								/>
							</div>
						</div>

						{/* Main Heading */}
						<div className="text-center mb-8">
							<h1 className="text-3xl font-bold text-gray-900 mb-4">
								You're All Set!
							</h1>
							<p className="text-gray-600 text-sm leading-relaxed">
								Your AI assistant is ready to handle customer
								conversations across your platforms
							</p>
						</div>

						{/* Status Items */}
						<div className="space-y-4">
							{/* Business Profile Created */}
							<div className="bg-secondary border rounded-xl p-4 flex items-start gap-4">
								<div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
									<Check className="w-5 h-5 text-white" />
								</div>
								<div>
									<h3 className="font-semibold text-primary mb-1">
										Business Profile Created
									</h3>
									<p className="text-foreground text-sm">
										is ready for customers
									</p>
								</div>
							</div>

							{/* Platforms Connected */}
							<div className="bg-secondary border rounded-xl p-4 flex items-start gap-4">
								<div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
									<Check className="w-5 h-5 text-white" />
								</div>
								<div>
									<h3 className="font-semibold text-primary mb-1">
										Platforms Connected
									</h3>
									<p className="text-foreground text-sm">
										1 messaging platform ready
									</p>
								</div>
							</div>

							{/* AI Assistant Active */}
							<div className="bg-secondary border rounded-xl p-4 flex items-start gap-4">
								<div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
									<Check className="w-5 h-5 text-white" />
								</div>
								<div>
									<h3 className="font-semibold text-primary mb-1">
										AI Assistant Active
									</h3>
									<p className="text-foreground text-sm">
										Ready to handle customer inquiries 24/7
									</p>
								</div>
							</div>

							{/* Team Member */}
							<div className="bg-secondary border rounded-xl p-4 flex items-start gap-4">
								<div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
									<Check className="w-5 h-5 text-white" />
								</div>
								<div>
									<h3 className="font-semibold text-primary mb-1">
										Team member
									</h3>
									<p className="text-foreground text-sm">
										5 members are ready to launch the
										dashboard
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex items-center justify-between py-8">
				<Button variant="secondary" onClick={previousStep}>
					<ArrowLeft size={12} />
					Previous
				</Button>
				<Link to={"/user/dashboard"}>
					<Button>
						Go To Dashboard
						<ArrowRight size={12} />
					</Button>
				</Link>
			</div>
		</>
	);
};
