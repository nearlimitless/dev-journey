import { useState } from 'react';
import Header from './Header.jsx';
import MyLinks from './MyLinks.jsx';
import Terminal from './Terminal.jsx';
import Chatbot from './Chatbot.jsx';



function MainPage() {
    const [activeModal, setActiveModal] = useState(null);
    const [showLinks, setShowLinks] = useState(false);
    const [showChatbot, setShowChatbot] = useState(false);
    return (
        <>
        <div className="page-container">
            <div className="box-container">
                <div className="box-header1">
                        <h4>C:\User\Terminal</h4>
                </div>
                <div className="small-container">
                    <h1>{'<Near />'}</h1>
                    <p>an illustrator, animator, and developer</p>
                </div>  
                <div>
                    <Terminal 
                        setShowLinks={setShowLinks} 
                        setShowChatbot={setShowChatbot} 
                        setActiveModal={setActiveModal}
                    />
                    
                    {/* Only render when true */}
                    <div className="button-container">
                        {showLinks && (
                            <MyLinks 
                                
                                activeModal={activeModal}
                                setActiveModal={setActiveModal}
                            />
                        )}
                        <div className="chatbot-container">
                            
                        </div>
                    </div>
                </div>  
            </div>
            <div className="chatbot-container">
                {showChatbot && <Chatbot />}                 
            </div>

        </div>
        </>
    );
}

export default MainPage;