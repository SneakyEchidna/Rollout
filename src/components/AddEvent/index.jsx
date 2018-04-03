import React from 'react';
import Db from '../../api'

class AddEvent extends React.Component {
  onSubmit = (ev) => {
    const db = new Db()
    ev.preventDefault();
    const form = ev.target;
    const data = [...form.querySelectorAll('[name]')].reduce((hash, item) => {
      if (item.getAttribute('name') === 'date') {
        item.value
          ? (hash.date = new Date(item.value))
          : (hash.date = new Date());
      } else {
        hash[item.getAttribute('name')] = item.value;
      }

      return hash;
    }, {});
    data.uid = this.props.uid
    console.log(data)
    db.addEvent(data);
    form.reset();

  }
  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Add Event</legend>
          <input name="title" placeholder="title" />
          <select name="eventType">
            <option value="0">Roller Skates</option>
            <option value="1">Bycicle</option>
            <option value="2">Jogging</option>
            <option value="3">Skateboard</option>
            <option value="4">Mixed</option>
          </select>
          <input type="date" name="eventDate" />
          <br />
          <textarea
            name="description"
            rows="5"
            cols="40"
            placeholder="description"
          />
          <br />
          <button>Add</button>
        </fieldset>
      </form>
    )
  }
}

export default AddEvent