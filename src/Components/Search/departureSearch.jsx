import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Grid from '@mui/material/Stack';
import { InputAdornment } from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import search from "./api";
import { useTheme } from '@mui/material/styles'

const DepartureSearch = ({ setDepartureCode}) => {
    const theme = useTheme();
    const [inputValue, setInputValue] = React.useState("");
    const [options, setOptions] = React.useState([]);

    React.useEffect(() => {
        const { process, cancel } = search(inputValue);

        process((options) => {
            setOptions(options);
        });

        return () => cancel();
    }, [inputValue]);

    return (
            <Autocomplete
                id="departureAutocomplete"
                size='small'
                sx={{ width: 400 }}
                autoComplete
                freeSolo
                autoHighlight
                options={options}
                onChange={(event, newValue) => {
                    setDepartureCode([newValue.code, newValue.geoLat, newValue.geoLng]);
                    console.log([newValue.code, newValue.geoLat, newValue.geoLng]);
                }}
                onInputChange={(event, newInputValue) =>{
                    setInputValue(newInputValue);
                }}
                getOptionLabel={(option) => "(" + option.iata + ") " + option.city || ""}
                renderOption={(params, option) => (
                    <Box component="li"  {...params}>
                        <LocationOnIcon  />
                        {option.iata} - {option.city}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Departure City"
                        label="Departure City"
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FlightTakeoffIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
    );
};

export default DepartureSearch;