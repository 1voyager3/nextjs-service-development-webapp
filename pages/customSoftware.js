import React from 'react';
import Head from 'next/head';
import Link from '../src/Link';
import Lottie from 'react-lottie';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';
import CallToAction from '../src/ui/CallToAction';

// Animations
import documentsAnimation from '../src/animations/documentsAnimation/data';
import scaleAnimation from '../src/animations/scaleAnimation/data.json';
import automationAnimation from '../src/animations/automationAnimation/data.json';
import uxAnimation from '../src/animations/uxAnimation/data';

// IMAGES
const backArrow = '/assets/backArrow.svg';
const forwardArrow = '/assets/forwardArrow.svg';
const lightbulb = '/assets/bulb.svg';
const cash = '/assets/cash.svg';
const stopwatch = '/assets/stopwatch.svg';
const root = '/assets/root.svg';


const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: '40em',
    },
    arrowContainer: {
        marginTop: '0.5em',
    },
    rowContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '1.5em',
            paddingRight: '1.5em',
        },
    },
    itemContainer: {
        maxWidth: '40em',
    },
}));

const CustomSoftware = ({ setValue, setSelectedIndex }) => {
    const classes = useStyles();
    const theme = useTheme();

    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const documentsOptions = {
        loop: true,
        autoplay: false,
        animationData: documentsAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const scaleOptions = {
        loop: true,
        autoplay: false,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const automationOptions = {
        loop: true,
        autoplay: false,
        animationData: automationAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    const uxOptions = {
        loop: true,
        autoplay: false,
        animationData: uxAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <Grid container direction="column">

            {/* SEO */ }
            <Head>
                {/* Title & description tags */ }
                <title key="title">
                    Custom Software Development and Design - Free Estimate
                </title>
                <meta
                    name="description"
                    key="description"
                    content="Cutting-edge custom software development with gorgeous designs from scratch - let us
                     optimize your business, solving problems instead of creating new ones."
                />

                {/* OpenGraph Tags */ }
                <meta
                    property="og:title"
                    key="og:title"
                    content="Bringing West Coast Technology to the Midwest | Custom Software Development"
                />
                <meta
                    property="og:url"
                    key="og:url"
                    content="https://example.com/customsoftware"
                />

                {/* Canonical Tag */ }
                <link
                    href="https://example.com/customsoftware"
                    rel="canonical"
                    key="canonical"
                />
            </Head>

            {/* ========= Custom Software Development Block =========== */ }
            <Grid item container direction="row" justify={ matchesMD ? 'center' : undefined }
                  className={ classes.rowContainer }
                  style={ { marginTop: matchesXS ? '1em' : '2em' } }
            >

                <Hidden mdDown>
                    <Grid item className={ classes.arrowContainer }
                          style={ { marginRight: '1em', marginLeft: '-3.5em' } }
                    >
                        <IconButton style={ { backgroundColor: 'transparent' } }
                                    component={ Link } href="/services"
                                    onClick={ () => setSelectedIndex(0) }
                        >
                            <img src={ backArrow } alt="back to Services pages" />
                        </IconButton>
                    </Grid>
                </Hidden>

                <Grid item container direction="column" className={ classes.heading }>
                    <Grid item>
                        <Typography variant="h1" align={ matchesMD ? 'center' : undefined }>
                            Custom Software Development
                        </Typography>
                        <Typography variant="body1" paragraph align={ matchesMD ? 'center' : undefined }>
                            Whether we’re replacing old software or inventing new solutions,
                            Demo Development is here to help your business tackle technology.
                        </Typography>
                        <Typography variant="body1" paragraph align={ matchesMD ? 'center' : undefined }>
                            Using regular commercial software leaves you with a lot of stuff
                            you don’t need, without some of the stuff you do need, and
                            ultimately controls the way you work. Without using any software
                            at all you risk falling behind competitors and missing out on huge
                            savings from increased efficiency.
                        </Typography>
                        <Typography variant="body1" paragraph align={ matchesMD ? 'center' : undefined }>
                            Our custom solutions are designed from the ground up with your
                            needs, wants, and goals at the core. This collaborative process
                            produces finely tuned software that is much more effective at
                            improving your workflow and reducing costs than generalized
                            options.
                        </Typography>
                        <Typography variant="body1" paragraph align={ matchesMD ? 'center' : undefined }>
                            We create exactly what you what, exactly how you want it.
                        </Typography>
                    </Grid>
                </Grid>

                <Hidden mdDown>
                    <Grid item className={ classes.arrowContainer }>
                        <IconButton style={ { backgroundColor: 'transparent' } }
                                    component={ Link } href="/mobileapps"
                                    onClick={ () => setSelectedIndex(2) }
                        >
                            <img src={ forwardArrow } alt="Forward to iOS/Android App Development Page" />
                        </IconButton>
                    </Grid>
                </Hidden>

            </Grid>

            {/* ========= Second Development Block =========== */ }
            <Grid item container direction="row" justify="center"
                  style={ { marginTop: '15em', marginBottom: '20em' } }
                  className={ classes.rowContainer }
            >

                {/* -------- Save Energy Section ------------- */ }
                <Grid item container direction="column" md alignItems="center" style={ { maxWidth: '40em' } }>
                    <Grid item>
                        <Typography variant="h4">
                            Save Energy
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={ lightbulb } alt="lightbulb" />
                    </Grid>
                </Grid>

                {/* -------- Save Time Section ------------- */ }
                <Grid item container direction="column" md alignItems="center"
                      style={ {
                          maxWidth: '40em',
                          marginTop: matchesMD ? '10em' : 0,
                          marginBottom: matchesMD ? '10em' : 0,
                      } }
                >
                    <Grid item>
                        <Typography variant="h4">
                            Save Time
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={ stopwatch } alt="stopwatch" />
                    </Grid>
                </Grid>

                {/* -------- Save Money Section ------------- */ }
                <Grid item container direction="column" md alignItems="center" style={ { maxWidth: '40em' } }>
                    <Grid item>
                        <Typography variant="h4">
                            Save Money
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src={ cash } alt="cash" />
                    </Grid>
                </Grid>
            </Grid>

            {/* ========= Third Development Block =========== */ }
            <Grid item container
                  direction={ matchesMD ? 'column' : "row" }
                  justify={ matchesMD ? "center" : "space-between" } alignItems={ matchesMD ? 'center' : undefined }
                  className={ classes.rowContainer }
                  style={ { display: matchesMD ? 'grid' : undefined } }
            >

                {/* -------- Digital Documents & Data Section ------------- */ }
                <Grid item container md direction={ matchesSM ? 'column' : 'row' }
                      className={ classes.itemContainer }
                      style={ { marginBottom: matchesMD ? '15em' : 0 } }
                >
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={ matchesSM ? 'center' : undefined }>
                                Digital Documents & Data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={ matchesSM ? 'center' : undefined }>
                                Reduce Errors. Reduce Waste. Reduce Costs.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={ matchesSM ? 'center' : undefined }>
                                Billions are spent annually on the purchasing, printing, and
                                distribution of paper. On top of the massive environmental
                                impact this has, it causes harm to your bottom line as well. </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={ matchesSM ? 'center' : undefined }>
                                By utilizing digital forms and documents you can remove these
                                obsolete expenses, accelerate your communication, and help the
                                Earth.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item md>
                        <Lottie options={ documentsOptions } isStopped={ true }
                                style={ { maxHeight: 275, maxWidth: 275, minHeight: 250 } }
                        />
                    </Grid>

                </Grid>

                {/* -------- Scale Section ------------- */ }
                <Grid item container md direction={ matchesSM ? 'column' : 'row' }
                      className={ classes.itemContainer }
                >

                    <Grid item md>
                        <Lottie options={ scaleOptions } isStopped={ true }
                                style={ { maxHeight: 260, maxWidth: 280 } }
                        />
                    </Grid>

                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={ matchesSM ? 'center' : 'right' }>
                                Scale
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={ matchesSM ? 'center' : 'right' }>
                                Whether you’re a large brand, just getting started, or taking
                                off right now, our application architecture ensures pain-free
                                growth and reliability.
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>

            {/* ========= Root Block =========== */ }
            <Grid item container direction="row" style={ { marginTop: '20em', marginBottom: '20em' } }
                  className={ classes.rowContainer }
            >
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <img src={ root } alt="tree with roots extending out"
                             height={ matchesSM ? "300em" : "450em" } width={ matchesSM ? "300em" : "450em" }
                        />
                    </Grid>
                    <Grid item className={ classes.itemContainer }>
                        <Typography variant="h4" align="center" gutterBottom>
                            Root-Cause Analysis
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            Many problems are merely symptoms of larger, underlying issues.
                        </Typography>
                        <Typography variant="body1" align="center" paragraph>
                            We can help you thoroughly examine all areas of your business to
                            develop a holistic plan for the most effective implementation of
                            technology.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/* ========= Fifth Development Block =========== */ }
            <Grid item container direction={ matchesMD ? 'column' : "row" }
                  justify={ matchesMD ? "center" : "space-between" } alignItems={ matchesMD ? 'center' : undefined }
                  className={ classes.rowContainer }
                  style={ { display: matchesMD ? 'grid' : undefined } }
            >

                {/* -------- Automation Section ------------- */ }
                <Grid item container md direction={ matchesSM ? 'column' : 'row' }
                      className={ classes.itemContainer }
                      style={ { marginBottom: matchesMD ? '15em' : 0 } }
                >
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={ matchesSM ? 'center' : undefined }>
                                Automation
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={ matchesSM ? 'center' : undefined }>
                                Why waste time when you don’t have to?
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={ matchesSM ? 'center' : undefined }>
                                We can help you identify processes with time or event based
                                actions which can now easily be automated.
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={ matchesSM ? 'center' : undefined }>
                                Increasing efficiency increases profits, leaving you more time
                                to focus on your business, not busywork.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item md>
                        <Lottie options={ automationOptions } isStopped={ true }
                                style={ { maxHeight: 290, maxWidth: 280 } }
                        />
                    </Grid>

                </Grid>

                {/* -------- User Experience Design Section ------------- */ }
                <Grid item container md direction={ matchesSM ? 'column' : 'row' }
                      className={ classes.itemContainer }
                >

                    <Grid item md>
                        <Lottie options={ uxOptions } isStopped={ true }
                                style={ { maxHeight: 310, maxWidth: 155 } }
                        />
                    </Grid>

                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={ matchesSM ? 'center' : 'right' }>
                                User Experience Design
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={ matchesSM ? 'center' : 'right' }>
                                A good design that isn’t usable isn’t a good design.
                            </Typography>
                            <Typography variant="body1" paragraph align={ matchesSM ? 'center' : 'right' }>
                                So why are so many pieces of software complicated, confusing,
                                and frustrating?
                            </Typography>
                            <Typography variant="body1" paragraph align={ matchesSM ? 'center' : 'right' }>
                                By prioritizing users and the real ways they interact with
                                technology we’re able to develop unique, personable experiences
                                that solve problems rather than create new ones.
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>

            {/* ========= CallToAction Block =========== */ }
            <Grid item style={ { marginTop: '20em' } }
            >
                <CallToAction setValue={ setValue } />
            </Grid>

        </Grid>
    );
};


export default CustomSoftware;








