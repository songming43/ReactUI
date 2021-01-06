import React, { HTMLAttributes } from "react";
import { addPrefixAndscopedClassMarker } from "../utils/classes";
import "./scroll.scss";

const prefix = addPrefixAndscopedClassMarker("yui-scroll");

interface ScrollProps extends HTMLAttributes<HTMLDivElement> {}

const Scroll: React.FC<ScrollProps> = props => {
  const { children, ...restProps } = props;
  return (
    <div className={prefix("")} {...restProps}>
      <div className={prefix("inner")}>{children}</div>
    </div>
  );
};

export default Scroll;