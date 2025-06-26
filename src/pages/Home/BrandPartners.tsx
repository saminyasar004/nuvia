import EnigmaImg from "@/assets/images/enigma.svg";
import LuminaImg from "@/assets/images/lumina.svg";
import SpectrumImg from "@/assets/images/spectrum.svg";
import SynergyImg from "@/assets/images/synergy.svg";
import VelocityImg from "@/assets/images/velocity.svg";
import Marquee from "@/components/magicui/marquee";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BrandPartners() {
	const brands = [
		{
			id: 1,
			img: SynergyImg,
			title: "Agoda",
		},
		{
			id: 2,
			img: LuminaImg,
			title: "Agoda",
		},
		{
			id: 3,
			img: EnigmaImg,
			title: "Agoda",
		},
		{
			id: 4,
			img: VelocityImg,
			title: "Agoda",
		},
		{
			id: 5,
			img: SpectrumImg,
			title: "Agoda",
		},
	];

	return (
		<section className="py-24">
			<div className="container pb-12">
				<h5 className="font-medium text-primary text-center">
					Trusted by service professionals across industries
				</h5>
			</div>

			<div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
				<Marquee pauseOnHover reverse className="[--duration:10s]">
					{brands.map((brand) => (
						<div className="flex items-center justify-center">
							<img
								src={brand.img}
								alt={brand.title}
								className="h-14 object-contain"
							/>
						</div>
					))}
				</Marquee>
				<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
				<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
			</div>
		</section>
	);
}
