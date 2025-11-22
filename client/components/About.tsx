import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-16 animate-fade-in">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About Text */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Passionate Full Stack Developer
              </h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                I'm a proactive and resourceful MERN/MEAN Stack Developer with a
                passion for building scalable applications and intuitive user
                interfaces. I excel at transforming complex problems into elegant,
                efficient solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground">
                Key Strengths
              </h4>
              <ul className="space-y-3">
                {[
                  "Building scalable applications and REST APIs",
                  "Creating intuitive and responsive user interfaces",
                  "Optimizing database queries and performance",
                  "Problem-solving and quick learning",
                  "Agile team collaboration",
                  "Clean code and best practices",
                ].map((strength, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-foreground/70"
                  >
                    <span className="text-primary font-bold text-lg mt-1">
                      ✓
                    </span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <p className="text-sm text-foreground/60 font-medium mb-3">
                Based in
              </p>
              <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
                <MapPin size={20} className="text-primary" />
                Surat, Gujarat, India
              </div>
            </div>
          </div>

          {/* Right Column - Contact Details Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-slide-up">
            {/* Phone Card */}
            <div className="glass-effect rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  <Phone size={24} />
                </div>
                <h4 className="font-semibold text-foreground">Phone</h4>
              </div>
              <a
                href="tel:+918866707790"
                className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
              >
                +91 8866707790
              </a>
            </div>

            {/* Email Card */}
            <div className="glass-effect rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  <Mail size={24} />
                </div>
                <h4 className="font-semibold text-foreground">Email</h4>
              </div>
              <a
                href="mailto:shreehingu07@gmail.com"
                className="text-primary hover:text-secondary transition-colors duration-200 font-medium break-all"
              >
                shreehingu07@gmail.com
              </a>
            </div>

            {/* Location Card */}
            <div className="glass-effect rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  <MapPin size={24} />
                </div>
                <h4 className="font-semibold text-foreground">Location</h4>
              </div>
              <p className="text-foreground/70 font-medium">
                Surat, Gujarat
              </p>
            </div>

            {/* LinkedIn Card */}
            <div className="glass-effect rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white">
                  <Linkedin size={24} />
                </div>
                <h4 className="font-semibold text-foreground">LinkedIn</h4>
              </div>
              <a
                href="https://www.linkedin.com/in/shreehingu"
                className="text-primary hover:text-secondary transition-colors duration-200 font-medium"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
