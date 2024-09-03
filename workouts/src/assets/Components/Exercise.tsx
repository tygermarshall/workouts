//react component to display an exersise
import React from "react";
import Set from "./Set";

interface Props {
  name: string;
  sets: {
    isAmrap: boolean;
    repCount: number;
    weight: number;
    notes: string;
  }[];
}

const Exercise = (props: Props) => {
  //return the exercise name and the sets
  return (
    <div>
      <h2>{props.name}</h2>
      <ul>
        {props.sets.map((set, index) => (
          <Set key={index} set={set} />
        ))}
      </ul>
    </div>
  );
};

export default Exercise;
