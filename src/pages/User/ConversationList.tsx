import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Conversation } from "./Conversations";
import { ScrollArea } from "@/components/ui/scroll-area";
import LogoBlack from "@/assets/images/logo.svg";
import WhatsappIcon from "@/assets/images/whatsapp.svg";
import FacebookIcon from "@/assets/images/facebook.svg";
import InstagramIcon from "@/assets/images/instagram.svg";
import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandMessenger,
	IconBrandWhatsapp,
} from "@tabler/icons-react";

interface ConversationListProps {
	conversations: Conversation[];
	selectedConversation: Conversation;
	onSelectConversation: (conversation: Conversation) => void;
	searchTerm: string;
	onSearchChange: (term: string) => void;
}

export const ConversationList: React.FC<ConversationListProps> = ({
	conversations,
	selectedConversation,
	onSelectConversation,
	searchTerm,
	onSearchChange,
}) => {
	const getStatusColor = (status: string) => {
		switch (status) {
			case "Active":
				return "bg-transparent text-success border-success hover:bg-success hover:text-white";
			case "Pending":
				return "bg-transparent text-warning border-warning hover:bg-warning hover:text-foreground";
			case "Reschedule":
				return "bg-transparent text-primary border-primary hover:bg-primary hover:text-white";
			case "Completed":
				return "bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white";
			default:
				return "bg-transparent text-primary border-primary hover:bg-primary hover:text-white";
		}
	};

	const getSocialIcon = (platform: string) => {
		switch (platform) {
			case "whatsapp":
				return (
					<div className="flex items-center justify-center w-5 h-5">
						<img
							src={WhatsappIcon}
							alt="whatsapp"
							className="max-w-full"
						/>
					</div>
				);
			case "instagram":
				return (
					<div className="flex items-center justify-center w-5 h-5">
						<img
							src={InstagramIcon}
							alt="whatsapp"
							className="max-w-full"
						/>
					</div>
				);
			case "facebook":
				return (
					<div className="flex items-center justify-center w-5 h-5">
						<img
							src={FacebookIcon}
							alt="whatsapp"
							className="max-w-full"
						/>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<div className="w-80 relative bg-accent flex flex-col h-[85vh] border-r border-primary rounded-lg">
			{/* Header */}
			<div className="p-4 sticky">
				<div className="flex flex-col items-center gap-3 mb-4">
					<div className="w-full flex items-center justify-center">
						<img
							src={LogoBlack}
							alt="nuvía"
							className="max-w-[70%]"
						/>
					</div>
					<h1 className="font-bold text-foreground text-xl">
						Conversations
					</h1>
				</div>

				{/* Search */}
				<div className="relative">
					<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground w-4 h-4" />
					<Input
						placeholder="Search Conversations..."
						value={searchTerm}
						onChange={(e) => onSearchChange(e.target.value)}
						className="pl-10 bg-background"
					/>
				</div>
			</div>

			{/* Conversations */}
			<ScrollArea className="flex-1 h-full">
				{conversations.map((conversation) => (
					<div
						key={conversation.id}
						onClick={() => onSelectConversation(conversation)}
						className={`relative p-4 cursor-pointer transition-all duration-200 hover:bg-background ${
							selectedConversation.id === conversation.id
								? "bg-background before:contents-[''] before:absolute before:w-3 before:rounded-lg before:h-full before:-left-1 before:top-0 before:bg-primary"
								: ""
						}`}
					>
						<div className="flex items-start gap-3">
							<div className="relative">
								<div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
									<img
										src={conversation.avatar}
										alt="avatar"
										className="max-w-full"
									/>
								</div>
								<div className="absolute -bottom-1 -right-1">
									{getSocialIcon(conversation.socialPlatform)}
								</div>
							</div>

							<div className="flex-1 min-w-0">
								<div className="flex items-center justify-between mb-1">
									<h3 className="font-semibold text-gray-800 text-sm">
										{conversation.name}
									</h3>
									<span className="text-xs text-gray-500">
										{conversation.timestamp}
									</span>
								</div>

								<p className="text-sm text-gray-600 truncate mb-2">
									{conversation.lastMessage}
								</p>

								<Badge
									variant={
										conversation.status === "Active"
											? "success"
											: conversation.status === "Pending"
											? "warning"
											: conversation.status ===
											  "Reschedule"
											? "info"
											: conversation.status ===
											  "Completed"
											? "default"
											: "default"
									}
								>
									{conversation.status}
								</Badge>
							</div>
						</div>
					</div>
				))}
			</ScrollArea>
		</div>
	);
};
