import React from "react";
import {
  Card,
  CardBody,
  Input,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";
import axiosConfig from "../axiosConfig";
import { ContextLayout } from "../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import {  Eye, Edit,Trash2, ChevronDown } from "react-feather";
import "../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
import Breadcrumbs from "../components/@vuexy/breadCrumbs/BreadCrumb";
// import SwitchEvent from "../forms/form-elements/switch/SwitchEvent";
import swal from "sweetalert";

class Medicalinventory extends React.Component {
  state = {
    rowData: [],
    paginationPageSize: 20,
    currenPageSize: "",
    getPageSize: "",
    defaultColDef: {
      sortable: true,
      editable: true,
      resizable: true,
      suppressMenu: true,
    },
    columnDefs: [
      {
        headerName: "S.No",
        valueGetter: "node.rowIndex + 1",
        field: "node.rowIndex + 1",
        width: 100,
        filter: true,
        // checkboxSelection: true,
        // headerCheckboxSelectionFilteredOnly: true,
        // headerCheckboxSelection: true,
      },
    //   {
    //     headerName: "Image",
    //     field: "userimg",
    //     filter: false,
    //     width: 100,
    //     setColumnVisible: false,
    //     // cellRendererFramework: (params) => {
    //     //   return (
    //     //     <div className="d-flex align-items-center cursor-pointer">
    //     //       {params.data.userimg.map((i) => (
    //     //         <img
    //     //           className=" rounded-circle  mr-3"
    //     //           src={i}
    //     //           alt="user avatar"
    //     //           height="40"
    //     //           width="40"
    //     //         />
    //     //       ))}
    //     //     </div>
    //     //   );
    //     // },
    //   },
      {
        headerName: "Available Stock",
        field: "availablestock",
        filter: true,
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div>
              <span>1000</span>

            </div>
          );
        },
      },
      // {
      //   headerName: "Patient Id",
      //   field: "patientid",
      //   filter: true,
      //   width: 150,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.walletId}</span>
      //       </div>
      //     );
      //   },
      // },
      {
        headerName: "Capacity Stock",
        field: "capacitystock",
        filter: true,
        width: 150,
        // cellRendererFramework: (params) => {
        //   return (
        //     <div>
        //       <span>{params.data.walletId}</span>
        //     </div>
        //   );
        // },
      },
      {
        headerName: "Required Stock",
        field: "requiredstock",
        filter: true,
        width: 150,
        // cellRendererFramework: (params) => {
        //   return (
        //     <div>
        //       <span>{params.data.walletId}</span>
        //     </div>
        //   );
        // },
      },

    //   {
    //     headerName: "Email ID",
    //     field: "email	",
    //     filter: true,
    //     width: 150,
    //     cellRendererFramework: (params) => {
    //       return (
    //         <div className="d-flex align-items-center cursor-pointer">
    //           <span>{params.data.email}</span>
    //         </div>
    //       );
    //     },
    //   },
    //   {
    //     headerName: "Phone Number",
    //     field: "mobile",
    //     filter: true,
    //     width: 180,
    //     cellRendererFramework: (params) => {
    //       return (
    //         <div className="d-flex align-items-center cursor-pointer">
    //           <span>{params.data.mobile}</span>
    //         </div>
    //       );
    //     },
    //   },
      {
        headerName: "Medicine Type",
        field: "medicinetype",
        filter: true,
        width: 150,
        // cellRendererFramework: (params) => {
        //   return (
        //     <div className="d-flex align-items-center cursor-pointer">
        //       <span>{params.data.city}</span>
        //     </div>
        //   );
        // },
      },
     
    //   {
    //     headerName: "Start Time",
    //     field: "starttime",
    //     filter: true,
    //     width: 150,
    //     cellRendererFramework: (params) => {
    //       return (
    //         <div>
    //           <span>{params.data?.updatedAt.split("T")[1].split(".")[0]}</span>
    //         </div>
    //       );
    //     },
    //   },
    //   {
    //     headerName: "End Time",
    //     field: "endtime",
    //     filter: true,
    //     width: 150,
    //     cellRendererFramework: (params) => {
    //       return (
    //         <div>
    //           <span>{params.data?.createdAt.split("T")[1].split(".")[0]}</span>
    //         </div>
    //       );
    //     },
    //   },
      // {
      //   headerName: "Date",
      //   field: "testdate",
      //   filter: true,
      //   width: 120,
      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data?.dob}</span>
      //       </div>
      //     );
      //   },
      // },
     
     

    //   {
    //     headerName: " Gender",
    //     field: "gender",
    //     filter: true,
    //     width: 150,
    //     cellRendererFramework: (params) => {
    //       return (
    //         <div>
    //           <span>{params.data?.bithplace}</span>
    //         </div>
    //       );
    //     },
    //   },
      // {
      //   headerName: "Price",
      //   field: "price",
      //   filter: true,
      //   width: 150,

      //   cellRendererFramework: (params) => {
      //     return (
      //       <div>
      //         <span>{params.data.amount}</span>
      //       </div>
      //     );
      //   },
      // },

      {
        headerName: "Actions",
        field: "sortorder",
        width: 150,
        cellRendererFramework: (params) => {
          return (
            <div className="actions cursor-pointer">
              <Route
                render={({ history }) => (
                  <Eye
                    className="mr-50"
                    size="25px"
                    color="green"
                    onClick={() =>
                      history.push(`/Deliver-report-rist/View-report/${params.data._id}`)
                    }
                  />
                )}
              />

              <Route
                render={({ history }) => (
                  <Edit
                    className="mr-50"
                    size="25px"
                    color="blue"
                    onClick={() =>
                      history.push(`/Deliver-report-rist/Edit-report/${params.data._id}`)
                    }
                  />
                )}
              />

              <Trash2
                className="mr-50"
                size="25px"
                color="red"
                onClick={() => {
                  let selectedData = this.gridApi.getSelectedRows();
                  this.runthisfunction(params.data._id);
                  // this.gridApi.updateRowData({ remove: selectedData });
                }}
              />
            </div>
          );
        },
      },
    ],
  };
  async componentDidMount() {
    await axiosConfig.get(`/admin/alluser`).then((response) => {
      let rowData = response.data.data;
      console.log(rowData);
      this.setState({ rowData });
    });
  }

  async runthisfunction(id) {
    swal(
      `Sure You Want To Delete It`,
      "Delete Or Cancel",

      {
        buttons: {
          cancel: "Cancel",
          catch: { text: "Delete ", value: "delete" },
        },
      }
    ).then((value) => {
      switch (value) {
        case "delete":
          axiosConfig.get(`/admin/dltuser/${id}`).then(
            (response) => {
              this.componentDidMount();
              console.log(response);
            },
            (error) => {
              console.log(error);
            }
          );
          break;
        default:
          break;
      }
    });
  }
  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.setState({
      currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
      getPageSize: this.gridApi.paginationGetPageSize(),
      totalPages: this.gridApi.paginationGetTotalPages(),
    });
  };
  updateSearchQuery = (val) => {
    this.gridApi.setQuickFilter(val);
  };
  filterSize = (val) => {
    if (this.gridApi) {
      this.gridApi.paginationSetPageSize(Number(val));
      this.setState({
        currenPageSize: val,
        getPageSize: val,
      });
    }
  };
  render() {
    const { rowData, columnDefs, defaultColDef } = this.state;
    return (
      console.log(rowData),
      (
        <div>
        <h2>Medical Inventory  </h2>
          <Row className="app-user-list">
            <Col sm="12"></Col>
            <Col sm="12">
              <Card>
                <CardBody>
                  {this.state.rowData === null ? null : (
                    <div className="ag-theme-material w-100 my-2 ag-grid-table">
                      <div className="d-flex flex-wrap justify-content-between align-items-center">
                        <div className="mb-1">
                          <UncontrolledDropdown className="p-1 ag-dropdown">
                            <DropdownToggle tag="div">
                              {this.gridApi
                                ? this.state.currenPageSize
                                : "" * this.state.getPageSize -
                                  (this.state.getPageSize - 1)}{" "}
                              -{" "}
                              {this.state.rowData.length -
                                this.state.currenPageSize *
                                  this.state.getPageSize >
                              0
                                ? this.state.currenPageSize *
                                  this.state.getPageSize
                                : this.state.rowData.length}{" "}
                              of {this.state.rowData.length}
                              <ChevronDown className="ml-50" size={15} />
                            </DropdownToggle>
                            <DropdownMenu right>
                              <DropdownItem
                                tag="div"
                                onClick={() => this.filterSize(20)}
                              >
                                20
                              </DropdownItem>
                              <DropdownItem
                                tag="div"
                                onClick={() => this.filterSize(50)}
                              >
                                50
                              </DropdownItem>
                              <DropdownItem
                                tag="div"
                                onClick={() => this.filterSize(100)}
                              >
                                100
                              </DropdownItem>
                              <DropdownItem
                                tag="div"
                                onClick={() => this.filterSize(134)}
                              >
                                134
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </div>
                        <div className="d-flex flex-wrap justify-content-between mb-1">
                          <div className="table-input mr-1">
                            <Input
                              placeholder="search..."
                              onChange={(e) =>
                                this.updateSearchQuery(e.target.value)
                              }
                              value={this.state.value}
                            />
                          </div>
                          <div className="export-btn">
                            <Button.Ripple
                              color="primary"
                              onClick={() => this.gridApi.exportDataAsCsv()}
                            >
                              Export as CSV
                            </Button.Ripple>
                          </div>
                        </div>
                      </div>
                      <ContextLayout.Consumer>
                        {(context) => (
                          <AgGridReact
                            gridOptions={{}}
                            rowSelection="multiple"
                            defaultColDef={defaultColDef}
                            columnDefs={columnDefs}
                            rowData={rowData}
                            onGridReady={this.onGridReady}
                            colResizeDefault={"shift"}
                            animateRows={true}
                            floatingFilter={false}
                            pagination={true}
                            paginationPageSize={this.state.paginationPageSize}
                            pivotPanelShow="always"
                            enableRtl={context.state.direction === "rtl"}
                          />
                        )}
                      </ContextLayout.Consumer>
                    </div>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      )
    );
  }
}
export default Medicalinventory;
