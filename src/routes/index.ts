import UserDashboardLayout from "@/components/common/user-dashboard-layout";
import Layout from "@/components/common/layout";
import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import PrivacyPolicy from "@/pages/legal/privacy-policy";
import TermsAndCondition from "@/pages/legal/terms-and-condition";
import Dashboard from "@/pages/user/dashboard";
import Conversations from "@/pages/user/conversations";
import Appointments from "@/pages/user/appointments";
import Customers from "@/pages/user/customers";
import Signup from "@/pages/auth/signup";
import ForgotPassword from "@/pages/auth/forgot-password";
import VerifyOtp from "@/pages/auth/verify-otp";
import Settings from "@/pages/user/settings";
import BusinessProfile from "@/pages/user/business-profile";
import Subscriptions from "@/pages/user/subscriptions";
import Onboarding from "@/pages/on-boarding";

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
		path: "/on-boarding",
		element: Onboarding,
		layout: Layout,
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
	{
		path: "/user/settings",
		element: Settings,
		layout: UserDashboardLayout,
	},
	{
		path: "/user/business-profile",
		element: BusinessProfile,
		layout: UserDashboardLayout,
	},
	{
		path: "/user/subscriptions",
		element: Subscriptions,
		layout: UserDashboardLayout,
	},
];
