function convertFahrToCelsius(fahrenheit){
    switch(convertFahrToCelsius) {
        case (typeof fahrenheit === 'number'): 
        const fTemp = fahrenheit
        const fToCel = (fTemp - 32) * 5 / 9;
        const message = fTemp+ " is " + fToCel.toFixed(4) + "."
        console.log(message);
        break;

        case (typeof fahrenheit === 'string'):
            const fTem = parseInt(fahrenheit)
            const fToCe = (fTem - 32) * 5 / 9;
            const messag = fTem+ " is " + fToCe.toFixed(4) + "."
            console.log(messag);
            break;

        case (Array.isArray(fahrenheit)):
            console.log(`${fahrenheit} is not a valid number but a/an array.`);
            break;

        default:
            console.log(`${fahrenheit} is not a valid number but a/an object`)    
    }
}


convertFahrToCelsius(67);
