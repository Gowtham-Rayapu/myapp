import React from 'react';
import {useState,useEffect} from "react";
export default function App9(){
const[runs,setRuns]=useState(0);
const[wickets,setWickets]=useState(0);
//console.log("component loaded");
useEffect(()=>{
    if (wickets>0) console.log(`wickets:${wickets}.Better Luck Next Time`);
},[wickets]);

useEffect(()=>{
    if (runs>0) console.log(`Good Job! score:${runs}`);
},[runs]);

return(
    <>
    <button onClick={()=> setRuns((prevState)=> prevState+1)}>Runs({runs})</button>
    <button onClick={()=> setWickets((prevState)=> prevState+1)}>wickets({wickets})</button>
    </>
);
}
