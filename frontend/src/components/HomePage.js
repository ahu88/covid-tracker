import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";

import { Box, Button, Card, CardActions, CardContent, Container, Spacing, TextField, Typography } from "@material-ui/core";
import { useState, useRef, useEffect } from "react";
import axios from 'axios';

export const HomePage = () => {
	const [countryName, setCountryName] = useState("");
  const [covidData, setCovidData] = useState({});

  const getCovidData = (evt) => {
    evt.preventDefault();

    axios.get("/api/getCountry", {
      params: {
        country: countryName
      }
    })
    .then((response) => {
      console.log(response.data)
      setCovidData(response.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
		<div>
      <Container>
        {/* Form */}
        <form onSubmit={getCovidData}>
          <TextField
            id="filled-full-width"
            label="Country"
            placeholder="Enter a Country"
            fullWidth
            margin="normal"
            variant="filled"
            onSubmit={getCovidData}
            onChange={e => setCountryName(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
        
        {/* Display COVID information for entered country */}
        { JSON.stringify(covidData) != '{}' ?
        <div className="covid-card">
          <Card variant="outlined">
            <CardContent>
              <Typography  color="textPrimary" gutterBottom>
                { covidData.country }
              </Typography>
              <Typography  color="textSecondary">
                Cases: { new Intl.NumberFormat().format(covidData.cases) }
              </Typography>
              <Typography  color="textSecondary">
                Deaths: { new Intl.NumberFormat().format(covidData.deaths) }
              </Typography>
              <Typography  color="textSecondary">
                Recovered: { new Intl.NumberFormat().format(covidData.recovered) }
              </Typography>
            </CardContent>
          </Card>

        </div>
        : <></>}
      </Container>
		</div>
	);
};
