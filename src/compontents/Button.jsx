import React from "react";

export const Button = React.forwardRef(({ children, ...rest }, ref) => {
  return (
    <button {...rest} ref={ref}>
      {children}
    </button>
  );
});
