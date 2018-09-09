import React, { Component } from 'react';
// high order component
import { connect } from 'react-redux'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import { deleteEvent } from '../eventActions'

const mapState = (state) => ({
  events: state.events
})

const actions = {
  // createEvent,
  deleteEvent,
  // updateEvent
}

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

  // state = {
  //   isOpen: false,
  //   selectedEvent: null
  // }

  // update to arrow function, so we don't need bind below function to instructor
  // handleFormOpen = () => {
  //   this.setState({
  //     selectedEvent: null,
  //     isOpen: true
  //   })
  // }

  // handleCancel = () => {
  //   this.setState({
  //     isOpen: false
  //   })
  // }

  // handleCreateEvent = newEvent => {
  //   newEvent.id = cuid();
  //   newEvent.hostPhotoURL = '/assets/images/user.png';
  //   // "..." take the events array and split them out
  //   // const updatedEvents = [...this.state.events, newEvent];
  //   this.props.createEvent(newEvent);
  //   this.setState({
  //     // events: updatedEvents,
  //     isOpen: false
  //   })
  // }

  // handleUpdateEvent = updatedEvent => {
  //   this.props.updateEvent(updatedEvent)
  //   this.setState({
  //     // events: this.state.events.map(event =>{
  //     //   if (event.id === updatedEvent.id){
  //     //     // same as clone an object
  //     //     return Object.assign({}, updatedEvent)
  //     //   } else {
  //     //     // the exsiting event
  //     //     return event
  //     //   }
  //     // }),
  //     isOpen: false,
  //     selectedEvent: null
  //   })
  // }

  //need to get the event from eventListItem so use the arrow function
  // handleOpenEvent = eventToOpen => () => {
  //   this.setState({
  //     selectedEvent: eventToOpen,
  //     isOpen: true
  //   })
  // }

  handleDeleteEvent = eventId => () => {
    // const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    // this.setState({
    //   events: updatedEvents
    // })
    this.props.deleteEvent(eventId);
  }

  render() {
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! "{ }" below, do not miss it
    // const { selectedEvent } = this.state;
    const { events } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList
            deleteEvent={this.handleDeleteEvent}
            // onEventOpen={this.handleOpenEvent}
            events={events}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          {/* {this.handleFormOpen.hind(this)} this will create a new function everytime, too expensive!! */}
          {/* () => this.handleFormOpen() is same */}
          {/* onClick={this.handleFormOpen}, old one */}
          {/* <Button onClick={this.handleFormOpen} positive content='Create Event' />
          {this.state.isOpen && (
            <EventForm updateEvent={this.handleUpdateEvent} selectedEvent={selectedEvent} createEvent={this.handleCreateEvent} handleCancel={this.handleCancel} />
          )} */}
        </Grid.Column>
      </Grid>
    )
  }
}

export default connect(mapState, actions)(EventDashboard);
