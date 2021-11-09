import React from 'react';
import { Grid, Box, useMediaQuery, Typography } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CardService from './components/CardService'
import { Laptop, Smartphone, Code, Storage } from '@material-ui/icons';
import { useTranslate } from '../../../../providers/I18n';


const useStyles = makeStyles(() => ({
    titleMain: {
        fontWeight: 'bold',
        fontSize: '2.2em',
        paddingBottom: '1em',
        position: 'relative',
    },
}));


const Services = () => {

    const i18n = useTranslate();
    const classes = useStyles();
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Box p={isMobile ? 2 : 10} id="services">
            <Grid container>
                <Grid xs={12} item>
                    <Grid container justify={'center'}>
                        <Typography variant={'h4'} className={classes.titleMain}>{i18n.t('servicesTitle')}</Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify={'center'}>
                        <Grid item md={3}>
                            <CardService
                                color={"#fbb034"}
                                text={i18n.t('service1Description')}
                                icon={<Laptop fontSize="large" style={{ color: '#fbb034' }} />}
                            />
                        </Grid>
                        <Grid item md={3}>
                            <CardService
                                color={"#7d3f98"}
                                text={i18n.t('service2Description')}
                                icon={<Smartphone fontSize="large" style={{ color: '#7d3f98' }} />}
                            />
                        </Grid>
                        <Grid item md={3}>
                            <CardService
                                color={"#0077c8"}
                                text={i18n.t('service3Description')}
                                icon={<Code fontSize="large" style={{ color: '#0077c8' }} />}
                            />
                        </Grid>
                        <Grid item md={3}>
                            <CardService
                                color={"#CE181E"}
                                text={i18n.t('service4Description')}
                                icon={<Storage fontSize="large" style={{ color: '#CE181E' }} />}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Services;
