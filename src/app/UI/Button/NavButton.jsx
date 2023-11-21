import React from "react";
import styled from "styled-components";

export const ButtonPrimary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  color: black;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: #ffc23e;
`;
const NavButton = ({ children }) => {
  return <ButtonPrimary>{children}</ButtonPrimary>;
};

export default NavButton;
