import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { addRow } from "../../store/tableReduser";
import './RegisterPage.scss'

export default function RegisterForm({}){
    const header = useSelector(state => state.table.header)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [formData, setFormData] = useState({id: ''})

    const changeInputValue = (e, key) =>{
        let newFormData = {...formData}
        newFormData[key] = e.target.value
        setFormData(newFormData)
    }

    const checkIsNotEmpty = () =>{
        let newInputs = document.getElementsByClassName('newInput')
        let trueCounter = 0
        if (newInputs.length != 0){
            Array.prototype.map.call(newInputs, (input) =>{
                if (input.value.trim().length != 0){
                    trueCounter++
                }
            })
        }
        return trueCounter == newInputs.length
    }

    return(
        <Form className="d-flex flex-column text-center sas">
            {header.map(columnName =>{
                if (columnName != 'id'){
                    return(
                        <FormGroup className="d-flex flex-row">
                            <Label className='w-25' for={`column${columnName}`} >{columnName}</Label>
                            <Input className='w-50 newInput' id={`column${columnName}`} placeholder={columnName} 
                                onChange={e => changeInputValue(e, columnName)}></Input>
                        </FormGroup>
                )}
            })}
            <FormGroup className="d-flex flex-row btn-group btnbtn">
                <Button className="btn m-1 btn-confirm" color="primary" onClick={() =>{
                    if (checkIsNotEmpty()){
                        dispatch(addRow(formData))
                        navigate('/')
                    }else{
                        alert('Пустые строки не допускаются для ввода!')
                    }
                }
                }>Confirm</Button>
                <Button className="btn m-1 btn-cancel" color="danger" onClick={() => navigate('/')}>Cancel</Button>
            </FormGroup>
        </Form>
    )
}