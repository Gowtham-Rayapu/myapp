import react from "react";
import{student,useState}from "react";
export default function App6() {
const [student, setStudent] = useState({});
const [students, setStudents] = useState([]);
const addStudent = () => {
setStudents((prevStudents) => [...prevStudents, student]);
        };
         return (
          <>
            <p>
              <input
                 type="text"
                onChange={(e) =>
                 setStudent((prevStudent) => ({
                    ...prevStudent,
                    ...{ name: e.target.value },
                  }))
                }
                placeholder="Enter Name"
              ></input>
           </p>
           <p>
         <input
                 type="text"
                 onChange={(e) =>
                   setStudent((prevStudent) => ({
                     ...prevStudent,
                     ...{ age: e.target.value },
                   }))
                 }
                 placeholder="Enter Age"
               ></input>
             </p>
             <p>
           <button onClick={addStudent}>Add Student</button>
             </p>
             <div>
               {students &&
                 students.map((value, index) => (
                   <div key={index}>
                     {value.name}-{value.age}
                   </div>
                 ))}
             </div>
           </>
         );
       }
    