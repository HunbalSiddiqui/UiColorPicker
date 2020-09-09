import React from 'react'
import './ColorBox.css'
export default function colorBox(props) {
    // {console.log(props.background)}
    return (
        <div className="ColorBox flex" style={{backgroundColor:`${props.srcColor}`}}>
            <h3 style={{color:`white`}}>#34125</h3>
        </div>
    )
}
