import React from 'react';

import withData from '../../with-data';

const UserProfile = () => (
  <div className='container'>
    <h1>{this.props.name}</h1>
    <h2>{this.props.email}</h2>
  </div>
);

export default withData(UserProfile);
