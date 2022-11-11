import React from "react";
import '../styles/ClearButton.css';

const ClearButton = (props) => (
    <div className= 'button-clear' onClick={props.manageClear}>
        {props.children}
    </div>
);
export default ClearButton;