import React from "react";
import { Box, Paper, TextField, Typography } from '@mui/material';
import Image from 'next/image'
import DwellingIconFilled from '../../public/DwellingIcon-Filled.jpg'


const BalanceCheckerCard = () => {
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
            // width: '242.29px',
            paddingTop: '19px',
            paddingLeft: '20px'
        }}>
        Enter your card number to check its balance.
      </Typography>
        </Paper>
        <TextField 
        sx={{
            backgroundColor: "#FFFFFF",
            borderTopStyle: 'solid',
            borderTopWidth: '1px',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            '& .css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root': {
                borderRadius: 0,
                borderBottomLeftRadius: '10px',
                borderBottomRightRadius: '10px',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '23.5px',
                fontFamily: 'var(--font-roboto-mono)',
            }
        }}
        />
        </Box>
      );
}

export default BalanceCheckerCard