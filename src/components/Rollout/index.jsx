import React from 'react';

class Rollout extends React.Component {
  static renderSpiner() {
    return <div>....spiner</div>;
  }

  render() {
    return Rollout.renderSpiner();
  }
}

export default Rollout;