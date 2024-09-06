import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Root from "./routes/root.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";
import Workout from "./assets/Components/Workout.tsx";
import NavBar from "./assets/Components/NavBar.tsx";
import workoutData from "./constants.tsx";
import WorkoutPreviewContainer from "./assets/Components/WorkoutPreviewContainer.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/preview",
    element: <WorkoutPreviewContainer />,
  },
  {
    path: "/workout/:id",
    element: <Workout day={workoutData.days[0]} />,
  },
]);

// @ts-expect-error - This is a bug in the types
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// createRoot(document.getElementById("root")!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
