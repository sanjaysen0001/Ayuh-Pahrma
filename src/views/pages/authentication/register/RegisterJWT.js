import Swal from 'sweetalert2';
import React from "react"
import {
  Form, FormGroup, Input, Label, Button, Row,
  Col,
} from "reactstrap"
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy"
import { Check } from "react-feather"
import { connect } from "react-redux"
import { signupWithJWT } from "../../../../redux/actions/auth/registerActions"
import { history } from "../../../../history"
import { Link } from "react-router-dom/cjs/react-router-dom"
import axiosConfig from '../../../../axiosConfig'

class RegisterJWT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      name: '',
      email: '',
      mobileNumber: '',
      licenseNumber: '',
      password: '',
      confirmPassword: '',
      panNo: '',
      gstNo: '',
      address1: '',
      city1: '',
      state1: '',
      country1: '',
      address2: '',
      city2: '',
      state2: '',
      country2: '',
      address3: '',
      city3: '',
      state3: '',
      country3: '',
      error: '',
      success: ''// Initial state with one empty address field
    };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosConfig.post('/pharma/pharma-register', this.state);
      console.log(response.data); 
      this.setState({ success: 'Form submitted successfully.', error: '' });
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Form submitted successfully.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
      
          window.location.reload();
        }
      });
  
    } catch (error) {
      console.error('Error occurred:', error);
      this.setState({ error: 'An error occurred. Please try again.', success: '' });
    }
  }
  

  render() {
    const { error, success } = this.state;
    return (
      <>
<div style={{ maxHeight: '500px', overflowY: 'auto' }}>
  <div className="m-1">
  {error && <p style={{ color: 'red' }}>{error}</p>}
  {success && <p style={{ color: 'green' }}>{success}</p>}
        <Form  onSubmit={this.handleSubmit}>
          <Row className="">
            <Col xl="6" lg="6" md="6">
              <FormGroup className="form-label-group">
                <Input
                type="text" name="name" value={this.state.name} onChange={this.handleChange} required
                />
                <Label>Name</Label>
              </FormGroup>
            </Col>
            <Col xl="6" lg="6" md="6">
              <FormGroup className="form-label-group">
                <Input
                required
                type="email" name="email" value={this.state.email} onChange={this.handleChange}
                />
                <Label>Email</Label>
              </FormGroup>
            </Col>
          </Row>
       
<Row>

<Col md="6">
                  <FormGroup className="form-label-group">
                    <Input
                    type="text" name="address1" value={this.state.address1} onChange={this.handleChange} required
                    />
                    <Label>Address 1</Label>
                  </FormGroup>
                </Col>
                <Col md="6">
                      <FormGroup className="form-label-group">
                        <Input
                        type="text" name="city1" value={this.state.city1} onChange={this.handleChange} required
                        />
                        <Label>City</Label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="form-label-group">
                        <Input
                        type="text" name="state1" value={this.state.state1} onChange={this.handleChange} required
                        />
                        <Label>State</Label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="form-label-group">
                        <Input
                        type="text" name="country1" value={this.state.country1} onChange={this.handleChange} required
                        />
                        <Label>Country</Label>
                      </FormGroup>
                    </Col>
</Row>
   
<Row>

<Col md="6">
                  <FormGroup className="form-label-group">
                    <Input
                    type="text" name="address2" value={this.state.address2} onChange={this.handleChange}
                    />
                    <Label>Address 2</Label>
                  </FormGroup>
                </Col>
                <Col md="6">
                      <FormGroup className="form-label-group">
                        <Input
                        type="text" name="city2" value={this.state.city2} onChange={this.handleChange}
                        />
                        <Label>City</Label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="form-label-group">
                        <Input
                        type="text" name="state2" value={this.state.state2} onChange={this.handleChange}
                        />
                        <Label>State</Label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="form-label-group">
                        <Input
                        type="text" name="country2" value={this.state.country2} onChange={this.handleChange} 
                        />
                        <Label>Country</Label>
                      </FormGroup>
                    </Col>
</Row>

<Row>

<Col md="6">
                  <FormGroup className="form-label-group">
                    <Input
                    type="text" name="address3" value={this.state.address3} onChange={this.handleChange}
                    />
                    <Label>Address 3</Label>
                  </FormGroup>
                </Col>
                <Col md="6">
                      <FormGroup className="form-label-group">
                        <Input
                        type="text" name="city3" value={this.state.city3} onChange={this.handleChange}
                        />
                        <Label>City</Label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="form-label-group">
                        <Input
                        type="text" name="state3" value={this.state.state3} onChange={this.handleChange} 
                        />
                        <Label>State</Label>
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup className="form-label-group">
                        <Input
                        type="text" name="country3" value={this.state.country3} onChange={this.handleChange}
                        />
                        <Label>Country</Label>
                      </FormGroup>
                    </Col>
</Row>   

        





          <Row>
            <Col xl="6" lg="6" md="6">
              <FormGroup className="form-label-group">
                <Input
                type="text"  required name="mobileNumber" value={this.state.mobileNumber} onChange={this.handleChange}
                />

                <Label>Phone No.</Label>
              </FormGroup>
            </Col>
            <Col xl="6" lg="6" md="6">
              <FormGroup className="form-label-group">
                <Input
                type="text" required name="licenseNumber" value={this.state.licenseNumber} onChange={this.handleChange}
                />
                <Label>License No.</Label>
              </FormGroup>
            </Col>
            <Col xl="6" lg="6" md="6">
              <FormGroup className="form-label-group">
                <Input
                type="text" required name="panNo" value={this.state.panNo} onChange={this.handleChange}
                />
                <Label>Pan Card No.</Label>
              </FormGroup>
            </Col>
            <Col xl="6" lg="6" md="6">
              <FormGroup className="form-label-group">
                <Input required
                type="text" name="gstNo" value={this.state.gstNo} onChange={this.handleChange} 
                />
                <Label> GST No.</Label>
              </FormGroup>
            </Col>
            <Col xl="6" lg="6" md="6">
              <FormGroup className="form-label-group">
                <Input required
                type="password" name="password" value={this.state.password} onChange={this.handleChange}
                />
                <Label>Password</Label>
              </FormGroup>
            </Col>
            <Col xl="6" lg="6" md="6">
              <FormGroup className="form-label-group">
                <Input required
                type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}
                />
                <Label>Confirm Password</Label>
              </FormGroup>
            </Col>
            <Col xl="6" lg="6" md="6">
              <FormGroup className="form-label-group">
                <Input
                type="file" required name="file" onChange={this.handleChange}
                />
                <Label>Image</Label>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              label=" I accept the terms & conditions."
              defaultChecked={false}
            />
          </FormGroup>
          <Row>
          <Col lg='4' xl='4' md='4' xs='12'>
          <Button.Ripple color="primary" type="submit" style={{ width: '8.5rem' }}>
          Register
        </Button.Ripple>
          </Col>
          <Col lg='8' xl='8' md='8' xs='12'>
          <div className="mt-2">
          <Link to={'/pages/login'}>
          Already have an account?  Login Here..

          </Link>

        </div>
          </Col>
          </Row>
         
       

        </Form>
        </div>
        </div>

      </>


    )
  }
}
const mapStateToProps = state => {
  return {
    values: state.auth.register
  }
}
export default connect(mapStateToProps, { signupWithJWT })(RegisterJWT)
