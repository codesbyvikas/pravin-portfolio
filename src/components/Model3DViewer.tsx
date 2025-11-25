import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

// import { useGLTF } from "@react-three/drei";

const GLBModel = ({ url }) => {
  const gltf: any = useGLTF(url);   // 👈 fixes TypeScript error
  return <primitive object={gltf.scene} scale={1} />;
}

const FallbackRoom = () => {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.2} roughness={0.8} />
      </mesh>

      {/* Walls */}
      <mesh position={[0, 1.5, -5]} castShadow receiveShadow>
        <boxGeometry args={[10, 5, 0.2]} />
        <meshStandardMaterial color="#2a2a2a" />
      </mesh>
    </group>
  );
};

const Model3DViewer = ({ modelUrl }) => {
  return (
    <div className="w-full h-[600px] rounded-lg overflow-hidden border border-border bg-card relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[5, 3, 5]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

          {modelUrl ? (
            <GLBModel url={modelUrl} />
          ) : (
            <FallbackRoom />
          )}

          <Environment preset="city" />
          <OrbitControls enablePan enableZoom enableRotate minDistance={3} maxDistance={15} />
        </Suspense>
      </Canvas>

      <div className="absolute bottom-4 left-4 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">Click + drag to rotate • Scroll to zoom</p>
      </div>
    </div>
  );
};

export default Model3DViewer;
