import UserDashboardLayout from "@/components/common/user-dashboard-layout";
import Layout from "@/components/common/layout";
import Login from "@/pages/auth/login";
import Home from "@/pages/home";
import PrivacyPolicy from "@/pages/legal/privacy-policy";
import TermsAndCondition from "@/pages/legal/terms-and-condition";
import UserDashboard from "@/pages/user/dashboard";
import Conversations from "@/pages/user/conversations";
import Appointments from "@/pages/user/appointments";
import Customers from "@/pages/user/customers";
import Signup from "@/pages/auth/signup";
import ForgotPassword from "@/pages/auth/forgot-password";
import VerifyOtp from "@/pages/auth/verify-otp";
import UserSettings from "@/pages/user/settings";
import BusinessProfile from "@/pages/user/business-profile";
import Subscriptions from "@/pages/user/subscriptions";
import Onboarding from "@/pages/on-boarding";
import AdminDashboard from "@/pages/admin/dashboard";
import AdminDashboardLayout from "@/components/common/admin-dashboard-layout";
import BusinessManagement from "@/pages/admin/business-management";
import AdminSubscriptions from "@/pages/admin/subscriptions";
import Notifications from "@/components/common/notifications";
import AdminSettings from "@/pages/admin/settings";
import Analytics from "@/pages/admin/analytics";

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
		element: UserDashboard,
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
		element: UserSettings,
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
	{
		path: "/user/notifications",
		element: Notifications,
		layout: UserDashboardLayout,
	},
	{
		path: "/admin/dashboard",
		element: AdminDashboard,
		layout: AdminDashboardLayout,
	},
	{
		path: "/admin/management",
		element: BusinessManagement,
		layout: AdminDashboardLayout,
	},
	{
		path: "/admin/subscriptions",
		element: AdminSubscriptions,
		layout: AdminDashboardLayout,
	},
	{
		path: "/admin/notifications",
		element: Notifications,
		layout: AdminDashboardLayout,
	},
	{
		path: "/admin/settings",
		element: AdminSettings,
		layout: AdminDashboardLayout,
	},
	{
		path: "/admin/analytics",
		element: Analytics,
		layout: AdminDashboardLayout,
	},
];
