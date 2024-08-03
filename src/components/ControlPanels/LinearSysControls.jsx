import { Box, Slider } from "@mui/material"
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function LinearSysControls(props){

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
                Linear system of equations controls
            </Typography>

            <br></br>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Wave Direction</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.state.wavedir}
                label="Wave Direction"
                onChange={props.handleChange('wavedir')}
                >
                <MenuItem value={"polar"}>Polar</MenuItem>
                <MenuItem value={"horizontal"}>Horizontal</MenuItem>
                </Select>
            </FormControl>

            <br /><br />

            <Typography color="#979899" variant="subtitle2">
                    Amplitude
            </Typography>
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                min = {-100}
                max = {100}
                value = {props.state.amplitude}
                onChange={props.handleChange('amplitude')}
            />
            
            <Typography color="#979899" variant="subtitle2">
                    Frequency
            </Typography>
            <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
                min = {-100}
                max = {100}
                value = {props.state.frequency}
                onChange={props.handleChange('frequency')}
            />

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
                value = {props.state.radius}
                onChange={props.handleChange('radius')}
            />
        </Box>
    );
};

export default LinearSysControls;