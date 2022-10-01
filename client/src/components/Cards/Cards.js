import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Typography } from "@mui/material";
import Card from "./Card/Card";

const Cards = () => {
  const cafes = useSelector((state) => state.cafes);
  const cafeChains = ["Starbucks", "Costa Coffee", "Caffè Nero"];

  const filteredCafes = cafes.filter(
    (cafe) => cafe.reviews.length !== 0 && !cafeChains.includes(cafe.name)
  );

  filteredCafes.forEach((cafe) => {
    const address = cafe.address?.split(",")[0];
    cafe.address = address;
  });

  const compareRatings = (a, b) => {
    const ratingA = a.rating * a.userRatingsTotal;
    const ratingB = b.rating * b.userRatingsTotal;

    let comparison = 0;
    if (ratingA > ratingB) {
      comparison = -1;
    } else if (ratingA < ratingB) {
      comparison = 1;
    }
    return comparison;
  };

  filteredCafes.sort(compareRatings);

  return !filteredCafes.length ? (
    <CircularProgress />
  ) : (
    <Grid container spacing={4} flex justifyContent="flex-end" maxWidth="xl">
      <Grid item xs={12}>
        <Card cafe={filteredCafes[0]} isSmallCard={false} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" margin={5}>
          Thank you for supporting local
        </Typography>
      </Grid>
      {filteredCafes.slice(1).map((filteredCafe) => (
        <Grid key={filteredCafe._id} item xs>
          <Card cafe={filteredCafe} isSmallCard={true} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
