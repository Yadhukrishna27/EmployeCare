import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { updateData } from '../redux/employeslice';
import { toast } from 'react-toastify';



function Edit() {

    const [show, setShow] = useState(false);
    const dispatch = useDispatch()

    const [val, setVal] = useState({
        id: "", name: "", email: "", phone: "", department: "", salary: "",
    })

    console.log(data)
    console.log(val);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setVal({
            ...val, id: data.id, name: data.name, email: data.email,
            phone: data.phone, department: data.department, salary: data.salary
        })
    }

    const handleUpdate = () => {

        const { id, name, email, phone, department, salary  } = val
        if (!id || !name || !email || !phone || !department || !salary) {
            toast.error("Enter Valid Inputs")
        } else {
            handleClose()
            dispatch(updateData(val))
            setVal({ id: "", name: "", email: "", phone: "", department: "",salary:"" })
        }

    }
    return (
        <>
            <button className='btn fa-xl' onClick={handleShow}>
                <i className="fa-solid fa-pen-to-square" />
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Employee Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg'>
                    <FloatingLabel controlId="text" label="Enter Name" className="mb-3">
                        <Form.Control type="text" placeholder="" value={val.name}  onChange={(e) => { setVal({ ...input, name: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="text" label="Enter Email" className="mb-3">
                        <Form.Control type="text" placeholder="" value={val.email} onChange={(e) => { setVal({ ...input, email: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="text" label="Enter Phone" className="mb-3">
                        <Form.Control type="text" placeholder="" value={val.phone} onChange={(e) => { setVal({ ...input, phone: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="text" label="Enter Department" className="mb-3">
                        <Form.Control type="number" placeholder="" value={val.department} onChange={(e) => { setVal({ ...input, department: e.target.value }) }} />
                    </FloatingLabel>
                    <FloatingLabel controlId="text" label="Enter Salary" className="mb-3">
                        <Form.Control type="number" placeholder="" value={val.salary} onChange={(e) => { setVal({ ...input, salary: e.target.value }) }} />
                    </FloatingLabel>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>Update </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit