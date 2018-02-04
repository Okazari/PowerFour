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
  width: 55,
  height: 55,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  margin: '1.5px 3.5px',
  // opacity: '.8',
  backgroundImage: getCellBackground(cellType),
})

const Cell = ({ cell }) => (
  <div style={cellStyle(cell)}></div>
)

export default Cell