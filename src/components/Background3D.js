import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ url }) => {
    const { scene } = useGLTF(url);
    return <primitive object={scene} scale={[1, 1, 1]} />;
};

const Background3D = ({ modelUrl }) => {
    return (
        <Canvas
            style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1.5} />
            <Suspense fallback={null}>
                <Model url={modelUrl} />
            </Suspense>
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default Background3D;
