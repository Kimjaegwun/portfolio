import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const loadGLTFModel = (
  scene,
  glbPath,
  options = { receiveShadow: true, castShadow: true }
) => {
  const { receiveShadow, castShadow } = options;

  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      glbPath,
      (gltf) => {
        const getScene = gltf.scene;
        getScene.name = "space";
        getScene.receiveShadow = receiveShadow;
        getScene.castShadow = castShadow;
        scene.add(getScene);

        resolve(getScene);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
};
