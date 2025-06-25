import DataFlowVideoSrc from "@/assets/videos/data-flow.mp4";

export default function DataFlow() {
	return (
		<section className="py-16 border border-dashed border-[#F1CF6D] mb-32">
			<div className="container">
				<div className="w-full h-full bg-transparent rounded-lg overflow-hidden group aspect-video relative before:contents-[''] before:absolute before:w-full before:h-[6px] before:bg-background before:left-0 before:bottom-0">
					<video
						src={DataFlowVideoSrc}
						className="w-full h-full object-cover bg-transparent"
						autoPlay={true}
						loop={true}
					/>
				</div>
			</div>
		</section>
	);
}
