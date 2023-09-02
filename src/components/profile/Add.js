import React from "react";
import { Modal, Button, Form, Row, Col, Image } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import "./style.css";

const inputStyle = {
  marginBottom: "10px",
};

function AddUserModal(props) {
  const { show, onHide, onSave } = props;

  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required("Please provide a valid name"),
    username: yup.string().required("Please provide a valid username"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Please provide a valid email address"),
    phone: yup.string().required("Please provide a valid phone number"),
    website: yup.string().notRequired(),
    company: yup.object().shape({
      name: yup.string().notRequired(),
    }),
    address: yup.object().shape({
      street: yup.string().required("Street is a required field"),
      suite: yup.string().notRequired(),
      city: yup.string().required("City is a required field"),
      zipcode: yup
        .string()
        .matches(/^[0-9-]*$/, "Only numbers and hyphens are allowed")
        .required("Zipcode is a required field"),
    }),
  });

  const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: "",
    },
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
  };

  const onSubmit = (values) => {
    onSave(values);
    onHide();
  };

  const handleCancel = () => {
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add User</Modal.Title>
      </Modal.Header>
      <Formik
        validationSchema={schema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Modal.Body>
              <Row className='justify-content-center align-items-center'>
                <Col xs={3}>
                  <Image
                    src={`https://avatars.dicebear.com/v2/avataaars/psamd.svg?options[mood][]=happy`}
                    rounded
                    style={{ width: "100px" }}
                  />
                </Col>
              </Row>
              <Form.Group controlId='addUserForm.UserName' style={inputStyle}>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  name='username'
                  type='text'
                  value={values.username}
                  onChange={handleChange}
                  required
                  isInvalid={touched.username && !!errors.username}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.username}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='addUserForm.Name' style={inputStyle}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type='text'
                  name='name'
                  value={values.name}
                  onChange={handleChange}
                  required
                  isInvalid={touched.name && !!errors.name}
                />
                <Form.Control.Feedback type='invalid'>
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId='addUserForm.Contact' style={inputStyle}>
                <Row>
                  <Col>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      name='email'
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={touched.email && !!errors.email}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.email}
                    </Form.Control.Feedback>
                  </Col>
                  <Col>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type='tel'
                      name='phone'
                      value={values.phone}
                      onChange={handleChange}
                      isInvalid={touched.phone && !!errors.phone}
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId='addUserForm.Work' style={inputStyle}>
                <Row>
                  <Col>
                    <Form.Label>Website</Form.Label>
                    <Form.Control
                      type='url'
                      name='website'
                      value={values.website}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control
                      type='text'
                      name='company.name'
                      value={values.company.name}
                      onChange={handleChange}
                    />
                  </Col>
                </Row>
              </Form.Group>
              <div>
                <h4>Address</h4>
                <Form.Group controlId='addUserForm.Street' style={inputStyle}>
                  <Form.Label>Address Line 1</Form.Label>
                  <Form.Control
                    type='text'
                    name='address.street'
                    value={values.address?.street}
                    onChange={handleChange}
                    isInvalid={
                      touched.address?.street && !!errors.address?.street
                    }
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.address?.street}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId='addUserForm.Suite' style={inputStyle}>
                  <Form.Label>Address Line 2</Form.Label>
                  <Form.Control
                    type='text'
                    name='address.suite'
                    value={values.address.suite}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Row className='mb-3'>
                  <Form.Group
                    as={Col}
                    controlId='addUserForm.City'
                    style={inputStyle}
                  >
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type='text'
                      name='address.city'
                      value={values.address.city}
                      onChange={handleChange}
                      isInvalid={
                        touched.address?.city && !!errors.address?.city
                      }
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.address?.city}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    controlId='addUserForm.Zipcode'
                    style={inputStyle}
                  >
                    <Form.Label>Zipcode</Form.Label>
                    <Form.Control
                      type='text'
                      name='address.zipcode'
                      value={values.address.zipcode}
                      onChange={handleChange}
                      isInvalid={
                        touched.address?.zipcode && !!errors.address?.zipcode
                      }
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.address?.zipcode}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleCancel}>
                Cancel
              </Button>
              <Button type='submit'>Add User</Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default AddUserModal;
