import React, { useState } from 'react'
import ChangeCell from '../ChangeCell/ChangeCell'
import { Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { changeMode, changeData } from '../../store/tableReduser'

export default function ChangeRow({inputData}){
    const [data, setData] = useState(inputData)
    const dispatch = useDispatch()

    const changeCell = (cellIndex, newCellData) => {
        let newData = {...data}
        console.log(newData);
        newData[cellIndex] = newCellData
        setData(newData)
    }
    changeCell.bind(this)

    return(
        <tr>
            {Object.keys(data).map(key =>{
                if (key != 'changeMode' && key != 'id'){
                    return <ChangeCell cellKey={key} cellData={data[key]} changeCell={changeCell}/>
                }
                else if(key == 'id'){
                    return <td width={'40%'}>{data[key]}</td>
                }
            })}
            <td width={'10%'}><Button color='success' onClick={() => {dispatch(changeData({rowId: data.id, newDataRow: data})); dispatch(changeMode(data.id))}}>Done</Button></td>
            <td width={'10%'}><Button color='danger' onClick={() => dispatch(changeMode(data.id))}>Cancel</Button></td>
        </tr>
    )
}   