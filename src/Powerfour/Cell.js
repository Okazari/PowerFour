import React from 'react'

const getCellBackground = (cellType) => {
  switch (cellType) {
    case 'r':
      return 'url(http://nsa39.casimages.com/img/2018/02/03/180203105309368308.png)'
    case 'y':
      return 'url(http://nsa39.casimages.com/img/2018/02/03/180203105309312657.png)'
  }
}

const cellStyle = (cellType) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '8.1vw',
  height: '8.1vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  margin: '.32vw .65vw',
  // opacity: '.8',
  backgroundImage: getCellBackground(cellType),
})

const Cell = ({ cell }) => (
  <div style={cellStyle(cell)}></div>
)

export default Cell
