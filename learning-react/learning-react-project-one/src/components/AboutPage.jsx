import MyButton from './MyButton.jsx';
import Header from './Header.jsx';
import MyLinks from './MyLinks.jsx';
import { Modal, Box, Typography, Button, Backdrop } from "@mui/material";



function AboutPage() {
    return (
        <>
            <div className="box-container">
                <div className="box-header">
                        
                </div>
                <div className="small-container">
                    <h1>{'<Near />'}</h1>
                    <p>an illustrator, animator, and developer</p>
                </div>  
                <div>
                    <MyLinks />
                </div>
                    
            </div>
        </>
    );
}

export default AboutPage;