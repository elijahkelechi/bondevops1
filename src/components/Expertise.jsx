import React from "react";
import SectionTitle from "./SectionTitle";
import { expertise } from "../data";
import ExpertiseCard from "./ExpertiseCard";

const Expertise = () => {
  return (
    <div id="expertise">
      <SectionTitle />
      <div className="px-8 py-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {expertise.map((fields) => {
          return <ExpertiseCard key={fields.id} {...fields} />;
        })}
      </div>
    </div>
  );
};

export default Expertise;
