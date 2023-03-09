import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, './assets/logo3D.glb');
    return (
        <>
            <primitive object={gltf.scene} scale={1} castShadow />
        </>
    );
};

export default Model;