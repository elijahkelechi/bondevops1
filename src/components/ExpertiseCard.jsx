import React from "react";

const ExpertiseCard = ({ title, icon, text }) => {
  return (
    <div>
      <span>{icon}</span>
      <h2 className="text-slate-900 pt-3 pb-0 font-mono font-semibold text-2xl md:4xl">
        {title}
      </h2>
      <p className="text-slate-800 pt-2 pb-12">{text}</p>
    </div>
  );
};

export default ExpertiseCard;
