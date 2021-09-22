import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    listItem: {
        textAlign: 'center',
        color: '#124f8f',
        textTransform: 'uppercase'
    },
}));
    
const MenuDialog = ({ open, handleClose }) => {

    const classes = useStyles();

    const goTo = id => {
        document.location = id;
        handleClose();
    }

    return (
        <Dialog onClose={handleClose} fullWidth open={open}>
            <List>
                <ListItem button className={classes.listItem} onClick={()=>goTo('#')}>
                    <ListItemText primary={'Home'} />
                </ListItem>
                <ListItem button className={classes.listItem} onClick={()=>goTo('#about')}>
                    <ListItemText primary={'About'} />
                </ListItem>
                <ListItem button className={classes.listItem} onClick={()=>goTo('#services')}>
                    <ListItemText primary={'Service'} />
                </ListItem>
                <ListItem button className={classes.listItem} onClick={()=>goTo('#projects')}>
                    <ListItemText primary={'Projects'} />
                </ListItem>
            </List>
        </Dialog>
    );
}

export default MenuDialog;
