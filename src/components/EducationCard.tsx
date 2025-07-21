import React from "react";
import { Card, CardAction, CardDescription, CardTitle } from "./ui/card";
import { FaCalendarAlt } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";
import { educationData } from "@/lib/data/education.data";

const EducationCard = () => {
  return (
    <div id="#work">
      {educationData.map((edu) => (
        <Card key={edu.institution} className="p-3 mb-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-4">
              <CardTitle>{edu.institution}</CardTitle>
              <small className="flex items-center gap-2">
                <TbCertificate />
                <span>{edu.degree}</span>
              </small>
            </div>
            <CardAction className="text-[12px] flex items-center gap-1 border-[1px] p-2 rounded-md">
              <FaCalendarAlt />
              {edu.fromDate} - {edu.toDate}
            </CardAction>
          </div>
          <CardDescription>{edu.description}</CardDescription>
        </Card>
      ))}
    </div>
  );
};

export default EducationCard;
