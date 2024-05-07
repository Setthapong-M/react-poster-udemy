import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'
import Modal from '../components/Modal';

function PostDetails() {
    const post = useLoaderData();

    if (!post) {
        return (
            <Modal>
                <main className='p-4 w-[480px]'>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to=".." className='cursor-pointer py-2 px-6 rounded-md border bg-transparent hover:text-[#d1bee6]'>
                            Okay
                        </Link>
                    </p>
                </main>
            </Modal>
        );
    }
    return (
        <Modal>
            <main className='p-4 w-[480px]'>
                <p className='text-sm font-bold text-[#543280] m-0 uppercase'>{post.author}</p>
                <p className=' whitespace-pre-wrap text-xl mt-1 text-[#593884]'>{post.body}</p>
            </main>
        </Modal>
    )
}

export default PostDetails;

export async function loader({params}) {
    const response = await fetch(`http://localhost:8080/posts/${params.postId}`);
    const resData = await response.json();
    return resData.post;
}