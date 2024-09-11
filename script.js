//Element objects 
const convertBtn = document.getElementById("convert-btn"); 
const number = document.getElementById("number"); 
const resultDiv = document.querySelector(".result-div"); 
const result = document.getElementById("output"); 

//styling color of ouptut
const outputStyle = {
    invalid: {
        borderColor: "red", 
        backgroundColor: "rgb(250,106, 106)"
    }, 
    valid: {
        borderColor: "#fcf4d9", 
        backgroundColor: "#00aaa0"
    }

};

//Roman numeral mapping
const romanNumeralMap = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
];


//convert button click event 
convertBtn.addEventListener("click", ()=>{
    resultDiv.style.display = "block"; 
    const inputValue = parseInt(number.value, 10); //getting the user number
    if(isNaN(inputValue))
    {
        resultDiv.style.borderColor = outputStyle.invalid.borderColor;
        resultDiv.style.backgroundColor = outputStyle.invalid.backgroundColor;
        result.textContent = "Please enter a valid number. " ;
        return;
    }
    else if(inputValue < 1 || inputValue >= 4000)
    {
        resultDiv.style.borderColor = outputStyle.invalid.borderColor;
        resultDiv.style.backgroundColor = outputStyle.invalid.backgroundColor;
        result.textContent = inputValue < 1 ? "Please enter a number greater than or equal to 1. " : "Please enter a number less than or equal to 3999.";
        return;
    }

    resultDiv.style.borderColor = outputStyle.valid.borderColor;
    resultDiv.style.backgroundColor = outputStyle.valid.backgroundColor;
    result.textContent = convertArabicToRomanNumerals(inputValue);
})


//convert arabic numberals to roman numerals 
const convertArabicToRomanNumerals = (number) =>{
    let roman = ""; 
    for(const {value, symbol} of romanNumeralMap)
    {
        while(number >= value)
        {
            roman += symbol; 
            number -= value; 

        }
    }
    return roman; 
}