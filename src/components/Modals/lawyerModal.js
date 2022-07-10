import { Modal}  from "react-bootstrap";
import AddNewLawyerForm from "../lawyers/addNewLawyer";

function LawyerModal(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Add new lawyer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <AddNewLawyerForm handleClose={props.handleClose} getLatestLawyerData={props.getLatestLawyerData} /> 
                    </Modal.Body>
            </Modal>
        </>
    )
}

export default LawyerModal;