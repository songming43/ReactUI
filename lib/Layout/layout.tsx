import React, { ReactElement } from "react";
import { scopedClassMaker } from "../utils/classes";
import classes from "../helpers/classes";
import "./layout.scss";
const scopedClass = scopedClassMaker("yui-layout");

// 1. 可能还有 id 等等 html属性
// interface LayoutProps {
//   style: CSSProperties;
//   className: string;
// }

// 对1的优化: 继承 html 属性
interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[];
}

const Layout: React.FunctionComponent<LayoutProps> = props => {
  const { className, ...restProps } = props;

  let hasAside = false;
  if ((props.children as ReactElement[]).length) {
    (props.children as ReactElement[]).map(node => {
      if (node.type.name === "Sidebar") {
        hasAside = true;
      }
    });
  }

  return hasAside ? (
    <div
      className={classes(scopedClass(), className, "yui-layout-hasAside")}
      {...restProps}
    >
      {props.children}
    </div>
  ) : (
    <div className={classes(scopedClass(), className)} {...restProps}>
      {props.children}
    </div>
  );
};

export default Layout;