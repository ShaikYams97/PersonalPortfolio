import React, { useState, useEffect, useRef } from 'react';

// DevOps and cloud tech icons
const TECH_ICONS = [
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'AWS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'Azure', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
  { name: 'Jenkins', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Terraform', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Ansible', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
  { name: 'Prometheus', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
];

// CI/CD pipeline stages
const PIPELINE_STAGES = ['Code', 'Build', 'Test', 'Deploy', 'Monitor'];

const Preloader = ({ onFinish }) => {
  const [quote, setQuote] = useState('');
  const iconsContainerRef = useRef(null);
  const connectionLinesRef = useRef(null);
  const pipelineRef = useRef(null);

  useEffect(() => {
    // Fetch quote from API
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setQuote(data.slip.advice);
      } catch (error) {
        setQuote('Infrastructure as code is the practice of defining computing infrastructure through source code.');
      }
    };

    fetchQuote();

    // Create DevOps icons
    if (iconsContainerRef.current) {
      TECH_ICONS.forEach((icon, index) => {
        const iconElement = document.createElement('div');
        iconElement.className = 'devops-icon';
        iconElement.style.backgroundImage = `url(${icon.img})`;
        
        // Random positions
        const x = 10 + Math.random() * 80; // 10-90% of container width
        const y = 10 + Math.random() * 80; // 10-90% of container height
        
        iconElement.style.left = `${x}%`;
        iconElement.style.top = `${y}%`;
        
        // Animation delay
        iconElement.style.animationDelay = `${index * 0.2}s, ${index * 0.15}s`;
        
        iconsContainerRef.current.appendChild(iconElement);
      });
    }

    // Create connection lines
    if (connectionLinesRef.current) {
      // Create SVG element for connection lines
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      connectionLinesRef.current.appendChild(svg);

      // Wait for icons to be positioned
      setTimeout(() => {
        const icons = document.querySelectorAll('.devops-icon');
        
        // Create connections between some icons
        for (let i = 0; i < icons.length - 1; i++) {
          if (Math.random() > 0.3) { // 70% chance to create a connection
            const icon1 = icons[i];
            const icon2 = icons[i + 1];
            
            const rect1 = icon1.getBoundingClientRect();
            const rect2 = icon2.getBoundingClientRect();
            
            const parentRect = connectionLinesRef.current.getBoundingClientRect();
            
            const x1 = (rect1.left - parentRect.left) + rect1.width / 2;
            const y1 = (rect1.top - parentRect.top) + rect1.height / 2;
            const x2 = (rect2.left - parentRect.left) + rect2.width / 2;
            const y2 = (rect2.top - parentRect.top) + rect2.height / 2;
            
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            
            // Create a curve instead of straight line
            const midX = (x1 + x2) / 2;
            const midY = (y1 + y2) / 2 - 30 * Math.random();
            
            line.setAttribute('d', `M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`);
            line.setAttribute('stroke', 'rgba(79, 193, 255, 0.4)');
            line.setAttribute('stroke-width', '1');
            line.setAttribute('fill', 'none');
            line.setAttribute('stroke-dasharray', '1000');
            line.setAttribute('stroke-dashoffset', '1000');
            
            svg.appendChild(line);
            
            // Animate the line
            line.style.animation = `data-flow 3s linear forwards ${i * 0.3}s`;
            
            // Create data packets
            createDataPackets(x1, y1, x2, y2, midX, midY);
          }
        }
      }, 500);
    }

    // Set up CI/CD pipeline animation
    if (pipelineRef.current) {
      const pipelineProgress = document.createElement('div');
      pipelineProgress.className = 'pipeline-progress';
      pipelineRef.current.appendChild(pipelineProgress);
      
      // Add stage markers and labels
      PIPELINE_STAGES.forEach((stage, index) => {
        const position = (index / (PIPELINE_STAGES.length - 1)) * 100;
        
        // Add stage dot
        const dot = document.createElement('div');
        dot.className = 'pipeline-dot';
        dot.style.left = `${position}%`;
        dot.style.animation = `dotAppear 0.5s ease-out forwards ${1.5 + (index * 0.5)}s`;
        pipelineRef.current.appendChild(dot);
        
        // Add stage label
        const label = document.createElement('div');
        label.className = 'pipeline-stage';
        label.textContent = stage;
        label.style.left = `${position}%`;
        label.style.animation = `stageAppear 0.5s ease-out forwards ${1.5 + (index * 0.5)}s`;
        pipelineRef.current.appendChild(label);
      });
    }

    // Function to create data packets that flow along the connection lines
    const createDataPackets = (x1, y1, x2, y2, midX, midY) => {
      const container = document.querySelector('.preloader-container');
      
      // Create multiple data packets per line
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          const packet = document.createElement('div');
          packet.className = 'data-packet';
          container.appendChild(packet);
          
          // Animation duration
          const duration = 2 + Math.random();
          
          // Bezier curve animation
          let start = null;
          const animate = (timestamp) => {
            if (!start) start = timestamp;
            const progress = (timestamp - start) / (duration * 1000);
            
            if (progress < 1) {
              // Quadratic bezier curve formula
              const t = progress;
              const x = (1-t)*(1-t)*x1 + 2*(1-t)*t*midX + t*t*x2;
              const y = (1-t)*(1-t)*y1 + 2*(1-t)*t*midY + t*t*y2;
              
              packet.style.left = `${x}px`;
              packet.style.top = `${y}px`;
              
              requestAnimationFrame(animate);
            } else {
              packet.remove();
            }
          };
          
          requestAnimationFrame(animate);
        }, i * 1000 + Math.random() * 500);
      }
    };

    // Set timer to finish preloader
    setTimeout(() => {
      onFinish();
    }, 3000);

    // Cleanup function
    return () => {
      // Remove any event listeners or timers if needed
    };
  }, [onFinish]);

  return (
    <div className="preloader-container">
      <div ref={connectionLinesRef} className="connection-lines"></div>
      <div ref={iconsContainerRef} className="devops-icons"></div>
      
      <div className="loading-screen">
        <h1 className="welcome-text">Welcome to My Portfolio</h1>
        <p className="quote-container">{quote}</p>
        
        <div className="loading-indicator">
          <div className="loading-progress"></div>
        </div>
        
        <div ref={pipelineRef} className="pipeline"></div>
      </div>
    </div>
  );
};

export default Preloader;