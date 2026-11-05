//?  type alias vs interface

//? interface is generally connected to objects

//? type Alias is more connected to literals unions types primitives


//* type
type ID = number;


// interface ID  number

type Role = "Admin" | "Member";

//! interface "admin" | "Member"


interface User {
    name: string,
    id: ID,
    role: "Admin" | "Member"
}

const user: User = {
    id: 12,
    name: "Ta",
    role: "Admin",
}

//? Interface

interface food {
    species: string,

}


interface Cat extends food {
    breed: string,
}

const cat: Cat = {
    breed: "normal",
    species: "Cat"
}

//* type alias

type vehicle = {
    brand: string
}

type Car = vehicle & {
    model: string;
}

const car: Car = {
    model: "Toyota",
    brand: "2019"

}