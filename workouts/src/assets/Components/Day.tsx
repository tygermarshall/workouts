import ListGroup from "react-bootstrap/ListGroup";
import Exercise from "./Exercise";
import {
  Exercise as ExcerciseType,
  Day as DayType,
} from "../Types/WorkoutTypes";

interface Props {
  day: DayType;
  handleRepChange: (
    repsSubmitted: number,
    excerciseId: number,
    setId: number
  ) => void;
}

const Day = ({ day, handleRepChange }: Props) => {
  return (
    <ListGroup>
      {day.exercises.map((exercise: ExcerciseType, index) => {
        return (
          <ListGroup.Item key={index}>
            <Exercise exercise={exercise} onRepChange={handleRepChange} />
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default Day;
