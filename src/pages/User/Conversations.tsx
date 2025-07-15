import { useState } from "react";
import { ConversationList } from "./ConversationList";
import { ChatArea } from "./ChatArea";
import DashboardHeader from "@/components/common/DashboardHeader";
import AvatarImg from "@/assets/images/avatar.png";

export interface Message {
	id: string;
	text: string;
	sender: "user" | "bot";
	timestamp: string;
}

export interface Conversation {
	id: string;
	name: string;
	avatar: string;
	lastMessage: string;
	timestamp: string;
	status: "Active" | "Pending" | "Reschedule" | "Completed";
	socialPlatform: "whatsapp" | "instagram" | "facebook";
	messages: Message[];
}

const mockConversations: Conversation[] = [
	{
		id: "1",
		name: "Pappu",
		avatar: AvatarImg,
		lastMessage: "Thank you! See you tomorrow at...",
		timestamp: "2 hrs ago",
		status: "Active",
		socialPlatform: "whatsapp",
		messages: [
			{
				id: "1",
				text: "Hi, I'd like to book a haircut appointment",
				sender: "user",
				timestamp: "2:32 PM",
			},
			{
				id: "2",
				text: "Hello! I'd be happy to help you book a haircut appointment. What day works best for you?",
				sender: "bot",
				timestamp: "2:32 PM",
			},
			{
				id: "3",
				text: "Tomorrow if possible",
				sender: "user",
				timestamp: "2:32 PM",
			},
			{
				id: "4",
				text: "Great! I have availability tomorrow at 2 PM or 4 PM. Which time works better for you?",
				sender: "bot",
				timestamp: "2:33 PM",
			},
			{
				id: "5",
				text: "2 PM is perfect",
				sender: "user",
				timestamp: "2:32 PM",
			},
			{
				id: "6",
				text: "Perfect! I've booked your haircut appointment for tomorrow at 2 PM. You'll receive a confirmation shortly. Is there anything else I can help you with?",
				sender: "bot",
				timestamp: "2:32 PM",
			},
			{
				id: "7",
				text: "Thank you! See you tomorrow at 2 PM",
				sender: "user",
				timestamp: "2:32 PM",
			},
			{
				id: "8",
				text: "Thank you! See you tomorrow at 2 PM",
				sender: "bot",
				timestamp: "2:32 PM",
			},
			{
				id: "9",
				text: "Thank you! See you tomorrow at 2 PM",
				sender: "user",
				timestamp: "2:32 PM",
			},
			{
				id: "10",
				text: "Thank you! See you tomorrow at 2 PM",
				sender: "bot",
				timestamp: "2:32 PM",
			},
			{
				id: "11",
				text: "Thank you! See you tomorrow at 2 PM",
				sender: "user",
				timestamp: "2:32 PM",
			},
			{
				id: "12",
				text: "Thank you! See you tomorrow at 2 PM",
				sender: "bot",
				timestamp: "2:32 PM",
			},
			{
				id: "13",
				text: "Thank you! See you tomorrow at 2 PM",
				sender: "user",
				timestamp: "2:32 PM",
			},
			{
				id: "14",
				text: "Thank you! See you tomorrow at 2 PM",
				sender: "bot",
				timestamp: "2:32 PM",
			},
		],
	},
	{
		id: "2",
		name: "Priya",
		avatar: AvatarImg,
		lastMessage: "I need to reschedule my appointm...",
		timestamp: "1 hrs ago",
		status: "Reschedule",
		socialPlatform: "instagram",
		messages: [
			{
				id: "1",
				text: "I need to reschedule my appointment",
				sender: "user",
				timestamp: "3:15 PM",
			},
		],
	},
	{
		id: "3",
		name: "Srity",
		avatar: AvatarImg,
		lastMessage: "I need to reschedule my appointm...",
		timestamp: "2 hrs ago",
		status: "Reschedule",
		socialPlatform: "facebook",
		messages: [
			{
				id: "1",
				text: "I need to reschedule my appointment",
				sender: "user",
				timestamp: "1:45 PM",
			},
		],
	},
	{
		id: "4",
		name: "Susmita",
		avatar: AvatarImg,
		lastMessage: "I need to reschedule my appointm...",
		timestamp: "3 hrs ago",
		status: "Pending",
		socialPlatform: "whatsapp",
		messages: [
			{
				id: "1",
				text: "I need to reschedule my appointment",
				sender: "user",
				timestamp: "12:30 PM",
			},
		],
	},
	{
		id: "4",
		name: "Susmita",
		avatar: AvatarImg,
		lastMessage: "I need to reschedule my appointm...",
		timestamp: "3 hrs ago",
		status: "Pending",
		socialPlatform: "whatsapp",
		messages: [
			{
				id: "1",
				text: "I need to reschedule my appointment",
				sender: "user",
				timestamp: "12:30 PM",
			},
		],
	},
	{
		id: "4",
		name: "Susmita",
		avatar: AvatarImg,
		lastMessage: "I need to reschedule my appointm...",
		timestamp: "3 hrs ago",
		status: "Pending",
		socialPlatform: "whatsapp",
		messages: [
			{
				id: "1",
				text: "I need to reschedule my appointment",
				sender: "user",
				timestamp: "12:30 PM",
			},
		],
	},
	{
		id: "4",
		name: "Susmita",
		avatar: AvatarImg,
		lastMessage: "I need to reschedule my appointm...",
		timestamp: "3 hrs ago",
		status: "Pending",
		socialPlatform: "instagram",
		messages: [
			{
				id: "1",
				text: "I need to reschedule my appointment",
				sender: "user",
				timestamp: "12:30 PM",
			},
		],
	},
	{
		id: "4",
		name: "Susmita",
		avatar: AvatarImg,
		lastMessage: "I need to reschedule my appointm...",
		timestamp: "3 hrs ago",
		status: "Pending",
		socialPlatform: "whatsapp",
		messages: [
			{
				id: "1",
				text: "I need to reschedule my appointment",
				sender: "user",
				timestamp: "12:30 PM",
			},
		],
	},
	{
		id: "4",
		name: "Susmita",
		avatar: AvatarImg,
		lastMessage: "I need to reschedule my appointm...",
		timestamp: "3 hrs ago",
		status: "Pending",
		socialPlatform: "instagram",
		messages: [
			{
				id: "1",
				text: "I need to reschedule my appointment",
				sender: "user",
				timestamp: "12:30 PM",
			},
		],
	},
	{
		id: "4",
		name: "Susmita",
		avatar: AvatarImg,
		lastMessage: "I need to reschedule my appointm...",
		timestamp: "3 hrs ago",
		status: "Completed",
		socialPlatform: "whatsapp",
		messages: [
			{
				id: "1",
				text: "I need to reschedule my appointment",
				sender: "user",
				timestamp: "12:30 PM",
			},
		],
	},
	{
		id: "4",
		name: "Susmita",
		avatar: AvatarImg,
		lastMessage: "I need to reschedule my appointm...",
		timestamp: "3 hrs ago",
		status: "Pending",
		socialPlatform: "whatsapp",
		messages: [
			{
				id: "1",
				text: "I need to reschedule my appointment",
				sender: "user",
				timestamp: "12:30 PM",
			},
		],
	},
	{
		id: "4",
		name: "Susmita",
		avatar: AvatarImg,
		lastMessage: "I need to reschedule my appointm...",
		timestamp: "3 hrs ago",
		status: "Pending",
		socialPlatform: "whatsapp",
		messages: [
			{
				id: "1",
				text: "I need to reschedule my appointment",
				sender: "user",
				timestamp: "12:30 PM",
			},
		],
	},
	{
		id: "4",
		name: "Susmita",
		avatar: AvatarImg,
		lastMessage: "I need to reschedule my appointm...",
		timestamp: "3 hrs ago",
		status: "Pending",
		socialPlatform: "whatsapp",
		messages: [
			{
				id: "1",
				text: "I need to reschedule my appointment",
				sender: "user",
				timestamp: "12:30 PM",
			},
		],
	},
];

const Conversations = () => {
	const [selectedConversation, setSelectedConversation] =
		useState<Conversation>(mockConversations[0]);
	const [searchTerm, setSearchTerm] = useState("");

	const filteredConversations = mockConversations.filter((conv) =>
		conv.name.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<section className="w-full h-full">
			{/* dashboard header */}
			<DashboardHeader
				title="Dashboard Overview"
				description="Monitor your AI-powered customer service performance across all platforms"
			/>

			<div className="w-full p-6">
				<div className="w-full flex border border-primary rounded-lg">
					<ConversationList
						conversations={filteredConversations}
						selectedConversation={selectedConversation}
						onSelectConversation={setSelectedConversation}
						searchTerm={searchTerm}
						onSearchChange={setSearchTerm}
					/>
					<ChatArea conversation={selectedConversation} />
				</div>
			</div>
		</section>
	);
};

export default Conversations;
