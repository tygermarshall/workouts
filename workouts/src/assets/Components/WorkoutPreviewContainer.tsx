import { useEffect, useState } from "react";
import WorkoutPreview from "./WorkoutPreview";

const WorkoutPreviewContainer = () => {
  const [workouts, setWorkouts] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:3000/workouts/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setWorkouts(data.message);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log("workouts", workouts);
  console.log("hi");

  return (
    workouts &&
    workouts.days.map((day, index) => (
      <WorkoutPreview
        key={day.id}
        day={day}
        first={index === 0 ? true : false}
      />
    ))
  );
};

export default WorkoutPreviewContainer;
