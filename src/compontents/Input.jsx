import React from "react";

export const Input = React.forwardRef(({children, ...rest},ref) => {
    return < input className="input" {...rest} ref ={ref}></input>
});