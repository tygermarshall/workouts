import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

interface Props {
  show: boolean;
  centered?: boolean;
  handleSubmit: (repsSubmitted: number) => void;
  handleclose: () => void;
  initalCount: number;
  repsActual?: number;
}

const RepModal = ({
  initalCount,
  repsActual,
  handleclose,
  handleSubmit,
  ...props
}: Props) => {
  const [repsSubmitted, setRepsSubmitted] = useState(initalCount);

  const handleRepSubmit = () => {
    if (repsActual) {
      setRepsSubmitted(repsActual);
    }
    if (repsSubmitted) {
      handleSubmit(repsSubmitted);
    }
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Record Reps
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>How many reps did you do?</h4>
        <Form.Control
          type="number"
          id="repCount"
          defaultValue={repsActual ? repsActual : initalCount}
          onChange={(e) => {
            setRepsSubmitted(parseInt(e.target.value));
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleclose}>Close</Button>
        <Button onClick={handleRepSubmit}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RepModal;
