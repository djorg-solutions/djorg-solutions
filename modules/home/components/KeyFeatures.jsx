import React from 'react';
import { Grid, Box, Typography, useMediaQuery, Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Image from 'next/image'
import clsx from 'clsx';
import CloudDoneIcon from '@material-ui/icons/CloudDone';

const useStyles = makeStyles(() => ({
    titleMain: {
        fontWeight: 'bold',
        fontSize: '2.2em',
        paddingBottom: '1em',
        position: 'relative',
    },
    key: {
        backgroundColor: '#fff',
        borderRadius: '10px 10px 0  0',
        boxShadow: '0 25px 98px 0 rgb(19 19 19 / 3%)',
        height: '158px',
    },
    keysContainer: {
        backgroundColor: '#f7f7f7',
        paddingTop: '2em'
    },
    key1: {
        borderTop: '2px solid #ff0000'
    },
    key2: {
        borderTop: '2px solid #89ba16'
    },
    key3: {
        borderTop: '2px solid #0077c8'
    },
    key4: {
        borderTop: '2px solid #ff4f81'
    }
}));

function KeyFeatures() {

    const classes = useStyles();
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Box px={isMobile ? 2 : 10} className={classes.keysContainer}>
            <Grid container>
                <Grid xs={12} item>
                    <Grid container justify={'center'}>
                        <Typography variant={'h4'} className={classes.titleMain}>{'Our Key features'}</Typography>
                    </Grid>
                </Grid>
                <Grid xs={12} md={4} item>
                    <Grid container justify={'center'}>
                        <Image src={'/mobile.png'} width={370} height={391} />
                    </Grid>
                </Grid>
                <Grid xs={12} md={8} item>
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            <Box p={1}>
                                <Paper className={clsx(classes.key, classes.key1)}>
                                    <Box pt={3}>
                                        <Grid container>
                                            <Grid item xs={2}>
                                                <Grid container justify={'center'}>
                                                    <CloudDoneIcon fontSize={'large'} style={{ color: '#ff0000' }} />
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Typography variant={'h6'}><strong>{'Data Backup'}</strong></Typography>
                                                <Typography variant={'body1'} style={{ marginTop: '1em' }}>{'Lorem ipsum dolor sit amet, dolor elit, sed eiusmod tempor init sit.'}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box p={1}>
                                <Paper className={clsx(classes.key, classes.key2)}>

                                </Paper>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box p={1}>
                                <Paper className={clsx(classes.key, classes.key3)}>

                                </Paper>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box p={1}>
                                <Paper className={clsx(classes.key, classes.key4)}>

                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default KeyFeatures;