import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Hospital Management System",
      stack: "MERN Stack",
      description:
        "A comprehensive hospital management platform with patient management, appointment scheduling, billing system, role-based access control, and JWT authentication.",
      features: [
        "Patient Management",
        "Appointment Scheduling",
        "Billing System",
        "RBAC (Role-Based Access Control)",
        "JWT Authentication",
        "Analytics Dashboard",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      color: "from-blue-500 to-cyan-500",
      icon: "🏥",
    },
    {
      title: "E-Commerce Website",
      stack: "Frontend + Backend",
      description:
        "A full-featured e-commerce platform with product showcase, advanced filtering, form validation, and seamless payment integration.",
      features: [
        "Product Showcase",
        "Advanced Filtering",
        "Shopping Cart",
        "Payment Integration",
        "Order Management",
        "User Reviews",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "CSS3"],
      color: "from-purple-500 to-pink-500",
      icon: "🛍️",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-16 animate-fade-in">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Card */}
              <div className="glass-effect rounded-xl overflow-hidden card-hover h-full flex flex-col">
                {/* Header with Icon */}
                <div
                  className={`bg-gradient-to-r ${project.color} p-8 text-white flex items-center justify-between`}
                >
                  <div>
                    <p className="text-sm font-semibold opacity-90">
                      {project.stack}
                    </p>
                    <h3 className="text-2xl font-bold mt-2">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-5xl opacity-80">{project.icon}</div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Key Features:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, fIndex) => (
                        <span
                          key={fIndex}
                          className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 flex-1">
                    <p className="text-sm font-semibold text-foreground mb-3">
                      Technologies:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="text-xs bg-secondary/10 text-secondary px-3 py-1.5 rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons 
                  <div className="flex gap-3 pt-6 border-t border-border">
                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 active:scale-95">
                      <Github size={18} />
                      Code
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-all duration-200 active:scale-95">
                      <ExternalLink size={18} />
                      Live
                    </button>
                  </div>
                  */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/ShreeHingu07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-all duration-200"
          >
            <Github size={20} />
            Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
