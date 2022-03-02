import { format, formatDistanceToNow } from "date-fns";

export type ThreadTimeProps = {
  time: Date | number;
  precedingDescription?: string;
};

const ThreadTime = ({ time, precedingDescription }: ThreadTimeProps) => {
  return (
    <p className='text-sm text-gray-800 flex select-none font-medium'>
      {`${precedingDescription}`}&nbsp;{" "}
      <time
        className='no-underline has-tooltip text-gray-800'
        dateTime={
          formatDistanceToNow(time, {
            // includeSeconds: true,
            addSuffix: true
          }) + " ago"
        }>
        {formatDistanceToNow(time)} {"ago"}
        <span className={"tooltip font-normal"}>
          {format(time, "LL/dd/yyyy") + " at " + format(time, "h:mm aaa")}{" "}
          {" (" + format(time, "O") + ")"}
        </span>
      </time>
    </p>
  );
};

export default ThreadTime;
