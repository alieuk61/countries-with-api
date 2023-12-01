import * as React from 'react';
import {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Details from '../details'
import {Link} from 'react-router-dom'

function ActionAreaCard(props) {
    const [countryClicked, setCountryClicked] = useState(0);
    
    useEffect( () => {
        setCountryClicked(props.countryData)
    }, [] )

    return (
        <Link to='CountryDetails'>
        <Card 
        sx={{ maxWidth: 345 }}
        onClick={() => {
            setCountryClicked(props.countryData)
            console.log(countryClicked)
        }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.countryFlag}
                    alt={props.countryFlagAlt}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.countryName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <div className='flex'><h3>Population:</h3><p>{props.population}</p></div>
                        <div className='flex'><h3>Region:</h3><p>{props.region}</p></div>
                        <div className='flex'><h3>Capital:</h3><p>{}</p></div>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Link>
    );
}

//WE WILL START IMPLEMENTING THE PAGE CHANGE STUFF HERE, WHEN WE CLICK ON THE CARD WE GO TO A PAGE, WE USE STATE TO CAPTURE THE OBJECT OF THE COUNTRY THAT WAS CLICKED
///THEN WE PUT THE INFO ON THAT PAGE
export default ActionAreaCard