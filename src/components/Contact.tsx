import { useState } from 'react';
import { Mail, Phone, Linkedin, Send, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:apsdeepakkumar270501@gmail.com?subject=Portfolio Inquiry from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Info */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
                Get in Touch
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build{' '}
                <span className="font-display italic font-normal">Together</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Have a project in mind or need DevOps expertise? I'm here to help 
                you build scalable, reliable infrastructure that drives your business forward.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <a
                href="tel:+919120088883"
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/30 transition-all group"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 9120088883</p>
                </div>
              </a>

              <a
                href="mailto:apsdeepakkumar270501@gmail.com"
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/30 transition-all group"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">apsdeepakkumar270501@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/apsdeepak/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass-card rounded-xl hover:border-primary/30 transition-all group"
              >
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">linkedin.com/in/apsdeepak</p>
                </div>
                <ArrowRight className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" size={18} />
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
