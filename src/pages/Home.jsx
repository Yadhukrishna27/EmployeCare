import React from 'react'
import Employetab from '../components/Employetab'
import Add from '../components/Add'
import { useSelector } from 'react-redux'

function Home() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-between w-98 p-3">
        <h2> Employee Management </h2>
        <div className="w-99 d-flex justify-content-center">
          <div className="w-81 border bg-light p-3" style={{ width: '81%' }}>
            <div className="d-flex justify-content-between p-3">
              <Add />

              <input type="text" placeholder='Search Employe' className='form-control w-53 ms-4 ' />

            </div>
                <Employetab />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home