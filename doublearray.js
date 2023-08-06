function doubleArray(arr, callback){
    const doubleArr = []; 
    arr.forEach((num) => {
        doubleArr.push(callback(num));
    });
    return doubleArr;
}

const double = (num) => num*2;
 
const number = [1,2,3,4,5,6,7];
const doubledNumber = doubleArray(number, double);
console.log(doubledNumber);