import React from 'react';
import './App.css';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <Grid2 container spacing={5}>
      <Grid2 item xs={12}>
        <Header />
      </Grid2>
      <Grid2 item xs={12}>
        <Main />
      </Grid2>
    </Grid2>
  )
}

export default App;
