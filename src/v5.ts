//? type assertion


// "as" syntax
// একটা ভেরিয়েবল যার টাইপ 'any' বা 'unknown'
let someValue: any = "Hello Bangladesh";

// TypeScript তো জানে না এটা স্ট্রিং নাকি নাম্বার। 
// তাই length বের করতে গেলে সে এরর দিতে পারে। 
// তখন আমরা 'as' দিয়ে বলে দিই:
let strLength: number = (someValue as string).length;
// non-null assertion




// constant assertion`     

// সাধারণ অবজেক্ট (TypeScript ভাববে এগুলো হয়তো পরে চেঞ্জ হবে)
let myCar = {
  brand: "Toyota",
  wheels: 4
};
myCar.brand = "Honda"; // অনায়াসেই চেঞ্জ করা যাবে।

// কিন্তু 'as const' দিলে:
let myFixedCar = {
  brand: "Toyota",
  wheels: 4
} as const;

// এখন myFixedCar একদম Read-Only হয়ে গেছে। 
// myFixedCar.brand = "Honda"; // Error! আপনি এটা চেঞ্জ করতে পারবেন না।