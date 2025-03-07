import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';
import { FaAws, FaDocker, FaJenkins, FaGitAlt, FaLinux, FaDatabase } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiPrometheus, SiAnsible, SiGithub, SiJenkins } from 'react-icons/si';

const Home = () => {
  // List of DevOps and AWS icons
  const icons = [
    { icon: <FaAws />, name: 'AWS' },
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <SiKubernetes />, name: 'Kubernetes' },
    { icon: <SiTerraform />, name: 'Terraform' },
    { icon: <FaJenkins />, name: 'Jenkins' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <SiPrometheus />, name: 'Prometheus' },
    { icon: <SiAnsible />, name: 'Ansible' },
    { icon: <SiGithub />, name: 'GitHub' },
    { icon: <FaLinux />, name: 'Linux' },
    { icon: <FaDatabase />, name: 'Database' },
    { icon: <SiJenkins />, name: 'Jenkins' },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home"
      id="home"
    >
      {/* Floating Icons in Free Spaces */}
      <div className="floating-icons">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            initial={{ y: 0, x: 0, rotate: 0 }}
            animate={{
              y: [0, -50, 0, 50, 0], // Gentle up and down motion
              x: [0, 50, 0, -50, 0], // Gentle left and right motion
              rotate: [0, 10, -10, 0], // Gentle rotary motion
            }}
            transition={{
              duration: Math.random() * 10 + 10, // Random duration for natural movement
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 5, // Random delay for staggered movement
            }}
            style={{
              top: `${Math.random() * 80 + 10}%`, // Random vertical position
              left: `${Math.random() * 80 + 10}%`, // Random horizontal position
            }}
          >
            {item.icon}
            <span className="icon-tooltip">{item.name}</span>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="home-content">
        {/* Main Heading */}
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hi, I'm <span className="highlight">Shaik Yams</span>
        </motion.h1>

        {/* Typed Animation */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <ReactTyped
            strings={[
              'DevOps Engineer',
              'AWS Specialist',
              'Cloud Architect',
              'CI/CD Pipeline Builder',
              'Kubernetes Administrator',
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          With 2 years of experience in DevOps and AWS, I help businesses scale their infrastructure efficiently. I specialize in automating CI/CD pipelines, optimizing cloud resources, and ensuring high availability and fault tolerance for modern applications.
        </motion.p>

        {/* Call-to-Action Buttons */}
        <motion.div
          className="actions"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.a
            href="https://drive.google.com/file/d/1Huj58ehtcvsNyyUyOOvGg2pgENCFgLgo/view?usp=drive_link"
            download
            className="btn primary-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.a>
          
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;