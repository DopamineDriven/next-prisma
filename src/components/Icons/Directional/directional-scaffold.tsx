import type { SVGAttribs } from "@/types/mapped";

const ArrowLeft = ({
  ...props
}: SVGAttribs<"className" | "aria-hidden">) => {
  return (
    <svg
      {...props}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'>
      <path
        d='M19 12H5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 19L5 12L12 5'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

const ArrowRight = ({
  ...props
}: SVGAttribs<"className" | "aria-hidden">) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M5 12H19'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 5L19 12L12 19'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

const Arrow = ({ ...props }: SVGAttribs<"className" | "aria-hidden">) => {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z'
        fill='rgba(243, 244, 246, 1)'
      />
      <path
        d='M11 7.40976V14.9998C11 15.265 10.8947 15.5193 10.7071 15.7069C10.5196 15.8944 10.2652 15.9998 10 15.9998C9.73479 15.9998 9.48044 15.8944 9.2929 15.7069C9.10537 15.5193 9.00001 15.265 9.00001 14.9998V7.40976L6.70001 9.70976C6.60961 9.81376 6.49869 9.89794 6.37421 9.95704C6.24973 10.0161 6.11439 10.0489 5.97666 10.0532C5.83893 10.0575 5.7018 10.0333 5.57386 9.98214C5.44593 9.93096 5.32995 9.85389 5.23321 9.75576C5.13647 9.65764 5.06105 9.54058 5.01168 9.41193C4.96232 9.28329 4.94008 9.14582 4.94635 9.00817C4.95262 8.87052 4.98727 8.73565 5.04813 8.61202C5.10899 8.4884 5.19475 8.37868 5.30001 8.28976L9.30001 4.28976C9.48694 4.10654 9.73826 4.00391 10 4.00391C10.2618 4.00391 10.5131 4.10654 10.7 4.28976L14.7 8.28976C14.8653 8.47989 14.9527 8.72539 14.9448 8.97718C14.9369 9.22898 14.8343 9.46852 14.6574 9.64791C14.4805 9.8273 14.2425 9.93333 13.9908 9.9448C13.7392 9.95627 13.4925 9.87233 13.3 9.70976L11 7.39976V7.40976Z'
        fill='#272729'
      />
    </svg>
  );
};

const ChevronDown = ({
  ...props
}: SVGAttribs<"className" | "aria-hidden">) => {
  return (
    <svg
      {...props}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      stroke='currentColor'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M19 9L12 16L5 9'
        stroke='current'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

const ChevronRight = ({
  ...props
}: SVGAttribs<"className" | "aria-hidden">) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={"20"}
      height={"20"}
      viewBox='0 0 20 20'
      fill='currentColor'
      {...props}>
      <path
        fillRule='evenodd'
        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
        clipRule='evenodd'
      />
    </svg>
  );
};

const DownArrow = ({
  ...props
}: SVGAttribs<"className" | "aria-hidden">) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}>
      <line x1='12' y1='5' x2='12' y2='19'></line>
      <polyline points='19 12 12 19 5 12'></polyline>
    </svg>
  );
};

const NavArrow = ({
  ...props
}: SVGAttribs<"className" | "aria-hidden">) => {
  return (
    <svg
      className={`ml-2 h-5 w-5 text-primary-9 group-hover:text-primary-8 flex mx-auto ${props.className}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      shapeRendering='geometricPrecision'
      {...props}>
      <path
        fillRule='evenodd'
        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
        clipRule='evenodd'
      />
    </svg>
  );
};

const UpArrow = ({
  ...props
}: SVGAttribs<"className" | "aria-hidden">) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}>
      <line x1='12' y1='19' x2='12' y2='5'></line>
      <polyline points='5 12 12 5 19 12'></polyline>
    </svg>
  );
};

export default {
  Arrow,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  DownArrow,
  NavArrow,
  UpArrow
} as {
  ArrowLeft: ({
    ...props
  }: SVGAttribs<"className" | "aria-hidden">) => JSX.Element;
  ArrowRight: ({
    ...props
  }: SVGAttribs<"className" | "aria-hidden">) => JSX.Element;
  Arrow: ({
    ...props
  }: SVGAttribs<"className" | "aria-hidden">) => JSX.Element;
  ChevronDown: ({
    ...props
  }: SVGAttribs<"className" | "aria-hidden">) => JSX.Element;
  ChevronRight: ({
    ...props
  }: SVGAttribs<"className" | "aria-hidden">) => JSX.Element;
  DownArrow: ({
    ...props
  }: SVGAttribs<"className" | "aria-hidden">) => JSX.Element;
  NavArrow: ({
    ...props
  }: SVGAttribs<"className" | "aria-hidden">) => JSX.Element;
  UpArrow: ({
    ...props
  }: SVGAttribs<"className" | "aria-hidden">) => JSX.Element;
};




/**
 *
 * const DirectionalScaffold = {
  ArrowLeft: ({ ...props }: SVGAttribs<"className" | "aria-hidden">) => {
    return (
      <svg
        {...props}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'>
        <path
          d='M19 12H5'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 19L5 12L12 5'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  },
  ArrowRight: ({ ...props }: SVGAttribs<"className" | "aria-hidden">) => {
    return (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path
          d='M5 12H19'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 5L19 12L12 19'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  },
  Arrow: ({ ...props }: SVGAttribs<"className" | "aria-hidden">) => {
    return (
      <svg
        width='30'
        height='30'
        viewBox='0 0 20 20'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        {...props}>
        <path
          d='M19.5 10C19.5 15.2467 15.2467 19.5 10 19.5C4.75329 19.5 0.5 15.2467 0.5 10C0.5 4.75329 4.75329 0.5 10 0.5C15.2467 0.5 19.5 4.75329 19.5 10Z'
          fill='rgba(243, 244, 246, 1)'
        />
        <path
          d='M11 7.40976V14.9998C11 15.265 10.8947 15.5193 10.7071 15.7069C10.5196 15.8944 10.2652 15.9998 10 15.9998C9.73479 15.9998 9.48044 15.8944 9.2929 15.7069C9.10537 15.5193 9.00001 15.265 9.00001 14.9998V7.40976L6.70001 9.70976C6.60961 9.81376 6.49869 9.89794 6.37421 9.95704C6.24973 10.0161 6.11439 10.0489 5.97666 10.0532C5.83893 10.0575 5.7018 10.0333 5.57386 9.98214C5.44593 9.93096 5.32995 9.85389 5.23321 9.75576C5.13647 9.65764 5.06105 9.54058 5.01168 9.41193C4.96232 9.28329 4.94008 9.14582 4.94635 9.00817C4.95262 8.87052 4.98727 8.73565 5.04813 8.61202C5.10899 8.4884 5.19475 8.37868 5.30001 8.28976L9.30001 4.28976C9.48694 4.10654 9.73826 4.00391 10 4.00391C10.2618 4.00391 10.5131 4.10654 10.7 4.28976L14.7 8.28976C14.8653 8.47989 14.9527 8.72539 14.9448 8.97718C14.9369 9.22898 14.8343 9.46852 14.6574 9.64791C14.4805 9.8273 14.2425 9.93333 13.9908 9.9448C13.7392 9.95627 13.4925 9.87233 13.3 9.70976L11 7.39976V7.40976Z'
          fill='#272729'
        />
      </svg>
    );
  },
  ChevronDown: ({ ...props }: SVGAttribs<"className" | "aria-hidden">) => {
    return (
      <svg
        {...props}
        width='24'
        height='24'
        viewBox='0 0 24 24'
        stroke='currentColor'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M19 9L12 16L5 9'
          stroke='current'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  },
  ChevronRight: ({
    ...props
  }: SVGAttribs<"className" | "aria-hidden">) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={"20"}
        height={"20"}
        viewBox='0 0 20 20'
        fill='currentColor'
        {...props}>
        <path
          fillRule='evenodd'
          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
          clipRule='evenodd'
        />
      </svg>
    );
  },
  DownArrow: ({ ...props }: SVGAttribs<"className" | "aria-hidden">) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}>
        <line x1='12' y1='5' x2='12' y2='19'></line>
        <polyline points='19 12 12 19 5 12'></polyline>
      </svg>
    );
  },
  NavArrow: ({ ...props }: SVGAttribs<"className" | "aria-hidden">) => {
    return (
      <svg
        className={`ml-2 h-5 w-5 text-primary-9 group-hover:text-primary-8 flex mx-auto ${props.className}`}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 20 20'
        fill='currentColor'
        shapeRendering='geometricPrecision'
        {...props}>
        <path
          fillRule='evenodd'
          d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
          clipRule='evenodd'
        />
      </svg>
    );
  },
  UpArrow: ({ ...props }: SVGAttribs<"className" | "aria-hidden">) => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}>
        <line x1='12' y1='19' x2='12' y2='5'></line>
        <polyline points='5 12 12 5 19 12'></polyline>
      </svg>
    );
  }
};

 */
