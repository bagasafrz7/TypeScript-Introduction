function getData(value: any) {
    return value;
}

console.log(getData("Bagas").length);
console.log(getData(2022));

// Generic
function myData<T>(value: T) {
    return value;
}

console.log(myData("Bagas").length);
console.log(myData(2022));

const arrwFunction = <T, >(value: T) => {

}