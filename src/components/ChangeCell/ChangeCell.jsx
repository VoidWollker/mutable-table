import { useState } from "react"
import { Input } from "reactstrap"

export default function ChangeCell({cellKey, cellData, changeCell}){
    return(<td><Input value={cellData} onChange={e => changeCell(cellKey, e.target.value)}/></td>)
}