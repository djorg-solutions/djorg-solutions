import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    footer: {
        backgroundColor: '#0f0f0f',
        color: '#999',
        textAlign: 'center',
        padding: '20px 20px'
    }
}));

const Footer = () => {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography>{`© ${new Date().getFullYear()} D'JorG Solutions . All Rights Reserved. Design by D'JorG Solutions`}</Typography>
        </footer>
    );
}

export default Footer;
