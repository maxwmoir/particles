import { Box, Slider } from "@mui/material"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// Control UI for inside drawer
function ControlUI(props){
    return (
        <Card  square variant="outlined" sx={{ maxWidth: 360, color : '#171614', height : '100%', backgroundColor : '#121212' }}>
            <Box sx={{ p: 2 }}>
                <Box width = {"95%"} color = {"white"}>
                    <Typography color={"white"} gutterBottom variant="h5" component="div">
                        Settings
                    </Typography>
                </Box>
                <Typography color="grey" variant="body2">
                Adjust the settings to change the properties of the plotted graph.
                Use your mouse to zoom in or pan the shape.
                The current shape is a {props.shape}!
                </Typography>
            </Box>
            
            <Box sx={{ minWidth: 120, p : 2}}>
                <Box sx = {{
                        width : "100%",
                        borderRadius : 1,
                        bgcolor : '#1f1f1f',
                        p : 2,
                        boxShadow : 10,
                    }}
                >
                    {/* Shape Change Accordion */}
                    <Typography color="#979899" variant="body1">
                        General
                    </Typography>
                    <br></br>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Shape</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.shape}
                        label="Shape"
                        onChange={props.handleShapeChange}
                        >
                        <MenuItem value={"pool"}>Wave Pool</MenuItem>
                        <MenuItem value={"box"}>Box</MenuItem>
                        <MenuItem value={"sphere"}>Sphere</MenuItem>
                        </Select>
                    </FormControl>
                    
                    <br /><br />

                    {/* Color Change Accordion */}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Color</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={props.color}
                        label = "Color"
                        onChange={props.handleColorChange}
                        >
                        <MenuItem value={"purple"}>Purple</MenuItem>
                        <MenuItem value={"red"}>Red</MenuItem>
                        <MenuItem value={"blue"}>Blue</MenuItem>
                        <MenuItem value={"green"}>Green</MenuItem>
                        <MenuItem value={"yellow"}>Yellow</MenuItem>

                        </Select>
                    </FormControl>

                    <br /> <br />
                    

                    <Box sx={{ width: "95%"}}>
                        <Typography color="#bababa" variant="subtitle2">
                            Auto Rotate Speed
                        </Typography>
                        <Slider
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            value = {props.speed}
                            onChange={props.handleSpeedChange}
                        />
                    </Box>

                </Box>
                <br />
                {/* TODO: Implement attribute changes - e.g. radius / wavelength sliders. */}
                {/* <Box 
                    sx = {{
                        width : "100%",
                        height : 300,
                        borderRadius : 1,
                        bgcolor : '#1f1f1f',
                        p : 2,
                        boxShadow : 10,
                    }}
                >

                    
                    <Typography color="#979899" variant="body1">
                        Attribute Controls
                    </Typography>

                                    

                    <Slider
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            value = {props.radius}
                            onChange={props.handleRadiusChange}
                        />

                        <Slider
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            value = {props.speed}
                            onChange={props.handleSpeedChange}
                        />

                        <Slider
                            size="small"
                            defaultValue={70}
                            aria-label="Small"
                            valueLabelDisplay="auto"
                            value = {props.speed}
                            onChange={props.handleSpeedChange}
                        />
    
                </Box> */}
            </Box>

            
        </Card>
    )
}

export default ControlUI