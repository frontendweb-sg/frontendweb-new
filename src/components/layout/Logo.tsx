import { lato } from "@/lib/font";
import classNames from "classnames";
import Link, { LinkProps } from "next/link";
import LogoIcon from "../svg/LogoIcon";

export type LogoColor = "light" | "dark";
export type LogoProps = LinkProps &
  React.LinkHTMLAttributes<HTMLAnchorElement> & {
    color?: LogoColor;
  };

/**
 * Logo
 * @param param0
 * @returns
 */
const Logo = ({
  href = "/",
  color,
  children,
  className,
  ...rest
}: LogoProps) => {
  let colorName = "#1F1F40";

  if (color === "light") {
    colorName = "#fff";
  }

  const classes = classNames(
    "navbar-brand",
    color === "light" && "text-white",
    lato.className,
    className
  );

  let element = (
    <div className="d-flex align-items-center">
      <LogoIcon className="fw-brand-icon" fill={colorName} />
      <div className="fw-brand-name ms-2 position-relative">
        <div>
          frontend<span className="text-secondary">web</span>
          <div className="fw-brand-tagline">
            coding is fun<span className="text-secondary">...</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Link href={href} passHref legacyBehavior {...rest}>
        <a className={classes}>{children ? children : element}</a>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    </>
  );
};

export default Logo;
