import React from "react";

interface SubtitleProps {
  subTitle?: string;
}

const Subtitle = ({subTitle}: SubtitleProps) => {
  return (
    <div className="flexit">
      <h6 className="font-secondary">{subTitle}</h6>
    </div>
  );
};

export default Subtitle;
