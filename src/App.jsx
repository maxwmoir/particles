import { OrbitControls } from "@react-three/drei";
import { Canvas, events } from "@react-three/fiber";
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
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({
    shape:"start",
    color:"#008fdb", 
    speed : 0,
    radius: 20,
    amplitude : 50,
    wavelength : 50,
  });

  // Controls settings Drawer visibility
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  // Handle extracting attributes from forms
  const handleChange = (fieldName) => (event, newValue = null) => {
    if (newValue == null){
      newValue = event.target.value;
    }
    setState ((prevState) =>({
      ...prevState,
      [fieldName] : event.target.value,
    }));
  };



  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
        <Box id="canv" >
          
          {/* Settings button */}
          <Box sx = {{position : "fixed", zIndex : 1}} width="100%" >
            <Button color="primary" onClick={toggleDrawer(true)}> Settings </Button>
          </Box>
          
          {/* Settings Drawer */}
          <Drawer open ={open} onClose={toggleDrawer(false)}
                  sx = {{ maxHeight : "100vh"}}
          >
            <ControlUI state = {state} handleChange = {handleChange} />
          </Drawer>

          {/* React Three Fiber Canvas */}
          <Canvas className="canv" camera={{ position: [20, 15, 30] } }>
            <ambientLight intensity={0.5}/>
            {/* Here state.shape is passed to reload the canvas to compute the new state */}
            <CustomGeometryParticles state = {state} count={100000} shape={state.shape}/> 
            <OrbitControls autoRotate minDistance={5} maxDistance = {250} autoRotateSpeed={state.speed / 30}/>
          </Canvas>

        </Box>
    </ThemeProvider>
    

  );
};


export default Scene;
