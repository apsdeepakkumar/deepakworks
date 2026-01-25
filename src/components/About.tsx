import { GraduationCap, Briefcase, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Crafting Cloud{' '}
            <span className="font-display italic font-normal">Excellence</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate DevOps Engineer with over 3 years of experience in building 
              and managing cloud-native infrastructure. Currently at Sigtuple Technologies, 
              I specialize in designing production-grade GCP infrastructure that powers 
              mission-critical healthcare applications.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans the full DevOps spectrum—from containerization with Docker 
              and Kubernetes to implementing robust CI/CD pipelines with Jenkins, CircleCI, 
              and GitHub Actions. I'm driven by the challenge of optimizing cloud costs 
              while maintaining exceptional reliability and performance.
            </p>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>India • Available for Remote Work</span>
            </div>
          </div>

          {/* Education & Experience Cards */}
          <div className="space-y-6">
            {/* Education */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4 pl-14">
                <div>
                  <h4 className="font-medium">B.Tech in Computer Science</h4>
                  <p className="text-muted-foreground text-sm">
                    Lovely Professional University • 2019 - 2023
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Senior Secondary (Mathematics)</h4>
                  <p className="text-muted-foreground text-sm">
                    Army Public School, Lucknow • 2018 - 2019
                  </p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="glass-card rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Briefcase className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Experience</h3>
              </div>
              <div className="pl-14">
                <h4 className="font-medium">DevOps Engineer</h4>
                <p className="text-primary text-sm mb-2">Sigtuple Technologies</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Production-grade GCP infrastructure design</li>
                  <li>• Kubernetes cluster management & optimization</li>
                  <li>• CI/CD pipeline implementation</li>
                  <li>• Cloud cost optimization (40-50% reduction)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
