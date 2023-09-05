import React from "react";

function Reply(){
    return(
        <h1>Successfully</h1>
    )
}
function NoReply(){
    return(
        <h1>NotSuccessfuly</h1>
    )
}
export default function Msg(props) {
const  isMsg1 = props.isMsg;
if(isMsg1){

    return <Reply />
}
  return <NoReply />  
}
