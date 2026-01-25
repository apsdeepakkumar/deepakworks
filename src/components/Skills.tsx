import { Cloud, Container, GitBranch, Terminal, Network, Database, Globe, Settings } from 'lucide-react';

const skillCategories = [
  {
    icon: Cloud,
    title: 'Cloud Platforms',
    skills: ['Google Cloud Platform', 'GKE', 'Compute Engine', 'Cloud Storage'],
  },
  {
    icon: Container,
    title: 'Containerization',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Istio'],
  },
  {
    icon: GitBranch,
    title: 'CI/CD & Release',
    skills: ['Jenkins', 'CircleCI', 'GitHub Actions', 'ArgoCD'],
  },
  {
    icon: Terminal,
    title: 'Automation & IaC',
    skills: ['Ansible', 'Terraform', 'Bash', 'Python'],
  },
  {
    icon: Network,
    title: 'Cloud Networking',
    skills: ['VPC', 'Subnets', 'Firewall', 'Cloud DNS', 'VPN'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis'],
  },
  {
    icon: Globe,
    title: 'Web & Traffic',
    skills: ['Nginx', 'Load Balancing', 'SSL/TLS', 'CDN'],
  },
  {
    icon: Settings,
    title: 'Operations',
    skills: ['Monitoring', 'High Availability', 'Disaster Recovery', 'Cost Optimization'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Skills & Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technology That Works{' '}
            <span className="font-display italic font-normal">in Harmony</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building and managing enterprise-grade 
            cloud infrastructure at scale.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 hover:glow-effect transition-all duration-500 hover:border-primary/30 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-4">
                <category.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
