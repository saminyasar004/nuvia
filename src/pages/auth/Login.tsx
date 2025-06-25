import Logo from "@/assets/images/logo-black.svg";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Login() {
	const [isPasswordShow, setIsPasswordShow] = useState(false);

	return (
		<section className="min-h-screen w-full flex justify-center items-center">
			<Card className="w-[35rem] sm:max-w-5xl bg-white/80 backdrop-blur-lg">
				<CardHeader>
					<div className="w-full flex flex-col gap-4 items-center justify-center">
						<div className="w-full flex items-center justify-center">
							<Link to={"/"}>
								<img
									src={Logo}
									alt="Easechat"
									className="max-w-full"
								/>
							</Link>
						</div>

						<h2 className="font-semibold text-3xl text-primary">
							Welcome Back
						</h2>
						<p className="text-gray-500 text-sm">
							Enter your credentials to access your account
						</p>
					</div>
				</CardHeader>

				<CardContent>
					<div className="w-full flex flex-col gap-5">
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

						<div className="form-group flex items-center justify-between">
							<div className="flex items-center gap-2">
								<Checkbox id="remember-me" />
								<Label
									htmlFor="remember-me"
									className="cursor-pointer"
								>
									Remember me
								</Label>
							</div>
							<Link
								to={"/forget-password"}
								className="text-danger text-sm hover:underline"
							>
								Forget Password
							</Link>
						</div>

						<div className="form-group">
							<Button className="w-full">Login</Button>
						</div>

						<div className="form-group text-center">
							<p className="text-gray-500 text-sm">
								Don't have an account?{" "}
								<Link
									to={"/signup"}
									className="text-primary hover:underline"
								>
									Sign Up
								</Link>
							</p>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
