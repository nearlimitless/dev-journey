import MyButton from './MyButton.jsx';
import Header from './Header.jsx';
import MyLinks from './MyLinks.jsx';
import Draggable from 'react-draggable';


function Windows() {
    return (
        <>
        <Draggable>
            <div className="window-container">
                <div className="box-header">
                        
                </div>
                <div className="small-container">
                    <h1>{'<Near />'}</h1>
                    <p>an illustrator, animator, and developer</p>
                </div>                     
            </div>
        </Draggable>
        </>
    );
}

export default Windows;