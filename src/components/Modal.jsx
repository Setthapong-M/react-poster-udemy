import { useNavigate } from 'react-router-dom'
import React from 'react'

function Modal({children}) {
    const navigate = useNavigate();

    function closeHandler () {
        navigate("..")
    }
  return <>
        <div className='z-10 fixed inset-0 bg-black bg-opacity-25' onClick={closeHandler}/>
        <dialog open className='z-20 rounded-md shadow-md overflow-hidden'>
            {children}
        </dialog>
    </>
}

export default Modal