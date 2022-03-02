import cn from "classnames";
import React, { FC } from "react";

interface Props {
  className?: string;
  children?: any;
  el?: any;
  clean?: boolean;
}

const Container: FC<Props> = ({ children, className, el = "div", clean }) => {
  const rootClassName = cn(className, {
    "mx-auto max-w-10xl": !clean
  });

  const Component: React.ComponentType<React.HTMLAttributes<HTMLDivElement>> =
    el as any;

  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
