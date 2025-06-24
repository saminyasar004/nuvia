import Layout from "@/components/common/Layout";
import Home from "@/pages/Home/Index";
import Privacy from "@/pages/Legal/privacy";

export interface Route {
	path: string;
	element: JSX.Element;
	layout?: JSX.Element;
}

export const routes = [
	{
		path: "/",
		element: Home,
		layout: Layout,
	},
	{
		path: "/privacy-policy",
		element: Privacy,
		layout: Layout,
	},
];
