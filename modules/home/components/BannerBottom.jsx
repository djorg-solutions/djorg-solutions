import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useTranslate } from '../../../providers/I18n';
import AppsIcon from '@material-ui/icons/Apps';
import PeopleIcon from '@material-ui/icons/People';
import WebIcon from '@material-ui/icons/Web';

const useStyles = makeStyles(() => ({
    title: {
        color: 'white',
        fontSize: '1.8em',
        position: 'relative',
        fontWeight: 'bold',
        marginBottom: '0.5em'
    },
    description: {
        marginTop: '1em',
        color: 'white',
        marginBottom: '4em'
    },
    facts: {
        fontSize: '20px',
        color: 'white',
    },
    iconFacts: {
        position: 'relative',
        top: '7px',
        marginRight: '10px',
        fontSize: '30px'
    }
}));

const BannerBottom = () => {

    const i18n = useTranslate();
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
                        <Typography variant={'h1'} className={classes.title}>{i18n.t('bannerBottomPrimaryTitle')}</Typography>
                        <Typography variant={'body2'} className={classes.facts}>
                            <AppsIcon className={classes.iconFacts} />
                            <strong>{'+10 '}</strong>{i18n.t('factAppsText')}
                        </Typography>
                        <Typography variant={'body2'} className={classes.facts}>
                            <PeopleIcon className={classes.iconFacts} />
                            <strong>{'+5 '}</strong>{i18n.t('factClientsText')}
                        </Typography>
                        <Typography variant={'body2'} className={classes.facts}>
                            <WebIcon className={classes.iconFacts} />
                            <strong>{'+15 '}</strong>{i18n.t('factWebText')}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </section>
    );
}

export default BannerBottom;

