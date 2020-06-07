import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Container, Table, Button } from "react-bootstrap";

const ComponentWrapper = styled.section`
    p {
        font-size: 20px;
    }
    button {
        margin-left: 5px;
    }
`;

const FormsTable = ({ data }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>
                        <h3>Name</h3>
                    </th>
                    <th>
                        <h3>Description</h3>
                    </th>
                    <th>
                        <h3>Actions</h3>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.map((form, i) => (
                    <tr key={i}>
                        <th>
                            <h3>{form.name}</h3>
                        </th>
                        <th>
                            <h3>{form.description}</h3>
                        </th>
                        <th>
                            <Button
                                variant="primary"
                                onClick={() =>
                                    console.log("Take me to the form")
                                }
                            >
                                Edit
                            </Button>
                            <Button
                                variant="danger"
                                onClick={() =>
                                    console.log(
                                        "Modal asking if they are sure they want to delete"
                                    )
                                }
                            >
                                Delete
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() =>
                                    console.log(
                                        "Actual preview of the form (as if embedded on own website)"
                                    )
                                }
                            >
                                Preview
                            </Button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

const Forms = ({ forms }) => {
    return (
        <ComponentWrapper>
            <Container>
                <p>Forms</p>
                <FormsTable data={forms} />
            </Container>
        </ComponentWrapper>
    );
};

const mapStateToProps = (state) => ({
    forms: state.forms,
});

export default connect(mapStateToProps, {})(Forms);
