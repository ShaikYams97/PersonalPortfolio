import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaGitAlt, FaJenkins, FaDocker, FaAws,
  FaLinux, FaChartLine, FaShieldAlt, FaTerminal, FaCogs
} from 'react-icons/fa';
import { SiTerraform, SiAnsible, SiKubernetes } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { category: 'Programming Languages', items: ['Python'], icon: <FaPython /> },
    { category: 'Version Control', items: ['Git', 'GitHub', 'GitLab'], icon: <FaGitAlt /> },
    { category: 'CI/CD', items: ['Jenkins', 'GitHub Actions', 'GitLab CI/CD'], icon: <FaJenkins /> },
    { category: 'Containerization', items: ['Docker'], icon: <FaDocker /> },
    { category: 'Container Orchestration', items: ['Kubernetes'], icon: <SiKubernetes /> },
    { category: 'Infrastructure as Code (IaC)', items: ['Terraform'], icon: <SiTerraform /> },
    { category: 'Configuration Management', items: ['Ansible'], icon: <SiAnsible /> },
    { category: 'Cloud Platforms', items: ['AWS'], icon: <FaAws /> },
    { category: 'Scripting', items: ['Bash', 'Python'], icon: <FaTerminal /> },
    { category: 'Operating Systems', items: ['Linux (Ubuntu)', 'Windows Server'], icon: <FaLinux /> },
    { category: 'Monitoring & Visualization', items: ['Prometheus', 'Grafana'], icon: <FaChartLine /> },
    { category: 'DevSecOps & Security', items: ['OWASP ZAP', 'SonarQube', 'Trivy'], icon: <FaShieldAlt /> },
    { category: 'Build Tools', items: ['Maven', 'Gradle'], icon: <FaCogs /> },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="skills"
      id="skills"
    >
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-category"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.category}</h3>
            <ul>
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;