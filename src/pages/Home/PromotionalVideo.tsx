import VideoPlayer from "@/components/common/VideoPlayer";
import VideoSrc from "@/assets/videos/promotional-video.mp4";

export default function PromotionalVideo() {
	return (
		<section className="py-24">
			<div className="container">
				<VideoPlayer src={VideoSrc} />
			</div>
		</section>
	);
}
