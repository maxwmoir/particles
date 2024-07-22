import { Box, Slider, Divider } from "@mui/material"
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function ControlUI({shape, handleClick, handleChange}){


    return (
        <Card  square variant="outlined" sx={{ maxWidth: 360, color : '#171614', height : '100%', backgroundColor : '#121212' }}>
            <Box sx={{ p: 2 }}>
                <Box width = {"95%"} color = {"white"}>
                    <Typography color="secondary.dark" gutterBottom variant="h5" component="div">
                        Settings
                    </Typography>
                </Box>
                <Typography color="grey" variant="body2">
                Adjust the settings to change the properties of the plotted graph!
                Thee current shape is {shape}!
                </Typography>
            </Box>
            <Divider sx={{ bgcolor: "secondary.light" }} />

            
            <Box sx={{ minWidth: 120, p : 2 }}>
                <Typography color="grey" variant="body2">
                    Select your shape here!
                </Typography>
                <br></br>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Shape</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={shape}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={"pool"}>Wave Pool</MenuItem>
                    <MenuItem value={"box"}>Box</MenuItem>
                    <MenuItem value={"sphere"}>Sphere</MenuItem>
                    </Select>
                </FormControl>
                

            </Box>
        </Card>
    )
}

export default ControlUI