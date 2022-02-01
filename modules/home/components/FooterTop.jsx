import React from 'react';
import { Box, Button, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from 'next/link';
import { useTranslate } from '../../../providers/I18n';


const useStyles = makeStyles(() => ({
    titleFooter: {
        fontWeight: 'bold',
        fontSize: '1.8em',
        paddingBottom: '1em',
        position: 'relative',
        color: 'white'
    },
    footerTop: {
        background: '#1a1919'
    },
    socialIcon: {
        color: '#999',
        margin: '20px',
        cursor: 'pointer',
        '&:hover': {
            color: '#6f6d6d'
        }
    }
}));


const FooterTop = () => {

    const i18n = useTranslate();
    const classes = useStyles();
    const { breakpoints } = useTheme();
    const isMobile = useMediaQuery(breakpoints.down('md'));

    return (
        <Box px={isMobile ? 2 : 10} pt={6} className={classes.footerTop}>
            <Grid container>
                <Grid item md={6} xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant={'h4'} className={classes.titleFooter}>{i18n.t('contactInfoTitle')}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List className={classes.footerList}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AddLocationIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText style={{ color: 'white' }} primary={i18n.t('addressLabel')} secondary={<span style={{ color: '#999' }}>{'Fort Laudardale, Florida, USA'}</span>} />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <WhatsAppIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <a style={{ textDecoration: 'none' }} href="https://wa.me/17867454368" target="__blank">
                                        <ListItemText style={{ color: 'white' }} primary="WhatsApp" secondary={<span style={{ color: '#999' }}>{'+1 (786) 745-4368'}</span>} />
                                    </a>
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <EmailIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <a style={{ textDecoration: 'none' }} href="mailto://djorg.solutions@gmail.com">
                                        <ListItemText style={{ color: 'white' }} primary={i18n.t('emailLabel')} secondary={<span style={{ color: '#999' }}>{'djorg.solutions@gmail.com'}</span>} />
                                    </a>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid md={3} xs={12} item>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant={'h4'} className={classes.titleFooter}>{i18n.t('linksFooterTitle')}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <List className={classes.footerList}>
                                <ListItem>
                                    <Button href="#">
                                        <ListItemText style={{ color: '#999' }} primary={i18n.t('menu.home')} />
                                    </Button>
                                </ListItem>

                                <ListItem>
                                    <Button href="#about">
                                        <ListItemText style={{ color: '#999' }} primary={i18n.t('menu.about')} />
                                    </Button>
                                </ListItem>


                                <ListItem>
                                    <Button href="#services">
                                        <ListItemText style={{ color: '#999' }} primary={i18n.t('menu.service')} />
                                    </Button>
                                </ListItem>

                                <ListItem>

                                    <Button href="#projects">
                                        <ListItemText style={{ color: '#999' }} primary={i18n.t('menu.projects')} />
                                    </Button>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid md={3} xs={12} item>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant={'h4'} className={classes.titleFooter}>{i18n.t('socialFooterTitle')}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Link href="https://twitter.com/djorg_solutions" passHref>
                                <a target="_blank">
                                    <TwitterIcon className={classes.socialIcon} />
                                </a>
                            </Link>
                            <Link href="https://www.linkedin.com/" passHref>
                                <a target="_blank">
                                    <LinkedInIcon className={classes.socialIcon} />
                                </a>
                            </Link>
                            <Link href="https://github.com/djorg-solutions" passHref>
                                <a target="_blank">
                                    <GitHubIcon className={classes.socialIcon} />
                                </a>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    );
}

export default FooterTop;
