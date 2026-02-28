import {useState} from 'react';


function Terminal ({ setActiveModal, setShowLinks, setShowChatbot }) {
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
                                "  - show buttons \n" + 
                                "  - hide buttons \n" +
                                "  - show chatbot \n " +
                                "  - hide chatbot \n ";
                                break;

                            case "hide buttons":
                                setShowLinks(false)
                                newOutput += "Buttons hidden.";
                                break;

                            case "show buttons":
                                setShowLinks(true);
                                newOutput += "Buttons revealed.";
                                break;

                            case "show chatbot":
                                setShowChatbot(true);
                                newOutput += "Chatbot revealed."
                                break;

                            case "hide chatbot":
                                setShowChatbot(false);
                                newOutput += "Chatbot hidden."
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