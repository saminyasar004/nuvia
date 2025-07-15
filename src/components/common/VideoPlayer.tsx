import React, { useRef, useState, useEffect } from "react";
import {
	Play,
	Pause,
	Volume2,
	Maximize,
	RotateCcw,
	RotateCw,
	VolumeOff,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
	src: string;
	poster?: string;
	className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
	src,
	poster,
	className,
}) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const progressRef = useRef<HTMLDivElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);
	const [volume, setVolume] = useState(1);
	const [showControls, setShowControls] = useState(true);
	const [isFullscreen, setIsFullscreen] = useState(false);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		const updateTime = () => setCurrentTime(video.currentTime);
		const updateDuration = () => setDuration(video.duration);

		video.addEventListener("timeupdate", updateTime);
		video.addEventListener("loadedmetadata", updateDuration);
		video.addEventListener("ended", () => setIsPlaying(false));

		return () => {
			video.removeEventListener("timeupdate", updateTime);
			video.removeEventListener("loadedmetadata", updateDuration);
			video.removeEventListener("ended", () => setIsPlaying(false));
		};
	}, []);

	const togglePlay = () => {
		const video = videoRef.current;
		if (!video) return;

		if (isPlaying) {
			video.pause();
		} else {
			video.play();
		}
		setIsPlaying(!isPlaying);
	};

	const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
		const video = videoRef.current;
		const progressBar = progressRef.current;
		if (!video || !progressBar) return;

		const rect = progressBar.getBoundingClientRect();
		const percent = (e.clientX - rect.left) / rect.width;
		const newTime = percent * duration;
		video.currentTime = newTime;
		setCurrentTime(newTime);
	};

	const skip = (seconds: number) => {
		const video = videoRef.current;
		if (!video) return;

		video.currentTime = Math.max(
			0,
			Math.min(duration, video.currentTime + seconds)
		);
	};

	const toggleFullscreen = () => {
		const container = videoRef.current?.parentElement;
		if (!container) return;

		if (!document.fullscreenElement) {
			container.requestFullscreen();
			setIsFullscreen(true);
		} else {
			document.exitFullscreen();
			setIsFullscreen(false);
		}
	};

	const formatTime = (time: number) => {
		const minutes = Math.floor(time / 60);
		const seconds = Math.floor(time % 60);
		return `${minutes}:${seconds.toString().padStart(2, "0")}`;
	};

	const progressPercent = duration ? (currentTime / duration) * 100 : 0;

	return (
		<div
			className={cn(
				"relative w-full h-full bg-background rounded-lg overflow-hidden group aspect-video",
				className
			)}
			onMouseEnter={() => setShowControls(true)}
			onMouseLeave={() => setShowControls(false)}
		>
			<video
				ref={videoRef}
				src={src}
				poster={poster}
				className="w-full h-full object-cover"
				onClick={togglePlay}
			/>

			{/* Controls Overlay */}
			<div
				className={cn(
					"absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/10",
					"transition-opacity duration-300",
					showControls ? "opacity-100" : "opacity-0"
				)}
			>
				<div className="w-full flex items-center justify-center gap-16 lg:gap-32 h-full">
					<button
						onClick={() => skip(-10)}
						className="flex items-center justify-center gap-1 text-white cursor-pointer transition-all duration-200 hover:bg-primary/70 rounded-md p-2"
					>
						<RotateCcw />
						10
					</button>

					<button
						onClick={togglePlay}
						className="flex items-center justify-center gap-1 text-white cursor-pointer transition-all duration-200 hover:bg-primary/70 rounded-md p-2"
					>
						{isPlaying ? <Pause /> : <Play />}
					</button>

					<button
						onClick={() => skip(10)}
						className="flex items-center justify-center gap-1 text-white cursor-pointer transition-all duration-200 hover:bg-primary/70 rounded-md p-2"
					>
						<RotateCw />
						10
					</button>
				</div>

				{/* Bottom Controls */}
				<div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
					{/* Progress Bar */}
					<div
						ref={progressRef}
						className="w-full h-2 bg-primary/20 rounded-full cursor-pointer group/progress"
						onClick={handleSeek}
					>
						<div
							className="h-full bg-primary rounded-full relative transition-all duration-150"
							style={{ width: `${progressPercent}%` }}
						>
							<div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover/progress:opacity-100 transition-opacity duration-150 -mr-2" />
						</div>
					</div>

					{/* Control Bar */}
					<div className="flex items-center justify-between text-white">
						<div className="flex items-center space-x-4">
							<button
								onClick={togglePlay}
								className="hover:text-primary transition-colors duration-200"
							>
								{isPlaying ? (
									<Pause className="w-5 h-5" />
								) : (
									<Play className="w-5 h-5" />
								)}
							</button>

							<div className="flex items-center space-x-2">
								{volume > 0 ? (
									<Volume2 className="w-5 h-5" />
								) : (
									<VolumeOff className="w-5 h-5" />
								)}

								<input
									type="range"
									min="0"
									max="1"
									step="0.1"
									value={volume}
									onChange={(e) => {
										const newVolume = parseFloat(
											e.target.value
										);
										setVolume(newVolume);
										if (videoRef.current) {
											videoRef.current.volume = newVolume;
										}
									}}
									className="w-20 h-1 bg-primary/50 rounded-lg appearance-none cursor-pointer slider input-type-slider"
								/>
							</div>

							<span className="text-sm font-medium">
								{formatTime(currentTime)} /{" "}
								{formatTime(duration)}
							</span>
						</div>

						<button
							onClick={toggleFullscreen}
							className="hover:text-primary transition-colors duration-200"
						>
							<Maximize className="w-5 h-5" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default VideoPlayer;
