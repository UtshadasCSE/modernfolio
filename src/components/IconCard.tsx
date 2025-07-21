import React from "react";
import { Button } from "./ui/button";
import { TechStack } from "@/lib/data/techstack.data";

const IconCard = () => {
  return (
    <div>
      <div
        className="grid lg:grid-cols-3 grid-cols-3 max-sm:grid-cols-2 gap-2 pb-3"
        suppressHydrationWarning
      >
        {TechStack.map((item) => (
          <Button
            variant={"outline"}
            key={item.name}
            className="rounded-sm cursor-pointer"
            suppressHydrationWarning
          >
            {React.createElement(item.icon)}
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default IconCard;
