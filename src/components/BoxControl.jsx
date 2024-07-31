import { Box, Slider } from "@mui/material"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BoxControl(props){

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
                Box Attribute Controls

            </Typography>
            <br />
            
            <Typography color="#979899" variant="subtitle2">
                    Width
            </Typography>
            <Slider
                size="small"
                defaultValue={20}
                aria-label="Small"
                valueLabelDisplay="auto"
                min = {0}
                max = {40}
                marks = {true}
                value = {props.state.boxwidth}
                onChange={props.handleChange('boxwidth')}
            />

            <Typography color="#979899" variant="subtitle2">
                Height
            </Typography>
            <Slider
                size="small"
                defaultValue={20}
                aria-label="Small"
                valueLabelDisplay="auto"
                min = {0}
                max = {40}
                marks = {true}
                value = {props.state.boxheight}
                onChange={props.handleChange('boxheight')}
            />

            <Typography color="#979899" variant="subtitle2">
                Depth
            </Typography>
            <Slider
                size="small"
                defaultValue={20}
                aria-label="Small"
                valueLabelDisplay="auto"
                min = {0}
                max = {40}
                marks = {true}
                value = {props.state.boxdepth}
                onChange={props.handleChange('boxdepth')}
            />
        </Box>
    );
};

export default BoxControl;