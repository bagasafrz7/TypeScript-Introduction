import iLaptop from "./iLaptop";
import * as keyboard from "./keyboard"
import { b } from "./keyboard"

class baseLaptop<T> implements iLaptop<T> {
    name: string;
    type: T;
    withNumeric: boolean;
    withTouchButton: boolean;
    
    constructor(
        name: string, 
        type: T, 
        withNumeric: boolean, 
        withTouch: boolean
        ) {
            this.name = name;
            this.type = type;
            this.withNumeric = withNumeric;
            this.withTouchButton = withTouch;
    }

    a(): void {
        console.log(keyboard.a());
    }

    b():void {
        console.log(b());
    }
}

export default baseLaptop;