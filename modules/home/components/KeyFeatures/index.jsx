import React from 'react';
import { Grid, Box, Typography, useMediaQuery, Paper } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Image from 'next/image'
import CloudDoneIcon from '@material-ui/icons/CloudDone';
import GroupIcon from '@material-ui/icons/Group';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import CardKey from './components/CardKey';
import { useTranslate } from '../../../../providers/I18n';

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
        paddingTop: '2em',
        paddingBottom: '5em'
    },
}));

const KeyFeatures = () => {

    const i18n = useTranslate();
    const classes = useStyles();
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Box px={isMobile ? 2 : 10} className={classes.keysContainer}>
            <Grid container>
                <Grid xs={12} item>
                    <Grid container justify={'center'}>
                        <Typography variant={'h4'} className={classes.titleMain}>{i18n.t('keyFeaturesTitle')}</Typography>
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
                            <CardKey
                                color={"#ff0000"}
                                icon={<CloudDoneIcon fontSize={'large'} style={{ color: '#ff0000' }} />}
                                primaryText={i18n.t('key1PrimaryText')}
                                secondaryText={i18n.t('key1SecondaryText')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <CardKey
                                color={"#89ba16"}
                                icon={<GroupIcon fontSize={'large'} style={{ color: '#89ba16' }} />}
                                primaryText={i18n.t('key2PrimaryText')}
                                secondaryText={i18n.t('key2SecondaryText')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <CardKey
                                color={"#0077c8"}
                                icon={<TimelapseIcon fontSize={'large'} style={{ color: '#0077c8' }} />}
                                primaryText={i18n.t('key3PrimaryText')}
                                secondaryText={i18n.t('key3SecondaryText')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                        <CardKey
                                color={"#ff4f81"}
                                icon={<LiveHelpIcon fontSize={'large'} style={{ color: '#ff4f81' }} />}
                                primaryText={i18n.t('key4PrimaryText')}
                                secondaryText={i18n.t('key4SecondaryText')}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default KeyFeatures;
