import cuid from 'cuid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Segment, Header, Form, Button } from 'semantic-ui-react';

export default function EventForm({setFormOpen, setEvents, createEvent, selectedEvent, updateEvent}){

    const intialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''

    }
    const [values, setvalues] = useState(intialValues);


    function handleFormSubmit(){

        selectedEvent
          ? updateEvent({...selectedEvent, ...values})
          : createEvent({
              ...values,
              id: cuid(),
              hostedBy: "Bob",
              attendees: [],
              hostPhotoURL: "/assets/user.png",
            });
        setFormOpen(false);
    }

    function handleInputChange(e){
        const {name, value} = e.target;
        setvalues({...values, [name]: value})

    }

    return (
      <Segment clearing>
        <Header content={selectedEvent ? "Edit the Event" : "Create new Event"} />
        <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <input
              type="text"
              placeholder="Event Title"
              name="title"
              value={values.title}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Category"
              name="category"
              value={values.category}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={values.description}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="City"
              name="city"
              value={values.city}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              placeholder="Venue"
              name="venue"
              value={values.venue}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="date"
              placeholder="Date"
              name="date"
              value={values.date}
              onChange={(e) => handleInputChange(e)}
            />
          </Form.Field>
          <Button type="submit" floated="right" positive content="submit" />
          <Button
            as={Link} to='/events'
            type="submit"
            floated="right"
            content="cancel"
          />
        </Form>
      </Segment>
    );
}