import MyButton from './MyButton.jsx';
import Header from './Header.jsx';

function AboutPage() {
    return (
        <>
            <div className="box-container">
                <div className="box-header">
                </div>
                    <div className="small-container">
                         <h1>Dev Journey</h1>
                            <p>This is a mini-project that I'm working on</p>
                            <h1>Near</h1>
                            <div className="hero">   
                            <MyButton />
                            <img src="https://camo.githubusercontent.com/082dba1ff28ac81317df97548153cab2c11e27130fd1688a95c05f137108f8cd/68747470733a2f2f616e6979756b692e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032332f30392f616e6979756b692d676f6a6f2d7361746f72752d6769662d32342e676966" className="avatar" />
                    </div>
                </div>
            </div> 
        </>
    );
}

export default AboutPage;