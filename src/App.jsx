import { Backdrop, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import "./App.css"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ControlUI from "./components/ControlUI";
import CustomGeometryParticles from "./components/CustomGeometryParticles";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Scene = () => {
  const overLap = {
    position: "fixed",
    zIndex:+1
  }
  const [shape, setShape] = useState("pool");
  const [color, setColor] = useState("purple");

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleShapeChange = (event) => {
    setShape(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />


        <Box id="canv" >
          
          <Box style={overLap} width="100%" >
            <Button color="secondary" onClick={toggleDrawer(true)}> Settings </Button>
          </Box>
          
          <Drawer open={open} onClose={toggleDrawer(false)}>
            <ControlUI shape = {shape} color = {color} handleColorChange = {handleColorChange} handleShapeChange = {handleShapeChange}/>
          </Drawer>

          <Canvas className="canv" camera={{ position: [20, 15, 30] } }>
            <ambientLight intensity={0.5}/>
            <CustomGeometryParticles color = {color} count={100000} shape={shape}/>
            <OrbitControls autoRotate autoRotateSpeed={0.5}/>
          </Canvas>
        </Box>
    </ThemeProvider>
    

  );
};


export default Scene;
