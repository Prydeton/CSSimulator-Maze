import React, { useState } from 'react'

import MazeToolBar from './MazeToolBar'
import MazeGrid from './MazeGrid'

import './style/App.css'

const toolOptions = ['empty', 'wall', 'start', 'end']

const makeGridData = (width, height, newCell = _ => 0) =>
    Array.from({length: height})
    .map(_ =>
        Array.from({length: width})
        .map(_ => newCell()))

const App = () => {
    const [width, height] = [17, 17]
    const [gridData, setGridData] = useState(makeGridData(width, height))
    const [tool, setTool] = useState(toolOptions[1])

    return (
        <div className='maze-app'>
            <MazeToolBar onToolChange={setTool} toolOptions={toolOptions} tool={tool}/>
            <MazeGrid gridData={gridData} />
        </div>
    )
}

export default App
