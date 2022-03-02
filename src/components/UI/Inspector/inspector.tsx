import { FC } from "react";
import cn from "classnames";
const DataInspector: FC<{ className?: string }> = ({
  children,
  className
}) => {
  return (
    <div
      lang='json'
      className={cn(
        `font-interVar container max-w-6xl justify-center mx-auto fit min-h-48 break-normal flex-wrap`,
        className ?? ""
      )}>
      <pre className='container flex-col mx-auto text-[0.75rem] flex-grow text-left bg-[#151515] leading-[1.29rem] min-w-full text-yellow-400 break-normal w-4xl w-fit-4xl overflow-x-clip '>
        {children}
      </pre>
    </div>
  );
};

export default DataInspector;
