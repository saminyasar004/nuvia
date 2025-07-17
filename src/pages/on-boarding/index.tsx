import FacebookImg from "@/assets/images/facebook.svg";
import WhatsappImg from "@/assets/images/whatsapp.svg";
import InstagramImg from "@/assets/images/instagram.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	ArrowLeft,
	ArrowRight,
	BotMessageSquare,
	BriefcaseBusiness,
	CheckCircle,
	MonitorCheck,
	PlusIcon,
	Users,
} from "lucide-react";
import { serviceHoursDetails } from "../user/business-profile";
import { Switch } from "@/components/ui/switch";
import { DatePicker } from "@/components/common/date-picker";
import { TimePicker } from "@/components/common/time-picker";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Stepper } from "@mantine/core";
import { useState } from "react";

export default function Onboarding() {
	const [active, setActive] = useState(1);
	const nextStep = () =>
		setActive((current) => (current < 3 ? current + 1 : current));
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
							Step 3 content: Verify email
						</Stepper.Step>
						<Stepper.Step
							icon={<BotMessageSquare size={18} />}
							label="AI Configuration"
						>
							Step 4 content: Verify email
						</Stepper.Step>
						<Stepper.Step
							label="Go Live"
							icon={<CheckCircle size={18} />}
						>
							Step 5 content: Get full access
						</Stepper.Step>
						<Stepper.Completed>
							Completed, click back button to get to previous step
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
					</div>

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
	return (
		<>
			<div className="w-full grid grid-cols-3 gap-6 py-8">
				<div className="w-full h-full p-8 py-16 rounded-lg border border-theme bg-background flex flex-col gap-3 items-center">
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

				<div className="w-full h-full p-8 py-16 rounded-lg border border-theme bg-background flex flex-col gap-3 items-center">
					<img
						src={WhatsappImg}
						alt="WhatsApp"
						className="w-24 h-24"
					/>

					<h3 className="font-semibold text-xl text-theme">
						WhatsApp
					</h3>
					<p className="text-sm">
						Connect your WhatsApp Business account for customer
						messaging
					</p>
				</div>

				<div className="w-full h-full p-8 py-16 rounded-lg border border-theme bg-background flex flex-col gap-3 items-center">
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
