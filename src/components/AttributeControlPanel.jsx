import { Box, Slider } from "@mui/material"
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function AttributeControlPanel(props){

    return (
        <Box 
            sx = {{
                width : "100%",
                height : 300,
                borderRadius : 1,
                bgcolor : '#1f1f1f',
                p : 2,
                boxShadow : 10,
            }}
        >

            
            <Typography color="#bababa" variant="body1">
                Attribute Controls
            </Typography>

            <br></br>

            <Typography color="#979899" variant="subtitle2">
                    Count
            </Typography>
            <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    value = {props.state.count}
                    onChange={props.handleChange('count')}
            />

            <Typography color="#979899" variant="subtitle2">
                    Amplitude
            </Typography>
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                value = {props.state.amplitude}
                onChange={props.handleChange('amplitude')}
            />
            
            <Typography color="#979899" variant="subtitle2">
                    Wavelength
            </Typography>
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                value = {props.state.wavelength}
                onChange={props.handleChange('wavelength')}
            />
        </Box>
    );
};

export default AttributeControlPanel;