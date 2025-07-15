import SectionHeading from "@/components/common/SectionHeading";
import Marquee from "@/components/magicui/marquee";
import HeadingUnderline from "@/assets/images/heading-underline.svg";

import { cn } from "@/lib/utils";

export default function Testimonial() {
	const testimonials = [
		{
			id: 0,
			date: "May 8, 2025",
			name: "Pappu Roy",
			image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut nunc nec purus ornare mattis. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lorem arcu. Facilisis magna etiam sed magna eget nibh in turpis. Consequat duis diam lorem arcu.",
		},
		{
			id: 1,
			date: "June 2, 2025",
			name: "Anita Sharma",
			image: "https://plus.unsplash.com/premium_photo-1670884441012-c5cf195c062a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
		},
		{
			id: 2,
			date: "May 15, 2025",
			name: "Rohit Kumar",
			image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
		},
		{
			id: 3,
			date: "June 5, 2025",
			name: "Priya Patel",
			image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
		},
		{
			id: 4,
			date: "May 20, 2025",
			name: "Vikram Singh",
			image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			text: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
		},
		{
			id: 5,
			date: "June 1, 2025",
			name: "Sneha Desai",
			image: "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			text: "Ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam.",
		},
		{
			id: 6,
			date: "May 25, 2025",
			name: "Arjun Mehra",
			image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			text: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
		},
	];

	const firstRow = testimonials.slice(0, testimonials.length / 2);
	const secondRow = testimonials.slice(testimonials.length / 2);

	return (
		<section className="py-24" id="testimonials">
			<div className="container relative overflow-hidden">
				<SectionHeading
					title={
						<h2 className="mb-4">
							Trusted By Business{" "}
							<span className="text-theme relative">
								Worldwide
								<img
									className="max-w-[150px] lg:max-w-[200px] absolute -bottom-4 left-1/2 -translate-x-1/2"
									src={HeadingUnderline}
									alt=""
								/>
							</span>
						</h2>
					}
					description="Don't just take our word for it. See what our customers have to say about Ease Chat"
				/>

				<div className="w-full py-8">
					<div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden">
						<Marquee pauseOnHover className="[--duration:15s]">
							{firstRow.map((review) => (
								<TestimonialCard key={review.id} {...review} />
							))}
						</Marquee>
						<Marquee
							reverse
							pauseOnHover
							className="[--duration:15s]"
						>
							{secondRow.map((review) => (
								<TestimonialCard key={review.id} {...review} />
							))}
						</Marquee>
						<div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
						<div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
					</div>
				</div>
			</div>
		</section>
	);
}

function TestimonialCard({
	id,
	date,
	name,
	image,
	text,
}: {
	id: number;
	date: string;
	name: string;
	image: string;
	text: string;
}) {
	return (
		<div className="bg-accent h-full w-[16rem] lg:w-[50rem] overflow-x-hidden lg:py-5 pb-5 rounded-lg overflow-y-hidden grid grid-cols-1 lg:grid-cols-3 gap-8 border-2 border-theme border-dashed">
			<div className="h-60 lg:w-60 w-full lg:rounded-r-2xl overflow-hidden flex items-center justify-center">
				<img
					src={image}
					alt={name}
					className="object-center object-contain"
				/>
			</div>

			<div className="lg:col-span-2 flex flex-col items-start justify-center gap-4 lg:pr-5">
				<div className="w-full flex flex-col gap-0 text-center items-center lg:items-start justify-center">
					<h6 className="font-montserrat text-xs text-[#525252]">
						{date}
					</h6>

					<h3 className="font-lora text-2xl font-bold text-center lg:text-left">
						{name}
					</h3>
				</div>
				<div className="w-full px-4 lg:px-0">
					<p className="font-montserrat text-xs text-[#535862] text-center lg:text-left">
						{text}
					</p>
				</div>
			</div>
		</div>
	);
}

const ReviewCard = ({
	id,
	date,
	name,
	image,
	text,
}: {
	id: number;
	date: string;
	name: string;
	image: string;
	text: string;
}) => {
	return (
		<figure
			className={cn(
				"relative h-full w-64 cursor-pointer overflow-hidden rounded-xl p-4",
				"border-2 border-[#F1CF6D] border-dashed"
			)}
		>
			<div className="flex flex-row items-center gap-2">
				<img
					className="rounded-full w-12 h-12 object-cover object-center"
					alt=""
					src={image}
				/>
				<div className="flex flex-col">
					<p className="text-xs font-medium">{date}</p>
					<figcaption className="text-sm font-medium">
						{name}
					</figcaption>
				</div>
			</div>
			<blockquote className="mt-2 text-sm">{text}</blockquote>
		</figure>
	);
};
