import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import Model from './model'

const Logo3D = () => {
  return (
    <>
        <Canvas shadows>
            <Suspense fallback={null}>
                <PerspectiveCamera makeDefault position={[10, 4, 10]} fov={20} />
                <mesh receiveShadow>
                    <hemisphereLight intensity={0.15} groundColor='white' />
                    <directionalLight castShadow intensity={1}  />
                    <spotLight
                        position={[-20, -8, -10]}
                        angle={0.7}
                        penumbra={1}
                        intensity={0.2}
                        castShadow
                        shadow-mapSize={512}
                    />
                    <pointLight intensity={0.3} position={[-20, -8, -10]} />
                </mesh>
                {/* <mesh receiveShadow position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <planeBufferGeometry args={[100, 100]} />
                    <meshStandardMaterial color='black' roughness={0.5} />
                </mesh> */}
                <Model />
                <OrbitControls autoRotate />
            </Suspense>
        </Canvas>
    </>
  )
}

export default Logo3D