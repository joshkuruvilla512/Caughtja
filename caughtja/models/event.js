const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  Event: { type: String, required: true },
  organizer: { type: String, required: false },
  Purpose: String,
  date: {type: Date, default: Date.now}
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
