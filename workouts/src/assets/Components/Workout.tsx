import React from "react";
import Exercise from "./Exercise";
import { Excersise } from "../Types/WorkoutTypes";
import Day from "./Day";

const workoutData = {
  workout: {
    name: "Test Workout",
    days: [
      {
        name: "Day 1",
        excerises: [
          {
            name: "Squat",
            sets: [
              //contains isAmarap, repCount, weight, and notes
              {
                isAmrap: false,
                repCount: 5,
                weight: 100,
                notes: "This is a note",
              },
              {
                isAmrap: true,
                repCount: 5,
                weight: 100,
                notes: "This is a note",
              },
            ],
          },
          {
            name: "Bench Press",
            sets: [
              //contains isAmarap, repCount, weight, and notes
              {
                isAmrap: false,
                repCount: 5,
                weight: 100,
                notes: "This is a note",
              },
              {
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
        name: "Day 2",
        excerises: [
          {
            name: "Bench Press",
            sets: [
              //contains isAmarap, repCount, weight, and notes
              {
                isAmrap: false,
                repCount: 5,
                weight: 100,
                notes: "This is a note",
              },
              {
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
  },
};
const day1 = workoutData.workout.days[0];

const Workout = () => {
  return (
    <div>
      <h1>{workoutData.workout.name}</h1>
      <Day name={day1.name} excerises={day1.excerises} />
    </div>
  );
};

export default Workout;
