import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const HomeWrapper = styled.section`
  p {
    font-size: 20px;
  }
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Container>
        <p>Home</p>
      </Container>
    </HomeWrapper>
  );
}

export default Home;
