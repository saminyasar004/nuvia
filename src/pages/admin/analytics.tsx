"use client";

import {
	Bar,
	BarChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	CartesianGrid,
	PieChart,
	Pie,
	Cell,
} from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import DashboardHeader from "@/components/common/dashboard-header";

const revenueData = [
	{ month: "May", Starter: 3000, Professional: 3500, Enterprise: 4000 },
	{ month: "June", Starter: 4200, Professional: 3800, Enterprise: 0 },
	{ month: "July", Starter: 4200, Professional: 4000, Enterprise: 3200 },
	{ month: "August", Starter: 4200, Professional: 4200, Enterprise: 3200 },
	{ month: "September", Starter: 4000, Professional: 3800, Enterprise: 3200 },
	{ month: "October", Starter: 4200, Professional: 3800, Enterprise: 3200 },
];

const businessCategoriesData = [
	{ name: "Hair Salons", value: 35, color: "#B5A88A" },
	{ name: "Spas", value: 25, color: "#517B62" },
	{ name: "Restaurants", value: 20, color: "#FB923C" },
	{ name: "Fitness", value: 12, color: "#34D399" },
	{ name: "Others", value: 8, color: "#6B7280" },
];

const userGrowthData = [
	{ month: "May", Starter: 300, Professional: 800, Enterprise: 600 },
	{ month: "June", Starter: 1200, Professional: 0, Enterprise: 400 },
	{ month: "July", Starter: 1200, Professional: 400, Enterprise: 0 },
	{ month: "August", Starter: 1200, Professional: 600, Enterprise: 400 },
	{ month: "September", Starter: 1200, Professional: 400, Enterprise: 0 },
	{ month: "October", Starter: 1200, Professional: 600, Enterprise: 0 },
];

const chartConfig = {
	Starter: {
		label: "Starter",
		color: "#B5A88A",
	},
	Professional: {
		label: "Professional",
		color: "#517B62",
	},
	Enterprise: {
		label: "Enterprise",
		color: "#EAB308",
	},
};

export default function Analytics() {
	return (
		<>
			<section className="w-full">
				{/* dashboard header */}
				<DashboardHeader
					title="Analytics"
					description="Comprehensive platform analytics and insights"
				/>

				<div className="w-full py-4 px-6 flex flex-col items-center justify-center gap-5">
					<div className="w-full bg-background p-4">
						<div className="w-full space-y-6">
							{/* Revenue by Plan */}
							<Card>
								<CardHeader>
									<CardTitle className="text-primary">
										Revenue by Plan
									</CardTitle>
									<CardDescription>
										Monthly revenue breakdown by
										subscription plans
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ChartContainer
										config={chartConfig}
										className="h-[400px] w-full"
									>
										<ResponsiveContainer
											width="100%"
											height="100%"
										>
											<BarChart
												data={revenueData}
												margin={{
													top: 20,
													right: 30,
													left: 20,
													bottom: 5,
												}}
											>
												<CartesianGrid
													strokeDasharray="3 3"
													stroke="#f0f0f0"
												/>
												<XAxis
													dataKey="month"
													axisLine={false}
													tickLine={false}
													tick={{
														fontSize: 12,
														fill: "#666",
													}}
												/>
												<YAxis
													axisLine={false}
													tickLine={false}
													tick={{
														fontSize: 12,
														fill: "#666",
													}}
													tickFormatter={(value) =>
														`$${value}`
													}
												/>
												<ChartTooltip
													content={
														<ChartTooltipContent />
													}
													formatter={(value) => [
														`$${value}`,
														"",
													]}
												/>
												<Bar
													dataKey="Starter"
													fill="var(--color-Starter)"
													radius={[4, 4, 0, 0]}
												/>
												<Bar
													dataKey="Professional"
													fill="var(--color-Professional)"
													radius={[4, 4, 0, 0]}
												/>
												<Bar
													dataKey="Enterprise"
													fill="var(--color-Enterprise)"
													radius={[4, 4, 0, 0]}
												/>
											</BarChart>
										</ResponsiveContainer>
									</ChartContainer>

									{/* Legend */}
									<div className="flex justify-center gap-6 mt-4">
										<div className="flex items-center gap-2">
											<div className="w-3 h-3 bg-primary rounded"></div>
											<span className="text-sm text-gray-600">
												Starter
											</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="w-3 h-3 bg-theme rounded"></div>
											<span className="text-sm text-gray-600">
												Professional
											</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="w-3 h-3 bg-yellow-500 rounded"></div>
											<span className="text-sm text-gray-600">
												Enterprise
											</span>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Business Categories */}
							<Card>
								<CardHeader>
									<CardTitle className="text-primary">
										Business Categories
									</CardTitle>
									<CardDescription>
										Distribution of business types on the
										platform
									</CardDescription>
								</CardHeader>
								<CardContent>
									<div className="w-full flex items-center justify-between">
										<div className="flex-1">
											<ChartContainer
												config={{}}
												className="h-[300px] w-full"
											>
												<ResponsiveContainer
													width="100%"
													height="100%"
												>
													<PieChart>
														<Pie
															data={
																businessCategoriesData
															}
															cx="50%"
															cy="50%"
															innerRadius={60}
															outerRadius={120}
															paddingAngle={2}
															dataKey="value"
														>
															{businessCategoriesData.map(
																(
																	entry,
																	index
																) => (
																	<Cell
																		key={`cell-${index}`}
																		fill={
																			entry.color
																		}
																	/>
																)
															)}
														</Pie>
														<ChartTooltip
															content={({
																active,
																payload,
															}) => {
																if (
																	active &&
																	payload &&
																	payload.length
																) {
																	const data =
																		payload[0]
																			.payload;
																	return (
																		<div className="bg-white p-2 border rounded shadow">
																			<p className="font-medium">
																				{
																					data.name
																				}
																			</p>
																			<p className="text-sm text-gray-600">
																				{
																					data.value
																				}

																				%
																			</p>
																		</div>
																	);
																}
																return null;
															}}
														/>
													</PieChart>
												</ResponsiveContainer>
											</ChartContainer>
										</div>

										{/* Legend */}
										<div className="flex-1 space-y-4 pl-8">
											{businessCategoriesData.map(
												(item, index) => (
													<div
														key={index}
														className="flex items-center justify-between"
													>
														<div className="flex items-center gap-3">
															<div
																className="w-4 h-4 rounded"
																style={{
																	backgroundColor:
																		item.color,
																}}
															></div>
															<span
																className="text-sm font-medium"
																style={{
																	color: item.color,
																}}
															>
																{item.name}
															</span>
														</div>
														<span
															className="text-sm font-medium"
															style={{
																color: item.color,
															}}
														>
															{item.value}%
														</span>
													</div>
												)
											)}
										</div>
									</div>
								</CardContent>
							</Card>

							{/* User Growth Trends */}
							<Card>
								<CardHeader>
									<CardTitle className="text-primary">
										User Growth Trends
									</CardTitle>
									<CardDescription>
										Monthly user acquisition
									</CardDescription>
								</CardHeader>
								<CardContent>
									<ChartContainer
										config={chartConfig}
										className="h-[400px] w-full"
									>
										<ResponsiveContainer
											width="100%"
											height="100%"
										>
											<BarChart
												data={userGrowthData}
												margin={{
													top: 20,
													right: 30,
													left: 20,
													bottom: 5,
												}}
											>
												<CartesianGrid
													strokeDasharray="3 3"
													stroke="#f0f0f0"
												/>
												<XAxis
													dataKey="month"
													axisLine={false}
													tickLine={false}
													tick={{
														fontSize: 12,
														fill: "#666",
													}}
												/>
												<YAxis
													axisLine={false}
													tickLine={false}
													tick={{
														fontSize: 12,
														fill: "#666",
													}}
												/>
												<ChartTooltip
													content={
														<ChartTooltipContent />
													}
												/>
												<Bar
													dataKey="Starter"
													fill="var(--color-Starter)"
													radius={[4, 4, 0, 0]}
												/>
												<Bar
													dataKey="Professional"
													fill="var(--color-Professional)"
													radius={[4, 4, 0, 0]}
												/>
												<Bar
													dataKey="Enterprise"
													fill="var(--color-Enterprise)"
													radius={[4, 4, 0, 0]}
												/>
											</BarChart>
										</ResponsiveContainer>
									</ChartContainer>

									{/* Legend */}
									<div className="flex justify-center gap-6 mt-4">
										<div className="flex items-center gap-2">
											<div className="w-3 h-3 bg-primary rounded"></div>
											<span className="text-sm text-gray-600">
												Starter
											</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="w-3 h-3 bg-theme rounded"></div>
											<span className="text-sm text-gray-600">
												Professional
											</span>
										</div>
										<div className="flex items-center gap-2">
											<div className="w-3 h-3 bg-yellow-500 rounded"></div>
											<span className="text-sm text-gray-600">
												Enterprise
											</span>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
