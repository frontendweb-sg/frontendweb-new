import { forwardRef } from "react";
import Box from "./Box";
import classNames from "classnames";
import { Color, Size } from "@/types";

export type AlertProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	color?: Color;
	size?: Size;
	onClose?: () => void;
};
export type alertRef = HTMLDivElement;
const Alert = forwardRef<alertRef, AlertProps>(
	({ children, color = "success", size = "sm", onClose, ...rest }, ref) => {
		const classes = classNames("alert p-2", {
			["alert-" + color]: color,
			["alert-" + size]: size,
		});

		return (
			<Box role="alert" className={classes} ref={ref}>
				{children}
				{onClose && (
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close"
					/>
				)}
			</Box>
		);
	}
);

export default Alert;
