import React, { useState } from 'react'

import MazeToolBar from './MazeToolBar'
import MazeGrid from './MazeGrid'
import generateMaze from './generateMaze'
import exportMaze from './exportMaze'
import {makeGridData, cell} from './grid'
import cloneDeep from 'lodash.clonedeep'

import './style/App.css'

const toolOptions = ['empty', 'wall', 'start', 'end']

const App = () => {
    const [width, height] = [17, 17]
    const [gridData, setGridData] = useState(makeGridData(width, height, () => cell.WALL))
    const [tool, setTool] = useState(toolOptions[1])

    const handleGeneration = () => {
        setGridData(generateMaze(width, height))
    }

    const handleExport = () => {
      exportMaze(gridData)
    }

    const handleCellPress = (i, j) => {
        let gd = cloneDeep(gridData)
        switch (tool) {
            case 'empty':
                gd[i][j] = cell.EMPTY
                break
            case 'wall':
                gd[i][j] = cell.WALL
                break
            case 'start':
                gd[i][j] = cell.START
                break
            case 'end':
                gd[i][j] = cell.END
                break
        }
        console.log(tool)
        console.log(i,j)
        setGridData(gd)
    }

    return (
        <div className='maze-app'>
            <MazeToolBar onToolChange={setTool} toolOptions={toolOptions} tool={tool} onGenerate={handleGeneration} onExport={handleExport}/>
            <MazeGrid gridData={gridData} onCellPress={handleCellPress}/>
        </div>
    )
}
export default App
