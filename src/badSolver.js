
import {makeGridData, cell, dir} from './grid'
const NOTVISITED = 0
const VISITED = 1

const isValidCell = (nextCell, height, width) => {
    console.log(nextCell[0] < height)
    console.log(nextCell[1] < width)
    console.log(nextCell[0] >= 0)
    console.log(nextCell[1] >= 0)
    return nextCell[0] < height && nextCell[1] < width && nextCell[0] >= 0 && nextCell[1] >= 0
}

const badSolver = (cellStates) => {
    let cellVisits = makeGridData(cellStates.length, cellStates[0].length, () => NOTVISITED)
    console.log(cellVisits)
    let start
    let end
    for (let i = 0; i < cellStates.length; i++) {
        for (let j = 0; j < cellStates.length; j++) {
            if (cellStates[i][j] == cell.START){
                start = [i,j]
            }
            if (cellStates[i][j] == cell.END){
                end = [i,j]
            }
       }
    }
    console.log(start)
    console.log(end)
    if (start && end) {
        let currentCell = start
        cellVisits[start[0]][start[1]] = VISITED
        let directions = [dir.UP, dir.DOWN, dir.LEFT, dir.RIGHT]
        let counter = 0
        let solved = false
        while (!solved && counter < 300000) {
            counter++
            let nextCell
            for (let i = 0; i < 4; i++) {
                switch (directions[i]) {
                    case dir.UP:
                        console.log("UP")
                        nextCell = [currentCell[0] - 1, currentCell[1]] 
                        break
                    case dir.RIGHT:
                        console.log("RIGHT")
                        nextCell = [currentCell[0], currentCell[1] + 1]
                        break
                    case dir.DOWN:
                        console.log("DOWN")
                        nextCell = [currentCell[0] + 1, currentCell[1]] 
                        break
                    case dir.LEFT:
                        console.log("LEFT")
                        nextCell = [currentCell[0], currentCell[1] - 1] 
                        break
                }
                console.log(nextCell)
                if (isValidCell(nextCell, cellStates.length, cellStates[0].length)) {
                    console.log(cellVisits[nextCell[0]][nextCell[1]] == NOTVISITED)
                    console.log(cellStates[nextCell[0]][nextCell[1]] != cell.WALL)
                    if (cellStates[nextCell[0]][nextCell[1]] != cell.WALL && cellVisits[nextCell[0]][nextCell[1]] == NOTVISITED) {
                        currentCell[0] = nextCell[0]
                        currentCell[1] = nextCell[1]
                        console.log("NEW CELL: " + currentCell[0] + "," + currentCell[1])
                        cellVisits[currentCell[0]][currentCell[1]] = VISITED
                        break
                    }
                    if (currentCell[0] == end[0] && currentCell[1] == end[1]) {
                        solver = true
                        break
                    }
                }
            }
        }
    }
}

export default badSolver