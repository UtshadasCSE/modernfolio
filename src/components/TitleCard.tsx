import React from "react";

// Define the props type
type TitleProps = {
  title: string;
};

const TitleCard = ({ title }: TitleProps) => {
  return (
    <div>
      <h4 className="font-black text-xl pb-3">{title}</h4>
    </div>
  );
};

export default TitleCard;
