import { ReactNode } from "react";

interface Props{
    Planguage: string,
    
    
    //myfunc: (item: string) => void
    //children: ReactNode
}

function Skill ({Planguage}: Props){

    // let name: string;
    // let id: number;
    // let email: string;

    // props.name = 'alamin';
    // props.id = 1234;
    // props.email = 'alamina@aiub.edu'
    //myfunc(name);

    return(
        <>
            <div>
                <h1>Programming language skills</h1>
                <h2>Language skills: {Planguage}</h2>
                
                
                
            </div>
        </>
    )
}

export default Skill;