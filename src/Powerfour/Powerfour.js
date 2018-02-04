import React from 'react'
import Grid from './Grid'
import Utils from './Utils'
import Score from './Score'

const boardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const logo = {
  backgroundImage: 'url(http://nsa39.casimages.com/img/2018/02/03/180203104237330189.png)',
  backgroundSize: 'cover',
  width: '270px',
  height: '100px',
  margin: '10px',
}

const restartStyle = {
  backgroundImage: 'url(http://nsa39.casimages.com/img/2018/02/03/180203113555740267.png)',
  backgroundSize: 'cover',
  width: '140px',
  height: '37px',
  margin: '10px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  border: 'none',
}

class Powerfour extends React.Component {

  constructor(props) {
    super(props)
    const { h, w } = props
    this.state = {
      turn: 'y',
      grid: Utils.initGrid(h, w),
      score: {
        y: 0,
        r: 0,
      }
    }
  }

  onColumnClick (column) {
    const { grid, turn, victory, score } = this.state
    const hitInfo = Utils.addCupcake(grid, column, turn)

    !victory && this.setState({
      grid: hitInfo.newGrid,
      victory: hitInfo.victory,
    })

    !victory && hitInfo.victory && this.setState({
      score: {
        ...score,
        [turn]: score[turn] + 1,
      }
    })
    this.setState({ turn: turn === 'y' ? 'r' : 'y' })
  }

  previewCupcake(column) {
    const { grid, turn } = this.state
    this.setState({
      grid: Utils.addCupcake(grid, column, turn, true),
    })
  }

  onRestart () {
    const { h, w } = this.props
    this.setState({
      grid: Utils.initGrid(h, w),
      victory: false,
    })
  }

  render () {
    const { grid, victory, score } = this.state
    return (
      <div style={boardStyle}>
       <div style={logo}></div>
       <Grid
         victory={victory}
         grid={grid}
         score={score}
         onColumnClick={index => this.onColumnClick(index)}
       />
       <button style={restartStyle} onClick={() => this.onRestart()} ></button>
       <Score score={score}/>
      </div>
    )
  }
}

export default Powerfour
