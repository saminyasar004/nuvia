import Logo from "@/assets/images/logo.svg";
import GoogleIcon from "@/assets/images/google.svg";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Signup() {
	const [isPasswordShow, setIsPasswordShow] = useState(false);
	const [isConfirmPasswordShow, setIsConfirmPasswordShow] = useState(false);

	return (
		<section className="min-h-screen w-full flex justify-center items-center bg-pattern-banner bg-no-repeat bg-cover bg-center">
			<Card className="w-[35rem] sm:max-w-5xl bg-white/80 backdrop-blur-lg">
				<CardHeader>
					<div className="w-full flex flex-col gap-4 items-center justify-center">
						<div className="w-full flex items-center justify-center">
							<Link to={"/"}>
								<img
									src={Logo}
									alt="nuvía"
									className="max-w-full"
								/>
							</Link>
						</div>

						<h2 className="font-semibold text-3xl text-primary">
							Create Account
						</h2>
						<p className="text-gray-500 text-sm">
							Enter your information to get started with Nuvía
						</p>
					</div>
				</CardHeader>

				<CardContent>
					<div className="w-full flex flex-col gap-5">
						<div className="form-group">
							<Input
								type="name"
								name="name"
								placeholder="Full Name"
							/>
						</div>

						<div className="form-group">
							<Input
								type="email"
								name="email"
								placeholder="Email"
							/>
						</div>

						<div className="form-group relative">
							<Input
								type={isPasswordShow ? "text" : "password"}
								name="password"
								placeholder="Password"
							/>
							{isPasswordShow ? (
								<EyeOff
									onClick={() =>
										setIsPasswordShow(!isPasswordShow)
									}
									size={18}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
								/>
							) : (
								<Eye
									onClick={() =>
										setIsPasswordShow(!isPasswordShow)
									}
									size={18}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
								/>
							)}
						</div>

						<div className="form-group relative">
							<Input
								type={
									isConfirmPasswordShow ? "text" : "password"
								}
								name="password"
								placeholder="Confirm Password"
							/>
							{isConfirmPasswordShow ? (
								<EyeOff
									onClick={() =>
										setIsConfirmPasswordShow(
											!isConfirmPasswordShow
										)
									}
									size={18}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
								/>
							) : (
								<Eye
									onClick={() =>
										setIsConfirmPasswordShow(
											!isConfirmPasswordShow
										)
									}
									size={18}
									className="absolute right-3 top-1/2 -translate-y-1/2 text-primary cursor-pointer"
								/>
							)}
						</div>

						<div className="form-group flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Checkbox id="accept-terms-n-condition" />
								<Label
									htmlFor="accept-terms-n-condition"
									className="cursor-pointer"
								>
									Accept{" "}
									<Link
										to={"/terms-and-condition"}
										className="underline"
									>
										Terms and Condition
									</Link>
								</Label>
							</div>
						</div>

						<div className="form-group">
							<Link to={"/on-boarding"}>
								<Button className="w-full">Sign Up</Button>
							</Link>
						</div>

						<div className="form-group text-center">
							<p className="text-gray-500 text-sm">
								Already have an account?{" "}
								<Link
									to={"/login"}
									className="text-primary hover:underline"
								>
									Login
								</Link>
							</p>
						</div>

						<div className="form-group">
							<Button variant="outline" className="w-full">
								<img
									src={GoogleIcon}
									alt="google"
									className="w-5 h-5"
								/>
								Continue with Google
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
