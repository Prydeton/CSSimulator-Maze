window.onload = () => {
    const mazeContainer = document.querySelector('#maze_container')
    const width = 30
    const height = 30

    for (let i = 0; i < width; i++) {
        const row = document.createElement('div')
        row.className = 'row'
        for (let j = 0; j < height; j++) {
            const cell = document.createElement('div')
            cell.className = 'cell'
            row.appendChild(cell)
        }
        mazeContainer.appendChild(row)
    }
    
}
