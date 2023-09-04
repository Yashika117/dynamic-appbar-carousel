import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CarouselComponent from './CarouselComponent';
import AppsIcon from '@material-ui/icons/Apps';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Styles.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
    },
    button: {
        '&:hover': {
            color: '#2596be',
        },
    },
    menuBlackBackground: {
        '& .MuiMenu-list': {
            backgroundColor: 'black'
        }
    },
    blackBackground: {
        backgroundColor: 'black',
        color: 'white',
        '&:hover': {
            backgroundColor: 'white',
            color: 'black',
        },
    },
    menuItem: {
        '&:hover': {
            color: 'black',
            backgroundColor: 'white',
        },
    },
}));
const featuredProducts = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        name: '1. Modern Kitchen Utensils'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
        name: '2. Electronic Gadgets'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1582142407894-ec85a1260a46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        name: '3. Sun Glasses'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1589200334106-58b552a9a8ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        name: '4. Modern Lightings'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        name: '5. Bags In Accessories'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1618365908648-e71bd5716cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        name: '6. Books'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
        name: '7. Indoor Plants'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1550223026-0d6fd780c560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        name: '8. Modern Kitchen'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        name: '9. Ceramic Indoor Pots'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGluZG9vcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        name: '10. Wall Decoration'
    },
];
const HomePage = (props) => {
    const [menuOpen, setMenuOpen] = React.useState(null);
    const classes = useStyles();
    const handleClick = (event) => {
        setMenuOpen(event.currentTarget);
    };
    const handleClose = (event) => {
        setMenuOpen(null);
    };
    const isSmallScreen = useMediaQuery('(max-width:900px)');
    //const isVerySmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <>
            <AppBar position="static" >
                <Toolbar className="toolbar">
                    <Grid container xs={12} className='toolbarGrid'>
                        <Grid item xs={1} style={{ display: 'flex', alignItems: 'center' }}>
                            <AppsIcon style={{ ccolor: 'white' }}></AppsIcon>
                            <Typography variant="h6" noWrap>
                                E-COMM
                            </Typography>
                        </Grid>
                        {isSmallScreen && (<Grid container direction="row" xs={9} style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <Grid item>
                                <Button style={{ color: 'white' }}><span className={classes.button}>HOME</span></Button>
                            </Grid>
                            <Grid item>
                                <Button style={{ color: 'white' }}><span className={classes.button}>ELECTRONICS</span></Button>
                            </Grid>
                            <Grid item>
                                <Button style={{ color: 'white' }}><span className={classes.button}>BOOKS</span></Button>
                            </Grid>
                            <Grid item>
                                <Button style={{ color: 'white' }}><span className={classes.button}>MUSIC</span></Button>
                            </Grid>
                            <Grid item>
                                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ color: 'white' }}>
                                    <span className={classes.button}>MORE</span>
                                    <ExpandMoreIcon style={{ color: 'white' }}></ExpandMoreIcon>
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={menuOpen}
                                    keepMounted
                                    open={Boolean(menuOpen)}
                                    onClose={handleClose}
                                    style={{ top: '3rem' }}
                                    className={classes.menuBlackBackground}
                                >
                                    <MenuItem className={classes.blackBackground} onClick={handleClose}>MOVIES</MenuItem>
                                    <MenuItem className={classes.blackBackground} onClick={handleClose}>CLOTHING</MenuItem>
                                    <MenuItem className={classes.blackBackground} onClick={handleClose}>GAMES</MenuItem>
                                    <MenuItem className={classes.blackBackground} onClick={handleClose}>FURNITURE</MenuItem>
                                    <MenuItem className={classes.blackBackground} onClick={handleClose}>ELECTRONICS</MenuItem>
                                    <MenuItem className={classes.blackBackground} onClick={handleClose}>TRAVEL</MenuItem>
                                    <MenuItem className={classes.blackBackground} onClick={handleClose}>BOTANICAL</MenuItem>
                                    <MenuItem className={classes.blackBackground} onClick={handleClose}>CATEGORY NAME</MenuItem>
                                </Menu>

                            </Grid>
                        </Grid>)}
                        {!isSmallScreen && (
                            <Grid container direction="row" xs={9} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <Grid item>
                                    <Button style={{ color: 'white' }}><span className={classes.button}>HOME</span></Button>
                                </Grid>
                                <Grid item>
                                    <Button style={{ color: 'white' }}><span className={classes.button}>ELECTRONICS</span></Button>
                                </Grid>
                                <Grid item>
                                    <Button style={{ color: 'white' }}><span className={classes.button}>BOOKS</span></Button>
                                </Grid>
                                <Grid item>
                                    <Button style={{ color: 'white' }}><span className={classes.button}>MUSIC</span></Button>
                                </Grid>
                                <Grid item>
                                    <Button style={{ color: 'white' }}><span className={classes.button}>MOVIES</span></Button>
                                </Grid>
                                <Grid item>
                                    <Button style={{ color: 'white' }}><span className={classes.button}>CLOTHING</span></Button>
                                </Grid>
                                <Grid item>
                                    <Button style={{ color: 'white' }}><span className={classes.button}>GAMES</span></Button>
                                </Grid>
                                <Grid item>
                                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} style={{ color: 'white' }}>
                                        <span className={classes.button}>MORE</span>
                                        <ExpandMoreIcon style={{ color: 'white' }}></ExpandMoreIcon>
                                    </Button>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={menuOpen}
                                        keepMounted
                                        open={Boolean(menuOpen)}
                                        onClose={handleClose}
                                        style={{ top: '3rem' }}
                                        className={classes.menuBlackBackground}
                                    >
                                        <MenuItem className={classes.blackBackground} onClick={handleClose}>FURNITURE</MenuItem>
                                        <MenuItem className={classes.blackBackground} onClick={handleClose}>ELECTRONICS</MenuItem>
                                        <MenuItem className={classes.blackBackground} onClick={handleClose}>TRAVEL</MenuItem>
                                        <MenuItem className={classes.blackBackground} onClick={handleClose}>BOTANICAL</MenuItem>
                                        <MenuItem className={classes.blackBackground} onClick={handleClose}>CATEGORY NAME</MenuItem>
                                    </Menu>

                                </Grid>
                            </Grid>
                        )
                        }
                        <Grid item xs={2} className='toolbarGrid'>
                            <TextField
                                classes={{ root: classes.root }}
                                id="searchtextfield"
                                placeholder="Search something"
                                //style={{ color: 'white' }}
                                placeholderTextColor="white"
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon style={{ color: 'white' }} />
                                        </InputAdornment>
                                    ),
                                    style: { color: 'white' },
                                }}
                            />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            {/* <div className="hello">HELLO WORLD</div> */}
            <Grid container xs={12} style={{ marginTop: '30px' }}>
                <Grid item xs={12} style={{ textAlign: 'center', paddingTop: '0.05rem' }}>
                    <Typography variant="h6" style={{ fontSize: '2.5rem' }}>
                        Featured Products
                    </Typography>
                    <Typography>
                        Explore and discover a variety of products
                    </Typography>
                </Grid>
                <CarouselComponent featuredProducts={featuredProducts} />
            </Grid>
        </>

    );
}
export default HomePage;


// xs (extra-small): 0px
// sm (small): 600px
// md (medium): 900px
// lg (large): 1200px
// xl (extra-large): 1536px
