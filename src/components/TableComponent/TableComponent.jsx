import React from 'react'
import {Table} from 'reactstrap'
import AddNewRow from '../AddNewRow/AddNewRow.jsx'
import ChangeRow from '../ChangeRow/ChangeRow.jsx'
import TableRow from '../TableRow/TableRow.jsx'

import { useSelector } from 'react-redux'

export default function TableComponent(){
    const data = useSelector((state) => state.table.data)

    return(
        <Table>
            <thead>
                <tr>
                    <th width={'40%'}>ID</th>
                    <th width={'40%'}>Name</th>
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
                        return (<TableRow key={row.id} data={row}/>)
                    }
                })}
                <AddNewRow rowData={{changeMode: false, id: '', name: ''}}/>
            </tbody>
        </Table>
        
    )
}