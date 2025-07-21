import HeroChatboxImg from "@/assets/images/hero-chatbox.svg";
import HeroLeafImg from "@/assets/images/hero-leaf-element.svg";
import SparklesImg from "@/assets/images/sparkles.png";
import User1Img from "@/assets/images/user-1.jpg";
import User2Img from "@/assets/images/user-2.png";
import User3Img from "@/assets/images/user-3.jpg";
import User4Img from "@/assets/images/user-4.png";
import VideoSrc from "@/assets/videos/promotional-video.mp4";
import VideoPlayer from "@/components/common/video-player";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { BlurFade } from "@/components/magicui/blur-fade";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { forwardRef, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Circle = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				className
			)}
		>
			{children}
		</div>
	);
});

Circle.displayName = "Circle";

export default function Hero() {
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

			// Attempt to play when the video metadata is loaded
			video.addEventListener("loadedmetadata", playVideo);

			// Cleanup event listener
			return () => {
				video.removeEventListener("loadedmetadata", playVideo);
			};
		}
	}, []);

	return (
		<section
			className="w-full bg-gradient-to-r from-[#B29655]/0 to-[#CFAD60]/20 relative"
			id="home"
		>
			<img
				src={HeroLeafImg}
				alt="hero-leaf"
				className="absolute top-10 right-0 max-w-full"
			/>

			<div className="container h-[70vh] max-h-[700px] grid grid-cols-1 lg:grid-cols-2 py-12 lg:py-32">
				<div className="h-full flex flex-col gap-6 text-center lg:text-left">
					<div className="w-full flex flex-col gap-2 lg:gap-3 items-center justify-center lg:items-start text-center lg:text-left">
						<div
							data-aos="fade-right"
							className="group relative flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] "
						>
							<span
								className={cn(
									"absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-primary/70 via-primary/50 to-secondary/50 bg-[length:300%_100%] p-[1px]"
								)}
								style={{
									WebkitMask:
										"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
									WebkitMaskComposite: "destination-out",
									mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
									maskComposite: "subtract",
									WebkitClipPath: "padding-box",
								}}
							/>
							<img
								src={SparklesImg}
								alt="sparkles"
								className="max-w-5"
							/>
							<hr className="mx-2 h-4 w-px shrink-0 bg-foreground" />
							<AnimatedGradientText className="text-sm font-medium">
								Introducing Newvía
							</AnimatedGradientText>
							<ChevronRight className="ml-1 size-4 stroke-foregbg-foreground moving-horizontal" />
						</div>

						<BoxReveal boxColor={"#517B62"} duration={0.5}>
							<h1 className="font-bold text-3xl lg:text-4xl">
								Smart AI Receptionist for Calm,
							</h1>
						</BoxReveal>

						<BoxReveal boxColor={"#517B62"} duration={0.7}>
							<h1 className="font-bold text-3xl lg:text-4xl text-theme flex gap-1">
								Growing, and Busy Wellness Brands
								{/* <Sparkles className="fill-theme" /> */}
							</h1>
						</BoxReveal>
					</div>

					<BoxReveal boxColor={"#517B62"} duration={0.9}>
						<p className="lg:w-[85%] w-full leading-relaxed">
							Let Newvía handle bookings, fill empty slots,
							summarize chats, and assist clients 24/7, across
							WhatsApp, Instagram, and more. Designed for spas,
							therapists, and boutique clinics who want peace of
							mind and full calendars
						</p>
					</BoxReveal>

					<div
						data-aos="fade-right"
						className="w-full flex lg:flex-row gap-6 items-center flex-col-reverse"
					>
						<Link to={"/signup"}>
							<InteractiveHoverButton>
								Try Newvía Free
							</InteractiveHoverButton>
						</Link>

						<div className="w-max flex flex-col items-center gap-2">
							<div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
								<Avatar>
									<BlurFade delay={0.25 + 0.05} inView>
										<AvatarImage
											src={User1Img}
											alt="@evilrabbit"
										/>
									</BlurFade>
									<AvatarFallback>ER</AvatarFallback>
								</Avatar>
								<Avatar>
									<BlurFade delay={0.25 + 0.05} inView>
										<AvatarImage
											src={User2Img}
											alt="@evilrabbit"
										/>
									</BlurFade>
									<AvatarFallback>ER</AvatarFallback>
								</Avatar>
								<Avatar>
									<BlurFade delay={0.25 + 0.05} inView>
										<AvatarImage
											src={User3Img}
											alt="@evilrabbit"
										/>
									</BlurFade>
									<AvatarFallback>ER</AvatarFallback>
								</Avatar>
								<Avatar>
									<BlurFade delay={0.25 + 0.05} inView>
										<AvatarImage
											src={User4Img}
											alt="@evilrabbit"
										/>
									</BlurFade>
									<AvatarFallback>ER</AvatarFallback>
								</Avatar>
							</div>

							<h4 className="font-semibold text-xs text-woodGreen">
								We are trusted by 500 customers
							</h4>
						</div>
					</div>
				</div>

				<div className="flex items-center">
					<BlurFade delay={0.25 + 0.05} inView>
						<img
							src={HeroChatboxImg}
							alt="hero-chatbox"
							className="w-full h-full object-cover rounded-lg"
						/>
					</BlurFade>
				</div>
			</div>

			<div className="container py-24 lg:pt-0 flex items-center justify-center mt-0 sm:mt-0">
				<div className="w-full rounded-lg">
					<VideoPlayer src={VideoSrc} />
				</div>
			</div>
		</section>
	);
}
