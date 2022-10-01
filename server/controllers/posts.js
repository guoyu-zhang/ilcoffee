import express from "express";
import axios from "axios";
import { setTimeout } from "timers/promises";
import CafeData from "../models/cafeData.js";

const router = express.Router();

// This will remain for demo purposes but will be removed in production.
const API_KEY = "AIzaSyAQolAiyCTGdSLqrejyA-GwXnUUJuohCz0";

// Timeouts are used in this function to accomodate for delay between when a next_page_token
// is issued and when it can be used. Google Places API has a limit of 60 results.
export const updateCafes = async (req, res) => {
  const city = "edinburgh";
  const category = "coffee";
  let responses = [];

  let response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${category}+${city}&type=cafe&key=${API_KEY}`
  );

  responses.push(response.data.results);

  while (response.data.next_page_token) {
    await setTimeout(5000);
    response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?pagetoken=${response.data.next_page_token}&key=${API_KEY}`
    );
    responses.push(response.data.results);
  }

  const flattenedResponses = responses.reduce((flatten, arr) => [
    ...flatten,
    ...arr,
  ]);
  const operationalCafes = flattenedResponses.filter(
    (cafe) => cafe.business_status === "OPERATIONAL"
  );

  operationalCafes.forEach(async (cafe) => {
    const placeID = cafe.place_id;
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=${API_KEY}`
    );

    let imageResponse = {};
    const cafeData = data.result;

    if (cafeData.photos?.[0]?.photo_reference) {
      imageResponse = await axios.get(
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${cafeData.photos[0].photo_reference}&key=${API_KEY}`
      );
      console.log(imageResponse.request.res.responseUrl);
    }

    const filter = { placeID: placeID };
    const update = {
      name: cafeData.name,
      address: cafeData.formatted_address,
      phone: cafeData.formatted_phone_number,
      geometry: cafeData.geometry,
      openingHours: cafeData.opening_hours,
      priceLevel: cafeData.price_level,
      rating: cafeData.rating,
      userRatingsTotal: cafeData.user_ratings_total,
      mapUrl: cafeData.url,
      website: cafeData.website,
      imageUrl: imageResponse.request?.res?.responseUrl,
      reviews: cafeData.reviews,
    };

    await CafeData.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true,
    });
  });

  res.json("Successfully fetched and updated cafes.");
};

export const getCafes = async (req, res) => {
  try {
    const cafeData = await CafeData.find();

    res.status(200).json(cafeData);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
