import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="experience"
      id="experience"
    >
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Junior DevOps Engineer at ProCorp</h3>
        <p>July 2023 – Current | Hyderabad, India</p>
        <ul>
          <li>
            Developed and maintained CI/CD pipelines using <strong>Jenkins</strong>, <strong>GitHub Actions</strong>, and <strong>GitLab CI/CD</strong>, automating software deployment and infrastructure provisioning, reducing deployment time by <strong>40%</strong>.
          </li>
          <li>
            Automated AWS infrastructure provisioning with <strong>Terraform</strong> and <strong>CloudFormation</strong>, managing resources like <strong>EC2</strong>, <strong>VPC</strong>, <strong>EKS</strong>, <strong>RDS</strong>, <strong>Route 53</strong>, <strong>Auto Scaling</strong>, and <strong>Load Balancing</strong>, improving scalability and reducing manual efforts by <strong>70%</strong>.
          </li>
          <li>
            Deployed and managed <strong>Kubernetes</strong> clusters on <strong>AWS EKS</strong>, optimizing microservices deployment and ensuring high availability and fault tolerance.
          </li>
          <li>
            Implemented containerization strategies using <strong>Docker</strong> and <strong>Kubernetes</strong>, streamlining application deployment and minimizing environment inconsistencies.
          </li>
          <li>
            Integrated <strong>DevSecOps</strong> tools such as <strong>OWASP ZAP</strong>, <strong>SonarQube</strong>, and <strong>Trivy</strong> into CI/CD pipelines, enhancing security by identifying vulnerabilities early in the development lifecycle.
          </li>
          <li>
            Enforced cloud security best practices by implementing <strong>IAM roles</strong>, <strong>Secrets Manager</strong>, <strong>KMS encryption</strong>, and fine-grained access controls, improving security posture across AWS environments.
          </li>
          <li>
            Automated vulnerability scanning and compliance checks for <strong>Docker images</strong>, cloud configurations, and application code, reducing security risks by <strong>30%</strong>.
          </li>
          <li>
            Configured and monitored cloud infrastructure using <strong>AWS CloudWatch</strong>, <strong>Prometheus</strong>, and <strong>Grafana</strong>, improving system observability and reducing incident response time.
          </li>
          <li>
            Led incident response and system troubleshooting, maintaining <strong>99.9% uptime</strong> and minimizing service disruptions through proactive monitoring and automated recovery strategies.
          </li>
          <li>
            Collaborated with development and QA teams to automate testing, staging, and production deployments, accelerating software release cycles and improving code quality.
          </li>
          <li>
            Designed and implemented <strong>Infrastructure as Code (IaC)</strong> workflows using <strong>Terraform</strong> and <strong>Ansible</strong>, enabling consistent, repeatable, and scalable deployments across environments.
          </li>
          <li>
            Optimized cloud resource allocation by implementing <strong>Auto Scaling</strong>, <strong>Load Balancing</strong>, and cost monitoring strategies, reducing AWS costs by <strong>30%</strong> while maintaining performance and availability.
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Experience;