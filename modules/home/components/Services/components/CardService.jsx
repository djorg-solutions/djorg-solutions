import React from 'react';
import { Box, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    cardContent: {
        border: '1px solid #ddd',
        position: 'relative',
        borderRadius: '6px',
        '&:hover': {
            border: props => `1px solid ${props.color}`,
        },
        height: '100%'
    },
    serviceIcon: {
        position: 'absolute',
        left: '-35px',
        top: '30px',
        cursor: 'default',
        background: '#fff',
        '&:hover': {
            background: '#fff',
        }
    },
    serviceDesc: {
        fontWeight: 600,
        fontSize: '17px',
        lineHeight: '30px'
    }
}));

const CardService = ({ color, text, icon }) => {

    const classes = useStyles({ color });

    return (
        <Box mx={4} py={2} className={classes.cardContent}>
            <IconButton className={classes.serviceIcon}>
                {icon}
            </IconButton>
            <Box pl={4} pr={1} py={2}>
                <Typography className={classes.serviceDesc}>{text}</Typography>
            </Box>
        </Box>
    );
}

export default CardService;
