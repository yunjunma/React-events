import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import cuid from 'cuid';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';


// s_3.7.1
const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


class EventDashboard extends Component {
  // constructor(props){
  //   super(props)

  //   this.state = {
  //     events: eventsDashboard,
  //     isOpen: false
  //   }

  //   // handleFormOpen bind in to the Component class but it looks bad
  //   // this.handleFormOpen = this.handleFormOpen.bind(this);
  //   // this.handleCancel = this.handleCancel.bind(this);
  // }

  state = {
    events: eventsDashboard,
    isOpen: false,
    selectedEvent: null
  }

  // update to arrow function, so we don't need bind below function to instructor
  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    })
  }

  handleCancel= () => {
    this.setState({
      isOpen: false
    })
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL= '/assets/images/user.png';
    // "..." take the events array and split them out
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents,
      isOpen: false
      
    })
  }

  handleUpdateEvent = ( updatedEvent) => {
    this.setState({
      events: this.state.events.map(event =>{
        if (event.id === updatedEvent.id){
          // same as clone an object
          return Object.assign({}, updatedEvent)
        } else {
          // the exsiting event
          return event
        }
      }),
      isOpen: false,
      selectedEvent: null
    })
  }

  //need to get the event from eventListItem so use the arrow function
  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    })
  }

  handleDeleteEvent = (eventId) => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    this.setState({
      events: updatedEvents
    })
  }

  render() {
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! "{...}" below, do not miss it
    const {selectedEvent} = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} onEventOpen={this.handleOpenEvent} events={this.state.events} />
        </Grid.Column>
        <Grid.Column width={6}>
        {/* {this.handleFormOpen.hind(this)} this will create a new function everytime, too expensive!! */}
        {/* () => this.handleFormOpen() is same */}
        {/* onClick={this.handleFormOpen}, old one */}
          <Button onClick={this.handleFormOpen} positive content='Create Event'/>
          {this.state.isOpen && (
            <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancel={this.handleCancel} />
          )}
        </Grid.Column>
      </Grid>
    )
  }
}

export default EventDashboard
