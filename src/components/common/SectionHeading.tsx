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
				<h2 className="font-bold text-2xl lg:text-5xl text-center leading-tight">
					{typeof title === "string" ? title : <>{title}</>}
				</h2>
			)}
			{description && (
				<p className="text-center w-full lg:w-[40%] lg:text-base text-sm leading-normal">
					{description}
				</p>
			)}
		</div>
	);
}
