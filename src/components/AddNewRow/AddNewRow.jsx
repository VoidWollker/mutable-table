import React, { useState } from "react"
import { Input, Button } from "reactstrap"

export default function AddNewRow({rowData, addRow}){
    const [row, setRow] = useState(rowData)

    const changeCell = (e, index) =>{
        let newRow = {...row}
        let key = Object.keys(newRow)[index]
        newRow[key] = e.target.value
        setRow(newRow)
    }

    const clearCells = () =>{
        let newInputs = document.getElementsByClassName('newInput')
        Array.prototype.map.call(newInputs, (input) =>{
            return input.value = ''
        })

        let newRow = {...row}
        Object.keys(newRow).map(key =>{
            if (key != 'changeMode'){
                newRow[key] = ''
            }
        })
        setRow(newRow)
    }

    return(
        <tr>
            {Object.keys(row).map((key, index) => {
                if(key != 'changeMode' && key != 'id'){
                    return <td><Input className="newInput" placeholder={key} onChange={e => changeCell(e, index)}/></td>
                }}
            )}
            <td><Button color='primary' onClick={() => {
                clearCells()
                addRow(row)}
            }>Add</Button></td>
        </tr>
    )
}