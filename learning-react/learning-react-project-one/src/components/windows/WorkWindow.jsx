import Header from '../Header.jsx';
import MyLinks from '../MyLinks.jsx';
import Draggable from 'react-draggable';



function WorkWindow() {
    return (
        <>
        <Draggable>
            <div className="window-container">      
                <div className="box-header">
                        <h4>C:\User\work</h4>
                </div>
                <div className="modal-body2">
                    <div className="quote-box">
                        <p>. . .  a work in progress</p>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>

                    </div>
                </div>            
            </div>
        </Draggable>
        </>
    );
}

export default WorkWindow;