import {useState} from 'react';


function Terminal ({ setShowLinks }) {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    return (
        <>
            <div className="terminal-container">
                <p>$type "help" for the list of commands.</p>
                <div className="outputContainer">
                    {output}
                </div>
                <input
                    type="text"
                    value={input}
                    onChange={e=>setInput(e.target.value)}
                    onKeyDown={e=> {
                        if (e.key === "Enter") {
                        let newOutput = "";
                        newOutput = output + "\n" + "$ " + input + "\n";
                        switch(input) {
                            case "help":
                                newOutput += "Welcome, and thank you for visiting my Personal Portfolio Website\n"+ 
                                "Here's some set of commands that you can use in the terminal\n" + 
                                "  - show-buttons \n" + 
                                "  - hide-buttons \n";
                                break;

                            case "pwd":
                                newOutput += "";
                                break;

                            case "show-buttons":
                                setShowLinks(true);
                                newOutput += "Buttons revealed.";
                                break;

                            default:
                                newOutput += "unknown command.";
                        }

                        setOutput(newOutput)
                        setInput("")
                        }
                    }}
                >
                </input>
            </div>
        </>
    );
}

export default Terminal;