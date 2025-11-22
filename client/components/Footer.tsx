import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 dark:bg-slate-900 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Shree Hingu</h3>
            <p className="text-foreground/70">
              Full Stack Developer specializing in MERN Stack
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#projects", label: "Projects" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
            <ul className="space-y-2 text-foreground/70 text-sm">
              <li>
                <a
                  href="tel:+918866707790"
                  className="hover:text-primary transition-colors duration-200"
                >
                  +91 8866707790
                </a>
              </li>
              <li>
                <a
                  href="mailto:shreehingu07@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  shreehingu07@gmail.com
                </a>
              </li>
              <li>Surat, Gujarat, India</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            Made with{" "}
            <Heart size={16} className="inline text-primary" /> by Shree
            Hingu
          </p>

          <p className="text-foreground/60 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-200 font-semibold"
          >
            Back to Top
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
