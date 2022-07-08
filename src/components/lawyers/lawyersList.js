import React, {useState, useEffect} from 'react';
import classes from './lawyerForm.module.css';
import { Button } from 'react-bootstrap';
import { TailSpin } from  'react-loader-spinner';
import LawyerModal from '../Modals/lawyerModal';
import LawyerRow from './lawyerRow';

function LawyersList(props) {


    const [show, setShow] = useState(false);
    const[lawyerData, fetchLawyerData] = useState([]);
    const [isLoading, setLoading] = useState(true)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getData = () => {
        fetch('https://62c752702b03e73a58e37b4a.mockapi.io/api/v1/lawyers')
        .then((res) => res.json())
        .then((res) => {
            fetchLawyerData(res)
            setLoading(false);
        })
    }

    useEffect(() => {
        getData()
    }, [])

    if(isLoading === true) {
        return <TailSpin color="#00BFFF" height={80} width={80} />
    } else {
        return (
            <>
                <LawyerRow lawyerData={lawyerData} />
                <Button className={classes.lawyerForm} onClick={handleShow}>Add new lawyer</Button>
                <LawyerModal show={show} handleClose={handleClose} />
            </>
        )
    }
}

export default LawyersList;