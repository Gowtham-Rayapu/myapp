import React from "react";
import{setStudent, useState} from "react";
export default function App6() {
const [student, setStudent] = useState({ name: "John", age: 34 });
console.log(Date());
return (
<>
<p>
<input type="text" onChange={(e) => setStudent((prevState) => ({...prevState, ...{ name: e.target.value },
}))
}
placeholder="Enter Name"></input></p><p>
<input type="text" onChange={(e) => setStudent((prevState) => ({...prevState,...{ age: e.target.value },}))
     }
placeholder="Enter Age" ></input></p>
<span>{student.name}-{student.age}</span></>
 );
}
    