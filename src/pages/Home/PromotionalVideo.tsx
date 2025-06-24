import VideoPlayer from "@/components/common/VideoPlayer";

export default function PromotionalVideo() {
	return (
		<section className="py-24">
			<div className="container">
				<VideoPlayer
					src="https://res.cloudinary.com/dhwkkvjmb/video/upload/v1750759377/promotional-video_gswlvf.mp4"
					// poster="https://www.w3schools.com/html/mov_bbb.jpg"
				/>
			</div>
		</section>
	);
}
