import { Modal}  from "react-bootstrap";
import ClientCaseRegistration from "../clients/clientCaseRegistration";

function ClientModal(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Register a client</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ClientCaseRegistration lawyerID={props.lawyerID} handleClose={props.handleClose}/> 
                    </Modal.Body>
            </Modal>
        </>
    )
}

export default ClientModal;