// literal type
type Status = 123
const status: Status = 123

// basic union
type Identity = string | number 
const id : Identity = "123"


// literal union

type Role = "admin" | "user"


const userRole : Role = "user"

console.log(userRole)
// object union