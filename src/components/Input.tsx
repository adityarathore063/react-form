import React from 'react';
import { Col, Form, Row, Button, Container } from 'react-bootstrap';
import { Formik } from 'formik';
// import * as Yup from "yup";
import { useState } from 'react';

interface IInputProps {
    firstName: string;
    lastName: string;
    rollNo: string;
    college: string;
    department: string;
}

const Input: React.FunctionComponent = (props) => {
    const [data, setData] = useState<IInputProps>({ firstName: "", lastName: "", rollNo: "", college: "", department: "" });
    return (
        <>
                <Formik initialValues={{
                    firstName: "",
                    lastName: "",
                    rollNo: "",
                    college: "",
                    department: ""
                }}

                    onSubmit={(values) => {
                        setData({
                            firstName: values.firstName,
                            lastName: values.lastName,
                            rollNo: values.rollNo,
                            college: values.college,
                            department: values.department,
                        });
                        console.log(values);
                        alert(JSON.stringify(values));


                        values.firstName = "";
                        values.lastName = "";
                        values.rollNo = "";
                        values.college="";
                        values.department = "";
                    }}

                    onReset={(values) => {
                        values.firstName = "";
                        values.lastName = "";
                        values.rollNo = "";
                        values.college="";
                        values.department = "";
                    }}

                >
                    {({ handleSubmit, values, handleChange,handleReset }) => (
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Row>
                                    <Col><Form.Label>First Name</Form.Label></Col>
                                    <Col><Form.Control name='firstName' value={values.firstName} onChange={handleChange} type="input" placeholder="Enter First Name" /></Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Row>
                                    <Col><Form.Label>Last Name</Form.Label></Col>
                                    <Col><Form.Control name='lastName' value={values.lastName} onChange={handleChange} type="input" placeholder="Enter Last Name" /></Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Row>
                                    <Col><Form.Label>Roll No.</Form.Label></Col>
                                    <Col><Form.Control name='rollNo' value={values.rollNo} onChange={handleChange} type="input" placeholder="Enter Roll No." /></Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Row>
                                    <Col><Form.Label>College</Form.Label></Col>
                                    <Col>
                                        <Form.Select placeholder='Select College' name='college' value={values.college} onChange={handleChange}>
                                            <option>Select College</option>
                                            <option>MIT Muzaffarpur</option>
                                            <option>BCE Bhagalpur</option>
                                            <option>GCE Gaya</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Row>
                                    <Col><Form.Label>Department</Form.Label></Col>
                                    <Col>
                                    <Form.Select placeholder='Choose Department' name='department' value={values.department} onChange={handleChange} >
                                            <option>Choose Department</option>
                                            <option>IT</option>
                                            <option>ECE</option>
                                            <option>EE</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Row>
                                <Col><Button variant="secondary" type="submit" onClick={handleReset}>
                                    Reset
                                </Button></Col>
                                <Col><Button variant="primary" type="submit">
                                    Submit
                                </Button></Col>
                            </Row>

                        </Form>

                    )}

                </Formik>

        </>
    );
};

export default Input;
