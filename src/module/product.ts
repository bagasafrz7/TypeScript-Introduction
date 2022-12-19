import Asus from "./asus";
import MacBook from "./macbook";

let asus = new Asus("ROG", true, true);
console.log("asus: ", asus);

let macbook = new MacBook("Pro", false, false);
console.log("macbook: ", macbook);
macbook.a();
macbook.b();