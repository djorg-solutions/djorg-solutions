import React from 'react';
import { Grid, Box, Typography, useMediaQuery, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    key: {
        backgroundColor: '#fff',
        borderRadius: '10px 10px 0  0',
        boxShadow: '0 25px 98px 0 rgb(19 19 19 / 3%)',
        height: '158px',
    },
}));

const CardKey = ({ color, icon, primaryText, secondaryText }) => {

    const classes = useStyles();

    return (
        <Box p={1}>
            <Paper className={classes.key} style={{ borderTop: `2px solid ${color}` }}>
                <Box pt={3}>
                    <Grid container>
                        <Grid item xs={2}>
                            <Grid container justify={'center'}>
                                {icon}
                            </Grid>
                        </Grid>
                        <Grid item xs={10}>
                            <Typography variant={'h6'}><strong>{primaryText}</strong></Typography>
                            <Typography variant={'body1'} style={{ marginTop: '0.2em' }}>{secondaryText}</Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
}

export default CardKey;
