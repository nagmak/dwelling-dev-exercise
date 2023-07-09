import React, { useState } from "react";
import { Box, Paper, TextField, Typography, Button, Avatar } from '@mui/material';
import CreditCardList from "./CreditCardList";
import { handleNumberDisplay, sortByBalanceDesc, getBalance } from '@/utils/balanceCheckerUtils'

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
    const [cardValue, setCardValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [creditCardList, setCreditCardList] = React.useState([initialState]);

    const handleCardValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      let finalCreditCard = handleNumberDisplay(event.target.value)
      setCardValue(finalCreditCard);
    }

    const checkCreditCardValidity = async() => {
      let cardValueWithoutSpaces = cardValue.replaceAll(' ', '');
      if (cardValueWithoutSpaces.length === 16) {
        const endingValue = cardValueWithoutSpaces.substring(12, 16)
        const calculatedBalance = await getBalance(cardValueWithoutSpaces);
        let creditCard = {
          cardValue: cardValue,
          balance: calculatedBalance,
          endingValue: endingValue
        } 
        addCreditCardToList(creditCard)
      } else {
        setIsValid(false)
      }
    }

    const addCreditCardToList = (card: CreditCard) => {
      let newCardList: any = []
      const found = creditCardList.some(creditCard => creditCard.cardValue === card.cardValue);
      if (!found) {
        setIsValid(true);
        newCardList = creditCardList.concat(card);
        let sortedList = sortByBalanceDesc(newCardList)
        setCreditCardList(sortedList);
      } 
    }

    const removeCreditCardFromList = (card: CreditCard) => {
      const newCardList = creditCardList.filter((creditCard) => creditCard.cardValue !== card.cardValue);
      let sortedList = sortByBalanceDesc(newCardList)
      setCreditCardList(sortedList)
    }


    return (
      <>
        <Box
          sx={{
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
            border: 'solid',
            borderTopWidth: '1px',
            borderBottomWidth: 0,
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
        error={!isValid}
        type="text"
        placeholder="xxxx xxxx xxxx xxxx"
        value={cardValue}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleCardValueChange(event)}
        sx={{
            backgroundColor: "#FFFFFF",
            borderStyle: 'solid',
            borderWidth: '1px',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            borderColor: "#000000",
            "& .Mui-error": {
              color: '#FF4D00',
              borderColor: "#FF4D00",
            },
            "& .Mui-focused": {
              opacity: '100% !important',
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
            '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
              borderColor: "#FF4D00",
            }
        }}
        />
        </Box>
        { !isValid ? (
          <Typography sx={{
            fontFamily: 'var(--font-roboto-mono)',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '21px',
            paddingTop: '19px',
            paddingLeft: '20px',
            color: '#FF4D00',
            textAlign: 'center'
          }}>
          Invalid Number
        </Typography>
        ): null}
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
            <CreditCardList key={`creditcard--${index}`} creditCard={card} onClickTrash={removeCreditCardFromList}/>
          ): null
        ))}
        
        </>
      );
}

export default BalanceCheckerCard