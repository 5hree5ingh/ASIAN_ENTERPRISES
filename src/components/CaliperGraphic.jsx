import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, Float } from '@react-three/drei';
import './CaliperGraphic.css';

// ── 3D Model ──────────────────────────────────────────────
function CaliperModel() {
    const { scene } = useGLTF('/verniercaliper.glb');
    const groupRef = useRef();

    // Subtle slow sway
    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.35;
        }
    });

    return (
        <group ref={groupRef}>
            <primitive
                object={scene}
                scale={0.65}
                position={[0, 0, 0]}
            />
        </group>
    );
}

// ── Loading Fallback ───────────────────────────────────────
function LoadingRing() {
    return (
        <mesh>
            <torusGeometry args={[1.2, 0.04, 16, 60]} />
            <meshStandardMaterial color="#3b82f6" />
        </mesh>
    );
}

// ── Main Component ─────────────────────────────────────────
const CaliperGraphic = () => (
    <div className="caliper-wrapper">
        {/* Ambient glow rings */}
        <div className="c-ring c-ring1" />
        <div className="c-ring c-ring2" />
        <div className="c-ring c-ring3" />

        {/* Scan line */}
        <div className="scan-line" />

        {/* 3D Canvas */}
        <Canvas
            className="caliper-canvas"
            camera={{ position: [0, 0.5, 8], fov: 50 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true }}
        >
            {/* Neutral white lighting — shows real model colors */}
            <ambientLight intensity={0.5} color="#1a3a8a" />
            {/* Key light — slightly warm white so model stays readable */}
            <directionalLight position={[4, 6, 5]} intensity={1.2} color="#ffffff" />
            {/* Blue fill — matches site primary #1a56db */}
            <directionalLight position={[-5, 2, 3]} intensity={1.4} color="#1a56db" />
            {/* Cyan rim from behind for depth */}
            <directionalLight position={[0, -3, -4]} intensity={0.8} color="#3b82f6" />
            {/* Blue point glow — accent light */}
            <pointLight position={[3, 4, 2]} intensity={1.2} color="#60a5fa" />
            <pointLight position={[-3, 0, 4]} intensity={0.7} color="#1e40af" />

            {/* Floating 3D model */}
            <Float
                speed={1.4}
                rotationIntensity={0.08}
                floatIntensity={0.4}
                floatingRange={[-0.06, 0.06]}
            >
                <Suspense fallback={<LoadingRing />}>
                    <CaliperModel />
                </Suspense>
            </Float>

            {/* Orbit controls — drag to rotate */}
            <OrbitControls
                enableZoom={false}
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 1.6}
                dampingFactor={0.06}
                enableDamping
            />
        </Canvas>

        {/* Label chip */}
        <div className="caliper-label">
            <span className="cl-dot" />
            Vernier Caliper · ±0.02mm
        </div>
    </div>
);

export default CaliperGraphic;
