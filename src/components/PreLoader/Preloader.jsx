import React, { useState, useEffect, useRef } from 'react';
import './Preloader.css';

// Updated DevOps and cloud tech icons with modern logos
const TECH_ICONS = [
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'AWS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Azure', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-plain.svg' },
  { name: 'Terraform', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Ansible', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
  { name: 'Prometheus', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
  { name: 'GitHub Actions', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'ArgoCD', img: 'https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/argo.svg' },
];

// Modern CI/CD pipeline stages with descriptions
const PIPELINE_STAGES = [
  { name: 'Code', description: 'Version Control & Collaboration' },
  { name: 'Build', description: 'Containerization & Artifacts' },
  { name: 'Test', description: 'Automated Testing & Quality' },
  { name: 'Deploy', description: 'Infrastructure as Code' },
  { name: 'Monitor', description: 'Observability & Alerts' }
];

// DevOps quotes for fallback when API fails
const DEVOPS_QUOTES = [
  "Infrastructure as code is the foundation of modern DevOps practices.",
  "Automation isn't just about efficiency—it's about reliability and consistency.",
  "In DevOps, we don't fix problems; we design systems that prevent them.",
  "Continuous Integration isn't just a tool, it's a mindset.",
  "Cloud-native isn't where you deploy, it's how you design.",
  "Observability is the key to understanding complex distributed systems."
];

const Preloader = ({ onFinish }) => {
  const [quote, setQuote] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentStage, setCurrentStage] = useState(0);
  const iconsContainerRef = useRef(null);
  const connectionLinesRef = useRef(null);
  const pipelineRef = useRef(null);
  const svgRef = useRef(null);

  // Handle the loading progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 500);
          return 100;
        }
        return newProgress;
      });
    }, 30);
    
    return () => clearInterval(interval);
  }, [onFinish]);

  // Update pipeline stage based on progress
  useEffect(() => {
    const stageIndex = Math.floor(loadingProgress / (100 / PIPELINE_STAGES.length));
    setCurrentStage(Math.min(stageIndex, PIPELINE_STAGES.length - 1));
  }, [loadingProgress]);

  // Fetch quote and initialize animations
  useEffect(() => {
    // Fetch quote from API
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setQuote(data.slip.advice);
      } catch (error) {
        // Use a random DevOps quote as fallback
        setQuote(DEVOPS_QUOTES[Math.floor(Math.random() * DEVOPS_QUOTES.length)]);
      }
    };

    fetchQuote();

    // Create SVG for connection lines
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '100%');
    svg.classList.add('connections-svg');
    connectionLinesRef.current.appendChild(svg);
    svgRef.current = svg;

    // Position icons and create connections
    positionIconsAndCreateConnections();

    // Setup resize handler
    const handleResize = () => {
      // Clear previous connections
      while (svgRef.current.firstChild) {
        svgRef.current.removeChild(svgRef.current.firstChild);
      }
      
      // Reposition icons and recreate connections
      positionIconsAndCreateConnections();
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Function to position icons and create connections
  const positionIconsAndCreateConnections = () => {
    const parentWidth = iconsContainerRef.current.clientWidth;
    const parentHeight = iconsContainerRef.current.clientHeight;
    const icons = [];
    
    // Remove existing icons
    while (iconsContainerRef.current.firstChild) {
      iconsContainerRef.current.removeChild(iconsContainerRef.current.firstChild);
    }
    
    // Create and position icons
    TECH_ICONS.forEach((icon, index) => {
      const iconElement = document.createElement('div');
      iconElement.className = 'devops-icon';
      iconElement.setAttribute('data-name', icon.name);
      
      const img = document.createElement('img');
      img.src = icon.img;
      img.alt = icon.name;
      iconElement.appendChild(img);
      
      const label = document.createElement('span');
      label.className = 'icon-label';
      label.textContent = icon.name;
      iconElement.appendChild(label);
      
      // Distribute icons in a circular pattern
      const angle = (index / TECH_ICONS.length) * 2 * Math.PI;
      const radius = Math.min(parentWidth, parentHeight) * 0.35;
      const centerX = parentWidth / 2;
      const centerY = parentHeight / 2;
      
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      iconElement.style.left = `${x - 25}px`; // 25px is half the icon size
      iconElement.style.top = `${y - 25}px`;
      iconElement.style.animationDelay = `${index * 0.1}s`;
      
      iconsContainerRef.current.appendChild(iconElement);
      icons.push({element: iconElement, x, y, index});
    });
    
    // Create connections between icons
    for (let i = 0; i < icons.length; i++) {
      // Connect to next icon (circular)
      createConnection(icons[i], icons[(i + 1) % icons.length]);
      
      // Add some random connections
      if (Math.random() > 0.7) {
        const randomIndex = Math.floor(Math.random() * icons.length);
        if (randomIndex !== i && randomIndex !== (i + 1) % icons.length) {
          createConnection(icons[i], icons[randomIndex]);
        }
      }
    }
  };

  // Create SVG connection between two icons
  const createConnection = (icon1, icon2) => {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    
    // Calculate control point for curve
    const dx = icon2.x - icon1.x;
    const dy = icon2.y - icon1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    // More pronounced curve for longer distances
    const curveFactor = Math.min(0.2, 30 / distance);
    const midX = (icon1.x + icon2.x) / 2;
    const midY = (icon1.y + icon2.y) / 2;
    
    // Perpendicular offset for control point
    const perpX = -dy * curveFactor;
    const perpY = dx * curveFactor;
    
    const ctrlX = midX + perpX;
    const ctrlY = midY + perpY;
    
    // Create path
    line.setAttribute('d', `M ${icon1.x} ${icon1.y} Q ${ctrlX} ${ctrlY} ${icon2.x} ${icon2.y}`);
    line.setAttribute('stroke', 'var(--connection-color)');
    line.setAttribute('stroke-width', '1.5');
    line.setAttribute('fill', 'none');
    line.setAttribute('stroke-dasharray', `${distance}`);
    line.setAttribute('stroke-dashoffset', `${distance}`);
    line.classList.add('connection-line');
    
    // Animation delay based on icon indices
    const animDelay = Math.min(icon1.index, icon2.index) * 0.1;
    line.style.animation = `drawLine 1.5s ease-out forwards ${0.5 + animDelay}s`;
    
    svgRef.current.appendChild(line);
    
    // Create data packets
    createDataPackets(icon1.x, icon1.y, icon2.x, icon2.y, ctrlX, ctrlY);
  };

  // Create data packets flowing along connections
  const createDataPackets = (x1, y1, x2, y2, ctrlX, ctrlY) => {
    // Only create packets if loading is below 90%
    if (loadingProgress > 90) return;
    
    const createPacket = () => {
      const packet = document.createElement('div');
      packet.className = 'data-packet';
      connectionLinesRef.current.appendChild(packet);
      
      const duration = 1.5 + Math.random() * 0.5;
      const size = 3 + Math.random() * 3;
      packet.style.width = `${size}px`;
      packet.style.height = `${size}px`;
      
      // Use more interesting colors
      const colors = [
        'rgba(0, 176, 255, 0.8)',
        'rgba(102, 217, 255, 0.8)',
        'rgba(0, 255, 213, 0.8)',
        'rgba(0, 255, 162, 0.8)'
      ];
      packet.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      
      let start = null;
      const animate = (timestamp) => {
        if (!start) start = timestamp;
        const progress = (timestamp - start) / (duration * 1000);
        
        if (progress < 1) {
          // Quadratic bezier curve formula
          const t = progress;
          const x = (1-t)*(1-t)*x1 + 2*(1-t)*t*ctrlX + t*t*x2;
          const y = (1-t)*(1-t)*y1 + 2*(1-t)*t*ctrlY + t*t*y2;
          
          packet.style.left = `${x}px`;
          packet.style.top = `${y}px`;
          
          requestAnimationFrame(animate);
        } else {
          packet.remove();
        }
      };
      
      requestAnimationFrame(animate);
    };
    
    // Create multiple packets with varying start times
    for (let i = 0; i < 3; i++) {
      setTimeout(createPacket, i * 600 + Math.random() * 500);
    }
  };

  return (
    <div className="preloader-container">
      <div ref={connectionLinesRef} className="connection-lines"></div>
      <div ref={iconsContainerRef} className="devops-icons"></div>
      
      <div className="loading-panel">
        <div className="loading-content">
          <h1 className="welcome-text">DevOps & Cloud Engineering</h1>
          
          <div className="quote-container">
            <q>{quote}</q>
          </div>
          
          <div className="loading-indicator">
            <div className="loading-bar">
              <div 
                className="loading-progress" 
                style={{ width: `${loadingProgress}%` }}
              ></div>
            </div>
            <div className="loading-percentage">{loadingProgress}%</div>
          </div>
          
          <div ref={pipelineRef} className="pipeline">
            <div className="pipeline-label">CI/CD Pipeline: <span className="current-stage">{PIPELINE_STAGES[currentStage].name}</span></div>
            <div className="pipeline-track">
              {PIPELINE_STAGES.map((stage, index) => (
                <div 
                  key={stage.name}
                  className={`pipeline-stage ${index === currentStage ? 'active' : ''} ${index < currentStage ? 'completed' : ''}`}
                  style={{ left: `${(index / (PIPELINE_STAGES.length - 1)) * 100}%` }}
                >
                  <div className="stage-dot"></div>
                  <div className="stage-name">{stage.name}</div>
                  <div className="stage-description">{stage.description}</div>
                </div>
              ))}
              
              <div 
                className="pipeline-progress" 
                style={{ width: `${(currentStage / (PIPELINE_STAGES.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;