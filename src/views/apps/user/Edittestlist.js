import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";
export class Edittestlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      mobile: "",
      dob:"",
      amount:"",
      password: "",
      cnfmPassword: "",
      userimg: "",
      selectedName: "",
      selectedFile: null,
      dropdownOpen: false,
      selectedOption: null,
    };
  }
  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  selectOption = option => {
    this.setState({
      selectedOption: option
    });
  }
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/user/viewoneuser/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          fullname: response.data.data.fullname,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
          userimg: response.data.userimg,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    const data = new FormData();

    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("status", this.state.status);
    if (this.state.selectedFile !== null) {
      data.append("userimg", this.state.selectedFile, this.state.selectedName);
    }

    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    let { id } = this.props.match.params;
    axiosConfig
      .post(`/user/myprofile/${id}`, data)
      .then((response) => {
        console.log(response.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/user/userList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render()
  
  {
    const { selectedOption, dropdownOpen } = this.state;
    return (
      <div>
        
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Test List
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/Test")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Category Name</Label>
                  <Input
                    required
                    type="text"
                    name="fullname"
                    placeholder="Enter First Name"
                    // value={this.state.fullname}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Test Name</Label>
                  <Input
                    required
                    type="text"
                    name="testname"
                    placeholder="Enter Last Name"
                    // value={this.state.email}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
               
                <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Price</Label>
                <Input
                  required
                  type="number"
                  name="dob"
                  placeholder="Date"
                  // value={this.state.dob}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label>Discount Price</Label>
                <Input
                  required
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  // value={this.state.amount}
                  onChange={this.changeHandler}
                ></Input>
              </Col>
             
              

                 {/*
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>User Image</Label>
                  <Input
                    className="form-control"
                    type="file"
                    name="userimg"
                    onChange={this.onChangeHandler}
                  />
                </Col>
                 */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Date Of Register</Label>
                    <Input
                      required
                      type="date"
                      name="sortorder"
                      placeholder="Enter Confirm  Password"
                      value={this.state.sortorder}
                      onChange={this.changeHandler}>
                    </Input>
                </Col> */}
                {/* </Row>
              <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Password </Label>
                    <Input
                      required
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.changeHandler}>
                    </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Confirm Password </Label>
                    <Input
                      required
                      type="password"
                      name="cnfmPassword"
                      placeholder="Enter Confirm  Password"
                      value={this.state.cnfmPassword}
                      onChange={this.changeHandler}>
                    </Input>
                </Col> */}
              </Row>
              {/* <Col lg="6" md="6" sm="6" className="mb-2">
                <Label className="mb-1">Status</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="approvedstatus"
                    value="Active"
                  />
                  <span style={{ marginRight: "20px" }}>Active</span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Inactive"
                  />
                  <span style={{ marginRight: "3px" }}>Inactive</span>
                </div>
              </Col> */}
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update Test
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Edittestlist;
