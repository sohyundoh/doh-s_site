import React from 'react';
import PropTypes from 'prop-types';
import './skills.css';
import styled from 'styled-components';

const StyledButton = styled.button`

  margin: 0;
  border: none;
  cursor: pointer;
  font-size: var(--button-font-size, 1rem);
  padding: var(--button-padding, 12px 16px);
  border-radius: var(--button-radius, 8px);
  background: var(--button-bg-color, #ffffff);
  color: var(--button-color, #575858);
  &:focus {
   color: #B0E0E6;
  }
`
const CategoryButton = ({ handleClick, active, label }) => (
  <StyledButton
    className={`skillbutton ${active[label] ? 'skillbutton-active' : ''}`}
    type="button"
    onClick={() => handleClick(label)}
  >
    {label}
  </StyledButton>
);

CategoryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  active: PropTypes.objectOf(PropTypes.bool.isRequired).isRequired,
};

export default CategoryButton;