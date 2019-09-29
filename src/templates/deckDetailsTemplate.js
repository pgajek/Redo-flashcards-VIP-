import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DeckDetailsTemplate = ({ children }) => (
  <div>
    {children}
    <Link to="/">Go back</Link>
  </div>
);

export default DeckDetailsTemplate;
