import React,{useState} from 'react'
import './ColorBox.css'
export default function ColorBox(props) {
    const copyColor = (colorCode) =>{
        setFlag(1)
        window.navigator.clipboard.writeText(colorCode);
        setTimeout(() => {
            setFlag(null)
        }, 3000);
    }
    var [flag,setFlag] = useState(null)
    return (
        <div className="ColorBox flex" id={`${props.srcColor}`} style={{backgroundColor:`${props.srcColor}`}} 
        onClick={(e)=>{copyColor(e.target.id)}}>

            <h3 style={{color:`white`}}  id={`${props.srcColor}`}
            onClick={(e)=>{copyColor(e.target.id)}}>
            {
                flag ?
                 'Copied'
                 :
                 props.srcColor
            }
            </h3>
        </div>
    )
}
