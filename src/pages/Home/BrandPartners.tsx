import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import AgodaImg from "@/assets/images/agoda.png";
import HotmartImg from "@/assets/images/hotmart.svg";
import LazadaImg from "@/assets/images/lazada.svg";
import McDonaldsImg from "@/assets/images/mcdonalds.svg";
import NotionImg from "@/assets/images/notion.png";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BrandPartners() {
	const brands = [
		{
			id: 1,
			img: McDonaldsImg,
			title: "McDonald's",
		},
		{
			id: 2,
			img: HotmartImg,
			title: "Hotmart",
		},
		{
			id: 3,
			img: LazadaImg,
			title: "Lazada",
		},
		{
			id: 4,
			img: AgodaImg,
			title: "Agoda",
		},
		{
			id: 5,
			img: HotmartImg,
			title: "Hotmart",
		},
		{
			id: 6,
			img: AgodaImg,
			title: "Agoda",
		},
		{
			id: 7,
			img: NotionImg,
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

			<Swiper
				modules={[Autoplay]}
				spaceBetween={10}
				slidesPerView={5}
				autoplay={{ delay: 2000, disableOnInteraction: false }}
				loop={true}
				className="overflow-hidden"
			>
				{brands.map((brand) => (
					<SwiperSlide key={brand.id} className="mb-24">
						<div className="flex items-center justify-center">
							<img
								src={brand.img}
								alt={brand.title}
								className="h-14 object-contain"
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
