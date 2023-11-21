"use client";
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import NavButton from "@/app/UI/Button/NavButton";
export const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: fit-content;
  background-color: #111111;
  padding: 1rem 2rem;
  justify-content: space-between;
  @media (max-width: 280px) {
    padding: 1rem 1rem;
  }
`;

export const LogoImg = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const LogoText = styled.h2`
  color: #f6f6f6;
  font-weight: 600;
  font-size: 0.7rem;
  letter-spacing: 4px;
`;
export const logoText = styled.h2`
  color: #f6f6f6;
`;
export const LogoContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
export const VLine = styled.div`
  background-color: #ffc23e;
  height: 100%;
  width: 1px;
`;
const NavBar = () => {
  return (
    <Nav>
      <LogoContainer>
        <LogoImg>
          <Image src="/ttt (1).svg" fill={true} alt="Picture of the author" />
        </LogoImg>
        <VLine></VLine>
        <LogoText>STORIES</LogoText>
      </LogoContainer>
      <NavButton>Courses</NavButton>
    </Nav>
  );
};

export default NavBar;
