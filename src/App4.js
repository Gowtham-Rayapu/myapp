import React from 'react';
import {useMemo, useState} from "react";
export default function App4(){
    const[count, setCount]=useState(0);
    const[flag, setFlag]=useState(10);
    const f1=()=>{
        let i;
        for(i=0; i< flag**2; i++){}
        console.log("result function called");
        return i;
    };
    const result = useMemo(()=>f1(),[flag]);
    //const result = f1();
    return (
        <div>
            <h1>useMemo</h1>
            <button onClick={()=>setCount(count + 1)}>count:{count}</button>
            <button onClick={()=>setFlag(flag+1)}>flag:{flag}</button>
            <p>Result:{result}</p>
        </div>
    );
}


