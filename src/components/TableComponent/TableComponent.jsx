import React, {Component} from 'react'
import {Table} from 'reactstrap'
import nextId from 'react-id-generator'
import AddNewRow from '../AddNewRow/AddNewRow.jsx'
import ChangeRow from '../ChangeRow/ChangeRow.jsx'
import TableRow from '../TableRow/TableRow.jsx'


export default class TableComponent extends Component{
    constructor(props){
        super(props)

        this.changeMode = this.changeMode.bind(this)
        this.changeData = this.changeData.bind(this)
        this.deleteRow = this.deleteRow.bind(this)
        this.addRow = this.addRow.bind(this)

        this.state = {
            data: [{
                id: 1,
                name: 'Roman'
            }]
        }
    }

    changeMode(rowId){
        this.state.data.map((row, index) =>{
            if (row.id == rowId){
                if (row.changeMode){
                    this.changeModeOff(index)
                } else{
                    this.changeModeOn(index)
                }
            }
        })
    }

    changeModeOn(row){
        const newData = this.state.data
        newData[row].changeMode = true
        this.setState({data: newData})
    }

    changeModeOff(row){
        const newData = this.state.data
        newData[row].changeMode = false
        this.setState({data: newData})
    }

    changeData(rowId, newDataRow){
        this.state.data.map((row, index) =>{
            if (row.id == rowId){
                const newData = this.state.data
                newData[index] = newDataRow
                this.setState({data: newData})
            }
        })
    }

    deleteRow(rowId){
        this.state.data.map((row, index) =>{
            if (row.id == rowId){
                this.setState({
                    data: this.state.data.slice(0, index).concat(this.state.data.slice(index + 1, this.state.data.length))
                })
            }
        })
    }

    addRow(rowData){
        let newData = this.state.data
        rowData['id'] = nextId()
        newData.push(rowData)
        this.setState({data: newData})
    }

    render() {
        return(
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map(row =>{
                        if (row.changeMode){
                            return(<ChangeRow key={row.id} inputData={row} changeMode={this.changeMode} changeData={this.changeData}/>)
                        }
                        else{
                            return (<TableRow key={row.id} data={row} changeMode={this.changeMode} deleteRow={this.deleteRow}/>)
                        }
                    })}
                    <AddNewRow rowData={{changeMode: false, id: '', name: ''}} addRow={this.addRow}/>
                </tbody>
            </Table>
            
        )
    }
}