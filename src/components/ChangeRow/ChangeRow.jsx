import React, { useState } from 'react'
import ChangeCell from '../ChangeCell/ChangeCell'
import { Button } from 'reactstrap'

export default class ChangeRow extends React.Component{
    constructor(props){
        super(props)

        this.changeCell = this.changeCell.bind(this)

        this.state = {
            data: this.props.inputData
        }
    }

    changeCell(cellIndex, newCellData){
        let newData = this.state.data
        newData[cellIndex] = newCellData
        this.setState({data: newData})
    }

    render(){
        return(
            <tr>
                {Object.keys(this.state.data).map(key =>{
                    if (key != 'changeMode'){
                        return <ChangeCell cellKey={key} cellData={this.state.data[key]} changeCell={this.changeCell}/>
                    }
                })}
                <td><Button color='success' onClick={() => {this.props.changeData(this.state.data.id, this.state.data); this.props.changeMode(this.state.data.id)}}>Done</Button></td>
                <td><Button color='danger' onClick={() => this.props.changeMode(this.state.data.id)}>Cancel</Button></td>
            </tr>
        )
    }
}   