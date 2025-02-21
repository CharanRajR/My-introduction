import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Layout, Server, GraduationCap, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 animated-gradient"></div>
          <img 
            src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80"
            alt="Background" 
            className="w-full h-full object-cover opacity-20"
          />
          {/* Floating Code Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-purple-500/20 font-mono text-9xl select-none">
              <div className="animate-float-slow">
                &lt;/&gt;
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 text-center px-4 glass-effect rounded-xl p-8 border border-purple-500/20">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text animate-pulse">
            CHARAN RAJ R
          </h1>
          <p className="text-xl text-gray-200 mb-8">BCA Graduate</p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/charanrajr" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-purple-400 transition-colors transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:charanr3337@gmail.com"
              className="text-white hover:text-purple-400 transition-colors transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://github.com/CharanRajR"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-white hover:text-purple-400 transition-colors transform hover:scale-110"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-40"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Schooling & Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard 
              icon={<GraduationCap />}
              title="New Horizon College [BCA]"
              description="CGP = 9.04"
            />
            <SkillCard 
              icon={<GraduationCap />}
              title="New Horizon PU College [Commerce]"
              description="Percentage = 73%"
            />
            <SkillCard 
              icon={<Code />}
              title="Coding"
              description="Python, Html, CSS, Javascript"
            />
            <SkillCard 
              icon={<BookOpen />}
              title="Learning"
              description="Gen AI"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-30"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CertificationCard 
              title="IBM"
              description="Data Science Methodology"
              link="https://courses.cognitiveclass.ai/certificates/b88366f9bcdb459a9c503fa16bd35131"
            />
            <CertificationCard 
              title="IBM"
              description="Data Analysis with Python"
              link="https://courses.cognitiveclass.ai/certificates/0b419f55113f42e0af99064a2eac9a6c"
            />
            <CertificationCard 
              title="IBM"
              description="Introduction to Cloud"
                link="https://courses.cognitiveclass.ai/certificates/5ba226274f364501b13e6bec5e2e41a0"
            />
            <CertificationCard 
              title="IBM"
              description="Building Cloud Native and Multicloud Applications"
              link="https://courses.cognitiveclass.ai/certificates/19f25075bc6941ea9bd5843ea503b940"
            />
            <CertificationCard 
              title="IBM"
              description="Introduction to Containers, Kubernetes, and OpenShift V2"
                link="https://courses.cognitiveclass.ai/certificates/d4b6db55b9af4a44bd175580f13929e8"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-40"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <p className="text-gray-200 mb-8">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a 
            href="mailto:charanr3337@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105"
          >
            <Linkedin size={20} />
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-300 relative z-10">
        <p>© 2025 Charan Raj R. All rights reserved.</p>
      </footer>
    </div>
  );
}

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <div className="p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-400 transition-all transform hover:scale-105 hover:bg-black/60">
      <div className="text-purple-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

interface CertificationCardProps {
  title: string;
  description: string;
  link: string;
}

function CertificationCard({ title, description, link }: CertificationCardProps) {
  return (
    <div className="p-6 bg-black/40 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-400 transition-all transform hover:scale-105">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
      {link && (
        <a href={link} className="text-blue-400 hover:underline flex items-center">
          View Certificate <ExternalLink size={16} />
        </a>
      )}
    </div>
  );
}

export { SkillCard, CertificationCard };

export default App;
