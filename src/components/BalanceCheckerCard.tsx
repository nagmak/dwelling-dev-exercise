import React, { useState } from "react";
import { Box, Paper, TextField, Typography, Button, Avatar } from '@mui/material';
import CreditCardList from "./CreditCardList";
import { handleNumberDisplay, sortByBalanceDesc } from '@/utils/balanceCheckerUtils'

interface CreditCard {
  cardValue: string;
  balance: number;
  endingValue: string;
}

const BalanceCheckerCard = () => {
    let initialState: CreditCard = {
      cardValue: '',
      balance: 0,
      endingValue: ''
    }
    const [cardValue, setCardValue] = useState('')
    const [creditCardList, setCreditCardList] = React.useState([initialState])

    const handleCardValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let finalCreditCard = handleNumberDisplay(event.target.value)
      setCardValue(finalCreditCard);
    }

    const checkCreditCardValidity = () => {
      let cardValueWithoutSpaces = cardValue.replaceAll(' ', '');
      if (cardValueWithoutSpaces.length === 16) {
        console.log('card is valid!')
        let endingValue = cardValueWithoutSpaces.substring(12, 16)
        let fakeBalance = parseInt(cardValueWithoutSpaces.substring(14, 16))
        let creditCard = {
          cardValue: cardValue,
          balance: fakeBalance,
          endingValue: endingValue
        }
        console.log(creditCard)
        addCreditCardToList(creditCard)
      }
    }

    const addCreditCardToList = (card: CreditCard) => {
      const newList = creditCardList.concat(card);
      let sortedList = sortByBalanceDesc(newList)
      setCreditCardList(sortedList);
      console.log(sortedList)
    }

    return (
      <>
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
       <Avatar variant="square" sx={{ width: '25.23px', height: '23.51px' }} alt="Dwelling Icon Filled" src="DwellingIcon-Filled.jpg" />
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
        <Button variant="contained"
        sx={{
            width: 345,
            height: 50,
            borderRadius: '10px',
            marginTop: '20px',
            marginBottom: '20px',
            backgroundColor: '#000000',
            ":hover": {
                backgroundColor: '#C2B5AA',
                color: '#141414'
            }
        }}
        onClick={() => checkCreditCardValidity()}
        >Check</Button>
        {creditCardList.map((card, index) => (
          card.cardValue && card.cardValue !== '' ? (
            <CreditCardList key={`creditcard--${index}`} creditCard={card}/>
          ): null
        ))}
        
        </>
      );
}

export default BalanceCheckerCard