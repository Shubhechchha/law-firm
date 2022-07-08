import { Modal, Button}  from "react-bootstrap";
import AddNewLawyer from "../lawyers/addNewLawyer";

function LawyerModal(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add new lawyer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewLawyer /> 
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
        </>
    )
}

export default LawyerModal;