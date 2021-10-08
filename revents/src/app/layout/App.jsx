import React from 'react';

import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import Homepage from '../../features/home/HomePage';
import EventDetailPage from '../../features/events/eventDetailed/EventDetailedPage';
import EventForm from '../../features/events/eventForm/EventForm';

function App() {
  
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
              <Route path="/events/:id" component={EventDetailPage} />
              <Route path={["/createEvent", "manage/:id"]} component={EventForm} />
            </Container>
          </div>
        )}
      />
    </div>
  );
}

export default App;
