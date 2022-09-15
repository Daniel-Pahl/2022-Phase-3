import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";


function App() {
  const [countryInfo, setCountryInfo] = useState<undefined | any>(undefined);
  const [cityName, setCityName] =  useState("");
  const axios = require("axios");

  return (
    <div id = "full" className="App">
      <h1 id = "intro">Country Information</h1>

      <div>
        <TextField
          id="search-bar"
          className="text"
          role="text"
          value={cityName}
          onChange={(prop: any)=> {setCityName(prop.
            target.value)
          }}
          label="Enter a country code."
          variant="outlined"
          placeholder="Search"
          size = "small"
          />
        <IconButton id="search-box"

        aria-label='Search'
        onClick={() =>{
          search();
        }}> 
          <SearchIcon style={{fill: "white"}} role="search-button" />
        </IconButton>
      </div>

    {countryInfo === undefined || countryInfo.flag.file === null?
    (
        <p>
      <div id ='atmosphere'>
        <div id="earth"></div>
      </div>
            Country not found
        </p>

    ) : (

      <div>

          <img id = "flag" src= {countryInfo.flag.file}/>
          <span id="Country-result">
          <p>
            <mark id = "text-size">Country: {countryInfo.name}</mark>
          </p>
          <p>
            <mark role="quicktest"id = "text-size">Capital City: {countryInfo.capital.name}</mark>
          </p>  
          <p>
            <mark id = "text-size">Population: {(countryInfo.population / 1000000).toFixed(2)} million</mark>
          </p>
          <p>
            <mark id = "text-size">Currency: {countryInfo.currency.name}</mark>
          </p>
          <a href= {countryInfo.wiki_url} id = "text-size"> {countryInfo.name} wiki </a>
          </span>

        <div id ='atmosphere'>
          <div id="earth"></div>
      </div>
      </div>
    )}
  </div>
  )
  
  function search(){
    const options = {
      method: 'GET',
      url: 'https://world-geo-data.p.rapidapi.com/countries/'+cityName,
      params: {language: 'en,de'},
      headers: {
        'X-RapidAPI-Key': '67bcbac557msh59fab0bc5c210e2p12b62ejsnc57fbfe520b0',
        'X-RapidAPI-Host': 'world-geo-data.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response: { data: any; }) {
      console.log(response.data);
      setCountryInfo(response.data);
    }).catch(function (error: any) {
      console.error(error);
    });

  }
}

export default App;
function round(arg0: number, arg1: number): React.ReactNode {
  throw new Error('Function not implemented.');
}