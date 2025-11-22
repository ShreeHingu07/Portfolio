import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.subject &&
      formData.message
    ) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8866707790",
      href: "tel:+918866707790",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: "Email",
      value: "shreehingu07@gmail.com",
      href: "mailto:shreehingu07@gmail.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Surat, Gujarat, India",
      href: "#",
      color: "from-green-500 to-teal-500",
    },
  ];

  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "#", color: "from-blue-600 to-blue-500" },
    { icon: Github, label: "GitHub", href: "#", color: "from-gray-800 to-gray-700" },
    { icon: Twitter, label: "Twitter", href: "#", color: "from-sky-400 to-sky-500" },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center mb-4 animate-fade-in">Get In Touch</h2>
        <p className="text-center text-foreground/70 text-lg mb-16 max-w-2xl mx-auto animate-slide-up">
          Have a project in mind? Let's collaborate and create something amazing
          together. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-effect rounded-xl p-8 card-hover text-center h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${method.color} mb-4 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-foreground/70">{method.value}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Contact Form and Social */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="glass-effect rounded-xl p-8 md:p-10 card-hover animate-slide-in-left"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Send Me a Message
            </h3>

            <div className="space-y-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                <Send size={20} />
                Send Message
              </button>

              {/* Success Message */}
              {isSubmitted && (
                <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-center font-medium animate-fade-in">
                  ✓ Message sent successfully!
                </div>
              )}
            </div>
          </form>

          {/* Social Links & Info */}
          <div className="space-y-8 animate-slide-up">
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-effect rounded-xl p-4 card-hover flex flex-col items-center justify-center"
                    >
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${social.color} flex items-center justify-center mb-3`}
                      >
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <p className="text-sm font-semibold text-foreground">
                        {social.label}
                      </p>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Info */}
            <div className="glass-effect rounded-xl p-6 md:p-8 bg-gradient-to-br from-primary/10 to-secondary/10">
              <h4 className="text-lg font-bold text-foreground mb-4">
                🚀 Let's Work Together
              </h4>
              <p className="text-foreground/70 mb-4">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to
                say hi, feel free to get in touch!
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <span>✓</span> Available for freelance projects
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <span>✓</span> Open to full-time opportunities
                </li>
                <li className="flex items-center gap-2 text-sm text-foreground/70">
                  <span>✓</span> Response time: 24-48 hours
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
