import { CodeProps } from "@/types/mapped";
import { FC, HTMLAttributes } from "react";

export interface CodePropsExtended extends FC<HTMLAttributes<HTMLElement>> {
  props: CodeProps<"lang" | "dangerouslySetInnerHTML" | "className">;
}

const CodeBlock: FC<CodePropsExtended> = ({ ...props }) => {
  return (
    <div className='overflow-auto'>
      <pre className={`language-${props?.props.lang} min-w-full py-6 my-0`}>
        <code
          className={`language-${props.props.lang} !text-white`}
          dangerouslySetInnerHTML={
            props.props.dangerouslySetInnerHTML?.__html
              ? { __html: props.props.dangerouslySetInnerHTML.__html }
              : { __html: "no dice" }
          }
        />
      </pre>
    </div>
  );
};

export default CodeBlock;

