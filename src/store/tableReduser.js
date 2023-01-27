import { createSlice } from "@reduxjs/toolkit";
import {Guid} from 'js-guid'

const initialState = {
    header: ['id', 'Name', 'Phone number', 'E-mail'],
    data: [],
}

const changeModeOn = (state, row) => {
    const newData = [...state.data]
    newData[row].changeMode = true
    state.data = newData
}

const changeModeOff = (state, row) => {
    const newData = [...state.data]
    newData[row].changeMode = false
    state.data = newData
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        changeMode: (state, action) =>{
            state.data.map((row, index) =>{
                if (row.id == action.payload){
                    if (row.changeMode){
                        changeModeOff(state, index)
                    } else{
                        changeModeOn(state, index)
                    }
                }
            })
        },
        changeData(state, action){
            state.data.map((row, index) =>{
                if (row.id == action.payload.rowId){
                    const newData = [...state.data]
                    newData[index] = action.payload.newDataRow
                    state.data = newData
                }
            })
        },
        deleteRow(state, action){
            state.data.map((row, index) =>{
                if (row.id == action.payload){
                    state.data = state.data.slice(0, index).concat(state.data.slice(index + 1, state.data.length))
                }
            })
        },
        addRow(state, action){
            let newData = [...state.data]
            console.log(action.payload['id']);
            action.payload['id'] = Guid.newGuid().toString()
            newData.push(action.payload)
            state.data = newData
        }
    }
})

export const {changeMode, changeData, deleteRow, addRow} = tableSlice.actions

export default tableSlice.reducer