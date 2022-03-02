import { SVGAttribs } from '@/types/mapped';

export default function HorizontalWave({
  className,
  ...props
}: SVGAttribs<'className' | 'aria-hidden'>) {
  return (
    <svg
      {...(props ?? {})}
      height='80px'
      viewBox='0 0 1440 181'
      preserveAspectRatio='none'
      className={'c-PJLV c-PJLV-ifGHEql-css' + className ?? ''}>
      <path
        d='M0 96l60-10.7C120 75 240 53 360 74.7 480 96 600 160 720 176s240-16 360-42.7c120-26.3 240-48.3 300-58.6l60-10.7V0H0v96z'
        fill='#FFF'
        fillRule='nonzero'
        stroke='none'
        strokeWidth='1'
      />
    </svg>
  );
}
