import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { InputAdornment } from '@mui/material';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import search from "./api";

const DestinationSearch = ({ setDestinationCode }) => {
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
        <div>
            <Autocomplete
                id="destinationAutocomplete"
                sx={{ width: 300 }}
                autoComplete
                freeSolo
                autoHighlight
                options={options}
                onChange={(event, newValue) => {
                    setDestinationCode(newValue.code);
                }}
                onInputChange={(event, newInputValue) =>{
                    setInputValue(newInputValue);
                }}
                getOptionLabel={(option) => option.city || ""}
                renderOption={(props, option) => (
                    <Box component="li" sx={{ display: 'flex', alignItems: 'flex-end'}} {...props}>
                        <LocationOnIcon sx={{ color: 'action.active', mr: 1}} />
                        {option.iata} - {option.city}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder="Destination City"
                        label="Destination City"
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FlightLandIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
            />
        </div>
    );
};

export default DestinationSearch;