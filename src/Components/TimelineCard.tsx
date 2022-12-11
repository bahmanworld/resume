import * as React from "react";

interface Props {
    children?: React.ReactNode
}

const TimelineCard: React.FC<Props> = (props) => {
  return (
    <div className="row">
      <svg viewBox="0 0 25 25">
        <circle cx="50%" cy="50%" r="10" className="dashed" />
      </svg>
      {props.children}
    </div>
  );
};

export default TimelineCard;
