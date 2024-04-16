import { useState } from "react";
import Edu from "./education";

function Edulist(){
    const std = ['SSC,HSC,BsC in CSE'];
    //const [count, setCount] = useState(0);
    
   

   

    const testAlert = (item: string)=>{
        alert(item);
    }

    return(
        <>
           <div>
      {std.map((item) => (
        <Edu key={item} Education={item}>
         
        </Edu>
      ))}
    </div>
    </>
  );
}

export default Edulist;