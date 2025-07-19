import AvatarImg from "@/assets/images/avatar.png";
import DashboardHeader from "@/components/common/dashboard-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Eye,
	EyeOff,
	LockKeyhole,
	Mail,
	PenLine,
	Phone,
	UserRound,
} from "lucide-react";
import { useState } from "react";

export default function UserSettings() {
	const [isHideConfirmPassword, setIsHideConfirmPassword] = useState(false);
	const [isHideNewPassword, setIsHideNewPassword] = useState(false);
	const [isHideConfirmNewPassword, setIsHideConfirmNewPassword] =
		useState(false);
	const [isEditName, setIsEditName] = useState(false);
	const [name, setName] = useState("Samin Yasar");

	return (
		<section className="w-full">
			{/* dashboard header */}
			<DashboardHeader
				title="Profile Information"
				description="View and manage customer profiles and interaction history"
			/>

			<div className="w-full py-14 px-8 flex flex-col items-center justify-center gap-5">
				<div className="w-full flex items-center justify-center gap-4">
					<div className="relative w-24 h-24">
						<div className="w-full h-full rounded-full overflow-hidden border-2 border-primary">
							<img
								src={AvatarImg}
								alt="User Avatar"
								className="max-w-full"
							/>
						</div>

						<span className="absolute -right-1 bottom-2 w-8 h-8 p-2 flex items-center justify-center bg-primary text-warning rounded-full cursor-pointer">
							<PenLine
								size={18}
								onClick={() => setIsEditName(!isEditName)}
							/>
						</span>
					</div>
					{isEditName ? (
						<div className="flex gap-3 items-center">
							<Input
								value={name}
								onChange={(e) => setName(e.target.value)}
								className=""
								placeholder="Enter new name"
							/>
							<Button
								onClick={() => setIsEditName(!isEditName)}
								size="sm"
							>
								Save
							</Button>
						</div>
					) : (
						<h5 className="text-4xl font-medium text-foreground">
							{name}
						</h5>
					)}
				</div>

				<div className="form w-full py-10 flex flex-col items-center gap-6">
					<Tabs className="max-w-5xl" defaultValue="edit-profile">
						<TabsList className="bg-transparent">
							<TabsTrigger value="edit-profile">
								Edit Profile
							</TabsTrigger>
							<TabsTrigger value="change-password">
								Change Password
							</TabsTrigger>
						</TabsList>

						<TabsContent
							value="edit-profile"
							className="w-[500px] py-6 space-y-4"
						>
							<h3 className="text-primary font-semibold text-2xl">
								Edit Your Profile
							</h3>

							<div className="form-group space-y-2 w-full">
								<Label
									htmlFor="fullname"
									className="text-foreground cursor-pointer"
								>
									Full Name
								</Label>
								<div className="relative w-full">
									<Input
										id="fullname"
										type="text"
										name="name"
										className="w-full pl-12 "
										placeholder="John Smith"
									/>
									<UserRound
										className="text-primary absolute top-1/2 -translate-y-1/2 left-5 pointer-events-none"
										size={14}
									/>
								</div>
							</div>

							<div className="form-group space-y-2 w-full">
								<Label
									htmlFor="number"
									className="text-foreground cursor-pointer"
								>
									Number
								</Label>
								<div className="relative w-full">
									<Input
										id="number"
										type="text"
										name="name"
										className="w-full pl-12 "
										placeholder="+0140536393"
									/>
									<Phone
										className="text-primary absolute top-1/2 -translate-y-1/2 left-5 pointer-events-none"
										size={14}
									/>
								</div>
							</div>

							<div className="form-group space-y-2 w-full">
								<Label
									htmlFor="email"
									className="text-foreground cursor-pointer"
								>
									Email
								</Label>
								<div className="relative w-full">
									<Input
										id="email"
										type="email"
										name="email"
										className="w-full pl-12 "
										placeholder="owner@example.com"
									/>
									<Mail
										className="text-primary absolute top-1/2 -translate-y-1/2 left-5 pointer-events-none"
										size={14}
									/>
								</div>
							</div>

							<div className="form-group w-full">
								<Button className="w-full">
									Save & Change
								</Button>
							</div>
						</TabsContent>
						<TabsContent
							value="change-password"
							className="w-[500px] py-6 space-y-4"
						>
							<h3 className="text-primary font-semibold text-2xl">
								Edit Your Password
							</h3>

							<div className="form-group space-y-2 w-full">
								<Label
									htmlFor="current-password"
									className="font-lora font-normal text-base text-foreground cursor-pointer"
								>
									Current Password
								</Label>
								<div className="relative w-full">
									<Input
										id="current-password"
										type={
											isHideConfirmPassword
												? "password"
												: "text"
										}
										name="current-password"
										className="w-full pl-12 "
										placeholder="Enter new password"
									/>
									<LockKeyhole
										className="text-primary absolute top-1/2 -translate-y-1/2 left-5 pointer-events-none"
										size={14}
									/>
									{isHideConfirmPassword ? (
										<Eye
											onClick={() =>
												setIsHideConfirmPassword(
													!isHideConfirmPassword
												)
											}
											className="text-primary absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
											size={14}
										/>
									) : (
										<EyeOff
											onClick={() =>
												setIsHideConfirmPassword(
													!isHideConfirmPassword
												)
											}
											className="text-primary absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
											size={14}
										/>
									)}
								</div>
							</div>

							<div className="form-group space-y-2 w-full">
								<Label
									htmlFor="new-password"
									className="font-lora font-normal text-base text-foreground cursor-pointer"
								>
									New Password
								</Label>
								<div className="relative w-full">
									<Input
										id="new-password"
										type={
											isHideNewPassword
												? "password"
												: "text"
										}
										name="new-password"
										className="w-full pl-12 "
										placeholder="Confirm new password"
									/>
									<LockKeyhole
										className="text-primary absolute top-1/2 -translate-y-1/2 left-5 pointer-events-none"
										size={14}
									/>
									{isHideNewPassword ? (
										<Eye
											onClick={() =>
												setIsHideNewPassword(
													!isHideNewPassword
												)
											}
											className="text-primary absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
											size={14}
										/>
									) : (
										<EyeOff
											onClick={() =>
												setIsHideNewPassword(
													!isHideNewPassword
												)
											}
											className="text-primary absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
											size={14}
										/>
									)}
								</div>
							</div>

							<div className="form-group space-y-2 w-full">
								<Label
									htmlFor="confirm-new-password"
									className="font-lora font-normal text-base text-foreground cursor-pointer"
								>
									Confirm New Password
								</Label>
								<div className="relative w-full">
									<Input
										id="confirm-new-password"
										type={
											isHideConfirmNewPassword
												? "password"
												: "text"
										}
										name="confirm-new-password"
										className="w-full pl-12 "
										placeholder="Enter new password"
									/>
									<LockKeyhole
										className="text-primary absolute top-1/2 -translate-y-1/2 left-5 pointer-events-none"
										size={14}
									/>
									{isHideConfirmNewPassword ? (
										<Eye
											onClick={() =>
												setIsHideConfirmNewPassword(
													!isHideConfirmNewPassword
												)
											}
											className="text-primary absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
											size={14}
										/>
									) : (
										<EyeOff
											onClick={() =>
												setIsHideConfirmNewPassword(
													!isHideConfirmNewPassword
												)
											}
											className="text-primary absolute top-1/2 -translate-y-1/2 right-5 cursor-pointer"
											size={14}
										/>
									)}
								</div>
							</div>

							<div className="form-group w-full">
								<Button className="w-full">
									Save & Change
								</Button>
							</div>
						</TabsContent>
					</Tabs>
				</div>
			</div>
		</section>
	);
}
