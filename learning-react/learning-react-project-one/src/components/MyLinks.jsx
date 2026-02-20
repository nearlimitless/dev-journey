import icon_about from '../assets/images/icon_about.webp';
import icon_contact from '../assets/images/icon_contact.webp';
import icon_faq from '../assets/images/icon_faq.webp';
import icon_links from '../assets/images/icon_links.webp';
import icon_work from '../assets/images/icon_work.webp';
import AboutWindow from './windows/AboutWindow.jsx';
import React, { useState } from "react";
import { Modal, Box, Typography, Button, Backdrop } from "@mui/material";




function MyLinks() {
    const [open, setOpen] = useState(false);

    const style = {
        position: 'absolute',
        bottom: '5%',
        left: '5%',
        transform: 'none',
        p: 4,
        width: 800,
        height: 700,
    };


    return (
        <>
            <div className="links-container">

                <ul>
                    <li>
                        <a className="reset-link-style" href="#" onClick={() => setOpen(true)}><img className="about-me-logo" src={icon_about}/>
                            About
                        </a>
                              <Modal
                                open={open}
                                onClose={() => setOpen(false)}
                                BackdropProps={{
                                  style: { backgroundColor: "transparent" },
                                }}
                              >
                                <Box sx={style}>
                                    <AboutWindow />
                                </Box>
                              </Modal>
                    </li>
                    
                    <li><a className="reset-link-style" href="#"><img className="about-me-logo" src={icon_links}/>Links</a></li>
                    <li><a className="reset-link-style" href="#"><img className="about-me-logo" src={icon_work}/>Work</a></li>
                    <li><a className="reset-link-style" href="#"><img className="about-me-logo" src={icon_faq}/>FAQ</a></li>
                    <li><a className="reset-link-style" href="#"><img className="about-me-logo" src={icon_contact}/>Contact</a></li>
                </ul>
            </div>
        </>
    );
}

export default MyLinks;