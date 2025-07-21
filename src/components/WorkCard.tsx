import React from "react";
import { Card, CardAction, CardDescription, CardTitle } from "./ui/card";
import { FaCalendarAlt } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { CgWorkAlt } from "react-icons/cg";
import { worksData } from "@/lib/data/work.data";

const WorkCard = () => {
  return (
    <div id="work" className=" mb-3">
      {worksData.map((work) => (
        <Card key={work.company} className="p-4 mb-4">
          <div className="flex items-center justify-between">
            <CardTitle>{work.company}</CardTitle>
            <CardAction className="text-[12px] flex items-center gap-1 border-[1px] p-2 rounded-md">
              <FaCalendarAlt />
              {work.fromDate} - {work.toDate}
            </CardAction>
          </div>
          <div>
            <h3 className="flex items-center gap-1">
              <CgWorkAlt />
              <span className="text-sm text-muted-foreground">{work.role}</span>
            </h3>
          </div>
          <CardDescription>{work.deliverable}</CardDescription>
          <div>
            <span className="flex items-center gap-2">
              <TbCertificate />
              <small>
                {work.achivementTitle} - {work.achivementDate}
              </small>
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default WorkCard;
