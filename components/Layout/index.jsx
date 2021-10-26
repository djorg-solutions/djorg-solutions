import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuDialog from './components/MenuDialog';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { useRouter } from 'next/router';
import { useTranslate } from '../../providers/I18n';

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
    languageOption: {
        textTransform: 'uppercase'
    },
    backToTop: {
        position: 'fixed',
        bottom: 10,
        right: 10,
        backgroundColor: '#124f8f',
        '&:hover': {
            backgroundColor: '#1e7ba8'
        }
    }
}));

function Layout({ children }) {

    const classes = useStyles();
    const i18n = useTranslate();
    const router = useRouter();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 200,
        target: process.browser ? window : undefined,
    });

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleMenu = () => {
        setIsMenuOpen(true);
    };

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const changeLanguage = lang => {
        setIsMenuOpen(false);
        router.push(router.asPath, router.asPath, { locale: lang });
    };

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <div className={classes.root}>
                <AppBar position="fixed" color={trigger ? 'primary' : 'transparent'} style={{ boxShadow: 'none', color: 'white' }}>
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
                                            {i18n.t('menu.home')}
                                        </Button>
                                        <Button href="#about" className={classes.menuButton}>
                                            {i18n.t('menu.about')}
                                        </Button>
                                        <Button href="#services" className={classes.menuButton}>
                                            {i18n.t('menu.service')}
                                        </Button>
                                        <Button href="#projects" className={classes.menuButton}>
                                            {i18n.t('menu.projects')}
                                        </Button>
                                    </Grid>
                                </Hidden>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container justify={'flex-end'}>
                                    <Hidden smDown>
                                        <Button
                                            ref={anchorRef}
                                            aria-controls={open ? 'menu-list-grow' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleToggle}
                                            variant={'contained'}
                                            className={classes.languageButton}
                                            color="inherit"
                                        >
                                            {router.locale === 'es' ? 'Español' : 'English'}
                                        </Button>
                                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                                            {({ TransitionProps, placement }) => (
                                                <Grow
                                                    {...TransitionProps}
                                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                                >
                                                    <Paper>
                                                        <ClickAwayListener onClickAway={handleClose}>
                                                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                                <MenuItem className={classes.languageOption} onClick={() => changeLanguage('es')}>{'Español'}</MenuItem>
                                                                <MenuItem className={classes.languageOption} onClick={() => changeLanguage('en')}>{'English'}</MenuItem>
                                                            </MenuList>
                                                        </ClickAwayListener>
                                                    </Paper>
                                                </Grow>
                                            )}
                                        </Popper>
                                    </Hidden>
                                    <Hidden mdUp>
                                        <IconButton className={classes.menuIcon} onClick={handleMenu}>
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
            {
                trigger &&
                <a href="#">
                    <IconButton className={classes.backToTop}>
                        <ExpandLessIcon fontSize="default" style={{ color: 'white' }} />
                    </IconButton>
                </a>
            }
            {isMenuOpen && <MenuDialog open={isMenuOpen} handleClose={closeMenu} changeLanguage={changeLanguage} locale={router.locale} />}
        </>
    );
}

export default Layout;