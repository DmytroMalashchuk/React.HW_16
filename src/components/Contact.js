import React from "react"
const Contact = (props) => {
    return(
        <div className="contact">
            <p className="info-contact">{props.firstName} {props.lastName}, {props.gender}</p>
            <p className="phone">{props.phone}</p>
        </div>
    )
}
export default Contact