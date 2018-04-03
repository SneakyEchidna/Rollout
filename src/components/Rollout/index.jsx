import React from 'react';
import AddEvent from '../AddEvent'

class Rollout extends React.Component {

  static renderSpiner() {
    return <div>....spiner</div>;
  }

  render() {
  return (
    <div>
      <AddEvent uid={this.props.uid} />
    </div>
    );
  }
}

export default Rollout;