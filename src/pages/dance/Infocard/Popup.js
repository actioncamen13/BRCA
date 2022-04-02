import React from "react";
import "./Popup.css";

const Popup = (props1) => {
  return (
    <div className="popup-box">
      <div
        className="box"
        style={{
          width: "auto",
          height: "auto",
          background: "#fff",
          borderRadius: "4px",
          padding: "20px",
          border: "1px solid #999",
          overflow: "auto",
        }}
      >
        <div className="close-icon" onClick={props1.handleClose}>
          x
        </div>
        {props1.content}
      </div>
    </div>
  );
};

export default Popup;
