import { Size } from "@/types";
import classNames from "classnames";
import Image, { ImageProps } from "next/image";
import React, { forwardRef } from "react";

export type AvatarProps = ImageProps &
  React.ImgHTMLAttributes<HTMLImageElement> & {
    src?: string;
    alt?: string;
    size?: Size;
    border?: boolean;
  };
export type avatarRef = HTMLImageElement;
const Avatar = forwardRef<avatarRef, AvatarProps>(
  (
    {
      size = "sm",
      src = "/avatar.png",
      alt = "avatar",
      border = false,
      ...rest
    },
    ref
  ) => {
    const classes = classNames(
      "avatar rounded-circle overflow-hidden",
      size && "avatar-" + size,
      border && "border"
    );
    return (
      <div className={classes}>
        <div className="child">
          <Image src={src!} alt={alt!} {...rest} ref={ref} fill />
        </div>
      </div>
    );
  }
);
export default Avatar;
