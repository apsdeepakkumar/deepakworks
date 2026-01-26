import { FileDown, Briefcase, GraduationCap, Award, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
const Resume = () => {
  return <section id="resume" className="py-20 md:py-32">
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
            A detailed overview of my experience, skills, and qualifications
            in DevOps and Cloud Engineering.
          </p>
        </div>

        {/* Resume Content */}
        <div className="glass-card rounded-2xl p-8 md:p-12 mb-8">
          {/* Header / Contact Info */}
          <div className="text-center mb-10 pb-8 border-b border-border/50">
            <h3 className="text-3xl font-bold gradient-text mb-2">Deepak Kumar</h3>
            <p className="text-xl text-primary font-medium mb-4">DevOps Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <a href="tel:+918235387498" className="flex items-center gap-2 hover:text-primary transition-colors">+91-9120088883<Phone className="w-4 h-4" />
                +91-8235387498
              </a>
              <a href="mailto:deepakkumar829371@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">apsdeepakkumar270501@gmail.com<Mail className="w-4 h-4" />
                deepakkumar829371@gmail.com
              </a>
              <a href="https://linkedin.com/in/deepak-kumar-cloud" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">LinkedIn<Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a href="https://github.com/deepak829" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Summary */}
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              Professional Summary
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              DevOps Engineer with 3+ years of experience in designing, implementing, and managing 
              cloud infrastructure and CI/CD pipelines. Expertise in containerization, orchestration, 
              and infrastructure as code. Passionate about automating workflows, improving system 
              reliability, and enabling teams to deliver software faster and more efficiently.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              Work Experience
            </h4>
            <div className="glass-card rounded-xl p-6 border-l-4 border-primary">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h5 className="text-lg font-semibold text-foreground">DevOps Engineer</h5>
                <span className="text-sm text-primary font-medium">Feb 2023 - Present</span>
              </div>
              <p className="text-muted-foreground font-medium mb-3 flex items-center gap-2">Sigtuple Technology private limited<MapPin className="w-4 h-4" />
                Quantela Inc
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc list-inside">
                <li>Designed and maintained cloud infrastructure on GCP using Terraform and Ansible</li>
                <li>Implemented CI/CD pipelines using Jenkins, ArgoCD, and GitHub Actions</li>
                <li>Managed Kubernetes clusters for containerized application deployments</li>
                <li>Automated monitoring and alerting using Prometheus and Grafana</li>
                <li>Reduced deployment time by 60% through pipeline optimization</li>
                <li>Collaborated with development teams to implement DevOps best practices</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              Education
            </h4>
            <div className="glass-card rounded-xl p-6 border-l-4 border-primary">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h5 className="text-lg font-semibold text-foreground">B.Tech in Computer Science</h5>
                <span className="text-sm text-primary font-medium">2019 - 2023</span>
              </div>
              <p className="text-muted-foreground">Lovely Professional University (LPU), Punjab</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-10">
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-4 h-4 text-primary" />
              </div>
              Technical Skills
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4">
                <h6 className="font-medium text-foreground mb-2">Cloud Platforms</h6>
                <p className="text-sm text-muted-foreground">AWS, Google Cloud Platform (GCP), Microsoft Azure</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <h6 className="font-medium text-foreground mb-2">Containerization & Orchestration</h6>
                <p className="text-sm text-muted-foreground">Docker, Kubernetes, Helm, Container Registry</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <h6 className="font-medium text-foreground mb-2">CI/CD Tools</h6>
                <p className="text-sm text-muted-foreground">Jenkins, ArgoCD, GitHub Actions, GitLab CI</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <h6 className="font-medium text-foreground mb-2">Infrastructure as Code</h6>
                <p className="text-sm text-muted-foreground">Terraform, Ansible, CloudFormation</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <h6 className="font-medium text-foreground mb-2">Scripting & Programming</h6>
                <p className="text-sm text-muted-foreground">Python, Bash, PowerShell, YAML</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <h6 className="font-medium text-foreground mb-2">Databases</h6>
                <p className="text-sm text-muted-foreground">MySQL, PostgreSQL, MongoDB, Redis</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">Certifications
      ● DevOps MasterClass - GIT Docker Jenkins Kubernetes Terraform - Udemy - Ongoing
      ● Modern big Data Analysis with SQL specialization
      ● Programming Using c++ (CipherSchools)
      ● Python for Everyday Specialization

            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-4 h-4 text-primary" />
              </div>
              Certifications
            </h4>
            
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <a href="/resume/Deepak_kumar_Resume.pdf" download="Deepak_kumar_Resume.pdf" className="btn-primary inline-flex items-center gap-3">
            <FileDown className="w-5 h-5" />
            Download Resume PDF
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            PDF format • Updated 2024
          </p>
        </div>
      </div>
    </section>;
};
export default Resume;