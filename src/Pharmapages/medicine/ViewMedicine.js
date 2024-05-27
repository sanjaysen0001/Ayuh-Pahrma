import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
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
import swal from "sweetalert";
import axiosConfig from "../axiosConfig";

const ViewMedicine = () => {
  const history = useHistory();
  const Params = useParams();

  const [data, setData] = useState({
    medicineType: "",
    medicineName: "",
    unit: "",
    quantity: "",
    medicineDetails: "",
    price: "",
    image: "",
    expiryDate: "",
    status: "",
  });
  // const [categoryList, setCategoryList] = useState();
  const [viewMedicine, setViewMedicine] = useState("");

  const {
    medicineType,
    medicineName,
    unit,
    medicineDetails,
    price,
    image,
    expiryDate,
    status,
  } = data;

  useEffect(() => {
    console.log(Params.id);
    axiosConfig.get(`/medicine/fetchbyid/${Params?.id}`).then((response) => {
      console.log(response.data.data.expiredate);
      setViewMedicine(response.data.data);
      // setCategoryList(response.data.Category);
    });
  }, []);
  const changeHandler = (e) => {
    console.log(e.target.value);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("medicinetype", data?.medicineType);
  //   formData.append("medicinename", data?.medicineName);
  //   formData.append("unit", data?.unit);
  //   formData.append("quantity", data?.quantity);
  //   formData.append("medicinedetails", data?.medicineDetails);
  //   formData.append("price", data?.price);
  //   formData.append("expiredate", data?.expiryDate);
  //   formData.append("status", data?.status);

  //   if (data?.image != null) {
  //     formData.append("image", data?.image);
  //   }
  //   axiosConfig
  //     .post(`/medicine/add`, data)
  //     .then((response) => {
  //       console.log(response.data.message);
  //       swal("Success!", "Medicine added successfully!", "success");
  //       history.goBack();
  //     })
  //     .catch((error) => {
  //       swal("Error!", "Something went wrong!", "error");
  //       console.log(error.response);
  //     });
  // };

  return (
    <React.Fragment>
      <div id="add-medicine">
        <Row className="m-0 justify-content-center">
          <Col sm="12" md="10" lg="10">
            <Card className="bg-authentication rounded-0 mb-0">
              <CardHeader>
                <h4 className="mb-3">View Medicine</h4>
                <Button.Ripple
                  onClick={() => history.goBack()}
                  outline
                  color="danger"
                >
                  Back
                </Button.Ripple>
              </CardHeader>
              <Form
                className="m-1"
                // onSubmit={submitHandler}
              >
                <Row>
                  <Col md="6">
                    <Label for="medicineType">Medicine Type</Label>
                    <Input
                      type="select"
                      id="medicineType"
                      name="medicineType"
                      value={viewMedicine?.medicinetype}
                      onChange={changeHandler}
                    >
                      <option value={viewMedicine.medicinetype}>
                        {viewMedicine.medicinetype}
                      </option>
                    </Input>
                  </Col>
                  <Col md="6">
                    <Label for="medicineName">Medicine Name</Label>
                    <Input
                      type="text"
                      id="medicineName"
                      name="medicineName"
                      placeholder="Enter medicine name"
                      value={viewMedicine?.medicinename}
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col className="mt-1" md="6">
                    <Label for="unit">Unit</Label>
                    <Input
                      type="text"
                      id="unit"
                      name="unit"
                      placeholder="Enter unit"
                      value={viewMedicine?.unit}
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col className="mt-1" md="6">
                    <Label for="quantity">Quantity</Label>
                    <Input
                      type="text"
                      id="quantity"
                      name="quantity"
                      placeholder="Enter Quantity"
                      value={viewMedicine?.quantity}
                      onChange={changeHandler}
                    />
                  </Col>

                  <Col className="mt-1" md="6">
                    <Label for="price">Price</Label>
                    <Input
                      type="text"
                      id="price"
                      name="price"
                      placeholder="Enter price"
                      value={viewMedicine?.price}
                      y
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col className="mt-1" md="6">
                    <Label for="image">Image</Label>
                    <img
                      src={viewMedicine?.image}
                      alt="Image"
                      width={100}
                      height={100}
                    />
                    {/* <Input
                      type="file"
                      id="image"
                      name="image"
                      onChange={changeHandler}
                    /> */}
                  </Col>
                  <Col className="mt-1" md="6">
                    <Label for="expiryDate">Expiry Date</Label>
                    <Input
                      type="date"
                      id="expiryDate"
                      name="expiryDate"
                      value={viewMedicine?.expiredate}
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col className="mt-1" md="6">
                    <Label for="medicineDetails">Medicine Details</Label>
                    <Input
                      type="textarea"
                      id="medicineDetails"
                      name="medicineDetails"
                      placeholder="Enter medicine details"
                      value={viewMedicine.medicinedetails}
                      onChange={changeHandler}
                    />
                  </Col>
                  <Col lg="6" md="6" sm="6" className="mt-1">
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

export default ViewMedicine;
