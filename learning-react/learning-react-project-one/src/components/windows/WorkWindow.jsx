import Header from '../Header.jsx';
import MyLinks from '../MyLinks.jsx';
import Draggable from 'react-draggable';



function WorkWindow() {
    return (
        <>
        <Draggable>
            <div className="window-container">      
                <div className="box-header">
                        
                </div>  
                <div className="modal-body2">
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

export default WorkWindow;