import React, { useState } from 'react';
import { Row, Col, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const MedicineForm = () => {
  const history = useHistory();

  const [data, setData] = useState({
    availableStock: '',
    capacityStock: '',
    requiredStock: '',
    medicineType: '',
  });

  const handleGoBack = () => {
    history.goBack();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);
  };

  return (
    <div>
      <Card>
        <CardHeader>
            <h1>Inventery Medicine Form</h1>

        <Button color="danger" onClick={handleGoBack}>Back</Button>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="availableStock">Available Stock</Label>
                  <Input
                    type="number"
                    name="availableStock"
                    id="availableStock"
                    value={data.availableStock}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="capacityStock">Capacity Stock</Label>
                  <Input
                    type="number"
                    name="capacityStock"
                    id="capacityStock"
                    value={data.capacityStock}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="requiredStock">Required Stock</Label>
                  <Input
                    type="number"
                    name="requiredStock"
                    id="requiredStock"
                    value={data.requiredStock}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="medicineType">Medicine Type</Label>
                  <Input
                    type="select"
                    name="medicineType"
                    id="medicineType"
                    value={data.medicineType}
                    onChange={handleChange}
                  >
                    <option>Select Type</option>
                    <option>Medicine Type 1</option>
                    <option>Medicine Type 2</option>
                    <option>Medicine Type 3</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Button color="primary" type="submit">Submit</Button>

          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default MedicineForm;
