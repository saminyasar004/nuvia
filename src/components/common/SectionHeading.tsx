import React, { ReactNode } from "react";

export default function SectionHeading({
	title,
	description,
}: {
	title: ReactNode;
	description: string;
}) {
	return (
		<div className="w-full flex flex-col gap-3 items-center justify-center">
			{title && (
				<h2 className="font-bold text-5xl text-center leading-tight">
					{typeof title === "string" ? title : <>{title}</>}
				</h2>
			)}
			{description && (
				<p className="text-center w-[40%] leading-normal">
					{description}
				</p>
			)}
		</div>
	);
}
