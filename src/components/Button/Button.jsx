import React from 'react';
import './Button.scss'

const Button = ({children, ...props}) => {
    return (
        <button className={`button ${props.buttonColor.slice(6, -1)}`}
                style={{backgroundColor: props.buttonColor}}
                onClick={props.onClick}
        >
            {children}
        </button>
    );
};

export default Button;