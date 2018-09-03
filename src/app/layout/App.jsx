import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard';
import NarBar from '../../features/nav/NarBar/NavBar';


class App extends Component {
  render() {
    return (
      <div>
        <NarBar/>
        <Container className="main">
          <EventDashboard/>
        </Container>
      </div>
    );
  }
}

export default App;