import axios from "axios";

export default {
  // Gets all Events
  getEvents: function() {
    return axios.get("/api/Events");
  },
  // Gets the Event with the given id
  getEvent: function(id) {
    return axios.get("/api/Events/" + id);
  },
  // Deletes the Event with the given id
  deleteEvent: function(id) {
    return axios.delete("/api/Events/" + id);
  },
  // Saves a Event to the database
  saveEvent: function(EventData) {
    return axios.post("/api/events", EventData);
  }
};
