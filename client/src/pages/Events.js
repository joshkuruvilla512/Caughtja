import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Events() {
  // Setting our component's initial state
  const [Events, setEvents] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all Events and store them with setEvents
  useEffect(() => {
    loadEvents()
  }, [])

  // Loads all Events and sets them to Events
  function loadEvents() {
    API.getEvents()
      .then(res => 
        setEvents(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a Event from the database with a given id, then reloads Events from the db
  function deleteEvent(id) {
    API.deleteEvent(id)
      .then(res => loadEvents())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // When the form is submitted, use the API.saveEvent method to save the Event data
  // Then reload Events from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.Event && formObject.Organizer) {
      API.saveEvent({
        Event: formObject.Event,
        Organizer: formObject.Organizer,
        Purpose: formObject.Purpose
      })
        .then(res => loadEvents())
        .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Create an Event!</h1>
            </Jumbotron>
            <div>
            <h2>To create an event, write the name of the event, who is organizing it, and the purpose behind the event</h2>
            
            <form>
              <Input
                onChange={handleInputChange}
                name="Event"
                placeholder="Event (required)"
              />
              <Input
                onChange={handleInputChange}
                name="Organizer"
                placeholder="Organizer (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="Purpose"
                placeholder="Purpose (required)"
              />
              <FormBtn
                disabled={!(formObject.Organizer && formObject.Event)}
                onClick={handleFormSubmit}
              >
                Submit Event
              </FormBtn>
            </form>
            </div>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Events</h1>
            </Jumbotron>
            {Events.length ? (
              <List>
                {Events.map(Event => (
                  <ListItem key={Event._id}>
                    <Link to={"/Events/" + Event._id}>
                      <strong>
                        {Event.Event} by {Event.Organizer}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteEvent(Event._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Events;
