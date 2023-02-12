import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const loadGLTFModel = (
  scene: THREE.Scene,
  glbPath: string,
  options = { receiveShadow: true, castShadow: true }
) => {
  const { receiveShadow, castShadow } = options;

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        gltf.userData.color;
        const model = gltf.scene;
        model.name = "space";
        model.receiveShadow = receiveShadow;
        model.castShadow = castShadow;
        scene.add(model);
        resolve(model);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
};
