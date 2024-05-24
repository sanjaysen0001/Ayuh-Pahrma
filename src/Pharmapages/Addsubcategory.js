import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  CustomInput,
} from "reactstrap";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import axiosConfig from "../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../assets/scss/plugins/extensions/editor.scss";

import { data } from "jquery";
import Swal from "sweetalert2";
export class Addsubcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "",
      subCategoryName: "",
      categories: [], // Assuming you have a way to load these categories
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axiosConfig
      .get("/pharma-category/view-category")
      .then((response) => {
        this.setState({ categories: response.data.Category });
        console.log(response.data.Category);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit(event) {
    event.preventDefault();
    const { selectedCategory, subCategoryName } = this.state;

    // Validate form data
    if (!selectedCategory || !subCategoryName) {
      alert("Please fill in all fields");
      return;
    }

    // Post data to API
    axiosConfig
      .post("/pharma-category/save-sub-category", {
        category: selectedCategory,
        subCategoryName: subCategoryName,
      })
      .then((response) => {
        console.log(response.data);

        this.setState({ selectedCategory: "", subCategoryName: "" });
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Sub-Category Add successfully.",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again later.",
        });
      });
  }

  render() {
    const { selectedCategory, subCategoryName, categories } = this.state;
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Sub-Category
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/Subcategory")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.handleSubmit}>
              <Row>
                {/*
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Product Title</Label>
                  <Input
                    required
                    type="text"
                    name="title"
                    placeholder="Enter Title"
                    value={this.state.title}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
 */}
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <label htmlFor="categorySelect">Select Category</label>
                  <br />
                  <select
                    className="form-select w-100"
                    style={{
                      height: "37px",
                      border: "1px solid #d9d9d9",
                      borderRadius: "5px",
                    }}
                    aria-label="Default select example"
                    id="categorySelect"
                    name="selectedCategory"
                    value={selectedCategory}
                    onChange={this.handleChange}
                  >
                    <option value="" disabled>
                      --Select--
                    </option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.categoryName}
                      </option>
                    ))}
                  </select>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label htmlFor="subCategoryName">Sub-Category Name</Label>
                  <Input
                    required
                    type="text"
                    name="subCategoryName"
                    id="subCategoryName"
                    value={subCategoryName}
                    onChange={this.handleChange}
                  />
                </Col>

                {/*
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Product Category</Label>
                  <CustomInput
                    type="select"
                    name="category"
                    value={this.state.category}
                    onChange={this.changeHandler}
                  >
                    <option>Select Product Category</option>
                    {this.state.categoryP?.map((allCategory) => (
                      <option value={allCategory?._id} key={allCategory?._id}>
                        {allCategory?.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Price(MRP)</Label>
                  <Input
                    required
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    value={this.state.price}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Set No of Question </Label>
                  <Input
                    required
                    type="number"
                    name="qsCount"
                    placeholder="Enter No of Question "
                    value={this.state.qsCount}
                    onChange={this.changeHandler}
                  />
                </Col>
 */}
                {/* <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label> * Limit(50)</Label>
                  <Input
                    required
                    type="number"
                    name="limit"
                    onKeyDown={this.blockInvalidChar}
                    min="0"
                    max="50"
                    placeholder="Enter limit max is 50"
                    value={this.state.limit}
                    onChange={this.changeHandler}
                  />
                </Col> */}
                {/*
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Thumnail Image</Label>

                  <Label>Image</Label>
                  <CustomInput
                    type="file"
                    multiple
                    onChange={this.onChangeHandler}
                  />
                </Col>
                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Description</Label>

                  <br />

                  <Editor
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                      inline: { inDropdown: true },
                      list: { inDropdown: true },
                      textAlign: { inDropdown: true },
                      link: { inDropdown: true },
                      history: { inDropdown: true },
                      image: {
                        uploadCallback: this.uploadImageCallBack,
                        previewImage: true,
                        alt: { present: true, mandatory: true },
                      },
                    }}
                  />
                </Col>
                 */}
              </Row>
              {/*
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label className="mb-1">Status</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
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
              </Col>
               */}
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add
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
export default Addsubcategory;
