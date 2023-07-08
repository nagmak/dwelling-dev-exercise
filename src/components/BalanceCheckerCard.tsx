import React, { useState } from "react";
import { Box, Paper, TextField, Typography } from '@mui/material';
import Image from 'next/image'
import DwellingIconFilled from '../../public/DwellingIcon-Filled.jpg'

const BalanceCheckerCard = () => {
  const [cardValue, setCardValue] = useState('')
  const handleCardValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  handleNumberDisplay(event.target.value)
  }

  const handleNumberDisplay = (input: any) => {
    const re = /[a-zA-Z&@*~$()[;\)\:\]\?{\}\-_+=`\^\|\\\\/\"',.!#%<>](.*)/g;
    if (re.test(input)) {
      input = input.replace(re, ''); // removes all the letters and special characters
    }
    let numbersWithoutSpaces = [...input.split(' ').join('')] // Remove old space

    if (numbersWithoutSpaces.length > 16) {
      //If entered value has a length greater than 16 then take only the first 16 digits
      numbersWithoutSpaces = numbersWithoutSpaces.slice(0, 16);
    }
        const creditCard: any = [] // Create card as array
        numbersWithoutSpaces.forEach((val, index) => {
            if (index % 4 === 0 && index !== 0) creditCard.push(' ') // Add space
            creditCard.push(val)
        })
        const finalCreditCard = creditCard.join('') // Transform card array to string
        setCardValue(finalCreditCard);
  }



    return (
        <Box
          sx={{
            borderRadius: "10px",
            border: 'solid',
            borderWidth: '1px',
            borderColor: "#000000",
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            width: 345
          }}
        >
        <Paper elevation={0} sx={{
            backgroundColor: "#FDF4EC",
            height: 134.87,
            margin: 0,
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
        }}> 
          <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            paddingTop: '19px',
            justifyContent: 'space-between',
          }}
        >
        <Typography sx={{
            fontWeight: 700,
            fontSize: '28px',
            lineHeight: '32.81px',
            width: '242.29px',
            paddingLeft: '20px'
        }}>
        Balance Checker
      </Typography>
      <Box
          sx={{
            paddingRight: '20px'
          }}
        >
      <Image
        src={DwellingIconFilled}
        alt={`Dwelling Icon Filled`}
       />
       </Box>
       </Box>
      <Typography sx={{
            fontFamily: 'var(--font-roboto-mono)',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '21px',
            paddingTop: '19px',
            paddingLeft: '20px'
        }}>
        Enter your card number to check its balance.
      </Typography>
        </Paper>
        <TextField 
        type="text"
        placeholder="xxxx xxxx xxxx xxxx"
        value={cardValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleCardValueChange(event)}
        sx={{
            backgroundColor: "#FFFFFF",
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            "& .Mui-focused": {
              opacity: '100% !important'
            },
            '& input[type=number]::-webkit-inner-spin-button': {
              appearance: 'none',
              margin: 0
            },
            '& input[type=number]::-webkit-outer-spin-button': { 
              appearance: 'none', 
              margin: 0
            },
            '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
                borderRadius: 0,
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '23.5px',
                fontFamily: 'var(--font-roboto-mono)',
                color: '#292929',
                opacity: '50%',
            },

        }}
        />
        </Box>
      );
}

export default BalanceCheckerCard