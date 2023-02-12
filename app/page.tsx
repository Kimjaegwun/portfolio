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
          190,
          window.innerWidth / window.innerHeight,
          0.1,
          3000
        );
        camera.position.z = 1;
        camera.rotation.x = Math.PI / 2;
        camera.aspect = window.innerWidth / window.innerHeight;

        let renderer = new THREE.WebGLRenderer({
          canvas: canvasRef.current as any,
          antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);

        let starGeo = new THREE.BufferGeometry();

        const positions = new Float32Array(NUMS);
        const velocities = new Float32Array(NUMS);

        for (let i = 0; i < NUMS; i += 1) {
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
          color: "#ffffff",
          size: 0.1,
          map: sprite,
        });

        let stars = new THREE.Points(starGeo, starMaterial) as any;

        let animate = () => {
          for (let i = 1; i < NUMS; i += 3) {
            stars.geometry.attributes.position.array[i] -=
              stars.geometry.attributes.velocity.array[i];
            stars.geometry.attributes.velocity.array[i] += 0.0002;

            if (stars.geometry.attributes.position.array[i] < -50) {
              stars.geometry.attributes.position.array[i] = 50;
              stars.geometry.attributes.velocity.array[i] = 0;
            }
          }
          stars.geometry.attributes.position.needsUpdate = true;

          requestAnimationFrame(animate);

          renderer.render(scene, camera);
        };

        scene.add(stars);

        const onWindowResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener("resize", onWindowResize, false);

        animate();
      };

      init();
    }
  }, [canvasRef]);

  const letters = Array.from("Hello, nice to meet you!");

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
    <div className="flex flex-col text-white items-center justify-center h-screen">
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
          <motion.span key={index} variants={variants}>
            <span className="text-[26px]">
              {word === " " ? "\u00A0" : word}
            </span>
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
          className="px-4 py-1 mt-8 border-[1px] border-white rounded-lg cursor-pointer"
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
