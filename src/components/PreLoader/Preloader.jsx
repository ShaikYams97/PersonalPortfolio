import React, { useState, useEffect, useRef } from 'react';
import './Preloader.css';

const TECH_STACK = [
  { name: 'Docker', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'AWS', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
  { name: 'Azure', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-plain.svg' },
  { name: 'Terraform', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'Git', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // Progress animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const increment = Math.random() * 18 + 4;
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish?.(), 1000);
          return 100;
        }
        return next;
      });
    }, 400);
    return () => clearInterval(interval);
  }, [onFinish]);

  // Canvas animation for morphing shapes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;
    let animationId;

    const drawBlob = (x, y, size, t) => {
      ctx.beginPath();
      for (let i = 0; i < Math.PI * 2; i += 0.1) {
        const wave = Math.sin(i * 3 + t) * 20 + Math.sin(i * 5 + t * 0.5) * 15;
        const px = x + (size + wave) * Math.cos(i);
        const py = y + (size + wave) * Math.sin(i);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Background blob 1
      ctx.fillStyle = 'rgba(99, 102, 241, 0.08)';
      drawBlob(canvas.width * 0.2, canvas.height * 0.25, 120, time);
      ctx.fill();

      // Background blob 2
      ctx.fillStyle = 'rgba(59, 130, 246, 0.08)';
      drawBlob(canvas.width * 0.8, canvas.height * 0.75, 100, time * 0.8);
      ctx.fill();

      // Background blob 3
      ctx.fillStyle = 'rgba(139, 92, 246, 0.06)';
      drawBlob(canvas.width * 0.5, canvas.height * 0.9, 80, time * 0.6);
      ctx.fill();

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="white-preloader" ref={containerRef}>
      <canvas ref={canvasRef} className="blob-canvas"></canvas>

      {/* Floating gradient circles */}
      <div className="floating-bg">
        <div className="gradient-circle gc-1"></div>
        <div className="gradient-circle gc-2"></div>
        <div className="gradient-circle gc-3"></div>
      </div>

      {/* Content Container */}
      <div className="preloader-content">
        {/* Top - Tech Showcase */}
        <div className="tech-carousel">
          {TECH_STACK.map((tech, idx) => (
            <div
              key={tech.name}
              className="carousel-item"
              style={{ '--index': idx, '--total': TECH_STACK.length }}
            >
              <div className="carousel-card">
                <img src={tech.img} alt={tech.name} />
              </div>
            </div>
          ))}
          <div className="carousel-light"></div>
        </div>

        {/* Center - Main Animation */}
        <div className="center-animation">
          <div className="pulsing-circles">
            <div className="pulse-ring pr-1"></div>
            <div className="pulse-ring pr-2"></div>
            <div className="pulse-ring pr-3"></div>
          </div>

          <div className="center-content">
            <div className="rotating-border"></div>
            <div className="center-text">
              <span className="loading-text">L</span>
              <span className="loading-text">o</span>
              <span className="loading-text">a</span>
              <span className="loading-text">d</span>
              <span className="loading-text">i</span>
              <span className="loading-text">n</span>
              <span className="loading-text">g</span>
            </div>
          </div>
        </div>

        {/* Bottom - Progress Section */}
        <div className="progress-section">
          {/* Animated progress bar */}
          <div className="progress-wrapper">
            <div className="progress-bar-container">
              <div className="progress-bar-bg"></div>
              <div className="progress-bar-fill" style={{ width: `${progress}%` }}>
                <div className="progress-shine"></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-container">
            <div className="stat">
              <span className="stat-label">Progress</span>
              <span className="stat-value">{Math.floor(progress)}%</span>
            </div>
            <div className="stat-dots">
              <div className="dot d-1"></div>
              <div className="dot d-2"></div>
              <div className="dot d-3"></div>
            </div>
            <div className="stat">
              <span className="stat-label">Status</span>
              <span className="stat-value">Deploying</span>
            </div>
          </div>

          {/* Title */}
          <div className="title-container">
            <h1 className="main-title">
              <span className="title-letter" style={{ '--letter-delay': '0s' }}>D</span>
              <span className="title-letter" style={{ '--letter-delay': '0.1s' }}>e</span>
              <span className="title-letter" style={{ '--letter-delay': '0.2s' }}>v</span>
              <span className="title-letter" style={{ '--letter-delay': '0.3s' }}>O</span>
              <span className="title-letter" style={{ '--letter-delay': '0.4s' }}>p</span>
              <span className="title-letter" style={{ '--letter-delay': '0.5s' }}>s</span>
            </h1>
            <p className="title-subtitle">Building the Future of Infrastructure</p>
          </div>
        </div>

        {/* Animated Lines */}
        <div className="animated-lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;