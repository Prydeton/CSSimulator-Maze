import React, { useState } from 'react'

import MazeToolBar from './MazeToolBar'
import MazeGrid from './MazeGrid'
import generateMaze from './generateMaze'
import {makeGridData} from './grid'

import './style/App.css'

const toolOptions = ['empty', 'wall', 'start', 'end']

const App = () => {
    const [width, height] = [17, 17]
    const [gridData, setGridData] = useState(makeGridData(width, height))
    const [tool, setTool] = useState(toolOptions[1])

    const handleGeneration = () => {
        setGridData(generateMaze(width, height))
    }
    

    return (
        <div className='maze-app'>
            <MazeToolBar onToolChange={setTool} toolOptions={toolOptions} tool={tool} onGenerate={handleGeneration}/>
            <MazeGrid gridData={gridData} />
        </div>
    )
}
export default App
