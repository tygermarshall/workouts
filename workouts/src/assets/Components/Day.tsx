import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Exercise from "./Exercise";
import { Excersise } from "../Types/WorkoutTypes";

interface Props {
  name: string;
  excerises: Excersise[];
}

const Day = ({ name, excerises, ...rest }: Props) => {
  return (
    <ListGroup>
      {excerises.map((exercise: Excersise, index) => {
        return (
          <ListGroup.Item key={index}>
            <Exercise name={exercise.name} sets={exercise.sets} />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Day;
