import { useState } from "react";
import { Workout as WorkoutType } from "../Types/WorkoutTypes";
import Day from "./Day";

const workoutData: WorkoutType = {
  name: "Test Workout",
  days: [
    {
      id: 1,
      name: "Day 1",
      exercises: [
        {
          id: 1,
          name: "Squat",
          sets: [
            //contains isAmarap, repCount, weight, and notes
            {
              id: 1,
              isAmrap: false,
              repCount: 5,
              weight: 100,
              notes: "This is a note",
            },
            {
              id: 2,
              isAmrap: true,
              repCount: 5,
              weight: 100,
              notes: "This is a note",
            },
          ],
        },
        {
          id: 2,
          name: "Bench Press",
          sets: [
            //contains isAmarap, repCount, weight, and notes
            {
              id: 3,
              isAmrap: false,
              repCount: 5,
              weight: 100,
              notes: "This is a note",
            },
            {
              id: 4,
              isAmrap: true,
              repCount: 5,
              weight: 100,
              notes: "This is a note",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Day 2",
      exercises: [
        {
          id: 3,
          name: "Bench Press",
          sets: [
            //contains isAmarap, repCount, weight, and notes
            {
              id: 5,
              isAmrap: false,
              repCount: 5,
              weight: 100,
              notes: "This is a note",
            },
            {
              id: 6,
              isAmrap: true,
              repCount: 5,
              weight: 100,
              notes: "This is a note",
            },
          ],
        },
      ],
    },
  ],
};

const Workout = () => {
  const [day1, setDay1] = useState(workoutData.days[0]);
  const handleSubmit = (
    repsSubmitted: number,
    excerciseId: number,
    setId: number
  ) => {
    const updatedExercises = day1.exercises.map((exercise) => {
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
    setDay1({ ...day1, exercises: updatedExercises });
  };
  console.log("day1 is " + JSON.stringify(day1));
  return (
    <div>
      <h1>{workoutData.name}</h1>
      <Day day={day1} handleRepChange={handleSubmit} />
    </div>
  );
};

export default Workout;
