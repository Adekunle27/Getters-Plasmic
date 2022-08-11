// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Logo3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Logo3Icon(props: Logo3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 35 67"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M26.412 2H9.647L7.682 18.177l15.2 46.764H32L26.412 2z"}
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M2 64.941l5.682-46.764m0 0L9.647 2h16.765L32 64.941h-9.118l-15.2-46.764z"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
      ></path>
    </svg>
  );
}

export default Logo3Icon;
/* prettier-ignore-end */
