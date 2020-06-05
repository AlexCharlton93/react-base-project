import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { formQuery, formsQuery } from '../common/api/forms/apiForms';

const ComponentWrapper = styled.section`
    p {
        font-size: 20px;
    }
`;

export default function Forms() {
    const formData = formsQuery().runMocked();
    console.log("formData", formData);

    return (
        <ComponentWrapper>
            <Container>
                <p>Forms</p>
            </Container>
        </ComponentWrapper>
    );
}
