import { ArrowDown, Cloud, GitBranch, Zap } from 'lucide-react';
import profileImage from '@/assets/deepak-profile.png';
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-0 my-0 mx-0 px-0">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wide uppercase text-sm">
                DevOps Engineer
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Deepak</span>
                <br />
                <span className="font-display italic font-normal text-foreground/90">
                  Kumar
                </span>
              </h1>
              <p className="text-lg max-w-lg leading-relaxed text-secondary-foreground">
                DevOps Engineer specializing in Building scalable, reliable, and cost-efficient cloud-native infrastructure. 3+ years of experience designing production-gDevOps Engineer specializing in building scalable, reliable, and cost-efficient cloud-native infrastructure on Google Cloud Platform (GCP). With 3+ years of hands-on experience, I design, deploy, and operate production-grade systems using Docker, Kubernetes (GKE), CI/CD pipelines, and infrastructure automation. My work focuses on enabling high availability, smooth release cycles, and optimized cloud costs while supporting microservices-based architectures. I bring strong expertise in production operations, cloud networking, automation, and release management, ensuring resilient and secure systems at scale.rade systems on Google Cloud Platform.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
                <ArrowDown size={18} />
              </a>
              <a href="#contact" className="btn-outline">
                Let's Connect
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div className="stat-item text-left">
                <div className="stat-number text-3xl">3+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item text-left">
                <div className="stat-number text-3xl">99.99%</div>
                <div className="stat-label">Uptime Achieved</div>
              </div>
              <div className="stat-item text-left">
                <div className="stat-number text-3xl">50%</div>
                <div className="stat-label">Cost Reduction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Floating Icons */}
            <div className="absolute top-0 left-0 glass-card p-4 rounded-2xl floating-element z-20">
              <Cloud className="text-primary" size={28} />
            </div>
            <div className="absolute top-1/4 right-0 glass-card p-4 rounded-2xl floating-element z-20" style={{
            animationDelay: '1s'
          }}>
              <Zap className="text-primary" size={28} />
            </div>
            <div className="absolute bottom-1/4 left-4 glass-card p-4 rounded-2xl floating-element z-20" style={{
            animationDelay: '2s'
          }}>
              <GitBranch className="text-primary" size={28} />
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-full blur-2xl transform scale-110" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden gradient-border glow-effect p-3">
                <img src={profileImage} alt="Deepak Kumar" className="w-full h-full object-cover rounded-full border-solid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>;
};
export default Hero;