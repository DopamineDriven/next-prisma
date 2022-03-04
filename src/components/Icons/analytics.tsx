import { SVGAttribs } from "@/types/mapped";

const Analytics = ({
  ...props
}: SVGAttribs<"className" | "aria-hidden" | "fill" | "stroke">) => {
  return (
    <svg
      {...props}
      className={props.className ? props.className : "h-6 w-6"}
      xmlns='http://www.w3.org/2000/svg'
      fill={props.fill ? props.fill : "none"}
      viewBox='0 0 24 24'
      stroke={props.stroke ? props.stroke : "currentColor"}>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
      />
    </svg>
  );
};

export default Analytics;
