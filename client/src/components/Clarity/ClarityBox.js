import React from "react"
import "./ClarityBox.css"

const ClarityBox = props => (
    <div className="clarity-databox">
        <i className="fas fa-adjust"/>
        <p className="clarity-heading">Clarity</p>
        <p className="clarity-data">{props.clarity}</p>
        <p className="clarity-defintion">{"<10 is good"}</p>
    </div>
)

export default ClarityBox