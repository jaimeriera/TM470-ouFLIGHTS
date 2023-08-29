import React from "react";
import Stack from "@mui/material/Stack"
import Search from "../Search/Search";
import RouteMap from "../RouteMap/RouteMap";

const Main = () => {
    return (
        <Stack >
            <Search />,
            <RouteMap />
        </Stack>
    );
};

export default Main;