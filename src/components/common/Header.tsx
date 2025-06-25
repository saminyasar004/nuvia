import Logo from "@/assets/images/logo-black.svg";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { AlignRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";

export default function Header() {
	const location = useLocation();
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

	const navMenus = [
		{ title: "Home", url: "#home" },
		{ title: "Features", url: "#feature" },
		{ title: "How it works", url: "#how-it-works" },
		{ title: "Pricing", url: "#pricing" },
		{ title: "FAQ", url: "#faq" },
		{ title: "Testimonials", url: "#testimonials" },
	];

	useEffect(() => {
		console.log(location);
		if (isMobileNavOpen) {
			setIsMobileNavOpen(false);
		}
	}, [location]);

	return (
		<header className="w-full h-auto py-3 bg-background/50 sticky top-0 z-50 backdrop-blur-lg shadow-sm transition-all duration-300 ease-in-out">
			<div className="container grid grid-cols-2 lg:grid-cols-4 gap-3 items-center">
				<div className="flex items-center justify-start">
					<Link to={"/"}>
						<img
							src={Logo}
							alt="easechat"
							className="max-w-[70%] lg:max-w-full"
						/>
					</Link>
				</div>

				<div className="col-span-2 hidden lg:block">
					<div className="w-full flex gap-6 items-center">
						{navMenus.map((menu, index) => (
							<a
								key={index}
								href={`/${menu.url}`}
								className={cn(
									"font-medium py-1 transition-all duration-300 hover:text-primary relative after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:contents-[''] after:absolute after:left-0 after:bottom-0 after:bg-primary",
									location.hash === menu.url &&
										"text-primary after:w-full",
									location.hash === "" &&
										location.pathname === "/" &&
										menu.url === "#home" &&
										"text-primary after:w-full"
								)}
							>
								{menu.title}
							</a>
						))}
					</div>
				</div>

				<div className="lg:flex w-full hidden items-center justify-end gap-3">
					<Button className="rounded-full">Sign Up</Button>
					<Button variant="secondary" className="rounded-full">
						Log in
					</Button>
				</div>

				<div className="lg:hidden w-full flex items-center justify-end gap-3">
					<span
						onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
						className="cursor-pointer hover:text-primary transition-all duration-300"
					>
						<AlignRight className="pointer-events-none" size={32} />
					</span>
				</div>

				{/* Mobile Nav */}
				<Sheet open={isMobileNavOpen} onOpenChange={setIsMobileNavOpen}>
					<SheetContent className="pt-12">
						<div className="w-full">
							<div className="w-full flex flex-col gap-3 items-end">
								{navMenus.map((menu, index) => (
									<a
										key={index}
										href={menu.url}
										className={cn(
											"font-medium py-1 transition-all duration-300 hover:text-primary relative after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:contents-[''] after:absolute after:left-0 after:bottom-0 after:bg-primary",
											location.pathname === menu.url &&
												"text-primary after:w-full",
											location.hash === "" &&
												location.pathname === "/" &&
												menu.url === "#home" &&
												"text-primary after:w-full"
										)}
									>
										{menu.title}
									</a>
								))}
							</div>
						</div>
						<SheetFooter className="pt-12 gap-4">
							<Button className="rounded-full">Sign Up</Button>
							<Button
								variant="secondary"
								className="rounded-full"
							>
								Log in
							</Button>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
