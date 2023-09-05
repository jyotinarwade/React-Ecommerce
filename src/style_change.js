import React from "react";
import { useEffect } from "react";

function Event_Effect_hook(){

    useEffect(()=>{
        setTimeout(()=>{
            document.getElementById('first').style.color="deepink"


        }, 3000);
    });

    return(
        <>
            <h1 id='first' style={{color:"red"}}> Hello All</h1>
            
        </>
    )
}
export default Event_Effect_hook