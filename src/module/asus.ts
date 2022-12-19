import baseLaptop from "./baseLaptop";

class asus<T> extends baseLaptop<T> {
    constructor(type: T, withNumeric: boolean, withTouch: boolean) {
            super("Asus", type, withNumeric, withTouch);
        }
}

export default asus;