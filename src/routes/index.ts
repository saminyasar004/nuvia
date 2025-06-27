import UserDashboardLayout from "@/components/common/UserDashboardLayout";
import Layout from "@/components/common/Layout";
import Login from "@/pages/auth/Login";
import Home from "@/pages/Home/Index";
import PrivacyPolicy from "@/pages/Legal/PrivacyPolicy";
import TermsAndCondition from "@/pages/Legal/TermsAndCondition";
import Dashboard from "@/pages/User/Dashboard";
import Conversations from "@/pages/User/Conversations";

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
	{
		path: "/login",
		element: Login,
	},
	{
		path: "/user/dashboard",
		element: Dashboard,
		layout: UserDashboardLayout,
	},
	{
		path: "/user/conversations",
		element: Conversations,
		layout: UserDashboardLayout,
	},
];
