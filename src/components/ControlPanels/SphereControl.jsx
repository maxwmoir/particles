import { Box, Slider } from "@mui/material"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SphereControl(props){

    return (
        <Box 
            sx = {{
                width : "100%",
                borderRadius : 1,
                bgcolor : '#1f1f1f',
                p : 2,
                boxShadow : 10,
            }}
        >

            
            <Typography color="#bababa" variant="body1">
                Sphere Attribute Controls
            </Typography>

            <br></br>

            <Typography color="#979899" variant="subtitle2">
                    Radius
            </Typography>
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                min = {1}
                max = {50}
                value = {props.state.sphererad}
                onChange={props.handleChange('sphererad')}
            />

            <Typography color="#979899" variant="subtitle2">
                    Style
            </Typography>
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                min = {1}
                max = {100}
                value = {props.state.spheresty}
                onChange={props.handleChange('spheresty')}
            />
        </Box>
    );
};

export default SphereControl;