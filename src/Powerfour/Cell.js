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
  width: '7.9vw',
  height: '7.9vw',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  maxWidth: 52.13,
  maxHeight: 52.13,
  // opacity: '.8',
  backgroundImage: getCellBackground(cellType),
})

const horizontalSpacer = {
  height: '.75vw',
  maxHeight: 4.98,
}

const verticalSpacer = {
  width: '.75vw',
  maxWidth: 4.98,
}

const Cell = ({ cell }) => (
  <div>
    <div style={horizontalSpacer}></div>
    <div style={{ display: 'flex' }}>
      <div style={verticalSpacer}></div>
      <div style={cellStyle(cell)}></div>
      <div style={verticalSpacer}></div>
    </div>
  </div>
)

export default Cell
