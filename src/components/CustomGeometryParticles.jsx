import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import "../App.css"


const CustomGeometryParticles = (props) => {
    const { count, shape, color } = props;

    // Gives direct access to points
    const points = useRef();
  
  
    // Generates the positions attributes array
    const particlesPosition = useMemo(() => {
      const positions = new Float32Array(count * 3);
  
      if (shape === "box") {
        for (let i = 0; i < count; i++) {
          let x = (Math.random() - 0.5) * 15;
          let y = (Math.random() - 0.5) * 15;
          let z = (Math.random() - 0.5) * 15;
  
          positions.set([x, y, z], i * 3);
        }
      }
  
      if (shape === "pool") {
        const distance = 20;
       
        for (let i = 0; i < count; i++) {
          const theta = THREE.MathUtils.randFloatSpread(360); 
          const phi = THREE.MathUtils.randFloatSpread(360); 
  
          let x = distance * Math.cos(theta) * Math.sin(phi); 
          let y = distance * Math.sin(theta) * Math.sin(phi);
          let z = distance * Math.cos(phi) ;
  
          positions.set([x, y, z], i * 3);
        }
      }

      if (shape == "sphere"){
        const distance = 10;
       
        for (let i = 0; i < count; i++) {
          const theta = THREE.MathUtils.randFloatSpread(360); 
          const phi = THREE.MathUtils.randFloatSpread(360); 
  
          let x = distance * Math.cos(theta) * Math.sin(phi); 
          let y = distance * Math.sin(theta) * Math.sin(phi);
          let z = distance * Math.cos(phi) ;
  
          positions.set([x, y, z], i * 3);
        }
      }
  
      return positions;
    }, [count, shape]);
  
    useFrame((state) => {
      const { clock } = state;

      if (shape == "pool"){
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          let x = points.current.geometry.attributes.position.array[i3]
          let z = points.current.geometry.attributes.position.array[i3 + 2]
          let y = points.current.geometry.attributes.position.array[i3 + 1]
          let theta = Math.atan(y / x)
    
          points.current.geometry.attributes.position.array[i3 + 1] = (Math.cos(x) + Math.sin(z)) + Math.sin(clock.elapsedTime + x + z) * 0.5
    
          

        }
    
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
        <pointsMaterial size={.05} color={color} sizeAttenuation depthWrite={false} />
      </points>
    );
  };
  
export default CustomGeometryParticles