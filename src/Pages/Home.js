import React from "react";
import styled from 'styled-components';

const HomeWrapper = styled.section`
  p {
    font-size: 20px;
  }
`;

export default function Home() {
  return (
    <HomeWrapper>
      <p>Home</p>
    </HomeWrapper>
  );
}
