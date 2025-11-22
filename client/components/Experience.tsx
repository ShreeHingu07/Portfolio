import { Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      company: "Vasundhara Infotech",
      position: "Full Stack Developer",
      period: "March 2025 – Present",
      description:
        "Building and deploying scalable MERN applications with focus on performance and user experience.",
      responsibilities: [
        "Build & deploy MERN applications",
        "Develop clean and efficient REST APIs",
        "Optimize MongoDB and MySQL queries",
        "Work in agile team environments",
        "Implement modern UI/UX patterns",
        "Code review and mentoring",
      ],
    },
    {
      company: "Plexoc Solution",
      position: "Frontend Developer",
      period: "Aug 2023 – Nov 2023",
      description:
        "Created interactive and responsive user interfaces with focus on performance optimization.",
      responsibilities: [
        "Built interactive user interfaces with React",
        "Improved application performance significantly",
        "Integrated REST APIs with frontend",
        "Developed reusable UI components",
        "Implemented responsive design",
        "Optimized bundle size and loading times",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center mb-16 animate-fade-in">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative animate-fade-in">
              {/* Timeline Line 
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-20 w-1 h-20 bg-gradient-to-b from-primary to-secondary/30 hidden md:block" />
              )}
              */}

              {/* Timeline Dot */}
              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 glass-effect rounded-xl p-6 md:p-8 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {exp.position}
                      </h3>
                      <p className="text-lg text-primary font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="inline-block md:text-right">
                      <p className="text-sm font-semibold text-secondary bg-secondary/10 px-4 py-2 rounded-lg">
                        {exp.period}
                      </p>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-foreground/80">
                      Key Responsibilities:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start gap-2 text-foreground/70"
                        >
                          <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
