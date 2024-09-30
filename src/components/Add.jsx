import React,{ useState} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addData } from '../redux/employeslice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

function Add() {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState({
        id: "", name: "", email: "", phone: "", department: "",salary: "",
    })
    const dispatch = useDispatch()
    console.log(input)

    const handleUpload = () => {
        const { id, name, email, phone, department, salary  } = input
        if (!id || !name || !email || !phone || !department || !salary) {
            toast.error("Enter Valid Inputs")
        } else {
            dispatch(addData(input))
            handleClose()
            setInput({ id: "", name: "", email: "", phone: "", department: "",salary:"" })
        }
    }


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <div className=''>
                <button type="button" className='btn btn-info' onClick={handleShow}>Add Employee</button>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Employee Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FloatingLabel controlId="id" label="Enter ID" className="mb-3">
                        <Form.Control type="number" placeholder="" onChange={(e) => { setInput({ ...input, id: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="text" label="Enter Name" className="mb-3">
                        <Form.Control type="text" placeholder="" onChange={(e) => { setInput({ ...input, name: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="text" label="Enter Email" className="mb-3">
                        <Form.Control type="text" placeholder="" onChange={(e) => { setInput({ ...input, email: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="text" label="Enter Phone" className="mb-3">
                        <Form.Control type="text" placeholder="" onChange={(e) => { setInput({ ...input, phone: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="text" label="Enter Department" className="mb-3">
                        <Form.Control type="text" placeholder="" onChange={(e) => { setInput({ ...input, department: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="text" label="Enter Salary" className="mb-3">
                        <Form.Control type="number" placeholder="" onChange={(e) => { setInput({ ...input, salary: e.target.value }) }} />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpload}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Add