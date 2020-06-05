import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const ComponentWrapper = styled.section`
  p {
    font-size: 20px;
  }
`;

export default function FormBuilder() {
  let { id } = useParams();

  return (
    <ComponentWrapper>
      <Container>
        <p>Form Builder {id}</p>
      </Container>
    </ComponentWrapper>
  );
}
