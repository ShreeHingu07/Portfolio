import { Download, Mail, ArrowRight } from "lucide-react";
import Scene3D from "./Scene3D";

export default function Hero() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Shree_Hingu_Resume.pdf";
    link.download = "Shree_Hingu_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-32 pb-16 px-4 sm:px-6 lg:px-8 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-2 animate-slide-up">
              <p className="text-primary font-semibold text-lg">
                Welcome to my portfolio
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Shree Hingu
              </h1>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <p className="text-2xl md:text-3xl font-semibold text-primary">
                Full Stack Developer
              </p>
              <p className="text-lg text-foreground/70 font-medium mt-2">
                Specializing in MERN Stack
              </p>
            </div>

            <p
              className="text-lg text-foreground/70 leading-relaxed max-w-md animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              I build scalable, high-performance web applications with clean and
              efficient code. Passionate about creating seamless user experiences
              and robust backend solutions.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-slide-up pt-4"
              style={{ animationDelay: "0.3s" }}
            >
              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                <Download size={20} />
                Download Resume
              </button>
              <a
                href="mailto:shreehingu07@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg transition-all duration-300 hover:bg-primary/10 active:scale-95"
              >
                <Mail size={20} />
                Contact Me
              </a>
            </div>

            {/* Quick Contact Info */}
            <div
              className="pt-8 space-y-3 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <p className="text-sm text-foreground/60 font-medium">
                Quick Contact
              </p>
              <div className="space-y-2">
                <a
                  href="tel:+918866707790"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  <span className="text-sm">📱</span>
                  <span>+91 8866707790</span>
                </a>
                <a
                  href="mailto:shreehingu07@gmail.com"
                  className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors duration-200"
                >
                  <span className="text-sm">✉️</span>
                  <span>shreehingu07@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Scene */}
          <div className="hidden lg:block">
            <div className="w-full h-96 overflow-hidden">
              <Scene3D />
            </div>
            {/* <p className="text-center text-foreground/60 text-sm mt-4">
              React • Node.js • MongoDB • Express
            </p> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20 animate-bounce">
          <a
            href="#about"
            className="text-foreground/50 hover:text-primary transition-colors duration-200"
          >
            <ArrowRight size={24} className="rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
}
