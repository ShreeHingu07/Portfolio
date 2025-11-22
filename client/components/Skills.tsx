import { Code2, Layers, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Angular", icon: "🅰️" },
        { name: "HTML5", icon: "📝" },
        { name: "CSS3", icon: "🎨" },
        { name: "Bootstrap", icon: "🔶" },
        { name: "JavaScript (ES6+)", icon: "⚡" },
      ],
    },
    {
      title: "Backend",
      icon: Layers,
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "REST APIs", icon: "🔌" },
        { name: "Authentication", icon: "🔐" },
        { name: "Middleware", icon: "🔗" },
        { name: "Server Architecture", icon: "🏗️" },
      ],
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "MySQL", icon: "🗄️" },
        { name: "Mongoose", icon: "🔄" },
        { name: "Query Optimization", icon: "⚙️" },
        { name: "Database Design", icon: "📊" },
        { name: "Data Modeling", icon: "📐" },
      ],
    },
    {
      title: "Tools & More",
      icon: Wrench,
      skills: [
        { name: "Git", icon: "🔀" },
        { name: "Postman", icon: "🧪" },
        { name: "API Integration", icon: "🔗" },
        { name: "RESTful Services", icon: "🌐" },
        { name: "Problem Solving", icon: "🧩" },
        { name: "Agile/Scrum", icon: "📋" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-16 animate-fade-in">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div
                key={categoryIndex}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <div className="glass-effect rounded-xl p-8 h-full card-hover">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/50 dark:bg-slate-700/30 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors duration-200"
                      >
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-foreground/80 font-medium">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-2xl font-bold text-foreground">
              Technical Proficiency
            </h3>
            {[
              { label: "Frontend Development", percentage: 90 },
              { label: "Backend Development", percentage: 85 },
              { label: "Database Management", percentage: 80 },
              { label: "API Design & Integration", percentage: 85 },
              { label: "Problem Solving", percentage: 90 },
              { label: "Team Collaboration", percentage: 88 },
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">
                    {skill.label}
                  </span>
                  <span className="text-sm text-primary font-bold">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000"
                    style={{ width: `${skill.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="glass-effect rounded-xl p-8 animate-slide-up">
            <h4 className="text-xl font-bold text-foreground mb-4">
              Learning & Growth
            </h4>
            <ul className="space-y-3">
              {[
                "Currently exploring advanced TypeScript patterns",
                "Passionate about system design and architecture",
                "Learning cloud deployment (AWS, Azure)",
                "Interested in GraphQL and modern APIs",
                "Continuous learner in web technologies",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-foreground/70"
                >
                  <span className="text-primary font-bold text-lg mt-1">
                    →
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
