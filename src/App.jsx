import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import "./App.css"

const CustomGeometryParticles = (props) => {
  const { count, shape } = props;



  // This reference gives us direct access to our points
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

    if (shape === "sphere") {
      const distance = 1;
     
      for (let i = 0; i < count; i++) {
        const theta = THREE.MathUtils.randFloatSpread(360); 
        const phi = THREE.MathUtils.randFloatSpread(360); 

        let x = distance * Math.cos(theta) * 0.01; 
        let z = distance * Math.cos(phi) * 0.01;
        //let y = (Math.cos(Math.sqrt((10*x)**2 + (10*z)**2)) - Math.sqrt((10*x)**2 + (10*z)**2) / 5)/ 5 + 2;
        let y = 0//-Math.sqrt((10*x)**2 + (10*z)**2)/50 + 2;
        positions.set([x, y, z], i * 3);
      }
    }

    return positions;
  }, [count, shape]);

  useFrame((state) => {
    const { clock } = state;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      let x = points.current.geometry.attributes.position.array[i3]
      let z = points.current.geometry.attributes.position.array[i3 + 2]
      points.current.geometry.attributes.position.array[i3] *= 1.035 -  Math.sqrt((8*x)**2 + (8*z)**2) / 400
      points.current.geometry.attributes.position.array[i3 + 2] *= 1.035 - Math.sqrt((8*x)**2 + (1*z)**2) / 400

      points.current.geometry.attributes.position.array[i3 + 1] = (Math.cos(x) + Math.sin(z)) + Math.sin(clock.elapsedTime + x + z)
      
      //points.current.geometry.attributes.position.array[i3 + 1] += .003 * Math.sin(clock.elapsedTime + Math.exMath.sin(clock.elapsedTimep(x**2 + z**2))**2;
    }

    points.current.geometry.attributes.position.needsUpdate = true;
  
  });

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
      <pointsMaterial size={0.015} color="#ff0000" sizeAttenuation depthWrite={false} />
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
        <ambientLight intensity={0.5}/>
        <CustomGeometryParticles count={200000} shape="sphere"/>
        <OrbitControls autoRotate autoRotateSpeed={0}/>
      </Canvas>

    </div>

  );
};


export default Scene;
