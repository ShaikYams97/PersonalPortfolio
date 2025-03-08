import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  FaPython, FaGitAlt, FaJenkins, FaDocker, FaAws,
  FaLinux, FaChartLine, FaShieldAlt, FaTerminal, FaCogs
} from 'react-icons/fa';
import { SiTerraform, SiAnsible, SiKubernetes } from 'react-icons/si';
import './Skills.css';

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

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 12 
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="skills-section"
      id="skills"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="section-header">
        <motion.h2 variants={titleVariants} className="section-title">
          Technical Expertise
        </motion.h2>
        <motion.div 
          className="title-underline"
          initial={{ width: 0 }}
          animate={isInView ? { width: "120px" } : { width: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
        <motion.p 
          className="section-subtitle"
          variants={titleVariants}
        >
          Skills & Technologies
        </motion.p>
      </div>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            variants={itemVariants}
            whileHover={{
              y: -8,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)",
              transition: { type: "spring", stiffness: 300 }
            }}
            custom={index}
          >
            <motion.div 
              className="skill-icon-container"
              whileHover={{
                backgroundColor: "var(--accent-light)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div
                className="skill-icon"
                whileHover={{
                  rotate: [0, -10, 10, -5, 0],
                  scale: 1.15,
                  transition: { duration: 0.5 }
                }}
              >
                {skill.icon}
              </motion.div>
            </motion.div>
            <h3 className="skill-title">{skill.category}</h3>
            <motion.ul
              className="skill-items"
            >
              {skill.items.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ x: -10, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  className="skill-item"
                >
                  {item}
                </motion.li>
              ))}
            </motion.ul>
            <motion.div 
              className="skill-progress"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Background animations */}
      <div className="background-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
        <div className="floating-square square-1"></div>
        <div className="floating-square square-2"></div>
      </div>
    </motion.section>
  );
};

export default Skills;