import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ScrollToTop from "react-scroll-to-top";
import { Container, Typography, Grow } from "@mui/material";
import { getCafes } from "./actions/cards";
import ElevateAppBar from "./components/ElevateAppBar";
import Footer from "./components/Footer";
import Cards from "./components/Cards/Cards";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCafes());
  }, [dispatch]);

  return (
    <Container maxWidth="xl">
      <ElevateAppBar />
      <Typography variant="h3" align="center" marginTop={10} marginBottom={5}>
        A collection of Edinburgh's favourite independent coffee shops
      </Typography>
      <Typography variant="h6" align="center">
        These are the top rated independent coffee shops in Edinburgh, sorted by
        reviews and ratings from Google.
      </Typography>
      <Typography variant="h6" align="center" marginBottom={5}>
        More features coming soon, including maps, menus and more!
      </Typography>
      <Grow in>
        <Container>
          <Cards />
        </Container>
      </Grow>
      <ScrollToTop smooth viewBox="0 -13 256 256" />
      <Footer />
    </Container>
  );
};

export default App;
