import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import "./App.css"

const CustomGeometryParticles = (props) => {
  const { count, shape } = props;
  const points = useRef();

  // Generate our positions attributes array
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    if (shape === "box") {
      for (let i = 0; i < count; i++) {
        let x = (Math.random() - 0.5) * 2;
        let y = (Math.random() - 0.5) * 2;
        let z = (Math.random() - 0.5) * 2;

        positions.set([x, y, z], i * 3);
      }
    }
    // const uniforms = useMemo(() => ({
    //   uTime: {
    //     value: 0.0
    //   },
    //   // Add any other attributes here
    // }), [])
  
  
    useFrame((state) => {
      const { clock } = state;
      points.current.material.uniforms.uTime.value = clock.elapsedTime;
    });  

    return positions;
  }, [count, shape]);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      {/* <pointsMaterial size={0.015} color="#5786F5" sizeAttenuation depthWrite={false} /> */}
      <shaderMaterial
        depthWrite={false}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </points>
  );
};

const Scene = () => {
  const underLap = {
    position: "fixed",
    zIndex:-1
  }

  return (
    <div id="canv" >
      <Canvas className="canv" camera={{ position: [7, 3, 1.5] } }>
        <ambientLight intensity={0.5} />
        <CustomGeometryParticles count={1000} shape="box"/>
        <OrbitControls autoRotate autoRotateSpeed={1}/>
      </Canvas>

    </div>

  );
};


export default Scene;
