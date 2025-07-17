import Logo from "@/assets/images/logo-white.svg";
import FacebookImg from "@/assets/images/facebook.svg";
import InstagramImg from "@/assets/images/instagram.svg";
import WhatsappImg from "@/assets/images/whatsapp.svg";
import { Link, NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Facebook, MoveRight } from "lucide-react";

export default function Footer() {
	const navMenus = [
		{ title: "Home", url: "/#home" },
		{ title: "Features", url: "/#feature" },
		{ title: "How it works", url: "/#how-it-works" },
		{ title: "Pricing", url: "/#pricing" },
		{ title: "FAQ", url: "/#faq" },
		{ title: "Testimonials", url: "/#testimonials" },
	];

	return (
		<footer className="bg-theme w-full py-12">
			<div className="container grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-0">
				<div className="lg:col-span-2 flex flex-col gap-4">
					<img
						src={Logo}
						alt="nuvía"
						className="max-w-[40%] lg:max-w-[20%]"
					/>

					<p className="text-white text-sm font-medium lg:w-[60%] leading-normal">
						AI-powered chatbots for businesses of all sizes.
						Automate appointment booking, answer customer questions,
						and grow your business.
					</p>

					<div className="flex gap-3">
						<a href="#">
							<img
								src={FacebookImg}
								alt="Facebook"
								className="max-w-full"
							/>
						</a>

						<a href="#">
							<img
								src={InstagramImg}
								alt="Instagram"
								className="max-w-full"
							/>
						</a>

						<a href="#">
							<img
								src={WhatsappImg}
								alt="WhatsApp"
								className="max-w-full"
							/>
						</a>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h4 className="text-white font-semibold">
						Legal Information
					</h4>

					<div className="flex flex-col gap-2 text-white">
						<Link
							to={"/privacy-policy"}
							className="w-max hover:underline transition-all duration-150"
						>
							Privacy / Policy
						</Link>
						<Link
							to={"/terms-and-condition"}
							className="w-max hover:underline transition-all duration-150"
						>
							Terms & Conditions
						</Link>
					</div>
				</div>

				<div className="flex flex-col gap-4">
					<h4 className="text-white font-semibold">
						Navigation Links
					</h4>

					<div className="flex flex-col gap-2 text-white">
						{navMenus.map((menu, index) => (
							<a
								key={index}
								href={menu.url}
								className="w-max hover:underline transition-all duration-150"
							>
								{menu.title}
							</a>
						))}
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<h4 className="text-white font-semibold">Subscribe</h4>

					<div className="flex gap-0 items-center justify-center lg:justify-start w-full relative">
						<Input
							type="email"
							name="email"
							className="h-12 pl-4 w-full rounded-full text-sm"
							placeholder="Email address"
						/>
						<button className="bg-primary hover:bg-primary/90 text-white flex items-center justify-center px-4 h-12 rounded-full absolute top-0 right-0">
							<MoveRight size={24} className="lg:w-30 lg:h-30" />
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
}
