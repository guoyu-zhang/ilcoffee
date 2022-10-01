import mongoose from "mongoose";

const cafeSchema = mongoose.Schema({
  placeID: { type: String, required: true, unique: true },
  name: { type: String },
  address: { type: String },
  phone: { type: String },
  geometry: { type: Object },
  openingHours: { type: Object },
  priceLevel: { type: Number },
  rating: { type: Number },
  userRatingsTotal: { type: Number },
  mapUrl: { type: String },
  website: { type: String },
  imageUrl: { type: String },
  reviews: { type: Array },
});

const postMessage = mongoose.model("CafeData", cafeSchema);

export default postMessage;
