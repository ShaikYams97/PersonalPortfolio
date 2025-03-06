import React from 'react';
import { DiAws, DiDocker, DiGithubBadge, DiJenkins, DiPython, DiNodejs, DiDatabase } from 'react-icons/di';
import { SiKubernetes, SiTerraform, SiPrometheus, SiGrafana, SiServerless, SiSlack } from 'react-icons/si'; // Import icons from Simple Icons


const Projects = () => {
  const projects = [
    {
      title: 'End-to-End CI/CD Pipeline for Multi-Language Microservices on AWS EKS',
      description:
        'Developed a CI/CD pipeline using GitHub Actions to automate the build, testing, and deployment of microservices written in Java, Python, and Go. Integrated ArgoCD for continuous deployment, ensuring seamless rollout of updates to an AWS EKS cluster.',
      skills: ['GitHub Actions', 'ArgoCD', 'AWS EKS', 'ALB Ingress Controller', 'Route 53', 'CI/CD', 'Jenkins', 'Docker', 'Kubernetes'],
      impact:
        'Improved deployment speed by 70%, enhanced release reliability, ensured seamless traffic routing with custom DNS, and optimized application performance across different microservices through automated pipelines.',
      icons: [<DiGithubBadge />, <DiAws />, <DiJenkins />, <DiDocker />, <SiKubernetes />],
    },
    {
      title: 'CI/CD Pipeline and Kubernetes Deployment for Wanderlust',
      description:
        'Designed and implemented a robust CI/CD pipeline using GitHub Actions to automate the build, testing, and deployment of the Wanderlust travel booking platform. Containerized the application using Docker and orchestrated deployment on AWS using Kubernetes.',
      skills: ['GitHub Actions', 'Docker', 'Kubernetes', 'AWS', 'Prometheus', 'Grafana', 'CI/CD', 'Terraform', 'Helm'],
      impact:
        'Enhanced deployment efficiency, reduced manual intervention, and improved application monitoring and security through automated workflows.',
      icons: [<DiGithubBadge />, <DiDocker />, <SiKubernetes />, <DiAws />, <SiTerraform />],
    },
    {
      title: 'Automated Infrastructure with Terraform and AWS',
      description:
        'Built a fully automated infrastructure on AWS using Terraform, provisioning VPC, subnets, EC2, RDS, and S3. Integrated CI/CD pipelines in GitHub Actions for seamless deployments.',
      skills: ['Terraform', 'AWS (VPC, EC2, RDS, S3)', 'GitHub Actions', 'Automation', 'CloudFormation', 'Ansible'],
      impact: 'Reduced manual provisioning time by 80% and ensured infrastructure consistency.',
      icons: [<SiTerraform />, <DiAws />, <DiGithubBadge />],
    },
    {
      title: 'AWS Lambda and API Gateway for Serverless Applications',
      description:
        'Designed and deployed a serverless application using AWS Lambda and API Gateway, with DynamoDB as the database backend. Created a real-world notification system demonstrating cost-effective scalability.',
      skills: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'CloudWatch', 'IAM', 'Serverless Framework', 'SNS'],
      impact: 'Delivered a highly available, scalable application with a 70% reduction in operational costs.',
      icons: [<DiAws />, <DiNodejs />, <DiDatabase />],
    },
    {
      title: 'Automated Monitoring and Alerting System with CloudWatch and Prometheus',
      description:
        'Configured CloudWatch and Prometheus for comprehensive monitoring and alerting across AWS services. Integrated Grafana dashboards and Slack notifications for real-time incident alerts.',
      skills: ['AWS CloudWatch', 'Prometheus', 'Grafana', 'Slack API', 'Alerting', 'Monitoring'],
      impact: 'Enhanced reliability through proactive monitoring and reduced incident response time by 50%.',
      icons: [<DiAws />, <SiPrometheus />, <SiGrafana />, <SiSlack />],
    },
    {
      title: 'Cloud Cost Optimization Dashboard',
      description:
        'Created a dashboard using AWS Cost Explorer and CloudWatch to monitor cloud spending with custom alerts for high usage. Integrated SNS for budget notifications, improving budget compliance.',
      skills: ['AWS Cost Explorer', 'CloudWatch', 'SNS', 'Python', 'Data Visualization', 'Budgeting'],
      impact: 'Achieved a 20% reduction in cloud expenses by implementing effective monitoring and alerting.',
      icons: [<DiAws />, <DiPython />, <SiServerless />],
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="skills-impact-container">
                <div className="skills-section">
                  <h4>Skills:</h4>
                  <ul className="skills-list">
                    {project.skills.map((skill, i) => (
                      <li key={i} className="skill-item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="impact-section">
                  <h4>Impact:</h4>
                  <p>{project.impact}</p>
                </div>
              </div>
            </div>
            <div className="icon-background">
              {project.icons.map((icon, i) => (
                <div key={i} className="icon-item">
                  {icon}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;