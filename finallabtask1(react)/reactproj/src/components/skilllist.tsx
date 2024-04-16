import { useState } from "react";
import Skill from "./skill";

function Skilllist(){
    const std = ['C++,Java,C#'];
    //const [count, setCount] = useState(0);
    
   

   

    const testAlert = (item: string)=>{
        alert(item);
    }

    return(
        <>
           <div>
      {std.map((item) => (
        <Skill key={item} Planguage={item}>
         
        </Skill>
      ))}
    </div>
    </>
  );
}

export default Skilllist;