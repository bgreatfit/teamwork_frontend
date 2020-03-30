import React from "react"
let Spinner = (props)=>{
    return(
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>
    )
};
Spinner.defaultProps = {
    message:"Loading"
};
export default Spinner;