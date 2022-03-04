import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { ReactNode, FC } from "react";
import GlobalNav from "./Nav/nav";

export interface Props {
  children: ReactNode;
  className?: string;
  viewerStatus?: "authenticated" | "loading" | "unauthenticated";
  viewerSesh?: Session | null;
}

const Layout: FC<Props> = ({
  children,
  viewerSesh,
  className,
  viewerStatus
}) => {
  const { data, status } = useSession();
  const statusSimilarity: WithImplicitCoercion<
    "authenticated" | "loading" | "unauthenticated" | undefined
  > =
    viewerStatus?.valueOf() !== undefined &&
    viewerStatus.valueOf() === status.valueOf()
      ? viewerStatus
      : status;
  const seshSimilarity =
    viewerSesh !== undefined && viewerSesh === data ? viewerSesh : data;
  return (
    <div className={className ? className : ""}>
      <GlobalNav data={seshSimilarity} status={statusSimilarity} />
      <div className=''>{children}</div>
      <style jsx global>{`
        html {
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          margin: 0;
          padding: 0;
          font-size: 16px;
          background: rgba(0, 0, 0, 0.05);
        }
        input,
        textarea {
          font-size: 16px;
        }
        button {
          cursor: pointer;
        }
      `}</style>
      <style jsx>{`
        .layout {
          padding: 0 2rem;
        }
      `}</style>
    </div>
  );
};

export default Layout;
