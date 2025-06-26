import Favicon from "@/assets/images/favicon.svg";
import { Confetti, type ConfettiRef } from "@/components/magicui/confetti";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { useRef } from "react";

export default function CTA() {
	const confettiRef = useRef<ConfettiRef>(null);

	return (
		<section className="py-16 bg-accent border border-dashed border-[#F1CF6D] mb-32">
			<div className="container grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
				<div className="relative flex flex-col gap-3 items-center lg:items-start text-center lg:text-left">
					<div className="relative">
						<h3 className="font-bold text-3xl lg:text-5xl text-primary">
							Ready to Transform Your Customer Service?
						</h3>

						<Confetti
							ref={confettiRef}
							className="absolute left-0 top-0 z-0 size-full"
							onMouseEnter={() => {
								confettiRef.current?.fire({});
							}}
						/>
					</div>

					<p className="lg:w-[80%] text-sm leading-normal">
						Join hundreds of businesses already using ChatFlow to
						automate customer interactions and grow their revenue.
					</p>

					<div className="w-full py-8">
						<InteractiveHoverButton>
							Get Started
						</InteractiveHoverButton>
					</div>
				</div>
				<div className="w-full flex items-center justify-center lg:justify-end">
					<img
						src={Favicon}
						alt="Easechat"
						className="max-w-[70%] lg:max-w-full"
					/>
				</div>
			</div>
		</section>
	);
}
