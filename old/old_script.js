/* element objects*/
const convertBtn = document.getElementById("convert-btn"); //submit btn
const number = document.getElementById("number"); //input numbers
const resultDiv = document.querySelector(".result-div"); //result - divider
const result = document.getElementById("output"); //result to display



const outputStyle = {
    invalidBorderColor : resultDiv.style.borderColor = "red", 
    invalidBackgroundColor: resultDiv.style.backgroundColor = "rgb(250,106,106",
    validBorderColor: resultDiv.style.borderColor = "#fcf4d9", 
    validBackgroundColor: resultDiv.style.backgroundColor = "00aaa0"
}

const romanNumeral = {
    1: "I", 
    4: "IV", 
    5: "V",
    9: "IX", 
    10: "X", 
    40: "XL", 
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
}

/*
when convert button click : 
- check if user input is empty or invalid input based on that show message to output container
- if valid input - convert arabic numerals to roman numerals
 */
convertBtn.addEventListener("click", ()=>{
    resultDiv.style.display = "block"; 
    if(!number.value)
    {
        outputStyle.invalidBorderColor; 
        outputStyle.invalidBackgroundColor; 
        result.textContent = "Please enter a valid number.";
        return;
    }
    else
    if(number.value < 1)
    {
        outputStyle.invalidBorderColor; 
        outputStyle.invalidBackgroundColor; 
        result.textContent = "Please enter a number greater than or equal to 1."; 
        return;
    }else if(number.value >= 4000)
    { 
        outputStyle.invalidBorderColor; 
        outputStyle.invalidBackgroundColor; 
        result.textContent = "Please enter a number less than or equal to 3999."
        return;
    }

    outputStyle.validBorderColor; 
    outputStyle.validBackgroundColor; 
    convertArabicToRomanNumerals(number.value); 
});

//helper function to convert arabic numerals to roman numerals 
//accepts user input number that to be convert to roman numerals as an argument
const convertArabicToRomanNumerals = (number) =>{

    let digit = 1; 
    let remainder = 0;
    //whilei number and remainder is not equal to 0 keep iterating
    while(number !== 0 || remainder !==0 )
    {
        //get digit by digit
        remainder = number%10; //get the remainder
        number = Math.floor(number/10); //get the integer
        console.log(remainder);

        switch(true)
        {
            case (remainder < 4 && digit===1): 
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[1])}`;
                remainder = 0; 
                break; 
            case (remainder===4 && digit ===1): 
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[4])}`;
                remainder = 0; 
                break;
            case (remainder===5 && digit === 1):
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[5])}`;
                remainder = 0;           
                break;
            case (remainder>5 && remainder<9 && digit ===1): 
                result.textContent = `${generateRomanNumerals(1, romanNumeral[5])}${generateRomanNumerals(remainder-5,romanNumeral[1])}`;
                remainder = 0;         
                break;
            case (remainder===9 && digit ===1): 
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[9])}`;
                remainder = 0;
                break;
            case (remainder>=1 && remainder <4 && digit === 2): 
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[10])}` + result.textContent;
                remainder = 0;
                break;      
            case (remainder>=4 && remainder <5 && digit === 2): 
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[40])}` + result.textContent;
                remainder = 0;
                break;
            case (remainder===5  && digit === 2): 
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[50])}` + result.textContent;
                remainder = 0;
                break;       
            case (remainder>5  && remainder<9 && digit === 2): 
                result.textContent = `${generateRomanNumerals(1, romanNumeral[50])}${generateRomanNumerals(remainder-5,romanNumeral[10])}`+result.textContent;
                remainder = 0;
                break;
            case (remainder ===9 && digit === 2): 
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[90])}`+result.textContent;
                remainder = 0;
                break;
            case (remainder >=1 && remainder<4 && digit === 3): 
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[100])}`+result.textContent;
                remainder = 0;
                break;
            case (remainder ===4 && digit === 3): 
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[400])}`+result.textContent;
                remainder = 0;
                break;
            case (remainder ===5 && digit === 3): 
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[500])}`+result.textContent;
                remainder = 0;
                break;
            case (remainder >5 && remainder<9 &&  digit === 3): 
                result.textContent = `${generateRomanNumerals(1, romanNumeral[500])}${generateRomanNumerals(remainder-5, romanNumeral[100])}`+result.textContent;
                remainder = 0;
                break;
            case (remainder ===9 && digit ===3): 
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[900])}`+result.textContent;
                remainder = 0;
                break;

            case (remainder >= 1 && digit ===4): 
                result.textContent = `${generateRomanNumerals(remainder, romanNumeral[1000])}`+result.textContent;
                remainder = 0;
                break;
            default:   
                
        }
        digit++;

    }

}


//Helper function
/**
 * Generates a string of repeated Roman numerals based on the given value and numeral character.
 * Returns the numeral character unchanged for values 4, 5, or 9; otherwise, repeats the numeral.
 */
const generateRomanNumerals = (value, romanNumeral) =>{
    let roman = ""; 
    if(value === 4 || value===5 || value===9)
    {
        return romanNumeral;
    }else 
    {
        for(let i=0; i<value; i++)
        {
            roman += romanNumeral ;
        }
    }


    return roman;
}