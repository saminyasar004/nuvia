import Logo from "@/assets/images/logo-black.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { AlignRight, List } from "lucide-react";

export default function Header() {
	const location = useLocation();

	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		targetId: string
	) => {
		e.preventDefault();
		if (window.location.pathname === "/") {
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: "smooth" });
			}
		} else if (targetId !== "home") {
			window.location.hash = `#${targetId}`;
		}
	};

	const navMenus = [
		{ title: "Home", url: "home" },
		{ title: "Features", url: "feature" },
		{ title: "How it works", url: "how-it-works" },
		{ title: "Pricing", url: "pricing" },
		{ title: "FAQ", url: "faq" },
		{ title: "Testimonials", url: "testimonials" },
	];

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
							<NavLink
								key={index}
								to={`/#${menu.url}`}
								onClick={(e) => handleNavClick(e, menu.url)}
								className={cn(
									"font-medium py-1 transition-all duration-300 hover:text-primary relative after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:contents-[''] after:absolute after:left-0 after:bottom-0 after:bg-primary",
									location.pathname === menu.url &&
										"text-primary after:w-full"
								)}
							>
								{menu.title}
							</NavLink>
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
					<Sheet>
						<SheetTrigger asChild>
							<span className="cursor-pointer hover:text-primary transition-all duration-300">
								<AlignRight
									className="pointer-events-none"
									size={32}
								/>
							</span>
						</SheetTrigger>
						<SheetContent className="pt-12">
							<div className="w-full">
								<div className="w-full flex flex-col gap-3 items-end">
									{navMenus.map((menu, index) => (
										<NavLink
											key={index}
											to={`/#${menu.url}`}
											onClick={(e) =>
												handleNavClick(e, menu.url)
											}
											className={cn(
												"font-medium py-1 transition-all duration-300 hover:text-primary relative after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-0.5 after:contents-[''] after:absolute after:left-0 after:bottom-0 after:bg-primary",
												location.pathname ===
													menu.url &&
													"text-primary after:w-full"
											)}
										>
											{menu.title}
										</NavLink>
									))}
								</div>
							</div>
							<SheetFooter className="pt-12 gap-4">
								<Button className="rounded-full">
									Sign Up
								</Button>
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
			</div>
		</header>
	);
}
