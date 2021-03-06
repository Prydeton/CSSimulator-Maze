const CELL_EMPTY = 0
const CELL_WALL = 1
const CELL_START = 2
const CELL_END = 3
const UP = 0
const RIGHT = 1
const DOWN = 2
const LEFT = 3
const NOTVISITED = 0
const VISITED = 1

window.onload = () => {
    const mazeContainer = document.querySelector('#maze_container')
    const width = 31
    const height = 31

    let cellStates = createMazeDataArray(width, height, CELL_WALL)
    let cellVisits = createMazeDataArray(width, height, NOTVISITED)
    let mazeElements =  createMazeElementArray(mazeContainer, width, height, cellStates)
    const generateButton = document.querySelector("#generate")
    generateButton.onclick = function(){generateMaze(width, height, mazeElements)}
}

const createMazeElementArray = (container, width, height, cellStates) => {
    let maze = []
    for (let i = 0; i < width; i++) {
        const row = document.createElement('div')
        row.className = 'row'
        maze[i] = []
        for (let j = 0; j < height; j++) {
            const cell = document.createElement('div')
            cell.className = 'cell'
            cell.onmouseover = cell.onmousedown = e => {
                if (e.buttons > 0 && e.buttons < 4) {
                    onCellPress(j, i, cellStates)
                    e.preventDefault()
                }
            }
            row.appendChild(cell)
            maze[i].push(cell)
        }
        container.appendChild(row)
    }
    return maze
}

const createMazeDataArray = (width, height, value) => {
    return Array.from({length: height}).map(_ => Array.from({length: width}).map(_ => value))
}

const updateMazeElements = (mazeElements, cellStates) => {
    let height = mazeElements.length
    let width = mazeElements[0].length
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            const element =  mazeElements[i][j]
            const state = cellStates[i][j]
            const classes = getClassesFromState(state)
            element.className = "cell " + classes.join(" ")
        }
    }
}

const getClassesFromState = (state) => {
    switch (state) {
        case CELL_EMPTY:
            return ["empty"]
        case CELL_WALL:
            return ["wall"]
        case CELL_START:
            return ["start"]
        case CELL_END:
            return ["end"]
    }
}

const onCellPress = (x, y, cellStates) => {
    if (document.getElementById('wall_tool').checked) {
        cellStates[y][x] = CELL_WALL
    } else if (document.getElementById('empty_tool').checked) {
        cellStates[y][x] = CELL_EMPTY
    } else if (document.getElementById('start_tool').checked) {
        cellStates[y][x] = CELL_START
    } else if (document.getElementById('end_tool').checked) {
        cellStates[y][x] = CELL_END
    }
}

const generateMaze = (width, height, mazeElements) => {
    let cellStates = createMazeDataArray(width, height, CELL_WALL)
    cellStates[0][0] = CELL_EMPTY
    generateStructure(cellStates, [0,0], mazeElements);
}

const generateStructure = (cellStates, currentCell, mazeElements) => {
    let height = cellStates.length
    let width = cellStates[0].length
    let nextCell
    let middleCell
    directions = shuffleDirections()
    for (let i = 0; i <= 3; i++) {
        switch (directions[i]) {
            case UP:
                nextCell = [currentCell[0] - 2, currentCell[1]]
                middleCell = [currentCell[0] - 1, currentCell[1]]
                break
            case RIGHT:
                nextCell = [currentCell[0], currentCell[1] + 2]
                middleCell = [currentCell[0], currentCell[1] + 1]
                break
            case DOWN:
                nextCell = [currentCell[0] + 2, currentCell[1]]
                middleCell = [currentCell[0] + 1, currentCell[1]]
                break
            case LEFT:
                nextCell = [currentCell[0], currentCell[1] - 2]
                middleCell = [currentCell[0], currentCell[1] - 1]
                break
        }
        if (nextCell[0] < height && nextCell[1] < width && nextCell[0] >= 0 && nextCell[1] >= 0) {
            if (cellStates[nextCell[0]][nextCell[1]] == CELL_WALL) {
                cellStates[nextCell[0]][nextCell[1]] = CELL_EMPTY
                cellStates[middleCell[0]][middleCell[1]] = CELL_EMPTY
                currentCell = [nextCell[0], nextCell[1]]
                updateMazeElements(mazeElements, cellStates)
                generateStructure(cellStates, currentCell, mazeElements)
            }
        }
    }
}

const shuffleDirections = () => {
    directions = [UP, DOWN, LEFT, RIGHT]
    for (let i = directions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [directions[i], directions[j]] = [directions[j], directions[i]];
    }
    return directions
}
