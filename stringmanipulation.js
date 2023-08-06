function manipulationString(string, callback){
    const manipulatedString = string.toUpperCase();
    const logString = () => {
        console.log(`The manipulated string is: ${manipulatedString}`);
    };
callback(string);
return logString;
};

// Example

const printString = (string) => {
    console.log(`The string is: ${string}`);
};

const myCallback = manipulationString("hello world", printString);
myCallback();