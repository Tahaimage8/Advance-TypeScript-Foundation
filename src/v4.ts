// top types

let x: any = "hello Everyone"

x = true



const something : unknown = "hello world"

// core types

 let something2 : unknown
const num: number =123;

let nothing : void;
something2 = nothing

// nullish types 

interface User{ 
    name : string,

}

type loginUser = User | null;

const loggedUsed: loginUser= null;


// bottom type