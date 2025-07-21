import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
	return (
		<section className="py-16 border border-dashed border-theme mb-32">
			<div className="container grid grid-cols-1 lg:grid-cols-2 gap-14">
				<div className="flex flex-col gap-5">
					<h3 className="font-bold text-3xl text-primary leading-tight">
						Contact Us
					</h3>
					<p className="text-sm">
						Have questions or need assistance? We're here to help.
						Reach out to our team and we'll get back to you as soon
						as possible.
					</p>
					<div className="flex flex-col gap-8 py-4">
						<div className="flex gap-3 items-start">
							<div className="bg-primary/20 flex items-center justify-center w-12 h-12 rounded-full">
								<Mail className="text-primary" />
							</div>
							<div className="flex flex-col gap-4">
								<div className="flex flex-col">
									<h4 className="font-medium">Email Us</h4>
									<h6 className="text-sm">
										For general inquiries and support
									</h6>
								</div>
								<div className="flex flex-col">
									<a href="#" className="text-primary">
										suppport@newviaspace.com
									</a>
									<a href="#" className="text-primary">
										sales@newviaspace.com
									</a>
								</div>
							</div>
						</div>

						{/* <div className="flex gap-3 items-start">
							<div className="bg-primary/20 flex items-center justify-center w-12 h-12 rounded-full">
								<Phone className="text-primary" />
							</div>
							<div className="flex flex-col gap-4">
								<div className="flex flex-col">
									<h4 className="font-medium">Call Us</h4>
									<h6 className="text-sm">
										Mon-Fri from 8am to 6pm (GMT)
									</h6>
								</div>
								<div className="flex flex-col">
									<a href="#" className="text-primary">
										+1 (800) 123-4567
									</a>
									<a href="#" className="text-primary">
										+1 (800) 123-4567
									</a>
								</div>
							</div>
						</div>

						<div className="flex gap-3 items-start">
							<div className="bg-primary/20 flex items-center justify-center w-12 h-12 rounded-full">
								<MapPin className="text-primary" />
							</div>
							<div className="flex flex-col gap-4">
								<div className="flex flex-col">
									<h4 className="font-medium">Visit Us</h4>
									<h6 className="text-sm">
										Our Headquarters
									</h6>
								</div>
								<div className="flex flex-col gap-1">
									<a href="#" className="text-primary">
										123 Innovation Drive <br />
										Suite 400 <br />
										San Francisco, CA 94103 <br />
										United States
									</a>
								</div>
							</div>
						</div> */}
					</div>
				</div>

				<div className="flex flex-col gap-5">
					<h3 className="font-bold text-3xl text-primary leading-tight">
						Book a Demo
					</h3>

					<div className="form-group flex flex-col gap-2">
						<Label className="text-primary font-medium cursor-pointer">
							Name
						</Label>
						<div className="flex gap-5">
							<Input type="text" placeholder="First Name" />
							<Input type="text" placeholder="Last Name" />
						</div>
					</div>

					<div className="form-group flex items-center gap-5">
						<div className="w-full">
							<Label className="text-primary font-medium cursor-pointer">
								Company Name
							</Label>
							<Input type="text" placeholder="Acme" />
						</div>
						<div className="w-full">
							<Label className="text-primary font-medium cursor-pointer">
								Job Title
							</Label>

							<Input type="text" placeholder="Job Title" />
						</div>
					</div>

					<div className="form-group flex flex-col gap-2">
						<Label
							htmlFor="email"
							className="text-primary font-medium cursor-pointer"
						>
							Work Email
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="info@aiprojectmanager.com"
						/>
					</div>

					<div className="form-group flex items-center gap-5">
						<div className="w-full">
							<Label className="text-primary font-medium cursor-pointer">
								Company Size
							</Label>
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Please select" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="5-10">
											5-10 Employees
										</SelectItem>
										<SelectItem value="10-20">
											10-20 Employees
										</SelectItem>
										<SelectItem value="20-50">
											20-50 Employees
										</SelectItem>
										<SelectItem value="50-100">
											50-100 Employees
										</SelectItem>
										<SelectItem value="100+">
											100+ Employees
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
						<div className="w-full">
							<Label className="text-primary font-medium cursor-pointer">
								Company Type
							</Label>
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Please select" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectItem value="5-10">
											Enterprise
										</SelectItem>
										<SelectItem value="10-20">
											Agency
										</SelectItem>
										<SelectItem value="20-50">
											Small Business
										</SelectItem>
										<SelectItem value="50-100">
											Startup
										</SelectItem>
										<SelectItem value="100+">
											Other
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>

					<div className="form-group flex flex-col gap-2">
						<Label
							htmlFor="number"
							className="text-primary font-medium cursor-pointer"
						>
							How did you hear about us?
						</Label>
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Please select" />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="5-10">
										Facebook
									</SelectItem>
									<SelectItem value="10-20">
										Instagram
									</SelectItem>
									<SelectItem value="20-50">
										Linkedin
									</SelectItem>
									<SelectItem value="50-100">
										Friends & Family
									</SelectItem>
									<SelectItem value="100+">
										Colleague
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					<div className="form-group flex flex-col gap-2">
						<Label
							htmlFor="number"
							className="text-primary font-medium cursor-pointer"
						>
							Number
						</Label>
						<Input
							id="number"
							type="text"
							placeholder="+1(555) 123-4567"
						/>
					</div>

					<div className="form-group flex flex-col gap-2">
						<Label
							htmlFor="message"
							className="text-primary font-medium cursor-pointer"
						>
							Message
						</Label>
						<Textarea
							id="message"
							rows={5}
							placeholder="How can i help you?"
						/>
					</div>

					<div className="form-group">
						<Button className="rounded-full">Send</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
