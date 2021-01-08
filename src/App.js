import React, { useState } from 'react'

import MazeToolBar from './MazeToolBar'
import MazeGrid from './MazeGrid'

import './style/App.css'

const makeGridData = (width, height, newCell = _ => 0) =>
    Array.from({length: height})
    .map(_ =>
        Array.from({length: width})
        .map(_ => newCell()))

const App = () => {
    const [width, height] = [17, 17]
    const [gridData, setGridData] = useState(makeGridData(width, height))

    const handleToolChange = tool => {
        console.log(tool)
    }

    return (
        <div className='maze-app'>
            <MazeToolBar onToolChange={handleToolChange} />
            <MazeGrid gridData={gridData} />
        </div>
    )
}

export default App
