// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// function Shilp3D() {
//     const mountRef = useRef(null);

//     useEffect(() => {
//         const mount = mountRef.current;

//         // Scene Setup
//         const scene = new THREE.Scene();
//         const camera = new THREE.PerspectiveCamera(
//             50,
//             mount.clientWidth / mount.clientHeight,
//             0.1,
//             1000
//         );
//         camera.position.set(3, 3, 3); // Adjust for better viewing

//         const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//         renderer.setSize(mount.clientWidth, mount.clientHeight);
//         mount.appendChild(renderer.domElement);

//         // Lights
//         const light = new THREE.DirectionalLight(0xffffff, 1);
//         light.position.set(5, 5, 5);
//         scene.add(light);

//         // Load STL Model
//         const loader = new STLLoader();
//         loader.load("/shilp3D.stl", (geometry) => {
//             const material = new THREE.MeshStandardMaterial({ color: 0x4a1f1f, metalness: 0.3, roughness: 0.5 });
//             const mesh = new THREE.Mesh(geometry, material);
//             scene.add(mesh);

//             mesh.scale.set(15, 15, 15); // Adjust if needed
//             mesh.rotation.x = -Math.PI / 2; // Align properly
//         });

//         // Orbit Controls for Rotation
//         const controls = new OrbitControls(camera, renderer.domElement);
//         controls.enableDamping = true; // Smooth movement
//         controls.dampingFactor = 0.05;
//         controls.rotateSpeed = 0.8;
//         controls.zoomSpeed = 1.2;

//         // Animation Loop
//         const animate = () => {
//             requestAnimationFrame(animate);
//             controls.update(); // Required for OrbitControls to work
//             renderer.render(scene, camera);
//         };
//         animate();

//         // Cleanup
//         return () => {
//             mount.removeChild(renderer.domElement);
//         };
//     }, []);

//     return <div ref={mountRef} style={{ width: "400px", height: "400px" }} />;
// }

// export default Shilp3D;
