import UserDashboardLayout from "@/components/common/UserDashboardLayout";
import Layout from "@/components/common/Layout";
import Login from "@/pages/auth/login";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/Legal/privacy-policy";
import TermsAndCondition from "@/pages/Legal/terms-and-condition";
import Dashboard from "@/pages/User/dashboard";
import Conversations from "@/pages/User/conversations";
import Appointments from "@/pages/User/appointments";
import Customers from "@/pages/User/customers";
import Signup from "@/pages/auth/signup";
import ForgotPassword from "@/pages/auth/forgot-password";
import VerifyOtp from "@/pages/auth/verify-otp";

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
		path: "/signup",
		element: Signup,
	},
	{
		path: "/forgot-password",
		element: ForgotPassword,
	},
	{
		path: "/verify-otp",
		element: VerifyOtp,
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
	{
		path: "/user/appointments",
		element: Appointments,
		layout: UserDashboardLayout,
	},
	{
		path: "/user/customers",
		element: Customers,
		layout: UserDashboardLayout,
	},
];
