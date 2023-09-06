import React from "react";
import Box from "@mui/material/Box"
import Search from "../Search/Search";
import RouteMap from "../RouteMap/RouteMap";

const Main = () => {
    return (
        <Box display={"flex-wrap"}>
            <Search />
            <RouteMap />
        </Box>
    );
};

export default Main;