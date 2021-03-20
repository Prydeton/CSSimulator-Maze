import React, { useState } from 'react'

import './style/MazeToolBar.css'

const MazeToolBar = ({ tool, onToolChange, toolOptions, onGenerate, onExport, onOutline }) => {
    const [selectedTool, setSelectedTool] = useState(tool || toolOptions[0])
    const handleToolBarChange = e => {
        setSelectedTool(e.target.value)
        onToolChange(e.target.value)
    }
    return (
        <div className='maze-toolbar'>
            { toolOptions.map(option =>
                <ToolBarOption
                    checked={option == selectedTool}
                    handleChange={handleToolBarChange}
                    key={option}
                    option={option} />) }
            <button onClick={onGenerate}>Generate</button>
            <button onClick={onExport}>Export</button>
            <button onClick={onOutline}>Outline</button>
        </div>
    )
}

const ToolBarOption = ({ option, handleChange, checked }) => <>
        <input
            type='radio'
            value={option}
            checked={checked}
            onChange={handleChange}
            name='tool-select'
            id={`tool-${option}`} />
        <label htmlFor={`tool-${option}`}> {option} </label>
    </>

export default MazeToolBar
