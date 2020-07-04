// import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 50px;
  font-weight: bold;

  ${({ theme, light, width, height, size }) => `
    color: ${light ? theme.blue : 'white'};
    background-color: ${light ? 'white' : theme.blue};
    width: ${width};
    height: ${height};
    font-size: ${size};
  `}
`;

export default Button;
