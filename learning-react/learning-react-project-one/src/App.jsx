import React, { useState } from "react";
import MainPage from './components/MainPage.jsx';
import Header from './components/Header.jsx';
import Draggable from 'react-draggable';
import { Modal, Box, Typography, Button, Backdrop } from "@mui/material";

export default function MyApp() {


  return (
    <>

        <div>
          <Header />
          <MainPage />
        </div>

    </>

  );
}
