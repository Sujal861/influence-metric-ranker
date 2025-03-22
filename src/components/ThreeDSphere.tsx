
import { useEffect, useRef } from 'react';

interface ThreeDSphereProps {
  className?: string;
}

export default function ThreeDSphere({ className = '' }: ThreeDSphereProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    // Initial size
    setCanvasSize();
    
    // Resize handling
    window.addEventListener('resize', setCanvasSize);
    
    // Animation parameters
    let particles: Array<{
      x: number;
      y: number;
      z: number;
      xSpeed: number;
      ySpeed: number;
      zSpeed: number;
      r: number;
    }> = [];
    
    const particleCount = 100;
    let angle = 0;
    
    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width - canvas.width / 2,
        y: Math.random() * canvas.height - canvas.height / 2,
        z: Math.random() * 200,
        xSpeed: Math.random() * 0.2 - 0.1,
        ySpeed: Math.random() * 0.2 - 0.1,
        zSpeed: Math.random() * 0.2 - 0.1,
        r: Math.random() * 2 + 1
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Sort by z-depth
      particles.sort((a, b) => a.z - b.z);
      
      // Move the entire system
      angle += 0.003;
      
      // Draw particles
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        
        // Update position
        p.x += p.xSpeed;
        p.y += p.ySpeed;
        p.z += p.zSpeed;
        
        // Boundaries check
        if (p.x < -canvas.width/2 || p.x > canvas.width/2) p.xSpeed = -p.xSpeed;
        if (p.y < -canvas.height/2 || p.y > canvas.height/2) p.ySpeed = -p.ySpeed;
        if (p.z < 0 || p.z > 200) p.zSpeed = -p.zSpeed;
        
        // Project 3D coordinates to 2D
        const scale = 200 / (200 + p.z);
        const x2d = p.x * scale + canvas.width / 2;
        const y2d = p.y * scale + canvas.height / 2;
        
        // Calculate color based on z-depth
        const alpha = Math.max(0.1, 1 - p.z / 200);
        const size = p.r * scale;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(93, 194, 255, ${alpha})`;
        ctx.fill();
        
        // Connect nearby particles
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dz = p.z - p2.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          
          if (dist < 50) {
            const scale2 = 200 / (200 + p2.z);
            const x2d2 = p2.x * scale2 + canvas.width / 2;
            const y2d2 = p2.y * scale2 + canvas.height / 2;
            
            const lineAlpha = (1 - dist / 50) * Math.min(alpha, Math.max(0.1, 1 - p2.z / 200));
            
            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(x2d2, y2d2);
            ctx.strokeStyle = `rgba(93, 194, 255, ${lineAlpha * 0.5})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 w-full h-full ${className}`}
    />
  );
}
