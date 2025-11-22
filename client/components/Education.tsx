import { Award, GraduationCap } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Information Technology (IT)",
      institution: "Silver Oak University",
      period: "2021 – Present",
      status: "Currently Pursuing",
      description:
        "Pursuing B.Tech in IT with focus on full-stack development, data structures, algorithms, and modern web technologies.",
      icon: GraduationCap,
    },
  ];

  const schoolEducation = [
    {
      level: "12th Grade",
      percentage: "75%",
      icon: "📚",
    },
    {
      level: "10th Grade",
      percentage: "79%",
      icon: "✏️",
    },
  ];

  const certifications = [
    {
      name: "MERN Stack Development",
      issuer: "Udemy",
      date: "2024",
    },
    {
      name: "JavaScript Fundamentals",
      issuer: "Coursera",
      date: "2023",
    },
    {
      name: "React Developer Specialization",
      issuer: "Udemy",
      date: "2024",
    },
    {
      name: "Node.js & MongoDB Complete Guide",
      issuer: "Udemy",
      date: "2023",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-16 animate-fade-in">Education</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Degree & School */}
          <div className="space-y-6">
            {/* University Degree */}
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <GraduationCap className="text-primary" size={28} />
                University Degree
              </h3>

              {education.map((edu, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-8 card-hover"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-foreground">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-primary font-semibold mt-2">
                        {edu.field}
                      </p>
                      <p className="text-lg text-foreground/80 mt-1">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-secondary bg-secondary/10 inline-block px-4 py-2 rounded-lg">
                      {edu.period}
                    </p>
                    <p className="text-sm text-foreground/60 font-medium">
                      Status: <span className="text-primary">{edu.status}</span>
                    </p>
                  </div>

                  <p className="text-foreground/70 mt-4 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* School Education */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Award className="text-secondary" size={28} />
                School Education
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {schoolEducation.map((school, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-xl p-6 text-center card-hover"
                  >
                    <p className="text-4xl mb-3">{school.icon}</p>
                    <p className="font-semibold text-foreground">
                      {school.level}
                    </p>
                    <p className="text-2xl font-bold text-primary mt-2">
                      {school.percentage}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Certifications */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Award className="text-primary" size={28} />
              Certifications & Courses
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-xl p-6 card-hover flex items-start gap-4 border-l-4 border-primary"
                >
                  <div className="text-3xl">🎓</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground">
                      {cert.name}
                    </h4>
                    <p className="text-sm text-foreground/70 mt-1">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-secondary font-semibold mt-2">
                      {cert.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Learning */}
            <div className="glass-effect rounded-xl p-6 mt-6 card-hover bg-gradient-to-br from-primary/10 to-secondary/10">
              <h4 className="font-bold text-foreground mb-4">
                📖 Continuous Learning
              </h4>
              <ul className="space-y-2">
                {[
                  "Advanced TypeScript & System Design",
                  "Web Performance Optimization",
                  "Cloud Deployment (AWS/Azure)",
                  "GraphQL & Modern APIs",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-foreground/70 text-sm"
                  >
                    <span className="text-primary">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
