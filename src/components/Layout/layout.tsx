import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { ReactNode, FC } from "react";
import GlobalNav from "./Nav/nav";

export interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { data, status } = useSession();
  return (
    <div>
      <GlobalNav data={data} status={status} />
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
