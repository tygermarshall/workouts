import { Workout as WorkoutType } from "./assets/Types/WorkoutTypes";
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
              repCount: 10,
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

export default workoutData;
