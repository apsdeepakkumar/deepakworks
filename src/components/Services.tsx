import { 
  CloudCog, 
  Container, 
  GitBranch, 
  DollarSign, 
  Settings, 
  Rocket, 
  Activity, 
  Shield 
} from 'lucide-react';

const services = [
  {
    icon: CloudCog,
    title: 'DevOps Consulting',
    description: 'Strategic guidance to streamline your development and operations processes for maximum efficiency.',
  },
  {
    icon: Shield,
    title: 'Cloud Infrastructure',
    description: 'Design and implementation of secure, scalable cloud infrastructure on GCP and other platforms.',
  },
  {
    icon: GitBranch,
    title: 'CI/CD Implementation',
    description: 'Automated build, test, and deployment pipelines for faster and more reliable releases.',
  },
  {
    icon: Container,
    title: 'Containerization',
    description: 'Docker and Kubernetes solutions for consistent, portable, and scalable application deployment.',
  },
  {
    icon: DollarSign,
    title: 'Cost Optimization',
    description: 'Analyze and optimize your cloud spending to reduce costs by up to 50% without compromising performance.',
  },
  {
    icon: Settings,
    title: 'Infrastructure Automation',
    description: 'Infrastructure as Code solutions using Terraform, Ansible, and custom automation scripts.',
  },
  {
    icon: Rocket,
    title: 'Release Management',
    description: 'Structured release processes ensuring smooth, zero-downtime deployments every time.',
  },
  {
    icon: Activity,
    title: 'Monitoring & Reliability',
    description: 'Comprehensive monitoring, alerting, and incident response for 99.99% uptime.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Designed for{' '}
            <span className="font-display italic font-normal">Scale</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end DevOps services to help you build, deploy, and manage 
            your applications with confidence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-xl bg-primary/10 w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
