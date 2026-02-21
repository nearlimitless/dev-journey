import icon_about from '../assets/images/icon_about.webp';
import icon_contact from '../assets/images/icon_contact.webp';
import icon_faq from '../assets/images/icon_faq.webp';
import icon_links from '../assets/images/icon_links.webp';
import icon_work from '../assets/images/icon_work.webp';
import AboutWindow from './windows/AboutWindow.jsx';
import WorkWindow from './windows/WorkWindow.jsx';
import FaqWindow from './windows/FaqWindow.jsx'
import LinksWindow from './windows/LinksWindow.jsx'
import ContactWindow from './windows/ContactWindow.jsx'
import React, { useState } from "react";
import { Modal, Box, Typography, Button, Backdrop } from "@mui/material";




function MyLinks() {
  const [activeModal, setActiveModal] = useState(null);

  const style = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: 800,
    height: 700,
  };

  const handleClose = () => {
    setActiveModal(null);
  };



    return (
        <>
            <div className="links-container">

                <ul>
                    <li>
                        <a className="reset-link-style" href="#" onClick={() => setActiveModal('about')}><img className="about-me-logo" src={icon_about}/>
                            About
                        </a>

                    </li>
                    
                    <li>
                        <a className="reset-link-style" href="#" onClick={() => setActiveModal('links')}><img className="about-me-logo" src={icon_links}/>
                            Links
                        </a>
                    </li>
                    <li>
                        <a className="reset-link-style" href="#" onClick={() => setActiveModal('work')}><img className="about-me-logo" src={icon_work}/>
                            Work
                        </a>

                    </li>
                    <li>
                        <a className="reset-link-style" href="#" onClick={() => setActiveModal('faq')}><img className="about-me-logo" src={icon_faq}/>
                            FAQ
                        </a>

                    </li>
                    <li><a className="reset-link-style" href="#" onClick={() => setActiveModal('contact')}><img className="about-me-logo" src={icon_contact}/>Contact</a></li>
                </ul>
            </div>
            <Modal
                open={activeModal !== null}
                onClose={handleClose}
                BackdropProps={{
                style: { backgroundColor: "transparent" },
                }}
            >
                <Box sx={style}>
                {activeModal === "about" && <AboutWindow />}
                {activeModal === "work" && <WorkWindow />}
                {activeModal === "faq" && <FaqWindow />}
                {activeModal === "links" && <LinksWindow />}
                {activeModal === "contact" && <ContactWindow />}
                </Box>
            </Modal>
        </>
    );
}

export default MyLinks;