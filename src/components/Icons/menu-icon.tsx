import { SVGAttribs } from '@/types/mapped';

const MenuIcon = ({
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
        d='M4 18H20M4 6H20H4ZM4 12H20H4Z'
        stroke='rgb(29, 78, 216)'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default MenuIcon;
