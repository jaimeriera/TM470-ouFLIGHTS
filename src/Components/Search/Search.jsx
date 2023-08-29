import React, { useState } from "react";
import DepDesSearch from "./depDesSearch";
import Stack from '@mui/material/Stack';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function ReturnDatePicker() {
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    function onChangeDateHandler(value) {
        setStartDate(value[0]);
        setEndDate(value[1]);
    }

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker onChange={onChangeDateHandler} localeText={{start: "Departure", end: "Return"}} />
        </LocalizationProvider>
    )

}

const Search = () => {
    const [departureCode, setDepartureCode] = useState(null);
    const [destinationCode, setDestinationCode] = useState(null);

    return (
        <form id="Search">
            <Stack direction="row" spacing={4}>
                <DepDesSearch setDepartureCode={setDepartureCode} setDestinationCode={setDestinationCode} />
                <ReturnDatePicker />
            </Stack>
        </form>
    );
};

export default Search;