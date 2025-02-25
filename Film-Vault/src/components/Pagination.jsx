import React from 'react'

function Pagination(props) {
  return (
    <div className='bg-gray-400 p-4 mt-8 flex justify-center'>
        <div onClick={props.pageDown} className='px-8'><i class="fa-solid fa-arrow-left"></i></div>
        <div className='font-bold'>{props.pageNo}</div>
        <div onClick={props.pageUp} className='px-8'><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination;