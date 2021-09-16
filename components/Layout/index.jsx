import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: '16px',
        padding: '0 12px',
        '&:hover': {
            color: '#49c0b6'
        }
    },
    menuIcon: {
        color: '#d2d2d2',
    },
    title: {
        flexGrow: 1,
    },
    languageButton: {
        backgroundColor: '#49c0b6',
        color: 'white',
        textTransform: 'uppercase',
        '&:hover': {
            backgroundColor: '#124f8f'
        }
    },
}));

function Layout({ children }) {

    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200,
        target: process.browser ? window : undefined,
    });

    return (
        <>
            <div className={classes.root}>
                <AppBar position="fixed" color={trigger?'primary':'transparent'} style={{ boxShadow: 'none', color: 'white' }}>
                    <Toolbar>
                        <Grid container spacing={1}>
                            <Grid item xs={3}>
                                <Typography variant="h6" className={classes.title}>
                                    D'JORG SOLUTIONS
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Hidden smDown>
                                    <Grid container justify={'center'}>
                                        <Button href="#" className={classes.menuButton}>
                                            {'Home'}
                                        </Button>
                                        <Button href="#" className={classes.menuButton}>
                                            {'About'}
                                        </Button>
                                        <Button href="#" className={classes.menuButton}>
                                            {'Service'}
                                        </Button>
                                        <Button href="#" className={classes.menuButton}>
                                            {'Contact'}
                                        </Button>
                                    </Grid>
                                </Hidden>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container justify={'flex-end'}>
                                    <Hidden smDown>
                                        <Button variant={'contained'} className={classes.languageButton} color="inherit">Language</Button>
                                    </Hidden>
                                    <Hidden mdUp>
                                        <IconButton className={classes.menuIcon}>
                                            <MenuIcon fontSize={'large'} />
                                        </IconButton>
                                    </Hidden>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </div>
            {children}
        </>
    );
}

export default Layout;