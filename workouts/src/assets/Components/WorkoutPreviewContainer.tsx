import workoutData from "../../constants";
import WorkoutPreview from "./WorkoutPreview";
const WorkoutPreviewContainer = () => {
  return workoutData.days.map((day, index) => (
    <WorkoutPreview key={day.id} day={day} first={index === 0 ? true : false} />
  ));
};

export default WorkoutPreviewContainer;
