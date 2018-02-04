import React from 'react'
import Column from './Column'

const gridStyle = {
  display: 'flex',
  height: '400px',
  width: '600px',
  backgroundSize: 'cover',
  backgroundImage: 'url(http://nsa39.casimages.com/img/2018/02/03/180203113743268794.png)',
  justifyContent: 'center',
}

const message = {
  position: 'absolute',
  top: 265,
  color: 'white',
  backgroundColor: 'rgba(0,0,0,0.7)',
  borderRadius: 50,
  fontSize: 50,
  padding: '3px 20px',
}

const Grid = ({ grid, victory, onColumnClick, onColumnMouseEnter, onColumnMouseLeave }) => (
  <div style={gridStyle}>
    { victory && <div style={message}>Game over !</div> }
    {
      grid.map((column, index) => (
        <Column
          onColumnClick={onColumnClick}
          index={index}
          key={index}
          column={column}
        />
      ))
    }
  </div>
)

export default Grid
