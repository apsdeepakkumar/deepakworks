import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-bold gradient-text">DK</span>
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {currentYear} Made with <Heart size={14} className="text-primary" /> by Deepak Kumar
            </p>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-center">
            Building <span className="text-foreground">reliable</span> cloud infrastructure
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/apsdeepak/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/apsdeepak"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:apsdeepakkumar270501@gmail.com"
              className="p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-all"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
