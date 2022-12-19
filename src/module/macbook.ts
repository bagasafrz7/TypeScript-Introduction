import baseLaptop from "./baseLaptop";

class MacBook<T> extends baseLaptop<T> {
    constructor(type: T, withNumeric: boolean, withTouch: boolean) {
            super("MacBook", type, withNumeric, withTouch);
        }
}

export default MacBook;