import React from "react";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import { updateCafes } from "../api";

const Footer = () => {
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Typography
            variant="h6"
            component="div"
            align="center"
            color={"black"}
            paddingTop={20}
            paddingBottom={10}
          >
            Thanks for visiting, come back soon for more features!
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography
            variant="subtitle1"
            component="div"
            align="center"
            color={"black"}
            paddingTop={10}
            paddingBottom={10}
          >
            Think our data isn't up to date? Click the coffee machine and come
            back in 60 seconds to see the changes.
            <IconButton onClick={() => updateCafes()} aria-label="update cafes">
              <CoffeeMakerIcon />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
