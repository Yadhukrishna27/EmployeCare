import React from 'react'
import Edit from './Edit';
import { useSelector, useDispatch } from 'react-redux'
import { deleteData } from '../redux/employeslice';

function Employetab() {

    const { items } = useSelector((state) => state.employeReducer)
    const dispatch = useDispatch()
    return (
        <>
            <div className='container'>


                {

                    items?.length > 0 ?
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Department</th>
                                    <th>Salary</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>


                                {
                                    items?.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.department}</td>
                                            <td>{item.salary}</td>
                                            <td className='d-flex'>
                                                <Edit />
                                                <button className='btn' onClick={() => { dispatch(deleteData(item.id)) }}>
                                                    <i className="fa-solid fa-trash fa-xl" style={{ color: "#98060e", }} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>

                        :
                        <h3 className='text-center'>No Data Added Yet !!</h3>
                }



            </div>
        </>
    )
}



export default Employetab