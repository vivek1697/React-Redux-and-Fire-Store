import React from 'react';

import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, useLocation } from 'react-router-dom';
import Homepage from '../../features/home/HomePage';
import EventDetailPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';
import Sandbox from '../../features/sandbox/Sandbox';

export default function App() {
  const {key} = useLocation();
  
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <div>
            <NavBar  />
            <Container className="main">
              <Route exact path="/events" component={EventDashboard} />
              <Route exact path="/sandbox" component={Sandbox} />
              <Route path="/events/:id" component={EventDetailPage} />
              <Route path={["/createEvent", "manage/:id"]} component={EventForm} />
            </Container>
          </div>
        )}
      />
    </div>
  );
}


