import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  CustomInput,
} from "reactstrap";
import { useHistory, useParams } from "react-router-dom";
import axiosConfig from "../axiosConfig";
import swal from "sweetalert";
const ViewInventory = () => {
  const history = useHistory();
  const Params = useParams();
  const [inventoryview, setInventoryview] = useState("");
  const [availableStock, setAvailableStock] = useState("");
  const [requiredData, setRequiredData] = useState("");
  const [medicineName, setmedicineName] = useState("");
  const [data, setData] = useState({
    // availableStock: "",
    capacityStock: "",
    // requiredStock: "",
    // medicineType: "",
  });

  const handleGoBack = () => {
    history.goBack();
  };
  useEffect(() => {
    console.log(Params.id);
    axiosConfig
      .get(`/medicalinventery/medicalfind/${Params.id}`)
      .then((response) => {
        console.log(response.data.data);
        setInventoryview(response.data.data);
      });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name == "capacityStock") {
      setRequiredData(value ? value - availableStock : 0);
    }
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleMedicineChange = (id) => {
    console.log(id);
    // const selected = categoryList.filter((item) => item._id === id);
    // console.log(selected[0].medicinetype);
    // setmedicineName(selected[0].medicinetype);
    // setAvailableStock(selected[0].quantity);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    data.availableStock = availableStock;
    data.medicineType = medicineName;
    data.requiredStock = setRequiredData;
    // console.log(data);
    axiosConfig
      .post(`/medicalinventery/medicalcreate`, data)
      .then((response) => {
        console.log(response.data.message);
        swal("Success!", "Medicine added successfully!", "success");
        history.goBack();
      })
      .catch((error) => {
        swal("Error!", "Something went wrong!", "error");
        console.log(error.response);
      });
  };

  return (
    <div>
      <Card>
        <CardHeader>
          <h1>Inventery Medicine Form</h1>
          <Button color="danger" onClick={handleGoBack}>
            Back
          </Button>
        </CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="medicineType">Medicine Type</Label>
                  <CustomInput
                    type="select"
                    name="category1"
                    disabled
                    value={inventoryview.medicinetype}
                    // onChange={(e) => handleMedicineChange(e.target.value)}
                  >
                    <option>{inventoryview.medicinetype}</option>
                    {/* {categoryList?.map((allCategory1) => (
                      <option value={allCategory1?._id} key={allCategory1?._id}>
                        {allCategory1?.medicinetype}
                      </option>
                    ))} */}
                  </CustomInput>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="availableStock">Available Stock</Label>
                  <Input
                    type="number"
                    disabled
                    name="availableStock"
                    id="availableStock"
                    value={inventoryview.availableStock}
                    // onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="capacityStock">Capacity Stock</Label>
                  <Input
                    type="number"
                    name="capacityStock"
                    disabled
                    id="capacityStock"
                    value={inventoryview.capacityStock}
                    onChange={handleChange}
                  />
                </FormGroup>
              </Col>
              {/* </Row>
            <Row form> */}
              <Col md={6}>
                <FormGroup>
                  <Label for="requiredStock">Required Stock</Label>
                  <Input
                    type="number"
                    name="requiredStock"
                    id="requiredStock"
                    disabled
                    value={inventoryview.requiredStock}
                    // onChange={handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewInventory;
