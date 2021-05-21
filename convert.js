function convertFahrToCelsius (fahrenheit) {
    if (typeof fahrenheit === 'number') {
        const fTemp = fahrenheit
        const fToCel = (fTemp - 32) * 5 / 9;
        const message = fTemp+ " is " + fToCel.toFixed(4) + "."
        console.log(message);
    };  

    if (typeof fahrenheit === 'string') {
        const fTemp = parseInt(fahrenheit)
        const fToCel = (fTemp - 32) * 5 / 9;
        const message = fTemp+ " is " + fToCel.toFixed(4) + "."
        console.log(message);
    };

    if (Array.isArray(fahrenheit)){
        console.log(`${fahrenheit} is not a valid number but a/an array.`)
    } else {
        console.log(`${fahrenheit} is not a valid number but a/an object`)
    }
    
}
convertFahrToCelsius();

