import React, { useState } from "react";
import DepartureSearch from "./departureSearch";
import DestinationSearch from "./destinationSearch";
import { Grid, InputLabel, MenuItem, FormControl, Select, Box, Paper} from '@mui/material';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { dayjs } from "dayjs";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function ReturnDatePicker() {
    const date = dayjs;

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker 
                fullWidth 
                slotProps={{ textField: { size: 'small', minWidth: 200}, minDate: date , InputProps: { startAdornment: <CalendarMonthIcon />}}} 
                localeText={{start: "Departure", end: "Return"}} 
                minDate={date}
                />
        </LocalizationProvider>
    )

}

function SelectAP() {
    const [apModel, setApModel] = React.useState('');

    const handleChange = (event) => {
        setApModel(event.target.value);
    };

    return(
        <FormControl fullWidth size="small">
            <InputLabel id="aiplaneModel">Aiplane</InputLabel>
            <Select
                width={200}
                labelId="selectAP"
                id="selectAP"
                value={apModel}
                label="airplaneModel"
                size="small"
                onChange={handleChange}
                sx={{ minWidth: 130 }}
            >
                <MenuItem value={"S"}>S</MenuItem>
                <MenuItem value={"A"}>A</MenuItem>
                <MenuItem value={"B"}>B</MenuItem>
                <MenuItem value={"C"}>C</MenuItem>
            </Select>
        </FormControl>
    );
}

const Search = () => {
    const [departureCode, setDepartureCode] = useState(null);
    const [destinationCode, setDestinationCode] = useState(null);

    return (
        <Box 
        sx={{
            mx: 'auto',
            p: 1,
            m: 1,
            display: 'flex',
            flexWrap: 'wrap',
            align: 'centre',
        }}
        >
            <Paper elevation={3}>
                <Grid container >
                    <Grid item >
                        <DepartureSearch setDepartureCode={setDepartureCode} />
                    </Grid>
                    <Grid>
                        <DestinationSearch setDestinationCode={setDestinationCode} />
                    </Grid>
                    <Grid item >
                        <ReturnDatePicker />
                    </Grid>
                    <Grid item >
                        <SelectAP />
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default Search;