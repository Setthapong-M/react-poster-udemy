import React from 'react'
import { Link } from 'react-router-dom'

function Post({id, author, body}) {
  return (
    <ul>
        <li className='my-4 p-4 rounded-md drop-shadow-md border min-h-24 bg-[#9c7eee]'>
          <Link to={id}>
            <p className='text-sm uppercase font-bold text-start text-[#543280]'>{author}</p>
            <p className='text-xl mt-3 whitespace-pre-wrap text-start text-[#593884]'>{body}</p>
          </Link>
        </li>
    </ul>
  )
}

export default Post