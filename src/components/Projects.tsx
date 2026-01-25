import { ExternalLink, TrendingUp, Shield, Cloud, Server } from 'lucide-react';

const projects = [
  {
    title: 'Anemia Mukt Bharat',
    subtitle: 'Production Infrastructure on GCP',
    description: 'Designed and implemented production-grade GCP infrastructure for a national healthcare initiative. Managed Kubernetes clusters, containerized microservices, and implemented robust CI/CD pipelines.',
    achievements: [
      { icon: TrendingUp, label: '40-50% Cost Reduction' },
      { icon: Cloud, label: '99.99% Uptime' },
      { icon: Server, label: 'Multi-region Deployment' },
    ],
    tags: ['GCP', 'Kubernetes', 'Docker', 'Jenkins', 'Terraform'],
    gradient: 'from-primary/20 to-cyan-500/20',
  },
  {
    title: 'Cyber-Security Audits',
    subtitle: 'Secure Infrastructure Management',
    description: 'Managed cloud infrastructure for secure cybersecurity audit workloads. Implemented network configuration, database security, CI/CD pipelines, and compliance measures.',
    achievements: [
      { icon: Shield, label: 'SOC 2 Compliant' },
      { icon: Cloud, label: 'Zero Security Incidents' },
      { icon: Server, label: 'Automated Compliance' },
    ],
    tags: ['GCP', 'VPC', 'Firewall', 'MongoDB', 'GitHub Actions'],
    gradient: 'from-emerald-500/20 to-primary/20',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted in{' '}
            <span className="font-display italic font-normal">Real Spaces</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world projects where I've delivered scalable, reliable, and 
            cost-optimized cloud infrastructure.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative p-8 md:p-10">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      <p className="text-primary text-sm font-medium mb-2">
                        {project.subtitle}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="skill-tag text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    {project.achievements.map((achievement) => (
                      <div
                        key={achievement.label}
                        className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50"
                      >
                        <achievement.icon className="text-primary" size={20} />
                        <span className="text-sm font-medium">{achievement.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="stat-item">
            <div className="stat-number">2K+</div>
            <div className="stat-label">Deployments</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">120+</div>
            <div className="stat-label">Pipelines Built</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">800+</div>
            <div className="stat-label">Containers Managed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50%</div>
            <div className="stat-label">Avg. Cost Savings</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
