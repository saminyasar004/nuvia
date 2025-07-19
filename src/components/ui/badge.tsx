import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300",
	{
		variants: {
			variant: {
				default:
					"border-transparent text-primary hover:bg-primary hover:text-white border border-primary",
				success:
					"text-success hover:bg-success hover:text-white border border-success",
				warning:
					"border-transparent text-warning hover:bg-warning hover:text-foreground border border-warning",
				theme: "border-transparent text-theme hover:bg-theme hover:text-white border border-theme",
				secondary:
					"border border-theme text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
				destructive:
					"border-transparent text-danger hover:bg-danger hover:text-white border border-danger",
				outline: "text-slate-950 dark:text-slate-50",
			},

			size: {
				default: "px-6 py-1 text-sm xl:text-sm font-medium",
				sm: "py-[0.1rem] h-min px-3 text-xs font-medium",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant, size }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
