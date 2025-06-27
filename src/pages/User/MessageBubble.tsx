import React from "react";
import { Message } from "./Conversations";

interface MessageBubbleProps {
	message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
	const isUser = message.sender === "user";

	return (
		<div
			className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
		>
			<div
				className={`max-w-xs lg:max-w-md px-4 py-3 font-semibold rounded-2xl shadow-sm ${
					isUser
						? "bg-primary text-white rounded-bl-sm"
						: "bg-accent border border-[#F5C339] text-primary rounded-br-sm"
				}`}
			>
				<p className="text-sm leading-relaxed">{message.text}</p>
				<p className="text-xs mt-1 text-foreground">
					{message.timestamp}
				</p>
			</div>
		</div>
	);
};
