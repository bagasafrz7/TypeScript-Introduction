export class User {
    // public name: string;

    // constructor(name: string) {
    //     this.name = name;
    // }
    
    // constructor(public name: string, private age: number) {}

    name: string;
    constructor(name: string, public age: number) {
        this.name = name;
    }

    setName(value: string): void {
        this.name = value;
    }

    getName = ():string => {
        return this.name;
    }
}

let user =  new User("Bagas", 21);
// console.log(user);

// public = bisa diakses disemua class / dari luar class
// protected = hanya bisa di akses dari class tersebut, dan kelas turunannya
// private = hanya bisa di akses dari class tersebut

class Admin extends User {
    read: boolean = true;
    write: boolean = true;
    phone: string;
    private _email: string = "";
    static getRoleName: string = "Admin";

    constructor(name: string, age: number, phone: string) {
        super(name, age);
        this.phone = phone;
    }

    static getNameRole () {
        return "User"
    }

    getRole(): { read: boolean, write: boolean} {
        return {
            read: this.read,
            write: this.write
        }
    }

    set email(value: string) {
        if(value.length < 5) {
            this._email = "Email is too short"
        } else {
            this._email = value
        }
    }

    get email():string {
        return this._email;
    }
}

// let admin = new Admin("Bagas", 21, "0832423432");
// admin.getName();
// admin.getRole();
// admin.setName("dsa");
// admin.phone;
// admin.email = "admin@example.com";
// console.log(admin);

let admin = Admin.getNameRole();
console.log(admin);
