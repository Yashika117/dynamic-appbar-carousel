import React, { useState } from 'react';
import { Paper, Button, MobileStepper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import './Styles.css';
const CarouselComponent = (props) => {
    const { featuredProducts } = props;
    const [currentIndex, setCurrentIndex] = useState(2);
    const useStyles = makeStyles({
        root: {
            borderRadius: '5px',
            maxWidth: 550,
        },
        img: {
            overflow: 'hidden',
            display: 'block',
            width: '100%',
        },
        activeDot: {
            '& .MuiMobileStepper-dotActive': {
                width: '18px',
                borderRadius: '3px',
                backgroundColor: '#2596be'
            }
        }
    });
    const classes = useStyles();
    const handleNext = () => {
        setCurrentIndex(currentIndex + 1 === featuredProducts.length ? 0 : currentIndex + 1);
    };
    const handlePrevious = () => {
        setCurrentIndex(currentIndex - 1 < 0 ? featuredProducts.length - 1 : currentIndex - 1);
    };
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };
    const getImage = (carouselLocation) => {
        if (carouselLocation == 'first') {
            if (currentIndex == 0) {
                return featuredProducts?.[featuredProducts?.length - 2]?.imageUrl;
            }
            if (currentIndex == 1) {
                return featuredProducts?.[featuredProducts?.length - 1]?.imageUrl;
            }
            else {
                return featuredProducts?.[currentIndex - 2]?.imageUrl;
            }
        }
        else if (carouselLocation == 'second') {
            if (currentIndex == 0) {
                return featuredProducts?.[featuredProducts?.length - 1]?.imageUrl;
            }
            else {
                return featuredProducts?.[currentIndex - 1]?.imageUrl;
            }
        }
        else if (carouselLocation == 'fourth') {
            if (currentIndex == featuredProducts.length - 1) {
                return featuredProducts?.[0]?.imageUrl;
            }
            else {
                return featuredProducts?.[currentIndex + 1]?.imageUrl;
            }
        }
        else if (carouselLocation == 'fifth') {
            if (currentIndex == featuredProducts.length - 1) {
                return featuredProducts?.[1]?.imageUrl;
            }
            else if (currentIndex == featuredProducts.length - 2) {
                return featuredProducts?.[0]?.imageUrl;
            }
            else {
                return featuredProducts?.[currentIndex + 2]?.imageUrl
            }
        }
    }
    return (
        <Grid container xs={12} style={{ marginTop: '30px' }}>
            <Grid item xs={4} direction="row" style={styles.firstGrid}>
                <div style={styles.firstMainDiv}>
                    <div style={styles.firstDiv1}><img width='50px' height='100px' className={classes.img} style={styles.firstImage1} src={getImage('first')} alt={featuredProducts[currentIndex]?.name} /></div>
                    <div style={styles.firstDiv2}> <img width='100px' height='150px' style={styles.firstImage2} className={classes.img} src={getImage('second')} alt={featuredProducts?.[currentIndex]?.name} /></div>
                </div>
            </Grid>
            <Grid item xs={4}><div className={classes.root}>
                <Paper square elevation={0}>
                    <div style={{ position: 'relative', textAlign: 'center', color: 'white', overflow: 'hidden', borderRadius: '15px', zIndex: 1000 }}>
                        <img className={classes.img} src={featuredProducts?.[currentIndex]?.imageUrl} alt={featuredProducts?.[currentIndex]?.name} />
                        <div style={styles.mainImage}>
                            {featuredProducts?.[currentIndex]?.name}
                        </div>
                    </div>
                </Paper>
                <MobileStepper
                    steps={featuredProducts.length}
                    position="static"
                    variant="dots"
                    activeStep={currentIndex}
                    style={styles.stepper}
                    className={classes.activeDot}
                    nextButton={
                        <Button size="small" onClick={handleNext}>
                            <ArrowForwardIcon style={styles.forwardIcon} />
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handlePrevious}>
                            <ArrowBackIcon style={styles.backwardIcon} />
                        </Button>
                    }
                />
            </div></Grid>
            <Grid item xs={4} direction="row" style={styles.thirdGrid}>
                <div style={styles.secondMainDiv}>
                    <div style={styles.secondDiv1}><img width='100px' height='150px' style={styles.secondImage1} className={classes.img} src={getImage('fourth')} alt={featuredProducts?.[currentIndex]?.name} /></div>
                    <div style={styles.secondDiv2}><img width='50px' height='100px' style={styles.secondImage2} className={classes.img} src={getImage('fifth')} alt={featuredProducts?.[currentIndex]?.name} /></div>
                </div>
            </Grid>
        </Grid>
    )
}
const styles = {
    firstGrid: { display: 'flex', alignItems: 'center', justifyContent: 'right' },
    thirdGrid: { display: 'flex', alignItems: 'center', justifyContent: 'left' },
    secondMainDiv: { display: 'flex', alignContent: 'center', displayDirection: 'row', justifyContent: 'left' },
    secondDiv1: { position: 'relative', right: '80px', overflow: 'hidden', borderRadius: '13px', zIndex: 500 },
    secondDiv2: { position: 'relative', right: '120px', top: '25px', overflow: 'hidden', borderRadius: '10px' },
    secondImage1: { marginBottom: '2rem', borderRadius: '10px' },
    secondImage2: { borderRadius: '10px' },
    stepper: { display: 'flex', justifyContent: 'center', backgroundColor: 'white' },
    forwardIcon: { color: 'gray', fontSize: '17px', padding: '2px' },
    backwardIcon: { color: 'gray', fontSize: '17px', padding: '2px' },
    mainImage: {
        height: '35px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '95%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    firstMainDiv: { display: 'flex', alignContent: 'center', displayDirection: 'row', justifyContent: 'right' },
    firstDiv1: { position: 'relative', left: '120px', top: '25px', overflow: 'hidden', borderRadius: '10px' },
    firstDiv2: { position: 'relative', left: '80px', overflow: 'hidden', borderRadius: '13px' },
    firstImage1: { borderRadius: '10px' },
    firstImage2: { marginBottom: '2rem', borderRadius: '10px' }
}
export default CarouselComponent;