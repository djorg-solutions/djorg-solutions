import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Dialog from '@material-ui/core/Dialog';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { useTranslate } from '../../../providers/I18n';

const useStyles = makeStyles((theme) => ({
    listItem: {
        textAlign: 'center',
        color: '#124f8f',
        textTransform: 'uppercase'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
}));

const MenuDialog = ({ open, handleClose, changeLanguage, locale }) => {

    const i18n = useTranslate();
    const classes = useStyles();

    const goTo = id => {
        document.location = id;
        handleClose();
    }

    return (
        <Dialog onClose={handleClose} fullWidth open={open}>
            <List>
                <ListItem button className={classes.listItem} onClick={() => goTo('#')}>
                    <ListItemText primary={i18n.t('menu.home')} />
                </ListItem>
                <ListItem button className={classes.listItem} onClick={() => goTo('#about')}>
                    <ListItemText primary={i18n.t('menu.about')} />
                </ListItem>
                <ListItem button className={classes.listItem} onClick={() => goTo('#services')}>
                    <ListItemText primary={i18n.t('menu.service')} />
                </ListItem>
                <ListItem button className={classes.listItem} onClick={() => goTo('#projects')}>
                    <ListItemText primary={i18n.t('projects')} />
                </ListItem>
            </List>
            <Divider />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingBottom: '1em', paddingTop: '1em' }}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="outlined-age-native-simple">{locale==='es'?'Idioma': 'Language'}</InputLabel>
                    <Select
                        native
                        style={{padding: '5px'}}
                        inputProps={{
                            name: 'language',
                            id: 'filled-age-native-simple',
                            style: {padding: '8px 0px 5px 10px'}
                        }}
                        value={locale}
                        label={locale==='es'?'Idioma': 'Language'}
                        onChange={e=>changeLanguage(e.target.value)}
                    >
                        <option value={'es'}>{'Español'}</option>
                        <option value={'en'}>{'English'}</option>
                    </Select>
                </FormControl>
            </div>
        </Dialog>
    );
}

export default MenuDialog;
