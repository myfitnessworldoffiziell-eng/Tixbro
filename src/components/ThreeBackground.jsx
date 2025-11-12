import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = ({ darkMode }) => {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    camera.position.z = 5;

    // Create animated particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 12;

      // Random colors between orange and red
      if (i % 3 === 0) colorArray[i] = 1; // R
      else if (i % 3 === 1) colorArray[i] = Math.random() * 0.5 + 0.3; // G
      else colorArray[i] = 0.1; // B
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colorArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      vertexColors: true,
      transparent: true,
      opacity: darkMode ? 0.8 : 0.6,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create rotating rings
    const createRing = (color, rotation, size = 2) => {
      const ringGeometry = new THREE.TorusGeometry(size, 0.02, 16, 100);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.3,
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.rotation.x = rotation.x;
      ring.rotation.y = rotation.y;
      ring.rotation.z = rotation.z;
      return ring;
    };

    const ring1 = createRing(
      darkMode ? 0x4ade80 : 0x10b981,
      { x: Math.PI / 4, y: 0, z: 0 },
      2.5
    );
    const ring2 = createRing(
      darkMode ? 0x60a5fa : 0x3b82f6,
      { x: 0, y: Math.PI / 4, z: 0 },
      2
    );
    const ring3 = createRing(
      darkMode ? 0xf97316 : 0xea580c,
      { x: Math.PI / 6, y: Math.PI / 6, z: Math.PI / 6 },
      1.5
    );

    scene.add(ring1, ring2, ring3);

    // Create floating geometric shapes
    const geometries = [
      new THREE.OctahedronGeometry(0.3),
      new THREE.TetrahedronGeometry(0.25),
      new THREE.IcosahedronGeometry(0.2),
    ];

    const shapes = [];
    for (let i = 0; i < 5; i++) {
      const geometry = geometries[i % geometries.length];
      const material = new THREE.MeshBasicMaterial({
        color: darkMode ? 0xfb923c : 0xf97316,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const mesh = new THREE.Mesh(geometry, material);

      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      );

      shapes.push(mesh);
      scene.add(mesh);
    }

    sceneRef.current = {
      scene,
      camera,
      renderer,
      particlesMesh,
      rings: [ring1, ring2, ring3],
      shapes,
    };

    // Animation loop
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);

      // Smooth camera movement based on mouse
      targetX = mouseX * 0.3;
      targetY = mouseY * 0.3;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Rotate particles
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      // Rotate rings
      ring1.rotation.z += 0.002;
      ring2.rotation.z -= 0.003;
      ring3.rotation.z += 0.0025;
      ring3.rotation.x += 0.001;

      // Animate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.01;
        shape.rotation.y += 0.01;
        shape.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Dispose of geometries and materials
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      geometries.forEach(geo => geo.dispose());

      renderer.dispose();
    };
  }, [darkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-40 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default ThreeBackground;
