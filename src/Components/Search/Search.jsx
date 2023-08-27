import React, { useState } from "react";
import DepDesSearch from "./depDesSearch";
import Stack from '@mui/material/Stack';


const Search = () => {
    const [departureCode, setDepartureCode] = useState(null);
    const [destinationCode, setDestinationCode] = useState(null);

    return (
        <form>
            <Stack direction="row" spacing={4}>
                <DepDesSearch setDepartureCode={setDepartureCode} setDestinationCode={setDestinationCode} />
            </Stack>
        </form>
    );
};

export default Search;