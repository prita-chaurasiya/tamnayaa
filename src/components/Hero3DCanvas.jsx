import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let animationFrameId;
    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.5);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);

    // 3. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xfaf7f1, 1.8);
    dirLight.position.set(10, 10, 5);
    scene.add(dirLight);

    const pointLight1 = new THREE.PointLight(0xb89a5a, 1.5, 20);
    pointLight1.position.set(-10, -10, -5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x5f6b45, 1.8, 20);
    pointLight2.position.set(5, 5, 5);
    scene.add(pointLight2);

    // 4. Main Group
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 3D Medical Cross Geometry (Extruded Cross Shape)
    const createMedicalCrossGeometry = () => {
      const shape = new THREE.Shape();
      const w = 0.38;
      const l = 1.1;

      shape.moveTo(-w, l);
      shape.lineTo(w, l);
      shape.lineTo(w, w);
      shape.lineTo(l, w);
      shape.lineTo(l, -w);
      shape.lineTo(w, -w);
      shape.lineTo(w, -l);
      shape.lineTo(-w, -l);
      shape.lineTo(-w, -w);
      shape.lineTo(-l, -w);
      shape.lineTo(-l, w);
      shape.lineTo(-w, w);
      shape.closePath();

      const extrudeSettings = {
        depth: 0.35,
        bevelEnabled: true,
        bevelSegments: 8,
        steps: 2,
        bevelSize: 0.08,
        bevelThickness: 0.08,
      };

      return new THREE.ExtrudeGeometry(shape, extrudeSettings);
    };

    // Mesh 1: Right Side Interactive 3D Medical Cross Emblem
    const crossGeo = createMedicalCrossGeometry();
    crossGeo.center();
    const crossMat = new THREE.MeshStandardMaterial({
      color: 0xb89a5a,
      metalness: 0.85,
      roughness: 0.2,
    });
    const crossMesh = new THREE.Mesh(crossGeo, crossMat);
    crossMesh.position.set(2.8, 0.4, 0);
    crossMesh.scale.setScalar(0.7);
    mainGroup.add(crossMesh);

    // Mesh 2: Frosted Olive Glass Sphere
    const sphereGeo = new THREE.SphereGeometry(0.85, 64, 64);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0x5f6b45,
      transmission: 0.85,
      roughness: 0.15,
      thickness: 0.8,
      ior: 1.35,
      metalness: 0.1,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereMesh.position.set(3.4, -1.5, -1);
    mainGroup.add(sphereMesh);

    // Mesh 3: Left Torus Knot Accent
    const torusGeo = new THREE.TorusKnotGeometry(0.7, 0.22, 128, 32);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0xd4b878,
      metalness: 0.9,
      roughness: 0.15,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(-3.2, 1.2, -1.5);
    torusMesh.scale.setScalar(0.7);
    mainGroup.add(torusMesh);

    // Mesh 4: Dust Sphere
    const dustGeo = new THREE.SphereGeometry(1, 32, 32);
    const dustMat = new THREE.MeshStandardMaterial({
      color: 0xb89a5a,
      metalness: 0.7,
      roughness: 0.3,
    });
    const dustMesh = new THREE.Mesh(dustGeo, dustMat);
    dustMesh.position.set(-1.8, -1.8, -2);
    dustMesh.scale.setScalar(0.28);
    mainGroup.add(dustMesh);

    // Mouse Movement
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle Window Resize
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // 3D Medical Cross Rotation & Levitation
      crossMesh.rotation.y += delta * 0.4;
      crossMesh.rotation.x = Math.sin(time * 0.8) * 0.15;
      crossMesh.position.y = 0.4 + Math.sin(time * 1.6) * 0.18;

      // Other Mesh Rotations
      torusMesh.rotation.x += delta * 0.2;
      torusMesh.rotation.y += delta * 0.3;
      sphereMesh.rotation.y += delta * 0.15;

      // Mouse Parallax Lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;
      mainGroup.position.x = mouse.x * 0.6;
      mainGroup.position.y = mouse.y * 0.6;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      crossGeo.dispose();
      crossMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      dustGeo.dispose();
      dustMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none z-15 overflow-hidden opacity-85 ${className}`}
    />
  );
}
