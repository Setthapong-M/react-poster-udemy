import React from 'react'
import Modal from '../components/Modal';
import { Link, Form, redirect } from 'react-router-dom';

function NewPost() {

  return (
    <Modal>
        <Form method='post' className='text-start p-4 w-80 bg-[#6233b9]' >
            <p>
                <label className='block mb-2 font-bold text-[#eadbfb]' htmlFor='body'>Text</label>
                <textarea className='block w-full p-2 rounded-md border bg-[#c4a9e4]' id='body' rows={3} name='body'/>
            </p>
            <p>
                <label className='block mb-2 font-bold text-[#eadbfb]' htmlFor='name'>Your name</label>
                <textarea className='block w-full p-2 rounded-md border bg-[#c4a9e4]' type='text' id='name' name='author' required ></textarea>
            </p>
            <p className='flex justify-end gap-2 mt-3 text-white'>
                <Link to=".." type='button' className='cursor-pointer py-2 px-6 rounded-md border bg-transparent hover:text-[#d1bee6]'>Cancel</Link>
                <button className='cursor-pointer py-2 px-6 rounded-md border hover:bg-[#23014a]'>Submit</button>
            </p>
        </Form>
    </Modal>
    
  )
}

export default NewPost

export async function action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); // {body: '...', author: '...'}
    fetch(`http://localhost:8080/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postData),
    });

    return redirect('/');
}