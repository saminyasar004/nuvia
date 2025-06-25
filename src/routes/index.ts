import Layout from "@/components/common/Layout";
import Home from "@/pages/Home/Index";
import PrivacyPolicy from "@/pages/Legal/PrivacyPolicy";
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
	{
		path: "/privacy-policy",
		element: PrivacyPolicy,
		layout: Layout,
	},
];
