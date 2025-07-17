import Hero from "@/pages/home/hero";
import BrandPartners from "./brand-partners";
import Feature from "./feature";
import Process from "./process";
import PromotionalVideo from "./promotional-video";
import Pricing from "./pricing";
import FAQ from "./faq";
import Testimonial from "./testimonial";
import Contact from "./contact";
import CTA from "./cta";
import DataFlow from "./data-flow";

export default function Home() {
	return (
		<>
			<Hero />
			<BrandPartners />
			<Feature />
			<Process />
			<DataFlow />
			<PromotionalVideo />
			<Pricing />
			<FAQ />
			<Testimonial />
			<Contact />
			<CTA />
		</>
	);
}
