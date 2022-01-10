import React, { Component } from "react";
import { render } from "react-dom"
import { HomePage } from "./HomePage"

import { AppBar, Toolbar, Typography, Container } from "@material-ui/core";


function App() {
	return (
    <div>
      <Container>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              COVID-19 Tracker
            </Typography>
            {/* <Tabs>
              <Tab label="HOME" />
              <Tab label="MAP" />
            </Tabs> */}
          </Toolbar>
        </AppBar>
      </Container>
      <div>
        <HomePage />
      </div>
    </div>
	);
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);

// export default App;