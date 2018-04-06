import React from 'react';
import Db from '../../api';

class EventsList extends React.Component{
  static renderSpiner() {
    return <div>....spiner</div>;
  }
  static renderEventType(event) {
    const strings = ['Roller Skates', 'Bycicle', 'Joging', 'Skateboarding', 'Mixed']
    return strings[event]
  }
  state = {}
  componentWillMount(){
   const db = new Db();
   db.getEventsList()
    .then(events => this.setState(events))
  }

columns = ['Title', 'Event Type', 'Event Date'];

  renderHeader() {
    return (
      <thead>
        <tr>
          {this.columns.map((name) => (
            <th key={name}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  renderBody() {
    return (
      <tbody>
        {Object.entries(this.state).map(([key, item]) => (
          <tr key={key}>
            <td>{item.title}</td>
            <td>{EventsList.renderEventType(item.eventType)}</td>
            <td>{item.eventDate}</td>
          </tr>
        ))}
      </tbody>
    );
  }
  renderEvents() {
    return(
      <table>
        {this.renderHeader()}
        {this.renderBody()}
      </table>
      
    )
  }
 render(){
   return this.state ? this.renderEvents() : EventsList.renderSpiner() 
 }
}

export default EventsList