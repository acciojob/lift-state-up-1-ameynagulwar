import React from "react";




const Child = ({changeModal}) => {
    return(
        <div className="child">
            <button onClick={changeModal(true)}>Show Modal</button>
        </div>
    )
}

export default Child;