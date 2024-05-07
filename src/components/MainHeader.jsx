import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';

function MainHeader({ createPost }) {
  return (
    <header className="max-w-screen-xl mx-auto my-8 p-4 text-center flex justify-between items-center border-b-2">
      <h1 className="text-2xl flex gap-6 items-center">
        <MdMessage className='text-xl flex gap-6 items-center text-[#ece1fa]'/>
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className="bg-[#a990fb] text-[#2a2630] hover:bg-[#8c6cf7] inline-flex items-center gap-2 py-3 px-6 rounded-md shadow-md cursor-pointer font-bold" onClick={createPost}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;