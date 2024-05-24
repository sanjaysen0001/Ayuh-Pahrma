import React from "react";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  Card,
  CardTitle,
  CardHeader,
} from "reactstrap";
import Breadcrumbs from "../components/@vuexy/breadCrumbs/BreadCrumb";
import axios from "axios";
import swal from "sweetalert";
import axiosConfig from "../axiosConfig";

const AddMedicine = () => {
  const history = useHistory();

  const [data, setData] = React.useState({
    medicineType: "",
    medicineName: "",
    unit: "",
    medicineDetails: "",
    price: "",
    image: "",
    expiryDate: "",
    status: "",
  });

  const { medicineType, medicineName, unit, medicineDetails, price, image, expiryDate, status } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    // e.preventDefault();
    // axiosConfig
    //   .post(`/api/endpoint`, data)
    //   .then((response) => {
    //     console.log(response.data.message);
    //     swal("Success!", "Medicine added successfully!", "success");
    //     // Reset form fields if needed
    //   })
    //   .catch((error) => {
    //     swal("Error!", "Something went wrong!", "error");
    //     console.log(error.response);
    //   });
  };

  return (
    <React.Fragment>
    
      <div id="add-medicine">
        <Row className="m-0 justify-content-center">
          <Col sm="12" md="10" lg="10">
            <Card className="bg-authentication rounded-0 mb-0">
              <CardHeader>
              <h4 className="mb-3">Add Medicine</h4>
                <Button.Ripple onClick={() => history.goBack()} outline color="danger">
                  Back
                </Button.Ripple>
              </CardHeader>
              <Form className="m-1" onSubmit={submitHandler}>
                {/* <CardTitle>
                  <h4 className="mb-3">Add Medicine</h4>
                </CardTitle> */}
                <Row>
                  <Col md="6">
                    <Label for="medicineType">Medicine Type</Label>
                    <Input
                      type="select"
                      id="medicineType"
                      name="medicineType"
                      value={medicineType}
                      onChange={changeHandler}
                    >
                      <option value="">Select medicine type</option>
                      <option value="type1">Type 1</option>
                      <option value="type2">Type 2</option>
                      <option value="type3">Type 3</option>
                    </Input>
                  </Col>
                  <Col md="6">
                    <Label for="medicineName">Medicine Name</Label>
                    <Input
                      type="text"
                      id="medicineName"
                      name="medicineName"
                      placeholder="Enter medicine name"
                      value={medicineName}
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col md="6">
                    <Label for="unit">Unit</Label>
                    <Input
                      type="text"
                      id="unit"
                      name="unit"
                      placeholder="Enter unit"
                      value={unit}
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col md="6">
                    <Label for="unit">QTY</Label>
                    <Input
                      type="text"
                      id="unit"
                      name="unit"
                      placeholder="Enter QTY"
                      value={unit}
                      onChange={changeHandler}
                    />
                  </Col>
                 
                  <Col md="6">
                    <Label for="price">Price</Label>
                    <Input
                      type="text"
                      id="price"
                      name="price"
                      placeholder="Enter price"
                      value={price}y
                      
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col md="6">
                    <Label for="image">Image</Label>
                    <Input
                      type="file"
                      id="image"
                      name="image"
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col md="6">
                    <Label for="expiryDate">Expiry Date</Label>
                    <Input
                      type="date"
                      id="expiryDate"
                      name="expiryDate"
                      value={expiryDate}
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col md="6">
                  <Label for="medicineDetails">Medicine Details</Label>
                  <Input
                    type="textarea"
                    id="medicineDetails"
                    name="medicineDetails"
                    placeholder="Enter medicine details"
                    value={medicineDetails}
                    onChange={changeHandler}
                  />
                </Col>
                  <Col lg="6" md="6" sm="6" className="mb-2">
                    <Label className="mb-1">Status</Label>
                    <div className="form-label-group">
                      <Col md="6">
                      <Input
                        type="radio"
                        name="status"
                        value="Active"
                        onChange={changeHandler}
                        checked={status === "Active"}
                      />
                      <span style={{ marginRight: "20px" }}>Active</span>

                      <Input
                        type="radio"
                        name="status"
                        value="Inactive"
                        onChange={changeHandler}
                        checked={status === "Inactive"}
                      />
                      <span>Inactive</span>
                      </Col>
                    </div>
                  </Col>
                </Row>
                <Button color="primary" type="submit" className="mt-3">
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default AddMedicine;
