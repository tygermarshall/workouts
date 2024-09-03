import React from "react";
import { Button } from "react-bootstrap";

interface Props {
  set: {
    isAmrap: boolean;
    repCount: number;
    weight: number;
    notes: string;
  };
}

const Set = ({ set, ...props }: Props) => {
  return (
    <>
      <Button variant="light" onClick={() => console.log("clicked")}>
        {set.isAmrap ? set.repCount + "+" : set.repCount}
      </Button>
    </>
  );
};

export default Set;
