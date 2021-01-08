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

const MazeGrid = ({ gridData }) => <div className='maze-grid'>
    { gridData.map((row,i) => <MazeGridRow key={i} rowData={row} />) }
</div>

const MazeGridRow = ({ rowData }) => <div className='grid-row'>
    { rowData.map((cell, i) => <MazeGridCell key={i} cellData={cell} />) }
</div>

const MazeGridCell = ({ cellData }) => {
    const classes = getClassesFromState(cellData)
    return (
        <div className={`grid-cell ${classes.join(" ")}`}></div>
    )
}

export default MazeGrid
