import Logo from "@/assets/images/logo.svg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
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
							Forgot Password
						</h2>
						<p className="text-gray-500 text-sm">
							Enter your email to reset your password
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

						<div className="form-group">
							<Link to={"/verify-otp"}>
								<Button className="w-full">Send</Button>
							</Link>
						</div>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
