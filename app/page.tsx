"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const NUMS = 21000;

export default function Home() {
  const router = useRouter();
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
        camera.position.z = 0;
        camera.rotation.x = Math.PI / 2;

        let renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current as any,
          antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        let starGeo = new THREE.BufferGeometry();

        const positions = new Float32Array(NUMS);
        const velocities = new Float32Array(NUMS);

        for (let i = 0; i < NUMS; i++) {
          positions[i] = (Math.random() - 0.5) * 100;
          velocities[i] = 0;
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
          size: 0.7,
          map: sprite,
        });

        let stars = new THREE.Points(starGeo, starMaterial) as any;

        let animate = () => {
          for (let i = 0; i < NUMS; i += 2) {
            stars.geometry.attributes.position.array[i] -=
              stars.geometry.attributes.velocity.array[i];
            stars.geometry.attributes.velocity.array[i] += 0.0005;

            if (stars.geometry.attributes.position.array[i] < -50) {
              stars.geometry.attributes.position.array[i] = 50;
              stars.geometry.attributes.velocity.array[i] = 0;
            }
          }
          stars.geometry.attributes.position.needsUpdate = true;
          stars.rotation.y += 0.001;

          requestAnimationFrame(animate);

          renderer.render(scene, camera);
        };

        scene.add(stars);
        animate();
      };

      init();
    }
  }, [canvasRef]);

  const letters = Array.from("Everything's Gonna Be Alright.");

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <canvas
        ref={canvasRef}
        id="canvas"
        className="absolute top-0 left-0 z-[-1]"
      />
      <motion.div
        style={{ overflow: "hidden", display: "flex" }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {letters.map((word, index) => (
          <motion.span
            key={index}
            variants={variants}
            style={{
              color: "white",
              fontSize: 28,
            }}
          >
            {word === " " ? "\u00A0" : word}
          </motion.span>
        ))}
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          className="px-4 py-1 mt-8 text-xl text-white border-2 border-white rounded-lg cursor-pointer"
          onClick={() => {
            router.push("/main");
          }}
        >
          More →
        </div>
      </motion.div>
    </div>
  );
}
