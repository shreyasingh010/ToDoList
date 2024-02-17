import React from 'react'

function TodoList(props) {
  return (
    <li className='list-item'>
       {props.item}
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete"
        onClick={e=>{
            props.deleteListItem(props.index)
        }}></i>
        </span>
    </li>
  )
}
export default TodoList