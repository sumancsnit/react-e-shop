import React from 'react';

import './homepage.style.scss';
// other component

import Directory from '../../components/directory/directory.component';

import './homepage.style.scss';

const Homepage = ({ history }) => {
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
};

export default Homepage;
