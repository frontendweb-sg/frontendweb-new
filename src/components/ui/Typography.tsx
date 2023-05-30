import { forwardRef, createElement } from "react";
import { Align, Color, TextVariant } from "@/types";
import classNames from "classnames";
export type TypeProps = React.HtmlHTMLAttributes<
  HTMLHeadingElement | HTMLSpanElement | HTMLParagraphElement
> & {
  component?: string;
  variant?: TextVariant;
  paragraph?: boolean;
  color?: Color;
  align?: Align;
};

export type typeRef =
  | HTMLHeadingElement
  | HTMLSpanElement
  | HTMLParagraphElement;

const variantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p",
};

const Typography = forwardRef<typeRef, TypeProps>(
  (
    {
      children,
      paragraph = false,
      component,
      variant = "h6",
      color,
      className,
      ...rest
    },
    ref
  ) => {
    const classes = classNames(
      {
        ["text-" + color]: !!color,
      },
      className
    );
    const Component =
      component ||
      (paragraph
        ? "p"
        : variantMapping[variant as keyof typeof variantMapping]) ||
      "span";

    return createElement(
      Component,
      { className: classes, ref: ref, ...rest },
      children
    );
  }
);
export default Typography;
