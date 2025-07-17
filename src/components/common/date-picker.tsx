"use client";

import * as React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker() {
	const [selectedDate, setSelectedDate] = React.useState<Date>();
	const [isOpen, setIsOpen] = React.useState(false);

	const handleDateSelect = (date: Date | undefined) => {
		setSelectedDate(date);
	};

	return (
		<Popover open={isOpen} onOpenChange={setIsOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className={cn(
						"w-full justify-between text-left font-normal px-4",
						!selectedDate && "text-muted-foreground"
					)}
				>
					{selectedDate ? (
						format(selectedDate, "mm/dd/yyy")
					) : (
						<span>mm/dd/yyy</span>
					)}
					<CalendarIcon className="h-4 w-4" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={selectedDate}
					onSelect={handleDateSelect}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
}
