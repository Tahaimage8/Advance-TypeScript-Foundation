// type alias vs interface













//? interface is generally connected to objects

//? type Alias is more connected to literals unions types primitives



type ID = number;


// interface ID  number

type Role = "Admin" | "Member";

//! interface "admin" | "Member"


interface User{
name : string,
id : ID,
role: "Admin" | "Member"
}

const user : User ={
    id: 12,
    name : "Ta",
    role : "Admin",
}