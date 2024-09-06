import React, { useState } from "react";
import { Button } from "react-bootstrap";
import RepModal from "./RepModal";
import { Set as SetType } from "../Types/WorkoutTypes";

interface Props {
  set: SetType;
  handleRepChange: (repsSubmitted: number, id: number) => void;
}

const Set = ({ set, handleRepChange }: Props) => {
  const [complete, setComplete] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (repsSubmitted: number) => {
    handleClose();
    handleRepChange(repsSubmitted, set.id);
  };
  const repCountText = () => {
    if (set.isAmrap && set.repsActual) {
      return set.repsActual + "+";
    } else if (set.isAmrap && !set.repsActual) {
      return set.repCount + "+";
    } else if (!set.isAmrap && set.repsActual) {
      return set.repsActual;
    } else {
      return set.repCount;
    }
  };

  return (
    <>
      <Button
        className=".text-dark"
        variant={complete === true ? "primary" : "secondary"}
        onClick={() => {
          setComplete(!complete);
          if (!complete) {
            handleShow();
          }
        }}
      >
        <div>{repCountText()}</div>
      </Button>{" "}
      <RepModal
        handleclose={handleClose}
        show={show}
        initalCount={set.repCount}
        repsActual={set.repsActual}
        handleSubmit={handleSubmit}
        centered
      />
    </>
  );
};

export default Set;
