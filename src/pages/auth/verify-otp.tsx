import Logo from "@/assets/images/logo.svg";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function VerifyOtp() {
	const length = 6;
	const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	useEffect(() => {
		inputRefs.current = inputRefs.current.slice(0, length);
	}, [length]);

	const handleChange = (index: number, value: string) => {
		// Only allow single digit
		if (value.length > 1) return;

		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		// Auto-focus next input
		if (value !== "" && index < length - 1) {
			inputRefs.current[index + 1]?.focus();
		}

		// Check if OTP is complete
		const otpString = newOtp.join("");
		if (otpString.length === length) {
			// onComplete(otpString);
		}
	};

	const handleKeyDown = (
		index: number,
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		// Handle backspace
		if (e.key === "Backspace") {
			if (otp[index] === "" && index > 0) {
				// Move to previous input if current is empty
				inputRefs.current[index - 1]?.focus();
			} else {
				// Clear current input
				const newOtp = [...otp];
				newOtp[index] = "";
				setOtp(newOtp);
			}
		}
		// Handle arrow keys
		else if (e.key === "ArrowLeft" && index > 0) {
			inputRefs.current[index - 1]?.focus();
		} else if (e.key === "ArrowRight" && index < length - 1) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handlePaste = (e: React.ClipboardEvent) => {
		e.preventDefault();
		const pastedData = e.clipboardData.getData("text");
		const pastedArray = pastedData.slice(0, length).split("");

		// Fill the OTP array with pasted data
		const newOtp = [...otp];
		pastedArray.forEach((char, index) => {
			if (index < length && /^\d$/.test(char)) {
				newOtp[index] = char;
			}
		});

		setOtp(newOtp);

		// Focus the next empty input or the last input
		const nextEmptyIndex = newOtp.findIndex((val) => val === "");
		const focusIndex =
			nextEmptyIndex === -1
				? length - 1
				: Math.min(nextEmptyIndex, pastedArray.length);
		inputRefs.current[focusIndex]?.focus();

		// Check if OTP is complete after paste
		const otpString = newOtp.join("");
		if (otpString.length === length) {
			// onComplete(otpString);
		}
	};

	const handleFocus = (index: number) => {
		// Select all text when focused
		inputRefs.current[index]?.select();
	};

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
							New Account Verification
						</h2>
						<p className="text-xs md:text-sm text-center">
							Enter the code sent to{" "}
							<span className="text-primary underline">
								jef@gmail.com
							</span>
						</p>
					</div>
				</CardHeader>

				<CardContent className="flex flex-col gap-4">
					<div className="form-group flex gap-4 items-center justify-center py-5">
						{otp.map((digit, index) => (
							<input
								key={index}
								ref={(el) => (inputRefs.current[index] = el)}
								type="text"
								inputMode="numeric"
								pattern="\d*"
								maxLength={1}
								value={digit}
								onChange={(e) =>
									handleChange(index, e.target.value)
								}
								onKeyDown={(e) => handleKeyDown(index, e)}
								onPaste={handlePaste}
								onFocus={() => handleFocus(index)}
								className={cn(
									"w-12 h-12 lg:w-16 lg:h-16 text-center text-xl font-semibold border-2 border-primary-gray/20 rounded-lg focus:border-primary outline-none transition-all duration-200 hover:border-primary",
									digit
										? "bg-primary text-white"
										: "bg-white text-black"
								)}
							/>
						))}
					</div>

					<div className="form-group">
						<Link to={"/on-boarding"}>
							<Button className="w-full">Confirm</Button>
						</Link>
					</div>

					<div className="form-group text-center">
						<p className="text-gray-500 text-sm">
							Didn't receive the otp?{" "}
							<Link
								to={"/signup"}
								className="text-primary hover:underline"
							>
								Resend
							</Link>
						</p>
					</div>
				</CardContent>
			</Card>
		</section>
	);
}
