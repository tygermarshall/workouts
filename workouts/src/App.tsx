import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WorkoutPreview from "./assets/Components/WorkoutPreview";
import workoutData from "./constants";
function App() {
  return (
    <>
      <div>
        {workoutData.days.map((day, index) => (
          <WorkoutPreview
            key={day.id}
            day={day}
            first={index === 0 ? true : false}
          />
        ))}
      </div>
    </>
  );
}

export default App;
