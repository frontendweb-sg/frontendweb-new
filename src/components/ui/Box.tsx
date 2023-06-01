import classNames from "classnames";
import { Align, AppCommonProps } from "@/types";
import { forwardRef, memo } from "react";

export type boxRef = HTMLDivElement;
export type BoxProps = React.HTMLAttributes<HTMLDivElement> &
	AppCommonProps & {};

/**
 * Box component.
 */
const Box = forwardRef<boxRef, BoxProps>(
	({ children, className, ...rest }, ref) => {
		const classes = classNames(className);
		return (
			<div className={classes} ref={ref} {...rest}>
				{children}
			</div>
		);
	}
);

export default memo(Box);
