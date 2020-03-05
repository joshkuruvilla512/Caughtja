const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Events collection and inserts the Events below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/eventList"
);

const eventSeed = [
  {
    Event: "AGE of Central Texas",
    Organizer: "Adult Day Care Center Austin",
    Purpose:
      "To serve older adults, adults with dementia and family caregivers throughout the Central Texas region through five programs. Volunteers assist with and lead engaging activities for participants. Volunteers must apply and be approved.",
    Address: "3710 Cedar St. Austin",
    Tel: "512-451-4611"
  },
  {
    Event: "AGE of Central Texas",
    Organizer: "Adult Day Care Center Austin",
    Purpose:
      "To serve older adults, adults with dementia and family caregivers throughout the Central Texas region through five programs. Volunteers assist with and lead engaging activities for participants. Volunteers must apply and be approved.",
    Address: "3710 Cedar St. Austin",
    Tel: "512-451-4611"
  },
  {
    Event: "AGE of Central Texas",
    Organizer: "Adult Day Care Center Austin",
    Purpose:
      "To serve older adults, adults with dementia and family caregivers throughout the Central Texas region through five programs. Volunteers assist with and lead engaging activities for participants. Volunteers must apply and be approved.",
    Address: "3710 Cedar St. Austin",
    Tel: "512-451-4611"
  },
  {
    Event: "AGE of Central Texas",
    Organizer: "Adult Day Care Center Austin",
    Purpose:
      "To serve older adults, adults with dementia and family caregivers throughout the Central Texas region through five programs. Volunteers assist with and lead engaging activities for participants. Volunteers must apply and be approved.",
    Address: "3710 Cedar St. Austin",
    Tel: "512-451-4611"
  },
  

];

db.reactEventList
  .remove({})
  .then(() => db.reactEventList.collection.insertMany(eventSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
