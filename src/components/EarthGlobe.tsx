
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const EarthGlobe = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Load Three.js from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    script.async = true;
    document.body.appendChild(script);
    
    let animationFrameId: number;
    let renderer: any;
    
    script.onload = () => {
      // Check if THREE is available on window (it should be after script loads)
      if (!window.THREE) {
        console.error('THREE.js failed to load properly');
        return;
      }
      
      const container = containerRef.current;
      if (!container) return;
      
      const { clientWidth: width, clientHeight: height } = container;
      
      // Initialize the scene
      const scene = new window.THREE.Scene();
      const camera = new window.THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
      
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);
      container.innerHTML = '';
      container.appendChild(renderer.domElement);
      
      // Create Earth
      const earthGeometry = new window.THREE.SphereGeometry(5, 32, 32);
      
      // Create Earth texture loader
      const textureLoader = new window.THREE.TextureLoader();
      const earthMaterial = new window.THREE.MeshPhongMaterial({
        map: textureLoader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg'),
        specularMap: textureLoader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-specular-map.jpg'),
        bumpMap: textureLoader.load('https://cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png'),
        bumpScale: 0.1,
        shininess: 5,
      });
      
      const earth = new window.THREE.Mesh(earthGeometry, earthMaterial);
      scene.add(earth);
      
      // Add lights
      const ambientLight = new window.THREE.AmbientLight(0x404040, 1);
      scene.add(ambientLight);
      
      const directionalLight = new window.THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 3, 5);
      scene.add(directionalLight);
      
      // Position camera
      camera.position.z = 10;
      
      // Glow effect (atmosphere)
      const glowGeometry = new window.THREE.SphereGeometry(5.2, 32, 32);
      const glowMaterial = new window.THREE.ShaderMaterial({
        uniforms: {},
        vertexShader: `
          varying vec3 vNormal;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          void main() {
            float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
            gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
          }
        `,
        side: window.THREE.BackSide,
        blending: window.THREE.AdditiveBlending,
        transparent: true
      });
      
      const glowMesh = new window.THREE.Mesh(glowGeometry, glowMaterial);
      scene.add(glowMesh);
      
      // Animation
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        
        earth.rotation.y += 0.002;
        glowMesh.rotation.y += 0.002;
        
        renderer.render(scene, camera);
      };
      
      animate();
      
      // Handle resize
      const handleResize = () => {
        if (!container) return;
        
        const { clientWidth: width, clientHeight: height } = container;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };
      
      window.addEventListener('resize', handleResize);
      
      // Store the cleanup function in a variable we can access in the effect cleanup
      return () => {
        window.removeEventListener('resize', handleResize);
        if (container && renderer && renderer.domElement) {
          container.removeChild(renderer.domElement);
        }
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
    };
    
    return () => {
      if (renderer && containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      document.body.removeChild(script);
    };
  }, [isMobile]);
  
  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
    </div>
  );
};

export default EarthGlobe;
