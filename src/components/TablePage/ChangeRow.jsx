import React, { useState } from 'react'
import ChangeCell from './ChangeCell'
import { Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { changeMode, changeData } from '../../store/tableReduser'

export default function ChangeRow({inputData}){
    const [data, setData] = useState(inputData)
    const dispatch = useDispatch()

    const changeCell = (cellIndex, newCellData) => {
        let newData = {...data}
        newData[cellIndex] = newCellData
        setData(newData)
    }
    changeCell.bind(this)

    const checkIsNotEmpty = () =>{
        let trueCounter = 0
        Object.keys(data).map(key =>{
            if (key != 'changeMode' && key != 'id' && data[key].trim().length != 0){
                trueCounter++
            }
        })
        return trueCounter == Object.keys(data).length - 2
    }

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
            <td width={'10%'}><Button color='success' onClick={() => {
                if (checkIsNotEmpty()){
                    dispatch(changeData({rowId: data.id, newDataRow: data}))
                    dispatch(changeMode(data.id))
                }else{
                    alert('Пустые строки не допускаются для ввода!')
                }}}
            >Done</Button></td>
            <td width={'10%'}><Button color='danger' onClick={() => dispatch(changeMode(data.id))}>Cancel</Button></td>
        </tr>
    )
}   