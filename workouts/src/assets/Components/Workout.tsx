import { useState } from "react";
import Day from "./Day";
import { useParams } from "react-router-dom";
import workoutData from "../../constants";

const Workout = () => {
  const getCurrentDay = (id: number) => {
    const day = workoutData.days.find((day) => day.id === id);
    if (day === undefined) {
      throw new Error("Day not found");
    }
    return day;
  };
  const { id } = useParams();
  const [currentDay, setCurrentDay] = useState(
    id ? getCurrentDay(parseInt(id)) : null
  );

  const handleSubmit = (
    repsSubmitted: number,
    excerciseId: number,
    setId: number
  ) => {
    if (!currentDay) {
      return;
    }
    const updatedExercises = currentDay.exercises.map((exercise) => {
      if (exercise.id === excerciseId) {
        const updatedSets = exercise.sets.map((set) => {
          if (set.id === setId) {
            set.repsActual = repsSubmitted;
          }
          return set;
        });
        exercise.sets = updatedSets;
      }
      return exercise;
    });
    setCurrentDay({ ...currentDay, exercises: updatedExercises });
  };

  if (!currentDay) {
    return <h1>Day not found</h1>;
  }
  return (
    <div>
      <h1>{currentDay.name}</h1>
      <Day day={currentDay} handleRepChange={handleSubmit} />
    </div>
  );
};

export default Workout;
