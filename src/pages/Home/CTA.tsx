import Favicon from "@/assets/images/favicon.svg";
import { Button } from "@/components/ui/button";

export default function CTA() {
	return (
		<section className="py-16 bg-accent border border-dashed border-[#F1CF6D] mb-32">
			<div className="container grid grid-cols-2 gap-4 items-center">
				<div className="flex flex-col gap-3">
					<h3 className="font-bold text-5xl text-primary">
						Ready to Transform Your Customer Service?
					</h3>

					<p className="w-[80%] text-sm leading-normal">
						Join hundreds of businesses already using ChatFlow to
						automate customer interactions and grow their revenue.
					</p>

					<div className="w-full py-8">
						<Button className="rounded-full" size="lg">
							Get Started
						</Button>
					</div>
				</div>
				<div className="w-full flex items-center justify-end">
					<img src={Favicon} alt="Easechat" />
				</div>
			</div>
		</section>
	);
}
