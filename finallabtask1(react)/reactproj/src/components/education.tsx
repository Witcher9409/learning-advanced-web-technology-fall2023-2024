import { ReactNode } from "react";

interface Props{
    Education: string,
    
    
    //myfunc: (item: string) => void
    //children: ReactNode
}

function Edu ({Education}: Props){

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
                <h1>Educational qualifications</h1>
                <h2>Certificates: {Education}</h2>
                
                
                
            </div>
        </>
    )
}

export default Edu;