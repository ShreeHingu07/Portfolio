import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedis, SiMysql } from "react-icons/si";
import { renderToStaticMarkup } from "react-dom/server";

// Function to create a canvas texture with logo
const createLogoTexture = (
  text: string,
  IconComponent: React.ElementType,
  bgColor: string
) => {

  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext("2d");

  if (!ctx) return new THREE.Texture();

  const texture = new THREE.CanvasTexture(canvas);

  // Convert React Icon → SVG string
  const svgMarkup = renderToStaticMarkup(
    <IconComponent size={256} color="white" />
  );

  const svgString = `
    <svg width="256" height="256" viewBox="0 0 256 256"
         xmlns="http://www.w3.org/2000/svg" fill="white">
      ${svgMarkup}
    </svg>
  `;

  const blob = new Blob([svgString], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);
  const img = new Image();

  img.onload = () => {
    // Background
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw SVG icon
    ctx.drawImage(img, 128, 70, 256, 256);

    // Draw Text
    ctx.fillStyle = "white";
    ctx.font = "bold 60px Arial";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, 460);

    // ✅ IMPORTANT — update texture AFTER drawing
    texture.needsUpdate = true;

    URL.revokeObjectURL(url);
  };

  img.src = url;

  return texture;
};

export default function Scene3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    camera.position.z = 5;

    // Mouse controls
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const targetRotation = new THREE.Quaternion();
    const currentRotation = new THREE.Quaternion();
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      // Rotate based on mouse movement
      const quaternionX = new THREE.Quaternion();
      quaternionX.setFromAxisAngle(new THREE.Vector3(0, 1, 0), deltaX * 0.01);

      const quaternionY = new THREE.Quaternion();
      quaternionY.setFromAxisAngle(new THREE.Vector3(1, 0, 0), deltaY * 0.01);

      targetRotation.multiplyQuaternions(quaternionX, targetRotation);
      targetRotation.multiplyQuaternions(quaternionY, targetRotation);

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isDragging = true;
        previousMousePosition = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length === 0) return;

      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      const quaternionX = new THREE.Quaternion();
      quaternionX.setFromAxisAngle(new THREE.Vector3(0, 1, 0), deltaX * 0.01);

      const quaternionY = new THREE.Quaternion();
      quaternionY.setFromAxisAngle(new THREE.Vector3(1, 0, 0), deltaY * 0.01);

      targetRotation.multiplyQuaternions(quaternionX, targetRotation);
      targetRotation.multiplyQuaternions(quaternionY, targetRotation);

      previousMousePosition = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    renderer.domElement.addEventListener("mousedown", onMouseDown);
    renderer.domElement.addEventListener("mousemove", onMouseMove);
    renderer.domElement.addEventListener("mouseup", onMouseUp);
    renderer.domElement.addEventListener("mouseleave", onMouseUp);
    renderer.domElement.addEventListener("touchstart", onTouchStart);
    renderer.domElement.addEventListener("touchmove", onTouchMove);
    renderer.domElement.addEventListener("touchend", onTouchEnd);

    // Create a group to hold all objects (so we can rotate them together)
    const group = new THREE.Group();
    scene.add(group);

    // Create cube with 6 different technology faces
    const cubeMaterials = [
      new THREE.MeshPhongMaterial({
        map: createLogoTexture("React", FaReact, "#61dafb"),
      }),
      new THREE.MeshPhongMaterial({
        map: createLogoTexture("Node.js", FaNodeJs, "#68a063"),
      }),
      new THREE.MeshPhongMaterial({
        map: createLogoTexture("MongoDB", SiMongodb, "#13aa52"),
      }),
      new THREE.MeshPhongMaterial({
        map: createLogoTexture("Express.js", SiExpress, "#000000"),
      }),
      new THREE.MeshPhongMaterial({
        map: createLogoTexture("Redis", SiRedis, "#dc382d"),
      }),
      new THREE.MeshPhongMaterial({
        map: createLogoTexture("MySQL", SiMysql, "#00758f"),
      }),
    ];

    const cubeGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterials);
    group.add(cube);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xffffff, 1);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x667eea, 0.5);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Apply mouse rotation to the group with smooth interpolation
      currentRotation.slerp(targetRotation, 0.1);
      group.quaternion.copy(currentRotation);

      // Auto-rotate when not dragging
      if (!isDragging) {
        const autoRotation = new THREE.Quaternion();
        autoRotation.setFromAxisAngle(new THREE.Vector3(0, 1, 0), 0.003);
        targetRotation.multiplyQuaternions(autoRotation, targetRotation);
      }

      // Subtle floating effect for the cube
      cube.position.y = Math.sin(Date.now() * 0.0008) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      renderer.domElement.removeEventListener("mousemove", onMouseMove);
      renderer.domElement.removeEventListener("mouseup", onMouseUp);
      renderer.domElement.removeEventListener("mouseleave", onMouseUp);
      renderer.domElement.removeEventListener("touchstart", onTouchStart);
      renderer.domElement.removeEventListener("touchmove", onTouchMove);
      renderer.domElement.removeEventListener("touchend", onTouchEnd);
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-background to-background/80"
      style={{ width: "100%", height: "100%" }}
    />
  );
}
