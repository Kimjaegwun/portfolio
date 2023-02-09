"use client";

import { loadGLTFModel } from "@/utils/model";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const Model = () => {
  const refContainer = useRef<any>(null);

  const target = new THREE.Vector3(0, 0, 0);

  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: refContainer.current,
      });

      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;

      const camera = new THREE.OrthographicCamera(10, -5, 5, -1, -10, 200);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      scene.add(directionalLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

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

        frame = frame <= 10 ? frame + 1 : frame;

        if (frame <= 10) {
          camera.position.z = 2;
          camera.position.y = -1;
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

  return <canvas ref={refContainer} />;
};

export default Model;
