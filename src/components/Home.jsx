import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home"
      id="home"
    >
      <div className="home-content">
        <h1>Hi, I'm Shaik Yams</h1>
        <h2>
          <ReactTyped
            strings={['DevOps Engineer', 'AWS Specialist', 'Cloud Enthusiast', 'Open-Source Enthusiast']}
            typeSpeed={50}
            backSpeed={50}
            loop
          />
        </h2>
        <p>
          With 2 years of experience in DevOps and AWS, I help businesses scale their infrastructure efficiently. I specialize in automating CI/CD pipelines, optimizing cloud resources, and ensuring high availability and fault tolerance for modern applications.
        </p>
        <a href="https://drive.google.com/file/d/1Huj58ehtcvsNyyUyOOvGg2pgENCFgLgo/view?usp=drive_link" target="_blank" download="Shaik_Resume.pdf" rel="noreferrer"> <button>Download Resume</button> </a>
      </div>
    </motion.section>
  );
};

export default Home;