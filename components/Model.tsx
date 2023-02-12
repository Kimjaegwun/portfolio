"use client";

import { loadGLTFModel } from "@/utils/model";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const Model = () => {
  const refCanvas = useRef<any>(null);
  const refRenderer = useRef<any>();

  useEffect(() => {
    const target = new THREE.Vector3(0, 2.5, 0);
    const { current: container } = refCanvas;
    if (container) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: refCanvas.current,
        antialias: true,
        alpha: true,
      });

      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      refRenderer.current = renderer;

      const camera = new THREE.PerspectiveCamera(30, scW / scH);

      const directionalLight = new THREE.DirectionalLight(0xcccccc, 0.5);
      scene.add(directionalLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      controls.enableZoom = false;
      controls.maxDistance = 5;

      loadGLTFModel(scene, "/scene.gltf", {
        receiveShadow: true,
        castShadow: true,
      }).then(() => {
        animate();
      });

      let req: any;
      let frame = 0;

      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        const initialCameraPosition = new THREE.Vector3(
          20 * Math.sin(0.2 * Math.PI),
          10,
          5 * Math.cos(0.2 * Math.PI)
        );

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 100) * Math.PI * 10;

          camera.position.y = 5;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);

          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.dispose();
      };
    }
  }, []);

  return <canvas ref={refCanvas} className="h-[150px] mx-auto" />;
};

export default Model;
