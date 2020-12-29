import React from 'react';
import Link from '../Link';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';


const facebook = '/assets/facebook.svg';
const twitter = '/assets/twitter.svg';
const instagram = '/assets/instagram.svg';
const footerAdornment = '/assets/footerAdornment.svg';


const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: 'relative',
    },
    adornment: {
        width: '25rem',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21em',
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em',
        },
    },
    mainContainer: {
        position: 'absolute',
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
        textDecoration: 'none',
    },
    gridItem: {
        margin: '3em',
    },
    icon: {
        height: '4em',
        width: '4em',
        [theme.breakpoints.down('xs')]: {
            height: '2.5em',
            width: '2.5em',
        },
    },
    socialContainer: {
        position: 'absolute',
        marginTop: '-6em',
        right: '1.5em',
        [theme.breakpoints.down('xs')]: {
            right: '0.6em',
        },
    },
}));

const Footer = ({ setValue, setSelectedIndex }) => {

    const classes = useStyles();

    return (
        <footer className={ classes.footer }>

            <Hidden mdDown>

                <Grid
                    container
                    className={ classes.mainContainer }
                    justify="center"
                >

                    <Grid item
                          className={ classes.gridItem }
                    >

                        <Grid container
                              direction="column"
                              spacing={ 2 }
                              style={{margin: 0}}
                        >
                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/"
                                  onClick={ () => setValue(0) }
                            >
                                Home
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item
                          className={ classes.gridItem }
                    >
                        <Grid container
                              direction="column"
                              spacing={ 2 }
                              style={{margin: 0}}
                        >
                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/services"
                                  onClick={ () => {
                                      setValue(1);
                                      setSelectedIndex(0);
                                  } }
                            >
                                Services
                            </Grid>

                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/customsoftware"
                                  onClick={ () => {
                                      setValue(1);
                                      setSelectedIndex(1);
                                  } }
                            >
                                Custom Software Development
                            </Grid>
                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/mobileapps"
                                  onClick={ () => {
                                      setValue(1);
                                      setSelectedIndex(2);
                                  } }
                            >
                                iOS/Android App Development
                            </Grid>
                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/websites"
                                  onClick={ () => {
                                      setValue(1);
                                      setSelectedIndex(3);
                                  } }
                            >
                                Website Development
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item
                          className={ classes.gridItem }
                    >
                        <Grid container
                              direction="column"
                              spacing={ 2 }
                              style={{margin: 0}}
                        >
                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/revolution"
                                  onClick={ () => setValue(2) }
                            >
                                Revolution
                            </Grid>
                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/revolution"
                                  onClick={ () => setValue(2) }
                            >
                                Vision
                            </Grid>
                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/revolution"
                                  onClick={ () => setValue(2) }
                            >
                                Technology
                            </Grid>
                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/revolution"
                                  onClick={ () => setValue(2) }
                            >
                                Process
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item
                          className={ classes.gridItem }
                    >
                        <Grid container
                              direction="column"
                              spacing={ 2 }
                              style={{margin: 0}}
                        >
                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/about"
                                  onClick={ () => setValue(3) }
                            >
                                About
                            </Grid>
                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/about"
                                  onClick={ () => setValue(3) }
                            >
                                History
                            </Grid>
                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/about"
                                  onClick={ () => setValue(3) }
                            >
                                Team
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item
                          className={ classes.gridItem }
                    >
                        <Grid container
                              direction="column"
                              spacing={ 2 }
                              style={{margin: 0}}
                        >
                            <Grid item
                                  className={ classes.link }
                                  component={ Link }
                                  href="/contact"
                                  onClick={ () => setValue(4) }
                            >
                                Contact
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

            </Hidden>

            <img
                src={ footerAdornment }
                alt="black decorative slash"
                className={ classes.adornment }
            />

            <Grid container
                  className={ classes.socialContainer }
                  justify="flex-end"
             >
                <Grid item
                      component={ 'a' }
                      href="http://www.facebook.com"
                      rel="noopener noreferrer"
                      target="_blank"
                >
                    <img src={ facebook }
                         alt="facebook logo"
                         className={ classes.icon }

                    />
                </Grid>
                <Grid item
                      component={ 'a' }
                      href="http://www.twitter.com"
                      rel="noopener noreferrer"
                      target="_blank"
                >
                    <img src={ twitter }
                         alt="twitter logo"
                         className={ classes.icon }
                    />
                </Grid>
                <Grid item
                      component={ 'a' }
                      href="http://www.instagram.com"
                      rel="noopener noreferrer"
                      target="_blank"
                >
                    <img src={ instagram }
                         alt="instagram logo"
                         className={ classes.icon }

                    />
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;