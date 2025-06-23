import Logo from "@/assets/images/logo-black.svg";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

export default function Header() {
	const location = useLocation();

	const navMenus = [
		{ title: "Home", url: "/" },
		{ title: "Features", url: "/features" },
		{ title: "How it works", url: "/how-it-works" },
		{ title: "Pricing", url: "/pricing" },
		{ title: "Testimonials", url: "/testimonials" },
		{ title: "FAQ", url: "/faq" },
	];

	return (
		<header className="w-full h-auto py-3 bg-background/50 sticky top-0 z-50 backdrop-blur-lg shadow-sm transition-all duration-300 ease-in-out">
			<div className="container grid grid-cols-4 gap-3 items-center">
				<div className="flex items-center justify-start">
					<Link to={"/"}>
						<img src={Logo} alt="easechat" className="max-w-full" />
					</Link>
				</div>

				<div className="col-span-2">
					<div className="w-full flex gap-6 items-center">
						{navMenus.map((menu, index) => (
							<Link
								key={index}
								to={menu.url}
								className={cn(
									"font-medium py-1 transition-all duration-300 hover:text-primary relative after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:contents-[''] after:absolute after:left-0 after:bottom-0 after:bg-primary",
									location.pathname === menu.url &&
										"text-primary after:w-full"
								)}
							>
								{menu.title}
							</Link>
						))}
					</div>
				</div>

				<div className="w-full flex items-center justify-end gap-3">
					<Button className="rounded-full">Sign Up</Button>
					<Button variant="secondary" className="rounded-full">
						Log in
					</Button>
				</div>
			</div>
		</header>
	);
}
