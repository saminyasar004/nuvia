import Hero from "@/pages/Home/Hero";
import BrandPartners from "./BrandPartners";
import Feature from "./Feature";
import Process from "./Process";
import PromotionalVideo from "./PromotionalVideo";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import CTA from "./CTA";
import DataFlow from "./DataFlow";

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
