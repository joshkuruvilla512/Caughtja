const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  Event: { type: String, required: true },
  Organizer: { type: String, required: false },
  Purpose: String,
  Address: String,
  date: {type: Date, default: Date.now}
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
