import { useEffect, useRef } from "react";
import WorkflowImg from "@/assets/images/workflow.svg";
import DataFlowVideoSrc from "@/assets/videos/data-flow.mp4";

export default function DataFlow() {
	const videoRef = useRef<HTMLVideoElement>(null);

	// Handle video playback
	useEffect(() => {
		const video = videoRef.current;
		if (video) {
			const playVideo = () => {
				video.play().catch((error) => {
					console.error("Video autoplay failed:", error);
					// Optional: Add a fallback (e.g., play button) if autoplay is blocked
				});
			};

			// Attempt to play when metadata is loaded
			video.addEventListener("loadedmetadata", playVideo);

			// Cleanup event listener
			return () => {
				video.removeEventListener("loadedmetadata", playVideo);
			};
		}
	}, []);

	return (
		<section className="py-16 border border-dashed border-theme mb-32">
			<div className="container flex items-center justify-center">
				<img
					src={WorkflowImg}
					alt="workflowimg"
					className="max-w-full"
				/>

				{/* <div className="w-full h-full bg-transparent rounded-lg overflow-hidden group aspect-video relative before:contents-[''] before:absolute before:w-full before:h-[6px] before:bg-background before:left-0 before:bottom-0">
					<video
						ref={videoRef}
						src={DataFlowVideoSrc}
						className="w-full h-full object-cover bg-transparent"
						autoPlay
						muted
						playsInline
						loop
					/>
				</div> */}
			</div>
		</section>
	);
}
