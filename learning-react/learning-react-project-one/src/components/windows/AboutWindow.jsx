import Header from '../Header.jsx';
import MyLinks from '../MyLinks.jsx';
import Draggable from 'react-draggable';
import avatarimg from '../../assets/images/avatarimg.webp';
import { useRef } from "react";



function AboutWindow() {
    const nodeRef = useRef(null);
    return (
        <>
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="window-container">
                <div className="box-header">
                        <h4>C:\User\about</h4>
                </div>
                <div>
                    <div className="avatar-card">
                        <img className="avatar"></img>
                            <div className="avatar-info">
                                <h1>{'<Aaron Bacani />'}</h1>
                                <p>an illustrator, animator, and developer</p>
                            </div>
                    </div>
                </div>         
                <div className="modal-body">
                    <p>tesaaaaaaaaaaaaaaaaaaaaaaat</p>
                    <h3>Education</h3>
                    <p>tesaaaaaaaaaaaaaaaaaaaaaaat</p>
                    <h3>Other Interests</h3>
                    <p>tesaaaaaaaaaaaaaaaaaaaaaaat</p>
                    <h3>Language Proficiency</h3>
                    <p>tesaaaaaaaaaaaaaaaaaaaaaaat</p>
                </div>            
            </div>
        </Draggable>
        </>
    );
}

export default AboutWindow;