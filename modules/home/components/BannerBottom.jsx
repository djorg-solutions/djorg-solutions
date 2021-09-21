import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    title: {
        color: 'white',
        fontSize: '2em',
        position: 'relative',
        fontWeight: 'bold',
    },
    description: {
        marginTop: '1em',
        color: 'white',
        marginBottom: '4em'
    }
}));

const BannerBottom = () => {

    const classes = useStyles();
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <section
            style={{
                background: `linear-gradient(to bottom, rgba(25, 45, 55, 0.51) 16%, rgb(3, 24, 34) 115%), url(/stats_bg.jpg) no-repeat center`,
                backgroundSize: 'cover',
                position: 'relative',
                padding: '80px 0',
                minHeight: '300px',
                boxShadow: '0px 0 3px rgba(0, 0, 0, 0.8)'
            }}>
            <Box px={isMobile ? 2 : 10}>
                <Grid container>
                    <Grid xs={12} md={4} item>
                        <Typography variant={'h1'} className={classes.title}>{'Some of Our Company Real Facts.'}</Typography>
                        <Typography variant={'body2'} className={classes.description}>{'Lorem ipsum dolor, sit amet consectet et adipis icing elit. Ab commodi iure minus laboriosam placeat quia, dolorem animi. Eveniet repudiandae, iure et..'}</Typography>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
}

export default BannerBottom;

