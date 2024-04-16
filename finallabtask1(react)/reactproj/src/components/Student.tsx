import { ReactNode } from "react";

interface Props{
    name: string,
    id: string,
    email: string,
    //myfunc: (item: string) => void
    children: ReactNode
}

function Student ({name, id, email, children}: Props){

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
                <h1>Personal Information</h1>
                <h2>Name: {name}</h2>
                <h2>ID: {id}</h2>
                <h2>Email: {email}</h2>
                {children}
            </div>
        </>
    )
}

export default Student;