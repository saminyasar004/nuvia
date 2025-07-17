import { ScrollArea } from "@/components/ui/scroll-area";
import { Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Conversation, Message } from "./conversations";
import { MessageBubble } from "./message-bubble";

interface ChatAreaProps {
	conversation: Conversation;
}

export const ChatArea: React.FC<ChatAreaProps> = ({ conversation }) => {
	const [newMessage, setNewMessage] = useState("");
	const [messages, setMessages] = useState<Message[]>(conversation.messages);
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		setMessages(conversation.messages);
	}, [conversation.messages]);

	useEffect(() => {
		scrollToBottom();
	}, [messages]);

	const handleSendMessage = () => {
		if (newMessage.trim()) {
			const userMessage: Message = {
				id: String(messages.length + 1),
				text: newMessage,
				sender: "user",
				timestamp: new Date().toLocaleTimeString([], {
					hour: "2-digit",
					minute: "2-digit",
				}),
			};

			setMessages((prev) => [...prev, userMessage]);
			setNewMessage("");

			// Simulate bot response
			setTimeout(() => {
				const botMessage: Message = {
					id: String(messages.length + 2),
					text: "Thank you for your message! I'll help you with that right away.",
					sender: "bot",
					timestamp: new Date().toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					}),
				};
				setMessages((prev) => [...prev, botMessage]);
			}, 1000);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSendMessage();
		}
	};

	return (
		<div className="flex-1 flex flex-col h-[85vh]">
			{/* Header */}
			<div className="border-b border-theme border-dashed p-4 pb-0 shadow-sm">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden">
							<img
								src={conversation.avatar}
								alt="avatar"
								className="max-w-full"
							/>
						</div>
						<div>
							<h2 className="font-semibold text-gray-800">
								{conversation.name}
							</h2>
							<p className="text-sm text-gray-500">Online</p>
						</div>
					</div>
					<div className="flex items-center gap-2">
						<Star className="w-5 h-5 text-yellow-400 fill-current" />
					</div>
				</div>
			</div>

			{/* Messages */}
			<ScrollArea className="flex-1 p-4 space-y-4">
				{messages.map((message) => (
					<MessageBubble key={message.id} message={message} />
				))}
				<div ref={messagesEndRef} />
			</ScrollArea>
		</div>
	);
};
