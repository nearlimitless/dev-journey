import Header from './Header.jsx';
import MyLinks from './MyLinks.jsx';
import Terminal from './Terminal.jsx';



function MainPage() {
    return (
        <>
            <div className="box-container">
                <div className="box-header1">
                        <h4>C:\User\Terminal</h4>
                </div>
                <div className="small-container">
                    <h1>{'<Near />'}</h1>
                    <p>an illustrator, animator, and developer</p>
                </div>  
                <div>
                    <Terminal />
                    <MyLinks />
                </div>
                    
            </div>
        </>
    );
}

export default MainPage;