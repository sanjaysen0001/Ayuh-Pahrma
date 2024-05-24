import React from "react";
import Swal from "sweetalert2";
import {
  Row,
  Col,
  Button,
  Form,
  Label,
  Input,
  Card,
  CardTitle,
} from "reactstrap";
import "../assets/scss/pages/users-profile.scss";
import CheckBoxesVuexy from "../components/@vuexy/checkbox/CheckboxesVuexy";
import { Check } from "react-feather";
import Breadcrumbs from "../components/@vuexy/breadCrumbs/BreadCrumb";
import axios from "axios";
import swal from "sweetalert";
import axiosConfig from "../axiosConfig";
// import { Route } from "react-router-dom";

class Editprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      name: "",
      email: "",
      mobileNumber: "",
      licenseNumber: "",
      password: "",
      confirmPassword: "",
      panNo: "",
      gstNo: "",
      address1: "",
      city1: "",
      state1: "",
      country1: "",
      address2: "",
      city2: "",
      state2: "",
      country2: "",
      address3: "",
      city3: "",
      state3: "",
      country3: "",
      data: {},
      error: null,
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("userData"));
    console.log(user._id);
    // let { id } = this.props.match;
    // console.log(id);
    axiosConfig
      .get(`/pharma/pharma-by-id/${user?._id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({ data: response.data.Pharma });
        this.setState(response.data.Pharma);

        console.log(response.data.Pharma);
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleChangeFile = (e) => {
    console.log(e.target.files[0]);
    this.setState({ file: e.target.files[0] });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("userData"));

    const formData = new FormData();

    formData.append("file", this.state.file);
    formData.append("name", this.state.name);
    formData.append("email", this.state.email);
    formData.append("mobileNumber", this.state.mobileNumber);
    formData.append("licenseNumber", this.state.licenseNumber);
    formData.append("panNo", this.state.panNo);
    formData.append("gstNo", this.state.gstNo);
    formData.append("city1", this.state.city1);
    formData.append("state1", this.state.state1);
    formData.append("country1", this.state.country1);
    formData.append("address1", this.state.address1);
    axiosConfig
      .put(`/pharma/edit-profile-pharma/${user?._id}`, formData)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: `${response.data.message}`,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        console.log(response.data.message);
      })
      .catch((error) => {
        console.log(error);
        // Swal.fire({
        //   icon: "error",
        //   title: `${error}`,
        //   text: "Something went wrong! Please try again later.",
        // });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <React.Fragment>
        <h2>Edit Profile</h2>
        <div id="user-profile">
          <Row className="m-0 justify-content-center">
            <Col lg="5" md="5" xl="5" sm="12">
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                <div className="profile-img text-center st-1">
                  <img
                    src={this.state.data?.image}
                    alt="adminimg"
                    className="img-fluid img-border rounded-circle box-shadow-1"
                    width="150"
                  />
                  <ul className="lst-1">
                    <li className="lst-2">
                      Name{" "}
                      <span className="lst-3">{this.state.data?.name}</span>
                    </li>
                    <li className="lst-2">
                      Email{" "}
                      <span className="lst-3">{this.state.data?.email}</span>
                    </li>
                    <li className="lst-2">
                      Address 1{" "}
                      <span className="lst-3">{this.state.data?.address1}</span>
                    </li>
                    <li className="lst-2">
                      City{" "}
                      <span className="lst-3">{this.state.data?.city1}</span>
                    </li>
                    <li className="lst-2">
                      State{" "}
                      <span className="lst-3">{this.state.data?.state1}</span>
                    </li>
                    <li className="lst-2">
                      Country{" "}
                      <span className="lst-3">{this.state.data?.country1}</span>
                    </li>
                    <li className="lst-2">
                      Address 2{" "}
                      <span className="lst-3">{this.state.data?.address2}</span>
                    </li>
                    <li className="lst-2">
                      City{" "}
                      <span className="lst-3">{this.state.data?.city2}</span>
                    </li>
                    <li className="lst-2">
                      State{" "}
                      <span className="lst-3">{this.state.data?.state2}</span>
                    </li>
                    <li className="lst-2">
                      Country{" "}
                      <span className="lst-3">{this.state.data?.country2}</span>
                    </li>
                    <li className="lst-2">
                      Address 3{" "}
                      <span className="lst-3">{this.state.data?.address3}</span>
                    </li>
                    <li className="lst-2">
                      City{" "}
                      <span className="lst-3">{this.state.data?.city3}</span>
                    </li>
                    <li className="lst-2">
                      State{" "}
                      <span className="lst-3">{this.state.data?.state3}</span>
                    </li>
                    <li className="lst-2">
                      Country{" "}
                      <span className="lst-3">{this.state.data?.country3}</span>
                    </li>
                    <li className="lst-2">
                      Phone No.{" "}
                      <span className="lst-3">
                        {this.state.data?.mobileNumber}
                      </span>
                    </li>
                    <li className="lst-2">
                      License No.{" "}
                      <span className="lst-3">
                        {this.state.data?.licenseNumber}
                      </span>
                    </li>
                    <li className="lst-2">
                      Pan Card NO.{" "}
                      <span className="lst-3">{this.state.data?.panNo}</span>
                    </li>
                    <li className="lst-2">
                      GST NO.{" "}
                      <span className="lst-3">{this.state.data?.gstNo}</span>
                    </li>
                  </ul>
                </div>
              </Card>
            </Col>
            <Col
              sm="12"
              xl="7"
              lg="7"
              md="7"
              className="d-flex justify-content-center"
            >
              <Card className="bg-authentication rounded-0 mb-0 w-100">
                {error && <p>{error}</p>}
                <Form className="m-1" onSubmit={this.handleSubmit}>
                  <div className="st-2">
                    <CardTitle>
                      <h4 className="mb-3">Edit Profile</h4>
                      <Col></Col>
                    </CardTitle>
                    <Row className="m-0">
                      <Col lg="6" xl="6" md="6">
                        <Label>Name</Label>
                        <Input
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>Address 1</Label>
                        <Input
                          type="text"
                          name="address1"
                          value={this.state.address1}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>City</Label>
                        <Input
                          type="text"
                          value={this.state.city1}
                          name="city1"
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>State</Label>
                        <Input
                          type="text"
                          name="state1"
                          value={this.state.state1}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>Country</Label>
                        <Input
                          type="text"
                          name="country1"
                          value={this.state.country1}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>Address 2</Label>
                        <Input
                          type="text"
                          name="address2"
                          value={this.state.address2}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>City</Label>
                        <Input
                          type="text"
                          name="city2"
                          value={this.state.city2}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>State</Label>
                        <Input
                          type="text"
                          name="state2"
                          value={this.state.state2}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>Country</Label>
                        <Input
                          type="text"
                          name="country2"
                          value={this.state.country2}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>Address 3</Label>
                        <Input
                          type="text"
                          name="address3"
                          value={this.state.address3}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>City</Label>
                        <Input
                          type="text"
                          name="city3"
                          value={this.state.city3}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>State</Label>
                        <Input
                          type="text"
                          name="state3"
                          value={this.state.state3}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>Country</Label>
                        <Input
                          type="text"
                          name="country3"
                          value={this.state.country3}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>Phone No.</Label>
                        <Input
                          type="text"
                          name="mobileNumber"
                          value={this.state.mobileNumber}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>License No</Label>
                        <Input
                          type="text"
                          name="licenseNumber"
                          value={this.state.licenseNumber}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>Pan Card No</Label>
                        <Input
                          type="text"
                          name="panNo"
                          value={this.state.panNo}
                          onChange={this.handleChange}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6">
                        <Label>GST No.</Label>
                        <Input
                          type="text"
                          name="gstNo"
                          value={this.state.gstNo}
                          onChange={this.handleChange}
                        />
                      </Col>

                      <Col lg="6" xl="6" md="6">
                        <Label>Image</Label>
                        <Input
                          type="file"
                          name="file"
                          onChange={this.handleChangeFile}
                        />
                      </Col>
                      <Col lg="6" xl="6" md="6"></Col>
                      <Col lg="12" xl="12" md="12">
                        <div className=" mt-3">
                          <Button.Ripple color="primary" type="submit">
                            Submit
                          </Button.Ripple>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
export default Editprofile;

// import React from "react";
// import {
//   Row,
//   Col,
//   Button,
//   Form,
//   Label,
//   Input,
//   Card,
//   CardTitle,
// } from "reactstrap";
// import "../assets/scss/pages/users-profile.scss";
// import CheckBoxesVuexy from "../components/@vuexy/checkbox/CheckboxesVuexy";
// import { Check } from "react-feather";
// import Breadcrumbs from "../components/@vuexy/breadCrumbs/BreadCrumb";
// import axios from "axios";
// import swal from "sweetalert";
// import axiosConfig from "../axiosConfig";
// // import { Route } from "react-router-dom";

// class Editprofile extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       mobile: "",
//       cnfmPassword: "",
//       password: "",
//       adminimg: "",
//       selectedName: "",
//       selectedFile: null,
//       data: {},
//     };
//   }

//   //Image Submit Handler
//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files[0] });
//     this.setState({ selectedName: event.target.files[0].name });
//     console.log(event.target.files[0]);
//   };

//   componentDidMount() {
//     // let { id } = this.props.match.params;
//     axiosConfig
//       .get(`/admin/viewoneadmin/64535cc3c84d5b23e0102d4f`)
//       .then((response) => {
//         //console.log(response.data);
//         console.log(response);
//         this.setState({
//           data: response.data.data,
//           name: response.data.data.name,
//           email: response.data.data.email,
//           mobile: response.data.data.mobile,
//           password: response.data.data.password,
//           cnfmPassword: response.data.data.cnfmPassword,
//         });
//       })
//       .catch((error) => {
//         console.log(error.response);
//       });
//   }

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   submitHandler = (e) => {
//     e.preventDefault();
//     console.log(this.state.data);
//     const data = new FormData();
//     data.append("name", this.state.name);
//     data.append("email", this.state.email);
//     data.append("mobile", this.state.mobile);
//     data.append("password", this.state.password);
//     data.append("cnfmPassword", this.state.cnfmPassword);
//     if (this.state.selectedFile !== null) {
//       data.append("adminimg", this.state.selectedFile, this.state.selectedName);
//     }

//     for (var value of data.values()) {
//       console.log(value);
//     }

//     for (var key of data.keys()) {
//       console.log(key);
//     }
//     // let { id } = this.props.match.params;
//     axiosConfig
//       .post(`/admin/editprofile/64535cc3c84d5b23e0102d4f`, data, {
//         headers: {
//           "ad-token": localStorage.getItem("ad-token"),
//         },
//       })
//       .then((response) => {
//         console.log(response.data.message);
//         swal("Success!", "Submitted SuccessFull!", "success");
//         window.location.reload("/#/pages/profile");
//       })

//       .catch((error) => {
//         swal("Error!", "You clicked the button!", "error");
//         console.log(error.response);
//       });
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <h2>Edit Profile
//         </h2>

//         <div id="user-profile">
//           <Row className="m-0 justify-content-center">
//             <Col lg="5" md="5" xl="5" sm="12">
//               <Card className="bg-authentication rounded-0 mb-0 w-100">
//                 <div className="profile-img text-center st-1">

//                   <img
//                     src={this.state.data.adminimg}
//                     alt="adminimg"
//                     className="img-fluid img-border rounded-circle box-shadow-1"
//                     width="150"
//                   />
//                   <ul className="lst-1">
//                     <li className="lst-2">
//                       Name:{" "}
//                       <span className="lst-3">{this.state.data.name}</span>
//                     </li>
//                     <li className="lst-2">
//                     Email:{" "}
//                       <span className="lst-3">{this.state.data.email}</span>
//                     </li>
//                     <li className="lst-2">
//                     Address:{" "}
//                       <span className="lst-3">{this.state.data.email}</span>
//                     </li>
//                     <li className="lst-2">
//                     Phone No.:{" "}
//                       <span className="lst-3">{this.state.data.mobile}</span>
//                     </li>
//                     <li className="lst-2">
//                     License No.:{" "}
//                       <span className="lst-3">{this.state.data._id}</span>
//                     </li>
//                     <li className="lst-2">
//                     Pan Card NO.:{" "}
//                       <span className="lst-3">{this.state.data.mobile}</span>
//                     </li>
//                     <li className="lst-2">
//                     GST NO.:{" "}
//                       <span className="lst-3">{this.state.data.mobile}</span>
//                     </li>
//                   </ul>
//                 </div>
//               </Card>
//             </Col>
//             <Col
//               sm="12"
//               xl="7"
//               lg="7"
//               md="7"
//               className="d-flex justify-content-center"
//             >
//               <Card className="bg-authentication rounded-0 mb-0 w-100">
//                 <Form className="m-1" onSubmit={this.submitHandler}>
//                   <div className="st-2">
//                     <CardTitle>
//                       <h4 className="mb-3">Edit Profile</h4>
//                       <Col></Col>
//                     </CardTitle>
//                     <Row className="m-0">
//                       <Col sm="12" className="p-0">
//                         <Form action="/">
//                           <Label>Name</Label>
//                           <Input
//                             type="text"
//                             name="name"
//                             placeholder="Name"
//                             value={this.state.name}
//                             onChange={this.changeHandler}
//                           />
//                           <Label>Email</Label>
//                           <Input
//                             type="email"
//                             name="email"
//                             placeholder="email"
//                             value={this.state.email}
//                             onChange={this.changeHandler}
//                           />
//                           <Label>Address</Label>
//                           <Input
//                             type="text"
//                             name="Address"
//                             placeholder="Address"

//                             onChange={this.changeHandler}
//                           />
//                           <Label>Phone No.</Label>
//                           <Input
//                             type="number"
//                             name="phoneno"
//                             placeholder="Phone No."
//                             value={this.state.mobile}
//                             onChange={this.changeHandler}
//                           />
//                           <Label>License No.</Label>
//                           <Input
//                             type="text"
//                             name="licenseno"
//                             placeholder="License No."

//                             onChange={this.changeHandler}
//                           />
//                           <Label>Pan Card NO.</Label>
//                           <Input
//                             type="text"
//                             name="pancardno"
//                             placeholder="Pan Card NO."

//                             onChange={this.changeHandler}
//                           />
//                           <Label>GST NO.</Label>
//                           <Input
//                             type="text"
//                             name="gstno"
//                             placeholder="GST NO."

//                             onChange={this.changeHandler}
//                           />
//                           <Label>User Image</Label>
//                           <Input
//                             className="form-control"
//                             type="file"
//                             name="adminimg"
//                             onChange={this.onChangeHandler}
//                           />

//                           <div className="d-flex justify-content-between mt-3">
//                             <Button.Ripple color="primary" type="submit">
//                               Submit
//                             </Button.Ripple>
//                           </div>
//                         </Form>
//                       </Col>
//                     </Row>
//                   </div>
//                 </Form>
//               </Card>
//             </Col>
//           </Row>
//         </div>
//       </React.Fragment>
//     );
//   }
// }
// export default Editprofile;
