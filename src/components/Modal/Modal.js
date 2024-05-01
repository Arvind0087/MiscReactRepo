import React from "react";
import DisabledByDefaultOutlinedIcon from "@mui/icons-material/DisabledByDefaultOutlined";
import "./styles.css";

function Modal({ children, showModal, setShowModal, minWidth, minHeight }) {
  return (
    <div>
      {showModal && (
        <div className="modal-overlay">
          <div
            className="modal-content"
            style={{ minWidth: minWidth, minHeight: minHeight }}
          >
            <button
              className="close-button"
              onClick={() => setShowModal(false)}
            >
              <DisabledByDefaultOutlinedIcon />
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
