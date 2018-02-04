import React from 'react'

const scoreStyle = {
  backgroundImage: 'url(http://nsa39.casimages.com/img/2018/02/03/180203113555794126.png)',
  width: 540,
  height: 200,
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0px 20px',
}

const playerStyle = {
  backgroundSize: 'cover',
  width: 150,
  borderRadius: 5,
  height: 150,
}

const player1Style = {
  ...playerStyle,
  backgroundImage: 'url(https://orig00.deviantart.net/c7ce/f/2014/043/7/2/angry_cupcake_by_babydollandcupcake-d7667g7.png)',
}

const player2Style = {
  ...playerStyle,
  backgroundImage: 'url(https://pbs.twimg.com/profile_images/2429861493/okarznjfvlw4sf6sew99_400x400.jpeg)',
}

const playerScoreStyle = {
  backgroundColor: 'black',
  height: 100,
  width: 50,
  borderRadius: 20,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 70,
}

const vsStyle = {
  color: 'white',
  fontSize: 35,
  transform: 'rotate(-20deg)',
}

const Score = ({ score }) => {
  return (
    <div style={scoreStyle} >
      <div style={player1Style}></div>
       <div style={playerScoreStyle}>{score.r}</div>
       <div style={vsStyle}>VS</div>
       <div style={playerScoreStyle}>{score.y}</div>
      <div style={player2Style}></div>
    </div>
  )
}

export default Score
