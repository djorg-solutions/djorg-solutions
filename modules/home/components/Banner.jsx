import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Hidden } from '@material-ui/core';
import ParticleField from 'react-particles-webgl';
import { config } from '../constant/particle.config';
import clsx from 'clsx';
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundColor: '#0c3866',
        color: 'white',
        width: '100%',
        height: '100vh',
    },
    bannerContainer: {
        position: 'absolute',
        top: '25vh',
        paddingLeft: '4em',
        paddingRight: '4em'
    },
    bannerButton: {
        marginRight: '2em',
        marginTop: '3em',
        padding: '15px',
        borderRadius: '8px'
    },
    moreButton: {
        backgroundColor: '#49c0b6',
        color: 'white',
        textTransform: 'uppercase',
        '&:hover': {
            backgroundColor: '#124f8f'
        }
    },
    serviceButton: {
        borderColor: 'white',
        color: 'white',
        textTransform: 'uppercase',
        '&:hover': {
            backgroundColor: 'white',
            color: '#49c0b6'
        }
    },
    bannerImage: {
        borderRadius: '50%'
    }
}));


function Banner() {

    const classes = useStyles();

    const BannerImage = () => <Image src={'/banner-round.png'} width={400} height={400} className={classes.bannerImage} />;
    const BannerButtons = () => <>
        <Button variant={'contained'} className={clsx(classes.bannerButton, classes.moreButton)}>{'Read More'}</Button>
        <Button variant={'outlined'} className={clsx(classes.bannerButton, classes.serviceButton)}>{'Our Service'}</Button>
    </>;
    const BannerPrimaryText = () => <Typography variant={'h3'}>{'Doing the right thing, at the right time.'}</Typography>;
    const BannerSecondaryText = () => <Typography variant={'subtitle1'} style={{ fontSize: '16px', lineHeight: '28px' }}>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, excepturi. Distinctio accusantium fugit odit? Fugit ipsam nostrum minus alias, expedita voluptatem illo quis id eos quae odio, nobis deleniti delectus? Lorem ipsum dolor sit amet consectetur adipisicing elit.'}</Typography>;


    return (
        <section className={classes.banner}>

            <ParticleField config={config} />

            <Grid container className={classes.bannerContainer}>
                <Grid item md={7} sm={12}>
                    <Hidden smDown>
                        <Grid container>
                            <Grid item xs={12}>
                                <BannerPrimaryText />
                            </Grid>
                            <Grid item xs={12}>
                                <BannerSecondaryText />
                            </Grid>
                            <Grid item xs={12}>
                                <BannerButtons />
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid container justify={'center'}>
                            <BannerImage />
                        </Grid>
                    </Hidden>
                </Grid>
                <Grid item md={5} sm={12}>
                    <Hidden smDown>
                        <Grid container justify={'flex-end'}>
                            <BannerImage />
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid container>
                            <Grid item xs={12}>
                                <BannerPrimaryText />
                            </Grid>
                            <Grid item xs={12}>
                                <BannerSecondaryText />
                            </Grid>
                            <Grid item xs={12}>
                                <BannerButtons />
                            </Grid>
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
        </section>
    );
}

export default Banner;
