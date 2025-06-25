import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Layout({ children }) {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
