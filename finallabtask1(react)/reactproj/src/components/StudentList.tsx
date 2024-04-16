import { useState } from "react";
import Student from "./Student";

function StudentList(){
    const std = ['Md Abu Zayed Khan'];
    const [count, setCount] = useState(0);
    
    

    const testAlert = (item: string)=>{
        alert(item);
    }

    return(
        <>
         <div style={{ display: "flex" }}>
                
                <div style={{ width: "30%", padding: "20px" }}>
                    <img src="src/face.jpg" alt="face" style={{ maxWidth: "100%" }} />
                </div>
            <div>
                {   
                    std.map((item)=>(
                        <Student key={item} name={item} id={"21-45021-2"} email="sahil.azkhan47@gmail.com">
                            <h2>CGPA: 3.71</h2>
                        </Student>
                    ))
                }
                
            </div>
            </div>
        </>
    )
}

export default StudentList;