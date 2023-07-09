/**
 * File to keep utility functions that can be reused for Balance Checker
 */

export const handleNumberDisplay = (input: any) => {
    const re = /[a-zA-Z&@*~$()[;\)\:\]\?{\}\-_+=`\^\|\\\\/\"',.!#%<>](.*)/g;
    if (re.test(input)) {
      input = input.replace(re, ''); // removes all the letters and special characters
    }
    let numbersWithoutSpaces = [...input.split(' ').join('')] // Remove old space

    if (numbersWithoutSpaces.length > 16) {
      //If entered value has a length greater than 16 then take only the first 16 digits
      numbersWithoutSpaces = numbersWithoutSpaces.slice(0, 16);
    }
    console.log(numbersWithoutSpaces)
        const creditCard: any = [] // Create card as array
        numbersWithoutSpaces.forEach((val, index) => {
            if (index % 4 === 0 && index !== 0) creditCard.push(' ') // Add space
            creditCard.push(val)
        })
        return creditCard.join('') // Transform card array to string
  }

  export const sortByBalanceDesc = (list: any) => {
    return list.sort((a: any, b: any) => (b.balance - a.balance))
  };