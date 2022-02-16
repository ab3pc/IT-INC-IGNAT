import React, { useState } from "react";
import Affairs from "./Affairs";

// types
export type AffairPriorityType = "high" | "low" | "middle"; // need to fix any
export type AffairItemType = {
  _id: number;
  name: string;
  priority: AffairPriorityType;
};
export type AffairType = AffairItemType[];

export type FilterType = "all" | AffairPriorityType;

// constants
export const defaultAffairs: AffairType = [
  // need to fix any
  { _id: 1, name: "React", priority: "high" },
  { _id: 2, name: "anime", priority: "low" },
  { _id: 3, name: "games", priority: "low" },
  { _id: 4, name: "work", priority: "high" },
  { _id: 5, name: "html & css", priority: "middle" },
];

// pure helper functions
export const filterAffairs = (affairs: AffairType,filter: FilterType): AffairType => {
  if (filter === "all") return affairs;
  else return affairs.filter((w) => w.priority === filter);
};

export const deleteAffair = (affairs: AffairType, _id: number): AffairType => {
  return affairs.filter((w) => w._id !== _id);
};

function HW2() {
  const [affairs, setAffairs] = useState<AffairType>(defaultAffairs);
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredAffairs = filterAffairs(affairs, filter);

  const deleteAffairCallback = (_id: number) =>
    setAffairs(deleteAffair(affairs, _id));

  return (
    <div style={{minHeight:'300px'}}>
      <hr />
      <h3>Homeworks 2</h3>
      {/*should work (должно работать)*/}
      <Affairs
        data={filteredAffairs}
        setFilter={setFilter}
        deleteAffairCallback={deleteAffairCallback}
        filters={filter}
      />
  
    
    </div>
  );
}

export default HW2;
