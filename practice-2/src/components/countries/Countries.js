import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import "./countries.css"

const Countries = () => {
    const [countries,setCountries] = useState([])
    
    
    useEffect(() =>{
        fetch("https://restcountries.com/v2/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div className ='box'>
            {
                countries.map(country=> <Country
                name={country.name}
                key={country.name}
                capital={country.capital}
                population={country.population}
                img={country.flags.png}
                    ></Country>)
                

            }
            
           
            
            
           
            
        </div>
    );
};

export default Countries;