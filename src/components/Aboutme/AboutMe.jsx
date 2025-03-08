import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-container">
      <div className="header-section">
        <h1 className="main-title fade-in">What I Do</h1>
        <p className="subtitle slide-up">
          As a <span className="highlight">DevOps Engineer</span>, I bridge the gap between development and operations 
          to create seamless, efficient, and secure deployment pipelines.
        </p>
      </div>

      <div className="expertise-cards">
        <div className="card slide-in-right">
          <div className="card-icon">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="card-content">
            <h3>CI/CD Pipelines</h3>
            <p>I design and implement robust continuous integration and deployment workflows that accelerate delivery while maintaining quality.</p>
          </div>
        </div>

        <div className="card slide-in-right delay-1">
          <div className="card-icon">
            <i className="fas fa-server"></i>
          </div>
          <div className="card-content">
            <h3>Infrastructure Automation</h3>
            <p>I leverage <span className="highlight">Terraform</span> and <span className="highlight">Ansible</span> to create consistent, repeatable, and scalable infrastructure across AWS cloud resources.</p>
          </div>
        </div>

        <div className="card slide-in-right delay-2">
          <div className="card-icon">
            <i className="fas fa-shield-alt"></i>
          </div>
          <div className="card-content">
            <h3>DevSecOps Integration</h3>
            <p>I incorporate security scanning tools throughout the development lifecycle to identify and mitigate vulnerabilities early.</p>
          </div>
        </div>
      </div>

      <div className="passion-section fade-in delay-3">
        <h2>What I'm Passionate About</h2>
        
        <div className="passion-wrapper">
          <div className="passion-item bounce-in">
            <div className="passion-icon">
              <i className="fas fa-sync-alt"></i>
            </div>
            <div className="passion-content">
              <h3>Continuous Integration</h3>
              <p>Building automated pipelines that ensure code quality and reliability through automated testing, static code analysis, and consistent build processes. I'm dedicated to creating feedback loops that catch issues early and maintain high code standards.</p>
            </div>
          </div>
          
          <div className="passion-item bounce-in delay-1">
            <div className="passion-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="passion-content">
              <h3>Infrastructure as Code</h3>
              <p>Creating scalable and reproducible infrastructure through code that enables version control, automated testing, and consistent deployments across environments. I'm fascinated by the elegance of managing complex cloud resources with declarative configurations.</p>
            </div>
          </div>
          
          <div className="passion-item bounce-in delay-2">
            <div className="passion-icon">
              <i className="fas fa-lock"></i>
            </div>
            <div className="passion-content">
              <h3>DevSecOps</h3>
              <p>Integrating security practices throughout the development lifecycle to build resilient systems from the ground up. I believe security should be a shared responsibility that's embedded into our tools and processes rather than bolted on as an afterthought.</p>
            </div>
          </div>

          <div className="passion-item bounce-in delay-3">
            <div className="passion-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <div className="passion-content">
              <h3>Performance Optimization</h3>
              <p>Fine-tuning systems to maximize efficiency and minimize resource usage. I enjoy the challenge of identifying bottlenecks and implementing optimizations that dramatically improve application speed, reduce cloud costs, and enhance the user experience.</p>
            </div>
          </div>

          <div className="passion-item bounce-in delay-4">
            <div className="passion-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <div className="passion-content">
              <h3>Microservices Architecture</h3>
              <p>Designing and implementing distributed systems that are resilient, scalable, and maintainable. I'm excited by the possibilities that container orchestration, service meshes, and event-driven architectures bring to modern application development.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="drives-section fade-in delay-4">
        <h2>What Drives Me</h2>
        <div className="quote-box slide-up delay-3">
          <p>
            I am driven by a passion for learning and a desire to build systems that are efficient, scalable, and secure. 
            The ever-evolving nature of DevOps and cloud technologies keeps me engaged and motivated to continuously improve my skills.
          </p>
          <p>
            My ultimate goal is to contribute to systems that make a positive impact. Whether optimizing infrastructure to reduce costs, 
            improving security to protect data, or automating processes to accelerate delivery, I'm committed to delivering value through my work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;