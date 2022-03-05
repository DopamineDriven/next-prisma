import { SVGAttribs } from "@/types/mapped";

const GitlabIcon = ({
  ...props
}: SVGAttribs<"className" | "aria-hidden" | "width" | "height">) => {
  return (
    <svg
      {...props}
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      x='0px'
      y='0px'
      viewBox='0 0 122.88 113.2'
      // style={{ background: "new 0 0 122.88 113.2" }}
      xmlSpace='preserve'>
      <g>
        <path
          className='fill-[#EC672A]'
          d='M122.65,64.72l-6.89-21.15L102.15,1.61c-0.7-2.15-3.74-2.15-4.47,0L84.06,43.54H38.81L25.19,1.61 c-0.7-2.15-3.74-2.15-4.47,0L7.13,43.54L0.24,64.72c-0.62,1.92,0.05,4.04,1.7,5.24l59.5,43.23l59.5-43.23 C122.58,68.77,123.28,66.65,122.65,64.72L122.65,64.72z'
        />
        <polygon
          className='fill-[#DD3E2A]'
          points='61.45,113.17 61.45,113.17 84.08,43.54 38.82,43.54 61.45,113.17 61.45,113.17'
        />
        <polygon
          className='fill-[#EC672A]'
          points='61.43,113.17 38.81,43.54 7.13,43.54 61.43,113.17 61.43,113.17'
        />
        <path
          className='fill-[#F6A420]'
          d='M7.11,43.56L7.11,43.56L0.23,64.72c-0.62,1.92,0.05,4.04,1.7,5.24l59.5,43.23L7.11,43.56L7.11,43.56 L7.11,43.56z'
        />
        <path
          className='fill-[#DD3E2A]'
          d='M7.12,43.56h31.71L25.18,1.63c-0.7-2.15-3.74-2.15-4.47,0L7.12,43.56L7.12,43.56L7.12,43.56z'
        />
        <polygon
          className='fill-[#EC672A]'
          points='61.45,113.17 84.08,43.54 115.79,43.54 61.45,113.17 61.45,113.17'
        />
        <path
          className='fill-[#F6A420]'
          d='M115.76,43.56L115.76,43.56l6.89,21.15c0.62,1.92-0.05,4.04-1.7,5.24l-59.5,43.21L115.76,43.56L115.76,43.56 L115.76,43.56z'
        />
        <path
          className='fill-[#DD3E2A]'
          d='M115.78,43.56H84.07L97.69,1.63c0.7-2.15,3.74-2.15,4.47,0L115.78,43.56L115.78,43.56L115.78,43.56z'
        />
      </g>
    </svg>
  );
};

export default GitlabIcon;