import MyButton from '../MyButton.jsx';
import Header from '../Header.jsx';
import MyLinks from '../MyLinks.jsx';
import Draggable from 'react-draggable';
import avatarimg from '../../assets/images/avatarimg.webp';


function AboutWindow() {
    return (
        <>
        <Draggable>
            <div className="window-container">
                <div className="box-header">
                        
                </div>
                <div>
                    <div className="avatar-card">
                        <img src={avatarimg} className="avatar"></img>
                            <div className="avatar-info">
                                <h1>{'<Aaron Bacani />'}</h1>
                                <p>an illustrator, animator, and developer</p>
                            </div>
                    </div>
                </div>         
                <div className="modal-body">
                    <h1>tesaaaaaaaaaaaaaaaaaaaaaaat</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>
                    <h1>test</h1>

                </div>            
            </div>
        </Draggable>
        </>
    );
}

export default AboutWindow;