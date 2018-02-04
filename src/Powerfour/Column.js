import React from 'react'
import Cell from './Cell'

const columnStyle = {
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
}


const Column = ({ column, index, onColumnClick, onColumnMouseEnter, onColumnMouseLeave }) => (
  <div 
    onClick={() => onColumnClick(index)} 
    style={columnStyle} 
    key={index}
  >
    {
      column.map((cell, index) => <Cell cell={cell} key={index}/>)
    }
  </div>
)

export default Column