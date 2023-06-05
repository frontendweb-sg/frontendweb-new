/**
 * Circle loader component
 * @returns
 */

import { Size } from "@/types";
import classNames from "classnames";

type CircleLoaderProps = React.HtmlHTMLAttributes<HTMLDivElement> & {
	size?: Size;
};
const CircleLoader = ({ size, children, ...rest }: CircleLoaderProps) => {
	const classes = classNames("circle-loader", size && "circle-loader-" + size);
	return (
		<>
			<div className={classes} {...rest}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			{children}
		</>
	);
};

export default CircleLoader;
