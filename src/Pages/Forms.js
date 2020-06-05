import React from "react";
import styled from 'styled-components';
import { Container } from "react-bootstrap";

const ComponentWrapper = styled.section`
  p {
    font-size: 20px;
  }
`;

export default function Forms() {
  return (
    <ComponentWrapper>
      <Container>
        <p>Forms</p>
      </Container>
    </ComponentWrapper>
  );
}
