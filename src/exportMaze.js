import { cell } from './grid.js'

const cellToChar = (c) => {
  switch (c) {
    case cell.EMPTY:
      return '.'
    case cell.WALL:
      return '#'
    case cell.END:
      return 'G'
    case cell.START:
      return 's'
  }
}

const exportMaze = (gridData) => {
  const gridStr = gridData.map(row => row.map(cellToChar).join('')).join('\n')
  const idStr = cyrb53(gridStr)
  downloadStr(gridStr, `maze-${idStr}.env`)
}

const downloadStr = (content, fileName = 'maze.env') => {
  const element = document.createElement('a')
  const file = new window.Blob([content], {type: 'text/plain'})
  element.href = window.URL.createObjectURL(file)
  element.download = fileName
  document.body.appendChild(element) // Required for this to work in FireFox
  element.click()
}

// Hash function
const cyrb53 = function (str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed
  let h2 = 0x41c6ce57 ^ seed
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i)
    h1 = Math.imul(h1 ^ ch, 2654435761)
    h2 = Math.imul(h2 ^ ch, 1597334677)
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909)
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909)
  return 4294967296 * (2097151 & h2) + (h1 >>> 0)
}

export default exportMaze
