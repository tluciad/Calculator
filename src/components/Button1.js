import React from "react";
import '../styles/Button1.css'

function Button1(props){

    const isOperator = value => {
        return isNaN(value) && (value !== '.') && (value !== '=');
    };

    return (
        <div
            className={`Containeer-Button1 ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()}
            onClick={() => props.manageClick(props.children)}>
            {props.children}
        </div>
    );

}
export default Button1;