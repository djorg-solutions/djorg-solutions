import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button, Hidden, Box } from '@material-ui/core';
import ParticleField from 'react-particles-webgl';
import { config } from '../constant/particle.config';
import clsx from 'clsx';
import Image from 'next/image'
import { useTranslate } from '../../../providers/I18n';


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
    bannerButtonMobile: {
        marginRight: '2em',
        marginTop: '3em',
        padding: '8px',
        borderRadius: '8px',
        fontSize: '12px'
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

    const i18n = useTranslate();
    const classes = useStyles();

    const BannerImage = ({ width, height }) => <Image src={'/banner-round.png'} width={width} height={height} className={classes.bannerImage} />;
    const BannerButtons = ({isMobile}) => <>
        <Button href="#about" variant={'contained'} className={clsx(isMobile?classes.bannerButton:classes.bannerButtonMobile, classes.moreButton)}>{i18n.t('bannerSeeMoreButton')}</Button>
        <Button href="#services" variant={'outlined'} className={clsx(isMobile?classes.bannerButton:classes.bannerButtonMobile, classes.serviceButton)}>{i18n.t('bannerServicesButton')}</Button>
    </>;
    const BannerPrimaryText = ({isMobile}) => <Typography variant={isMobile ? 'h6' : 'h3'}>{i18n.t('bannerPrimaryText')}</Typography>;
    const BannerSecondaryText = ({isMobile}) => <Typography variant={'subtitle1'} style={isMobile ? { fontSize: '12px', lineHeight: '20px' } : { fontSize: '16px', lineHeight: '28px' }}>{i18n.t('bannerSecondaryText')}</Typography>;


    return (
        <section className={classes.banner}>

            <ParticleField config={config} />

            <Grid container className={classes.bannerContainer} justify={'center'}>
                <Grid item md={7} sm={12}>
                    <Hidden smDown>
                        <Grid container>
                            <Box mt={6}>
                                <Grid item xs={12}>
                                    <BannerPrimaryText />
                                </Grid>
                                <Grid item xs={12}>
                                    <BannerSecondaryText />
                                </Grid>
                                <Grid item xs={12}>
                                    <BannerButtons isMobile/>
                                </Grid>
                            </Box>
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid container justify={'center'}>
                        <Box mt={-6}>
                            <BannerImage width={200} height={200} />
                        </Box>
                        </Grid>
                    </Hidden>
                </Grid>
                <Grid item md={5} sm={12}>
                    <Hidden smDown>
                        <Grid container justify={'flex-end'}>
                            <BannerImage width={400} height={400} />
                        </Grid>
                    </Hidden>
                    <Hidden mdUp>
                        <Grid container>
                            <Grid item xs={12}>
                                <BannerPrimaryText isMobile/>
                            </Grid>
                            <Grid item xs={12}>
                                <BannerSecondaryText isMobile/>
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
