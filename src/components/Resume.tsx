import { FileDown, Award, GraduationCap, Cloud, GitBranch, ExternalLink, FileText } from 'lucide-react';

const highlights = [
  {
    icon: Award,
    title: '3+ Years',
    description: 'DevOps Experience',
  },
  {
    icon: GraduationCap,
    title: 'B.Tech CS',
    description: 'LPU (2019-2023)',
  },
  {
    icon: Cloud,
    title: 'GCP Expert',
    description: 'Kubernetes & Cloud',
  },
  {
    icon: GitBranch,
    title: 'CI/CD',
    description: 'Pipeline Specialist',
  },
];

const Resume = () => {
  return (
    <section id="resume" className="py-20 md:py-32">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Resume
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            My{' '}
            <span className="font-display italic text-primary">
              Professional Journey
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and qualifications
            in DevOps and Cloud Engineering.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Resume Card & Download */}
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Resume Preview Card */}
            <div className="flex-1 w-full max-w-md mx-auto">
              <div className="aspect-[8.5/11] w-full rounded-xl border border-border/50 bg-gradient-to-br from-secondary/50 to-secondary/30 flex flex-col items-center justify-center p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="w-10 h-10 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Deepak Kumar</h4>
                <p className="text-muted-foreground mb-4">DevOps Engineer Resume</p>
                <p className="text-sm text-muted-foreground mb-6">PDF Document</p>
                <a
                  href="/resume/Deepak_kumar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-sm inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  View in New Tab
                </a>
              </div>
            </div>

            {/* Download Section */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-4">
                Ready to <span className="gradient-text">Collaborate?</span>
              </h3>
              <p className="text-muted-foreground mb-8">
                Download my complete resume to see my full professional background,
                technical skills, certifications, and project experience. Let's build
                something amazing together!
              </p>
              <a
                href="/resume/Deepak_kumar_Resume.pdf"
                download="Deepak_kumar_Resume.pdf"
                className="btn-primary inline-flex items-center gap-3"
              >
                <FileDown className="w-5 h-5" />
                Download Resume
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                PDF format • Updated 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
