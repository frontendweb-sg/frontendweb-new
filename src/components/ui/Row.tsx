import classNames from "classnames";
import React, { forwardRef } from "react";

export type rowRef = HTMLDivElement;
export type RowProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  cover?: boolean;
};

const Row = forwardRef<rowRef, RowProps>(
  ({ className, children, cover, ...rest }, ref) => {
    const classes = classNames("row", { "h-100": cover }, className);
    return (
      <div className={classes} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Row.propTypes = {};
export default Row;
