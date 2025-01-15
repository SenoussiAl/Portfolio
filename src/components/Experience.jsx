import React from 'react';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    company: "Shared Services Canada",
    position: "Configuration Management Intern",
    duration: "May 2024 - August 2024",
    location: "Ottawa, ON",
    responsibilities: [
      "Optimized configuration management processes by mapping thousands of servers to applications, significantly reducing manual effort and errors.",
      "Enhanced documentation workflows leading to a 25% improvement in troubleshooting efficiency.",
      "Designed CI/CD pipelines achieving a 40% reduction in deployment times.",
      "Led project timelines with a 95% on-time completion rate."
    ]
  },
  {
    company: "Service Canada",
    position: "Frontend Developer Intern",
    duration: "September 2022 - December 2022",
    location: "Ottawa, ON",
    responsibilities: [
      "Revitalized web UI using React.js, Node.js, and TypeScript, resulting in 25% improved user engagement.",
      "Developed dynamic, data-driven web pages for real-time analytics visualization.",
      "Improved response times by 30% through backend integration optimization.",
      "Achieved 94% test coverage through rigorous Java backend testing."
    ]
  },
  {
    company: "Royal Canadian Mounted Police (RCMP)",
    position: "IT Support",
    duration: "January 2022 - July 2022",
    location: "Ottawa, ON",
    responsibilities: [
      "Provided technical support with average resolution time under 3 minutes.",
      "Managed user permissions through Active Directory, PKI certificates and LDAP.",
      "Improved ticket resolution rates by 20% through efficient problem-solving.",
      "Developed and executed automation scripts to streamline support processes."
    ]
  }
];

const Experience = () => {
  return (
    <section id='experience' className="section">
      <div className="container">
        <h2 className="headline-2">
          Experience
        </h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Through my internships, I've gained hands-on experience in various roles across software development, configuration management, and IT support, consistently delivering measurable improvements and maintaining high standards of quality.
        </p>
        <div className="grid gap-4">
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              company={exp.company}
              position={exp.position}
              duration={exp.duration}
              location={exp.location}
              responsibilities={exp.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;