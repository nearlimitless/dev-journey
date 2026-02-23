import {useState} from 'react';


function Terminal () {

const [input, setInput] = useState("");

    return (
        <>
            <div className="terminal-container">
                <p>Terminal (in progress)</p>
                <input
                    type="text"
                    value={input}
                    onChange={e=>setInput(e.target.value)}
                    onKeyDown={e=> {
                        if (e.key === "Enter") {
                            window.alert('Test')
                        }
                    }}
                >
                
                </input>
            </div>
        </>
    );
}

export default Terminal;