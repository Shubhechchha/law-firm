import React, {useState} from 'react';
import classes from './lawyerForm.module.css';
import { Button } from 'react-bootstrap';
import LawyerModal from '../Modals/lawyerModal';
import LawyerRow from './lawyerRow';

function LawyersList(props) {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <LawyerRow />
            <Button className={classes.lawyerForm} onClick={handleShow}>Add new lawyer </Button>
            <LawyerModal show={show} handleClose={handleClose} />
        </>
    )
}

export default LawyersList;