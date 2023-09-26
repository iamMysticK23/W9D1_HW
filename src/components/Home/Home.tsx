import React from 'react'; 
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'; 

// internal imports
import shop_image from '../../assets/Images/multiple_cars_bkg.jpeg'; 
import { NavBar } from '../sharedComponents';


interface Props{
    title: string
}

// create some custom styled "divs" utilizing the styled import
const Root = styled('div')({
    padding: 0,
    margin: 0
})

const Main = styled('main')({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .3)), url(${shop_image});`,
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top 5px',
    position: 'absolute', 
    marginTop: '10px'
})

const MainText = styled('div')({
    textAlign: 'center',
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,  -50%)',
    color: 'white'
})


// This is our component 
export const Home = (props: Props) => {

    // every return needs 1 parent div and ONLY 1 parent
    return (
        <Root>
            <NavBar />
            <Main>
                <MainText>
                    <h1> {props.title} </h1>
                    {/* this Button is a component we imported from material ui */}
                    <Button sx = {{ marginTop: '10px '}} component={Link} to={'/'} variant='contained' 
                    >View Car Inventory</Button>
                </MainText>
            </Main>
        </Root>
    )
}