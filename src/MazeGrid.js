import React from 'react'

import './style/MazeGrid.css'

const MazeGrid = ({ gridData }) => <div className='maze-grid'>
    { gridData.map((row,i) => <MazeGridRow key={i} rowData={row} />) }
</div>

const MazeGridRow = ({ rowData }) => <div className='grid-row'>
    { rowData.map((cell, i) => <MazeGridCell key={i} cellData={cell} />) }
</div>

const MazeGridCell = ({ cellData }) => <div className='grid-cell'></div>

export default MazeGrid
