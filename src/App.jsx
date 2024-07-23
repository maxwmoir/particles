import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import "./App.css"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ControlUI from "./components/ControlUI";
import CustomGeometryParticles from "./components/CustomGeometryParticles";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Initialise Dark theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Scene = () => {

  // Hooks to keep track of attributes
  const [shape, setShape] = useState("pool");
  const [color, setColor] = useState("purple");
  const [open, setOpen] = useState(false);
  const [speed, setSpeed] = useState(20); 
  const [radius, setRadius] = useState(20); 


  // Handle extracting attributes from forms
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleShapeChange = (event) => {
    setShape(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSpeedChange = (event, newValue) => {
    setSpeed(newValue);
  };

  const handleRadiusChange = (event, newValue) => {
    setRadius(newValue);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Box id="canv" >
          
          {/* Settings button */}
          <Box sx = {{position : "fixed", zIndex : 1}} width="100%" >
            <Button color="secondary" onClick={toggleDrawer(true)}> Settings </Button>
          </Box>
          
          {/* Settings Drawer */}
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <ControlUI 
              shape = {shape} 
              color = {color} 
              speed = {speed}
              radius = {radius}
              handleRadiusChange = {handleRadiusChange}
              handleSpeedChange = {handleSpeedChange}
              handleColorChange = {handleColorChange} 
              handleShapeChange = {handleShapeChange}
            />
          </Drawer>

          {/* React Three Fiber Canvas */}
          <Canvas className="canv" camera={{ position: [20, 15, 30] } }>
            <ambientLight intensity={0.5}/>
            <CustomGeometryParticles color = {color} radius = {radius} count={100000} shape={shape}/>
            <OrbitControls autoRotate minDistance={5} maxDistance = {250} autoRotateSpeed={speed / 30}/>
          </Canvas>

        </Box>
    </ThemeProvider>
    

  );
};


export default Scene;
