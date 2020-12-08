import React from "react";
import cn from "classnames";

const Button = (props) => {
    return (
        <button className={cn("button", props.className)}>
            {props.children}
        </button>
    );
};

export default Button;
