import React from "react";
import { Button } from '@mui/material';
import BalanceCheckerCard from "./BalanceCheckerCard";


const BalanceCheckerForm = () => {
    return (
        <>
        <BalanceCheckerCard />
        <Button variant="contained"
        sx={{
            width: 345,
            height: 50,
            borderRadius: '10px',
            marginTop: '20px',
            backgroundColor: '#000000',
            ":hover": {
                backgroundColor: '#C2B5AA',
                color: '#141414'
            }
        }}
        >Check</Button>
        </>
      );
}

export default BalanceCheckerForm