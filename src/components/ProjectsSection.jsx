import { ArrowRight, ExternalLink, Github, Zap } from "lucide-react";

const projects = [
	{
		id: 1,
		title: "Hospital Patient Management System",
		description:
			"Built a hospital system with patient registration and doctor assignment. Added time-slot scheduling, searchable records, and daily admission/discharge reports.",
		image: "public/project/project1.jpg",
		tags: ["Java", "Swing", "MySql", "JDBC"],
		githubUrl:
			"https://github.com/harshinisanjana/Hospital-Patient-Management-System",
	},
	{
		id: 2,
		title: "Menstural Cycle Tracker",
		description:
			"Developed a cycle tracker with user login, period prediction, and hormone insights. Visualized cycle data using Matplotlib charts on a responsive dashboard.",
		image: "public/project/project2.jpg",
		tags: ["Python", "Flask", "MySql", "HTML", "CSS"],
		githubUrl:
			"https://github.com/harshinisanjana/menstrual-cycle-tracker",
	},
	{
		id: 3,
		title: "Vehicle Token Dispensing System",
		description:
			"Created a web-based parking system with token generation, slot display, and admin controls. Integrated real-time updates, parking verification, and customer data tracking.",
		image: "public/project/project3.png",
		tags: ["HTML", "CSS", "JavaScript", "PHP"],
		githubUrl:
			"https://github.com/harshinisanjana/vehicle_token_dispensing_system",
	},
];

export const ProjectsSection = () => {
	return (
		<section id="projects" className="py-24 px-4 relative">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center">
					<div className="inline-flex items-center gap-3 mb-4">
						<h2
							className="text-4xl md:text-5xl font-extrabold mb-4 text-center cosmic-text"
							style={{
								lineHeight: "1.2",
								paddingBottom: "0.15em",
								fontFamily: "Segoe UI, sans-serif",
							}}
						>
							Featured{" "}
							<span className="cosmic-text whitespace-nowrap">
								Projects
							</span>
						</h2>
					</div>
				</div>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					Here are some of my recent projects. Each project was carefully
					crafted with attention to detail, performance, and user experience.
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, key) => (
						<div
							key={key}
							className="group bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50"
						>
							<div className="aspect-video overflow-hidden bg-muted">
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
								/>
							</div>

							<div className="p-6">
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tags.map((tag, index) => (
										<span
											key={index}
											className="px-3 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
										>
											{tag}
										</span>
									))}
								</div>

								<h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
									{project.title}
								</h3>
								<p className="text-muted-foreground text-sm mb-6 leading-relaxed">
									{project.description}
								</p>

								<div className="flex justify-between items-center">
									<div className="flex space-x-3">
										<a
											href={project.githubUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="p-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
											aria-label={`View ${project.title} on GitHub`}
										>
											<Github size={20} />
										</a>
										{project.demoUrl && (
											<a
												href={project.demoUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
												aria-label={`View ${project.title} demo`}
											>
												<ExternalLink size={20} />
											</a>
										)}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className="flex justify-center pt-8">
					<a
						href="https://github.com/harshinisanjana"
						target="_blank"
						rel="noopener noreferrer"
						className="group relative"
					>
						<div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity animate-pulse" />
						<button className="relative px-8 py-4 bg-black rounded-full text-white font-medium flex items-center gap-3 hover:scale-105 transition-transform">
							<Github className="w-5 h-5" />
							Check My Github
							<ArrowRight className="w-4 h-4" />
						</button>
					</a>
				</div>
			</div>
		</section>
	);
};