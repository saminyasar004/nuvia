import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";

const queryClient = new QueryClient();

const App = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000, // Optional: Set animation duration
		});
	}, []);

	return (
		<MantineProvider>
			<QueryClientProvider client={queryClient}>
				<TooltipProvider>
					<Sonner />
					<BrowserRouter>
						<Routes>
							{routes.map((route, index) => (
								<Route
									key={index}
									path={route.path}
									element={
										route.layout ? (
											<route.layout>
												<route.element />
											</route.layout>
										) : (
											<route.element />
										)
									}
								/>
							))}
						</Routes>
					</BrowserRouter>
				</TooltipProvider>
			</QueryClientProvider>
		</MantineProvider>
	);
};

export default App;
