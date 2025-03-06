import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="about"
      id="about"
    >
      {/* What I Do */}
      <motion.div
        className="subsection"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>What I Do</h3>
        <p>
          As a <strong>DevOps Engineer</strong>, I specialize in automating and optimizing software development and deployment processes. My expertise lies in designing and implementing robust <strong>CI/CD pipelines</strong> using tools like <strong>Jenkins</strong>, <strong>GitHub Actions</strong>, and <strong>GitLab CI/CD</strong>. By streamlining workflows, I’ve successfully reduced deployment times by <strong>40%</strong>, enabling faster and more reliable software releases.
        </p>
        <p>
          I also focus on infrastructure automation using <strong>Terraform</strong> and <strong>Ansible</strong>, ensuring that infrastructure provisioning is consistent, repeatable, and scalable. My work involves managing cloud resources on <strong>AWS</strong>, including <strong>EC2</strong>, <strong>EKS</strong>, <strong>RDS</strong>, and <strong>VPC</strong>, to build highly available and fault-tolerant systems.
        </p>
        <p>
          Additionally, I integrate <strong>DevSecOps</strong> practices into the development lifecycle by incorporating tools like <strong>OWASP ZAP</strong>, <strong>SonarQube</strong>, and <strong>Trivy</strong> to identify and mitigate vulnerabilities early in the process. This proactive approach has significantly improved the security posture of the systems I work on.
        </p>
      </motion.div>

      {/* My Journey */}
      <motion.div
        className="subsection"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>My Journey</h3>
        <p>
          My journey into the world of DevOps began with a strong foundation in <strong>Linux</strong> and <strong>scripting</strong>. I started by writing <strong>Bash</strong> and <strong>Python</strong> scripts to automate repetitive tasks, which sparked my interest in automation and efficiency. Over time, I delved deeper into cloud technologies, particularly <strong>AWS</strong>, and discovered the power of <strong>Infrastructure as Code (IaC)</strong> and <strong>containerization</strong>.
        </p>
        <p>
          At <strong>ProCorp</strong>, I’ve had the opportunity to work on diverse projects, from building scalable CI/CD pipelines to securing cloud environments and optimizing infrastructure. These experiences have not only honed my technical skills but also taught me the importance of collaboration and communication in bridging the gap between development and operations teams.
        </p>
        <p>
          My journey has been one of continuous learning and growth. I’m always exploring new tools and technologies to stay ahead in the ever-evolving field of DevOps. Whether it’s mastering a new orchestration tool or diving deeper into cloud security, I’m driven by the desire to build systems that are efficient, scalable, and secure.
        </p>
      </motion.div>

      {/* Why I Love DevOps */}
      <motion.div
        className="subsection"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Why I Love DevOps</h3>
        <p>
          DevOps is more than just a set of tools or practices—it’s a culture of collaboration, automation, and continuous improvement. What I love most about DevOps is its ability to bring together development and operations teams to deliver high-quality software faster and more reliably.
        </p>
        <p>
          I’m passionate about solving complex problems, whether it’s optimizing a Kubernetes cluster, securing a cloud environment, or automating a deployment pipeline. The challenge of finding innovative solutions to improve efficiency and reliability is what drives me every day.
        </p>
        <p>
          DevOps also aligns with my belief in the importance of continuous learning. The field is constantly evolving, and there’s always something new to explore—whether it’s a cutting-edge tool, a best practice, or a novel approach to solving problems. This dynamic nature of DevOps keeps me engaged and motivated.
        </p>
      </motion.div>

      {/* Key Skills */}
      <motion.div
        className="subsection"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>Key Skills</h3>
        <ul className="skills-list">
          <li><strong>Programming Languages</strong>: Python, Bash</li>
          <li><strong>Version Control</strong>: Git, GitHub, GitLab</li>
          <li><strong>CI/CD</strong>: Jenkins, GitHub Actions, GitLab CI/CD</li>
          <li><strong>Containerization</strong>: Docker</li>
          <li><strong>Container Orchestration</strong>: Kubernetes, AWS EKS</li>
          <li><strong>Infrastructure as Code (IaC)</strong>: Terraform, CloudFormation</li>
          <li><strong>Configuration Management</strong>: Ansible</li>
          <li><strong>Cloud Platforms</strong>: AWS (EC2, S3, RDS, VPC, EKS, Lambda)</li>
          <li><strong>Scripting</strong>: Bash, Python</li>
          <li><strong>Operating Systems</strong>: Linux (Ubuntu, CentOS), Windows Server</li>
          <li><strong>Monitoring & Visualization</strong>: Prometheus, Grafana, AWS CloudWatch</li>
          <li><strong>DevSecOps & Security</strong>: OWASP ZAP, SonarQube, Trivy, IAM, KMS</li>
          <li><strong>Build Tools</strong>: Maven, Gradle</li>
        </ul>
      </motion.div>

      {/* What Drives Me */}
      <motion.div
        className="subsection"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3>What Drives Me</h3>
        <p>
          I am driven by a passion for learning and a desire to build systems that are not only efficient and scalable but also secure and resilient. The ever-evolving nature of DevOps and cloud technologies keeps me engaged and motivated to continuously improve my skills and knowledge.
        </p>
        <p>
          I believe in the power of collaboration and teamwork. DevOps is all about breaking down silos and fostering a culture of shared responsibility. I enjoy working with cross-functional teams to solve complex problems and deliver high-quality solutions.
        </p>
        <p>
          My ultimate goal is to contribute to the development of systems that make a positive impact. Whether it’s optimizing infrastructure to reduce costs, improving security to protect sensitive data, or automating processes to accelerate delivery, I’m committed to delivering value through my work.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;