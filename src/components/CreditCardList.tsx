import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const CreditCardList = (props: any) => {
    let { creditCard } = props;
    console.log(creditCard)
    return (
        <List sx={{ width: 345 }}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    sx={{ 
                        fontFamily: 'var(--font-roboto-mono)',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '23px',
                        paddingLeft: 0,
                        paddingRight: '8px'
                    }}
                  >
                    Card ending in {creditCard?.endingValue ? creditCard?.endingValue: null}
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    sx={{
                        fontFamily: 'var(--font-roboto-mono)',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '23px',
                        paddingRight: '8px'
                     }}
                  >
                    Balance: {creditCard?.balance >= 0 ? creditCard?.balance: null}
                  </Typography>
                </React.Fragment>
              }
            />
            <ListItemAvatar sx={{ marginTop: '3px', minWidth: 'unset' }}>
              <Avatar alt="delete" src="icons8-trash-1.jpg" sx={{ width: '24px', height: '24px' }} />
            </ListItemAvatar>
          </ListItem>
          <Divider variant="fullWidth" component="li" sx={{ borderColor: '#000000'}}/>
        </List>
      );
}
export default CreditCardList;