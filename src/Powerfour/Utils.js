const immutablyAddCupcakeToColumn = (column, turn) => {
  const immutacolumn = [...column]
  const lastEmptyIndex = immutacolumn.reduce((foundIndex, current, index) => current === '' ? index : foundIndex, -1)
  if (lastEmptyIndex !== -1) immutacolumn[lastEmptyIndex] = turn
  return {
    newColumn: immutacolumn,
    addedIndex: lastEmptyIndex,
  }
}

const immutablyAddCupcakeToGrid = (grid, column, turn) => {
  const imutagrid = [...grid]
  const hitInfo = immutablyAddCupcakeToColumn(imutagrid[column], turn)
  imutagrid[column] = hitInfo.newColumn
  return {
    newGrid: imutagrid,
    victory: checkVictory(imutagrid, column, hitInfo.addedIndex),
  }
}

const initGrid = (h, w) => Array(w).fill(Array(h).fill(''))


const checkLeft = (grid, x, y, turn) => {
  let nb = 0
  let stop = false
  let start = x
  while (!stop) {
    if (--start >= 0 && grid[start][y] === turn) nb++
    else stop = true
  }
  return nb
}

const checkRight = (grid, x, y, turn) => {
  let nb = 0
  let stop = false
  let start = x
  while (!stop) {
    if (++start <= (grid.length - 1) && grid[start][y] === turn) nb++
    else stop = true
  }
  return nb
}

const checkBottom = (grid, x, y, turn) => {
  let nb = 0
  let stop = false
  let start = y
  while (!stop) {
    if (++start <= grid[x].length - 1 && grid[x][start] === turn) nb++
    else stop = true
  }
  return nb
}

const checkTopright = (grid, x, y, turn) => {
  let nb = 0
  let stop = false
  let startX = x
  let startY = y
  while (!stop) {
    startX++
    startY--
    if (startX <= (grid.length - 1) && startY >= 0 && grid[startX][startY] === turn) nb++
    else stop = true
  }
  return nb
}

const checkBottomright = (grid, x, y, turn) => {
  let nb = 0
  let stop = false
  let startX = x
  let startY = y
  while (!stop) {
    startX++
    startY++
    if (startX <= (grid.length - 1) && startY <= (grid[startX].length - 1) && grid[startX][startY] === turn) nb++
    else stop = true
  }
  return nb
}

const checkBottomleft = (grid, x, y, turn) => {
  let nb = 0
  let stop = false
  let startX = x
  let startY = y
  while (!stop) {
    startX--
    startY++
    if (startX >= 0 && startY <= (grid[startX].length - 1) && grid[startX][startY] === turn) nb++
    else stop = true
  }
  return nb
}

const checkTopleft = (grid, x, y, turn) => {
  let nb = 0
  let stop = false
  let startX = x
  let startY = y
  while (!stop) {
    startX--
    startY--
    if (startX >= 0 && startY >= 0 && grid[startX][startY] === turn) nb++
    else stop = true
  }
  return nb
}

const checkVictory = (grid, x, y) => {
  const turn = grid[x][y]
  const left = checkLeft(grid, x, y, turn)
  const right = checkRight(grid, x, y, turn)
  const bottom = checkBottom(grid, x, y, turn)
  const vertical = bottom + 1 >= 4
  const horizontal = left + right + 1 >= 4
  const topRight = checkTopright(grid, x, y, turn)
  const bottomRight = checkBottomright(grid, x, y, turn)
  const bottomLeft = checkBottomleft(grid, x, y, turn)
  const topLeft = checkTopleft(grid, x, y, turn)
  const diag1 = topRight + bottomLeft + 1 >= 4
  const diag2 = topLeft + bottomRight + 1 >= 4
  return vertical || horizontal || diag1 || diag2
}

export default {
  initGrid,
  addCupcake: immutablyAddCupcakeToGrid,
  isWin: checkVictory,
}