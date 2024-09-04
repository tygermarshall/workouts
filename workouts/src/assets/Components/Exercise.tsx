//react component to display an exersise
import Set from "./Set";
import { Exercise as ExcerciseType } from "../Types/WorkoutTypes";

interface Props {
  exercise: ExcerciseType;
  onRepChange: (
    repsSubmitted: number,
    exerciseId: number,
    repId: number
  ) => void;
}

const Exercise = ({ onRepChange, exercise }: Props) => {
  const handleRepChange = (repsSubmitted: number, setId: number) => {
    onRepChange(repsSubmitted, exercise.id, setId);
  };
  return (
    <div>
      <h2>{exercise.name}</h2>
      <ul>
        {exercise.sets.map((set, index) => (
          <Set key={index} set={set} handleRepChange={handleRepChange} />
        ))}
      </ul>
    </div>
  );
};

export default Exercise;
