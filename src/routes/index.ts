import Layout from "@/components/common/Layout";
import Home from "@/pages/Home/Index";
import TermsAndCondition from "@/pages/Legal/TermsAndCondition";

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
		path: "/terms-and-condition",
		element: TermsAndCondition,
		layout: Layout,
	},
];
