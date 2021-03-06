import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Image from 'next/image';
import { useTranslate } from '../../../providers/I18n';


const useStyles = makeStyles(() => ({
    titleMain:{
        fontWeight: 'bold',
        fontSize: '2.2em',
        paddingBottom: '1em',
        position: 'relative',
    },
    text1:{
        fontSize: '20px',
        lineHeight: '28px',
        fontWeight: '600',
    },
    text2: {
        margin: 0,
        padding: 0,
        fontSize: '16px',
        lineHeight: '28px',
        color: '#767575',
        marginTop: '1.5rem'
    }
}));


function About() {

    const i18n = useTranslate();
    const classes = useStyles();
    const {breakpoints} = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Box p={isMobile?2:10} id="about">
            <Grid container>
                <Grid xs={12} md={6} item>
                    <Box p={2}>
                        <Typography variant={'h4'} className={classes.titleMain}>{i18n.t('aboutUsTitle')}</Typography>
                        <Typography variant={'h6'} className={classes.text1}>{i18n.t('aboutUsPrimaryText')}</Typography>
                        <Typography variant={'body2'} className={classes.text2}>{i18n.t('aboutUsSecondaryText')}</Typography>
                    </Box>
                </Grid>
                <Grid xs={12} md={6} item>
                    <Grid container justify={'center'}>
                        <Image src={'/about.png'} width={500} height={367} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default About;