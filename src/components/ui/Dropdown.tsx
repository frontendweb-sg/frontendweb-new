"use client";
import Button from "./Button";
import classNames from "classnames";
import { useToggle } from "@/hooks/useToggle";
import { ReactNode, forwardRef, useRef } from "react";
import { Align } from "@/types";
import { BsThreeDots } from "react-icons/bs";
import { createContext } from "vm";
import { useClickOutside } from "@/hooks/useClickOutside";

export type DropdownProps = React.HtmlHTMLAttributes<
  HTMLDivElement | HTMLLIElement
> & {
  renderProps?: ReactNode;
  align?: Align;
};
export type dropdownRef = HTMLDivElement;
const Dropdown = forwardRef<dropdownRef, DropdownProps>(
  ({ renderProps, children, className, ...rest }, ref) => {
    let elRef = useRef(null);
    const { isOpen, onClose, onToggle } = useToggle();
    const classes = classNames("dropdown", className);

    useClickOutside(elRef, onClose); // close dropdown

    let show = isOpen && "show";
    return (
      <div className={classes} ref={elRef} {...rest}>
        <Button
          className={classNames("dropdown-toggle", show)}
          onClick={onToggle}
        >
          {renderProps ?? <BsThreeDots />}
        </Button>

        <div className={classNames("dropdown-menu", show)}>
          {children}
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
);

type DropdownItemProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
  icon?: JSX.Element;
};
export const DropdownItem = ({
  icon,
  children,
  className,
  ...rest
}: DropdownItemProps) => {
  const classes = classNames("dropdown-item", className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
export default Dropdown;
