import React, { forwardRef, memo } from "react";

export interface formProps extends React.FormHTMLAttributes<HTMLFormElement> {}
export type formRef = HTMLFormElement;
const Form = forwardRef<formRef, formProps>(({ children, ...rest }, ref) => {
  return (
    <form ref={ref} noValidate {...rest}>
      {children}
    </form>
  );
});
export default memo(Form);
