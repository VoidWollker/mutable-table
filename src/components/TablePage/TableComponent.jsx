import React from 'react'
import {Table} from 'reactstrap'
import AddNewRow from '../AddNewRow/AddNewRow.jsx'
import ChangeRow from './ChangeRow.jsx'
import TableRow from './TableRow.jsx'

import { useSelector } from 'react-redux'

export default function TableComponent(){
    const header = useSelector(state => state.table.header)
    const data = useSelector((state) => state.table.data)

    const cellWidth = `${80/header.length}%`

    return(
        <Table>
            <thead>
                <tr>
                    {header.map(columnName => <th width={cellWidth}>{columnName}</th>)}
                    <th width={'10%'}></th>
                    <th width={'10%'}></th>
                </tr>
            </thead>
            <tbody>
                {data.map(row =>{
                    if (row.changeMode){
                        return(<ChangeRow key={row.id} inputData={row}/>)
                    }
                    else{
                        return (<TableRow key={row.id} data={row} width={cellWidth}/>)
                    }
                })}
                {/* <AddNewRow rowData={{changeMode: false, id: '', name: ''}}/> */}
            </tbody>
        </Table>
        
    )
}