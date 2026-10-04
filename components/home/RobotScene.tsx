"use client";

import { Canvas, type ThreeEvent } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef, useState, type ReactNode } from "react";
import * as THREE from "three";

type Vec3 = [number, number, number];

const METAL = "#8b93a1";
const DARK = "#1c212b";

function Box({ size, pos, rot, color = METAL }: { size: Vec3; pos: Vec3; rot?: Vec3; color?: string }) {
  return (
    <mesh position={pos} rotation={rot}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} metalness={0.5} roughness={0.45} />
    </mesh>
  );
}

function Cyl({
  r,
  h,
  pos,
  rot,
  color = METAL,
}: {
  r: number;
  h: number;
  pos: Vec3;
  rot?: Vec3;
  color?: string;
}) {
  return (
    <mesh position={pos} rotation={rot}>
      <cylinderGeometry args={[r, r, h, 32]} />
      <meshStandardMaterial color={color} metalness={0.4} roughness={0.5} />
    </mesh>
  );
}

/** Wraps a set of meshes into one clickable, highlightable component. */
function Part({
  id,
  active,
  hovered,
  onSelect,
  onHover,
  children,
}: {
  id: string;
  active: string | null;
  hovered: string | null;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
  children: ReactNode;
}) {
  const group = useRef<THREE.Group>(null);
  const isActive = active === id;
  const isHovered = hovered === id;

  useEffect(() => {
    group.current?.traverse((obj) => {
      if (!(obj as THREE.Mesh).isMesh) return;
      const mat = (obj as THREE.Mesh).material as THREE.MeshStandardMaterial;
      mat.emissive.set(isActive ? "#ff6417" : "#4f84f5");
      mat.emissiveIntensity = isActive ? 0.6 : isHovered ? 0.35 : 0;
    });
  }, [isActive, isHovered]);

  return (
    <group
      ref={group}
      onClick={(e: ThreeEvent<MouseEvent>) => {
        e.stopPropagation();
        onSelect(id);
      }}
      onPointerOver={(e: ThreeEvent<PointerEvent>) => {
        e.stopPropagation();
        onHover(id);
      }}
      onPointerOut={() => onHover(null)}
    >
      {children}
    </group>
  );
}

function Robot({ active, onSelect }: { active: string | null; onSelect: (id: string | null) => void }) {
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "";
    return () => {
      document.body.style.cursor = "";
    };
  }, [hovered]);

  const p = { active, hovered, onSelect, onHover: setHovered };
  const wheelPositions: Vec3[] = [
    [1.5, 0.5, 1.75],
    [1.5, 0.5, -1.75],
    [-1.5, 0.5, 1.75],
    [-1.5, 0.5, -1.75],
  ];
  const motorPositions: Vec3[] = [
    [1.5, 0.5, 1.0],
    [1.5, 0.5, -1.0],
    [-1.5, 0.5, 1.0],
    [-1.5, 0.5, -1.0],
  ];

  return (
    <group>
      <Part id="chassis" {...p}>
        <Box size={[4.2, 0.25, 0.2]} pos={[0, 0.55, 1.4]} />
        <Box size={[4.2, 0.25, 0.2]} pos={[0, 0.55, -1.4]} />
        <Box size={[0.2, 0.25, 2.8]} pos={[1.9, 0.55, 0]} />
        <Box size={[0.2, 0.25, 2.8]} pos={[-1.9, 0.55, 0]} />
        <Box size={[0.2, 0.25, 2.8]} pos={[0, 0.55, 0]} />
      </Part>

      <Part id="drivetrain" {...p}>
        {wheelPositions.map((pos, i) => (
          <group key={i} position={pos} rotation={[Math.PI / 2, 0, 0]}>
            <Cyl r={0.5} h={0.45} pos={[0, 0, 0]} color="#e9ecf1" />
            <Cyl r={0.18} h={0.5} pos={[0, 0, 0]} color={DARK} />
          </group>
        ))}
      </Part>

      <Part id="motors" {...p}>
        {motorPositions.map((pos, i) => (
          <Cyl key={i} r={0.2} h={0.65} pos={pos} rot={[Math.PI / 2, 0, 0]} color="#d4a017" />
        ))}
      </Part>

      <Part id="battery" {...p}>
        <Box size={[0.95, 0.3, 0.5]} pos={[-0.7, 0.85, -0.5]} color={DARK} />
      </Part>

      <Part id="controller" {...p}>
        <Box size={[0.9, 0.16, 0.6]} pos={[0.3, 0.8, 0.4]} color="#1f4cc0" />
        <Box size={[0.6, 0.04, 0.3]} pos={[0.3, 0.9, 0.4]} color="#2fb36b" />
      </Part>

      <Part id="intake" {...p}>
        <Cyl r={0.2} h={2.4} pos={[2.35, 0.5, 0]} rot={[Math.PI / 2, 0, 0]} color="#ff6417" />
        <Cyl r={0.2} h={2.4} pos={[2.35, 1.0, 0]} rot={[Math.PI / 2, 0, 0]} color="#ff6417" />
        <Box size={[0.7, 0.9, 0.1]} pos={[2.2, 0.75, 1.25]} />
        <Box size={[0.7, 0.9, 0.1]} pos={[2.2, 0.75, -1.25]} />
      </Part>

      <Part id="tray" {...p}>
        <Box size={[1.6, 0.06, 1.8]} pos={[1.15, 1.2, 0]} rot={[0, 0, -0.22]} color="#c3c9d4" />
      </Part>

      <Part id="lift" {...p}>
        <Box size={[0.15, 2.4, 0.15]} pos={[-1.55, 1.95, 0.55]} />
        <Box size={[0.15, 2.4, 0.15]} pos={[-1.55, 1.95, -0.55]} />
        <Box size={[0.2, 0.15, 1.3]} pos={[-1.55, 3.15, 0]} />
        <Box size={[0.35, 0.4, 1.3]} pos={[-1.35, 2.3, 0]} color="#ff6417" />
        <Box size={[0.9, 0.08, 1.1]} pos={[-0.9, 2.15, 0]} color="#c3c9d4" />
      </Part>

      <Part id="camera" {...p}>
        <Cyl r={0.05} h={1.0} pos={[0.1, 1.35, -1.05]} />
        <Box size={[0.3, 0.22, 0.22]} pos={[0.2, 1.95, -1.05]} color={DARK} />
      </Part>
    </group>
  );
}

export default function RobotScene({
  active,
  onSelect,
}: {
  active: string | null;
  onSelect: (id: string | null) => void;
}) {
  const [reduceMotion, setReduceMotion] = useState(true);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [5.4, 3.5, 5.7], fov: 38 }}
      onPointerMissed={() => onSelect(null)}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 8, 4]} intensity={2.2} />
      <directionalLight position={[-6, 3, -5]} intensity={0.8} color="#82aaff" />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}>
        <circleGeometry args={[4.6, 64]} />
        <meshBasicMaterial color="#0e1116" transparent opacity={0.55} />
      </mesh>
      <gridHelper args={[9, 18, "#2e64e0", "#232935"]} position={[0, 0.002, 0]} />

      <Robot active={active} onSelect={onSelect} />

      <OrbitControls
        target={[0, 1.3, 0]}
        enablePan={false}
        minDistance={5}
        maxDistance={12}
        maxPolarAngle={Math.PI / 2 - 0.05}
        autoRotate={!reduceMotion && !active && !dragging}
        autoRotateSpeed={1}
        onStart={() => setDragging(true)}
        onEnd={() => setDragging(false)}
      />
    </Canvas>
  );
}
