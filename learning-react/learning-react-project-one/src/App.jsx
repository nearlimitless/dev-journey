import React, { useState } from "react";
import AboutPage from './components/AboutPage.jsx';
import Header from './components/Header.jsx';
import Draggable from 'react-draggable';
import { Modal, Box, Typography, Button, Backdrop } from "@mui/material";

export default function MyApp() {


  return (
    <>

        <div>
          <Header />
          <AboutPage />
        </div>

    </>

  );
}
