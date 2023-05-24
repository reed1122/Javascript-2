import React from "react";

function FunctionClick() {
    function clickHandler() {
        alert("Function button was logged!")
        console.log("Function button was clicked!")
    }
    return (
        <>
        <button onClick={clickHandler}>Function Click</button>
        </>
    );
}

export default FunctionClick;