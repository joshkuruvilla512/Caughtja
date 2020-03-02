import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

function Detail(props) {
  const [Event, setEvent] = useState({})

  // When this component mounts, grab the Event with the _id of props.match.params.id
  // e.g. localhost:3000/Events/599dcb67f0f16317844583fc
  const {id} = useParams()
  useEffect(() => {
    API.getEvent(id)
      .then(res => setEvent(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {Event.Event} by {Event.Organizer}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Purpose</h1>
              <p>
                {Event.Purpose}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Organizers</Link>
          </Col>
        </Row>
      </Container>
    );
  }


export default Detail;
