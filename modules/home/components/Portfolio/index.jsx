import React from 'react';
import { Grid, Box, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { LinkPreview } from '@dhaiwat10/react-link-preview';

const useStyles = makeStyles(() => ({
    titleMain: {
        fontWeight: 'bold',
        fontSize: '2.2em',
        paddingBottom: '1em',
        position: 'relative',
    },
    desc: {
        width: '70%',
        textAlign: 'center',
        lineHeight: '28px',
        color: '#767575',
    }
}));

const Portfolio = () => {

    const classes = useStyles();
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Box px={isMobile ? 2 : 10} py={3} id="projects">
            <Grid container>
                <Grid xs={12} item>
                    <Grid container justify={'center'}>
                        <Typography variant={'h4'} className={classes.titleMain}>{'Projects'}</Typography>
                    </Grid>

                    <Grid container justify={'center'}>
                        <Typography variant={'body2'} className={classes.desc}>{'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'}</Typography>
                    </Grid>
                </Grid>
                <Grid xs={12} item>
                    <Grid container justify={'center'}>
                        <Grid item md={4} xs={12}>
                            <Box p={2}>
                                <LinkPreview url='https://pana-shopping.com' height={350} backgroundColor={'#f7f8f9'} borderColor={'transparent'} descriptionLength={150} />
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Box p={2}>
                                <LinkPreview url='https://mandao.app/en' height={350} backgroundColor={'#f7f8f9'} borderColor={'transparent'} descriptionLength={150} />
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12}>
                            <Box p={2}>
                                <LinkPreview url='https://mandao.app/en' height={350} backgroundColor={'#f7f8f9'} borderColor={'transparent'} descriptionLength={150} />
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Portfolio;
