import { SVGAttribs } from '@/types/mapped';

const X = ({
  ...props
}: SVGAttribs<
  'className' | 'width' | 'height' | 'onMouseOver' | 'aria-hidden'
>) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M6 6L18 18M6 18L18 6L6 18Z'
        stroke='rgb(29, 78, 216)'
        strokeWidth='2'
        className='ring-2 ring-blue-700'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default X;
