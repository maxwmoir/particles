import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import "../App.css"


const CustomGeometryParticles = (props) => {
    const { count, shape, handleChange } = props;

    // Gives direct access to points
    const points = useRef();
  
  
    // Generates the positions attributes array
    const particlesPosition = useMemo(() => {
      const positions = new Float32Array(count * 3);


      // Initial position of the particles depending on shape type
      if (shape === "box") {
        for (let i = 0; i < count; i++) {
          let x = (Math.random() - 0.5) * 15;
          let y = (Math.random() - 0.5) * 15;
          let z = (Math.random() - 0.5) * 15;
  
          positions.set([x, y, z], i * 3);
        }
      }

      if (shape == "start") {
        for (let i = 0; i < count; i++) {
          const phi = THREE.MathUtils.randFloatSpread(360); 
          let r = Math.random() * 10;

          let x = Math.sin(phi) * 15 / r; 
          let z = Math.cos(phi) * 15 / r;
          let y = 0;

          positions.set([x, y, z], i * 3);
        }
      }



  
      if (shape === "pool" ) {
        let alpha = 2;
        let b = Math.round(alpha * Math.sqrt(count))
        let phi = (Math.sqrt(5)+1)/2;
        let n = count;
        for (let k = 0; k < count; k++) {
          let r = 0;

          if (k > n - b){
            r = 25;
          } else {
            r = Math.sqrt(k-1/2) * 25/Math.sqrt(n-(b+1)/2);
          }
          
          let theta = 2*Math.PI*k/phi^2;

          let x = r * Math.cos(theta)
          let z = r * Math.sin(theta)
          let y = 0;

          positions.set([x, y, z], k * 3);
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
  
    // Frame loop, updates all particles each frame for dynamic graphs
    // TODO: Implement shaders instead of manually updating position of every particle.
    //       -Will massively improve performance
    useFrame((state) => {
      const { clock } = state;
      if (shape == "pool"){
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          let x = points.current.geometry.attributes.position.array[i3]
          let z = points.current.geometry.attributes.position.array[i3 + 2]
    
          if (props.state.wavedir == "horizontal") {
            points.current.geometry.attributes.position.array[i3 + 1] =  props.state.amplitude * 0.1 * Math.sin(clock.elapsedTime + x * props.state.frequency / 75) * 0.5
          } else {
            points.current.geometry.attributes.position.array[i3 + 1] =  props.state.amplitude * 0.1 * Math.sin(clock.elapsedTime + Math.sqrt(x**2 + z**2) * props.state.frequency / 50) * 0.5
          }

        }
      }

      if (shape == "start"){
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          let x = points.current.geometry.attributes.position.array[i3]
          let z = points.current.geometry.attributes.position.array[i3 + 2]
          points.current.geometry.attributes.position.array[i3] *= 1.01 -  Math.sqrt((x)**2 + (z)**2) / 1500
          points.current.geometry.attributes.position.array[i3 + 1] = 2 * (Math.cos(x) + Math.sin(z)) + Math.sin(clock.elapsedTime * 2 + x + z) - 5 * Math.sin(Math.sqrt(x**2 + z**2))
          points.current.geometry.attributes.position.array[i3 + 2] *= 1.01 -  Math.sqrt((x)**2 + (z)**2) / 1500
    
        }
      }

      if (shape === "box" && props.state.updateState == "true") {
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          let x = (Math.random() - 0.5) * props.state.boxwidth;
          let y = (Math.random() - 0.5) * props.state.boxheight;
          let z = (Math.random() - 0.5) * props.state.boxdepth;
          points.current.geometry.attributes.position.array[i3] = x;
          points.current.geometry.attributes.position.array[i3 + 1] = y;
          points.current.geometry.attributes.position.array[i3 + 2] = z;
  
        }
        handleChange('updateState')("false");

      }

      points.current.geometry.attributes.position.needsUpdate = true;

    });
  
    // Return points 
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
        <pointsMaterial size={.1} color={props.state.color} sizeAttenuation depthWrite={false} />
      </points>
    );
  };
  
export default CustomGeometryParticles