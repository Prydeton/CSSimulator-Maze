import {cell, makeGridData, dir} from './grid'
import shuffle from 'lodash.shuffle'

const generateMaze = (width, height) => {
    let cellStates = makeGridData(width, height, () => cell.WALL)
    cellStates[0][0] = cell.EMPTY
    generateStructure(cellStates, [0,0]);
    return cellStates 
}

const generateStructure = (cellStates, currentCell) => {
    const height = cellStates.length
    const width = cellStates[0].length
    let nextCell
    let middleCell
    let directions = shuffle([dir.UP, dir.RIGHT, dir.LEFT, dir.DOWN])
    for (let i = 0; i <= 3; i++) {
        switch (directions[i]) {
            case dir.UP:
                nextCell = [currentCell[0] - 2, currentCell[1]]
                middleCell = [currentCell[0] - 1, currentCell[1]]
                break
            case dir.RIGHT:
                nextCell = [currentCell[0], currentCell[1] + 2]
                middleCell = [currentCell[0], currentCell[1] + 1]
                break
            case dir.DOWN:
                nextCell = [currentCell[0] + 2, currentCell[1]]
                middleCell = [currentCell[0] + 1, currentCell[1]]
                break
            case dir.LEFT:
                nextCell = [currentCell[0], currentCell[1] - 2]
                middleCell = [currentCell[0], currentCell[1] - 1]
                break
        }
        if (nextCell[0] < height && nextCell[1] < width && nextCell[0] >= 0 && nextCell[1] >= 0) {
            if (cellStates[nextCell[0]][nextCell[1]] == cell.WALL) {
                cellStates[nextCell[0]][nextCell[1]] = cell.EMPTY
                cellStates[middleCell[0]][middleCell[1]] = cell.EMPTY
                currentCell = [nextCell[0], nextCell[1]]
                generateStructure(cellStates, currentCell)
            }
        }
    }
}

export default generateMaze