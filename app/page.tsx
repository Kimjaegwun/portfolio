"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const init = () => {
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(
          60,
          window.innerWidth / window.innerHeight,
          1,
          1000
        );
        camera.position.z = 1;
        camera.rotation.x = Math.PI / 2;

        let renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current as any,
          antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        let starGeo = new THREE.BufferGeometry();

        const positions = new Float32Array(6000 * 3);
        const velocities = new Float32Array(5000 * 3);

        for (let i = 0; i < 5000 * 3; i += 3) {
          positions[i] = (Math.random() - 0.5) * 3;
          positions[i + 1] = (Math.random() - 0.5) * 3;
          positions[i + 2] = (Math.random() - 0.5) * 3;

          velocities[i] = 0;
          velocities[i + 1] = 0;
          velocities[i + 2] = 0;
        }

        starGeo.setAttribute(
          "position",
          new THREE.Float32BufferAttribute(positions, 3)
        );
        starGeo.setAttribute(
          "velocity",
          new THREE.Float32BufferAttribute(velocities, 3)
        );

        let sprite = new THREE.TextureLoader().load("star.png");
        let starMaterial = new THREE.PointsMaterial({
          color: 0xaaaaaa,
          size: 0.1,
          map: sprite,
        });

        let stars = new THREE.Points(starGeo, starMaterial);
        scene.add(stars);

        let animate = () => {
          requestAnimationFrame(animate);
          for (let i = 0; i < 5000 * 3; i += 3) {
            stars.geometry.attributes.position.array[i + 1] -=
              stars.geometry.attributes.velocity.array[i + 1];

            stars.geometry.attributes.velocity.array[i + 1] += 0.001;

            if (stars.geometry.attributes.position.array[i + 1] < -200) {
              stars.geometry.attributes.position.array[i + 1] = 200;
              stars.geometry.attributes.velocity.array[i + 1] = 0;
            }
          }
          stars.geometry.attributes.position.needsUpdate = true;
          stars.rotation.y += 0.002;
          renderer.render(scene, camera);
        };

        animate();
      };

      init();
    }
  }, [canvasRef]);

  return (
    <>
      <canvas ref={canvasRef} id="canvas" />
    </>
  );
}
