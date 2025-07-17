"use client";

import * as React from "react";
import { Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function TimePicker() {
	const [selectedTime, setSelectedTime] = React.useState({
		hour: 12,
		minute: 0,
		ampm: "AM",
	});
	const [isOpen, setIsOpen] = React.useState(false);

	const handleTimeChange = (
		type: "hour" | "minute" | "ampm",
		value: string
	) => {
		setSelectedTime((prev) => {
			if (type === "hour") {
				return { ...prev, hour: parseInt(value) || 12 };
			} else if (type === "minute") {
				return { ...prev, minute: parseInt(value) || 0 };
			} else if (type === "ampm") {
				return { ...prev, ampm: value as "AM" | "PM" };
			}
			return prev;
		});
	};

	const formatTime = () => {
		const hour = selectedTime.hour % 12 || 12;
		return `${hour.toString().padStart(2, "0")}:${selectedTime.minute
			.toString()
			.padStart(2, "0")} ${selectedTime.ampm}`;
	};

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className={cn(
						"w-full justify-center text-left font-normal",
						!selectedTime && "text-muted-foreground"
					)}
				>
					<span>{formatTime()}</span>
					<Clock3 className="mr-2 h-4 w-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<div className="flex flex-row h-[200px] divide-x">
					<ScrollArea className="w-32">
						<div className="flex flex-col p-2">
							{Array.from({ length: 12 }, (_, i) => i + 1).map(
								(hour) => (
									<Button
										key={hour}
										size="icon"
										variant={
											selectedTime.hour === hour
												? "default"
												: "ghost"
										}
										className="w-full shrink-0 aspect-square"
										onClick={() =>
											handleTimeChange(
												"hour",
												hour.toString()
											)
										}
									>
										{hour}
									</Button>
								)
							)}
						</div>
						<ScrollBar orientation="vertical" />
					</ScrollArea>
					<ScrollArea className="w-32">
						<div className="flex flex-col p-2">
							{Array.from({ length: 12 }, (_, i) => i * 5).map(
								(minute) => (
									<Button
										key={minute}
										size="icon"
										variant={
											selectedTime.minute === minute
												? "default"
												: "ghost"
										}
										className="w-full shrink-0 aspect-square"
										onClick={() =>
											handleTimeChange(
												"minute",
												minute.toString()
											)
										}
									>
										{minute}
									</Button>
								)
							)}
						</div>
						<ScrollBar orientation="vertical" />
					</ScrollArea>
					<ScrollArea className="w-32">
						<div className="flex flex-col p-2">
							{["AM", "PM"].map((ampm) => (
								<Button
									key={ampm}
									size="icon"
									variant={
										selectedTime.ampm === ampm
											? "default"
											: "ghost"
									}
									className="w-full shrink-0 aspect-square"
									onClick={() =>
										handleTimeChange("ampm", ampm)
									}
								>
									{ampm}
								</Button>
							))}
						</div>
						<ScrollBar orientation="vertical" />
					</ScrollArea>
				</div>
			</PopoverContent>
		</Popover>
	);
}
