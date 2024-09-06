import { Day as DayType, Set as SetType } from "../Types/WorkoutTypes";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

interface WorkoutPreviewProps {
  day: DayType;
  first: boolean;
}
const WorkoutPreview = ({ day, first }: WorkoutPreviewProps) => {
  const navigate = useNavigate();
  const repCountString = (sets: SetType[]) => {
    let text = "";
    for (let i = 0; i < sets.length; i++) {
      if (sets[i].isAmrap) {
        if (i === sets.length - 1) {
          text += sets[i].repCount + "+";
        } else {
          text += sets[i].repCount + "+/";
        }
      } else if (i === sets.length - 1) {
        text += sets[i].repCount + "";
      } else {
        text += sets[i].repCount + "/";
      }
    }
    return text;
  };
  const handleSendToWorkout = () => {
    navigate(`/workout/${day.id}`);
  };

  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card onClick={handleSendToWorkout} style={{ cursor: "pointer" }}>
          <Card.Body>
            <Card.Title>
              {first ? "Resume Workout" : "Upcoming Workout"}
            </Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Exercise</Col>
                  <Col>Reps</Col>
                  <Col>Weight</Col>
                </Row>
                {day.exercises.map((exercise) => {
                  return (
                    <Row key={exercise.id}>
                      <Col>{exercise.name}</Col>
                      <Col>{repCountString(exercise.sets)}</Col>
                      <Col>{exercise.sets[0].weight}</Col>
                    </Row>
                  );
                })}
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default WorkoutPreview;
