import React, { useState } from 'react';

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  }

  return (
    <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
      <form onSubmit={onSubmit} className="container max-w-sm">
        {/* <div className="flex items-center border-2 border-teal-500"></div> */}
        <input onChange={e => setText(e.target.value)} className=" border border-transparent px-2 mx-2 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent ..." type="text" placeholder="Search Image Term..." />
        <button className=" border-red-500 hover:text-white hover:bg-red-500 text-sm border-2 font-semibold text-red-500 py-1 px-2 rounded" type="submit">
      Search
      </button>
      </form>
		</div>
  )
}

export default ImageSearch;