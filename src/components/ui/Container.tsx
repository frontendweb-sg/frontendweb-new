import classNames from "classnames";
import PropTypes from "prop-types";
import React, { forwardRef } from "react";

export type containerRef = HTMLDivElement;
export type ContainerProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  isFull?: boolean;
  cover?: boolean;
};

const Container = forwardRef<containerRef, ContainerProps>(
  ({ isFull = false, className, children, cover = false, ...rest }, ref) => {
    const classes = classNames(
      isFull ? "container-fluid" : "container",
      { "h-100": cover },
      className
    );

    return (
      <div className={classes} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Container.propTypes = {
  isFull: PropTypes.bool,
};

export default Container;
