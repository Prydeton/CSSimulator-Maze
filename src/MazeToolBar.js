import React, { useState } from 'react'

const MazeToolBar = ({ tool, onToolChange, toolOptions }) => {
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
