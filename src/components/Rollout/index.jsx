import React from 'react';
import AddEvent from '../AddEvent';
import EventsList from '../EventsList';

class Rollout extends React.Component {
  static renderSpiner() {
    return <div>....spiner</div>;
  }
  render() {
    return (
      <div>
        <AddEvent uid={this.props.uid} />
        <EventsList />
      </div>
    );
  }
}

export default Rollout;
