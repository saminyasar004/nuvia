import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout({ children }) {
	const location = useLocation();

	useEffect(() => {
		const hash = location.hash;
		if (hash) {
			const element = document.getElementById(hash.substring(1));
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, [location]);

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
