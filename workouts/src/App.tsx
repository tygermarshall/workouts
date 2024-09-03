import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Exercise from "./assets/Components/Exercise";
import Workout from "./assets/Components/Workout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Workout />
    </>
  );
}

export default App;
