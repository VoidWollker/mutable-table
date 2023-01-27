import { createSlice } from "@reduxjs/toolkit";
import nextId from 'react-id-generator'

const initialState = {
    header: ['id', 'Name', 'Phone number', 'E-mail'],
    data: [{
        id: 'id1', 
        name: 'Roman', 
        phone: '89879338424',
        Email: 'roman.nichi.o@gmail.com'}],
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
            action.payload['id'] = nextId()
            newData.push(action.payload)
            state.data = newData
        }
    }
})

export const {changeMode, changeData, deleteRow, addRow} = tableSlice.actions

export default tableSlice.reducer