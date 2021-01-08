import React from 'react'
import {cell} from './grid'
import './style/MazeGrid.css'

const getClassesFromState = (state) => {
    switch (state) {
        case cell.EMPTY:
            return ["empty"]
        case cell.WALL:
            return ["wall"]
        case cell.START:
            return ["start"]
        case cell.END:
            return ["end"]
    }
}

const MazeGrid = ({ gridData, onCellPress}) => <div className='maze-grid'>
    { gridData.map((row,i) => <MazeGridRow i={i} key={i} rowData={row} onCellPress={onCellPress}/>) }
</div>

const MazeGridRow = ({ rowData, onCellPress, i}) => <div className='grid-row'>
    { rowData.map((cell, j) => <MazeGridCell i={i} j={j} key={j} cellData={cell} onCellPress={onCellPress}/>) }
</div>

const MazeGridCell = ({ cellData, onCellPress, i, j}) => {
    const classes = getClassesFromState(cellData)
    
    const handleCellSelection = (i, j, e) => {
        console.log("test")
        if (e.buttons > 0 && e.buttons < 4) {
            onCellPress(i, j)
            e.preventDefault()
        }
    }

    return (
        <div onClick={() => onCellPress(i, j)} onMouseOver={(e) => handleCellSelection(i,j,e)} onMouseDown={(e) => handleCellSelection(i,j,e)} className={`grid-cell ${classes.join(" ")}`}></div>
    )
}

export default MazeGrid
