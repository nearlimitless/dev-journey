import { useRef } from "react";
import Draggable from "react-draggable";

function ContactWindow() {
  const nodeRef = useRef(null);

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className="window-container">
        <div className="box-header">
          <h4>C:\User\contacts</h4>
        </div>

        <div className="modal-body2">
          <div className="quote-box">
            <p>. . . a work in progress</p>
          </div>

          <div>

          </div>
        </div>
      </div>
    </Draggable>
  );
}

export default ContactWindow;
