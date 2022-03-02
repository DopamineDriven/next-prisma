import cn from "classnames";
import React, { ReactNode, useState } from "react";
import css from "./collapse.module.css";
import { ChevronRight } from "@/components/Icons";
import { useSpring, a } from "@react-spring/web";
import useMeasure from "react-use-measure";

export type CollapseProps = {
  title: string;
  children: ReactNode;
};

const Collapse = React.memo(({ title, children }: CollapseProps) => {
  const [isActive, setActive] = useState(false);
  const [ref, { height: viewHeight }] = useMeasure();

  const animProps = useSpring({
    height: isActive ? viewHeight : 0,
    config: { tension: 250, friction: 32, clamp: true, duration: 150 },
    opacity: isActive ? 1 : 0
  });

  const toggle = () => setActive(x => !x);

  return (
    <div
      className={css.root}
      role='button'
      tabIndex={0}
      aria-expanded={isActive}
      onClick={toggle}>
      <div className={css.header}>
        <ChevronRight
          className={cn(css.icon, { [css.open]: isActive })}
          aria-hidden='true'
        />
        <span className={css.label}>{title}</span>
      </div>
      <a.div style={{ overflow: "hidden", ...animProps }}>
        <div ref={ref} className={css.content}>
          {children}
        </div>
      </a.div>
    </div>
  );
});

export default Collapse;
