import React from "react";
import { Link } from "react-router-dom";
import { CardBody, FormGroup, Form, Input, Button, Label, Row, Col } from "reactstrap";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Mail, Lock, Check } from "react-feather";
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
import { connect } from "react-redux";
import axios from "axios";
import { Route } from "react-router-dom";
import swal from "sweetalert";
import { Token } from "prismjs";
import Swal from 'sweetalert2';
import axiosConfig from "../../../../axiosConfig";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
class LoginJWT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosConfig.post('/pharma/pharma-login', {
        email: this.state.email,
        password: this.state.password
      });
   
      console.log(response.data);
      localStorage.setItem("ad-token", response.data.user.token);
      localStorage.setItem("userData", JSON.stringify(response.data.user));
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Log In successfully.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK'
      }).then(() => {
       
      
        window.location.replace("/");
     
    });
    } catch (error) {
   
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again later.'
      });
    }
  }

  
  render() {
    return (
      <React.Fragment>
      <CardBody className="pt-1">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="form-label-group position-relative has-icon-left">
            <Input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            />
            <div className="form-control-position">
              <Mail size={15} />
            </div>
            <Label>Email </Label>
          </FormGroup>
          <FormGroup className="form-label-group position-relative has-icon-left">
            <Input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            />
            <div className="form-control-position">
              <Lock size={15} />
            </div>
            <Label>Password</Label>
          </FormGroup>
          <FormGroup className="d-flex justify-content-between align-items-center">
            <Checkbox
              color="primary"
              icon={<Check className="vx-icon" size={16} />}
              label="Remember me"
              defaultChecked={false}
              onChange={this.handleRemember}
              required
            />
            <div className="float-right">
              <Link to="/pages/forgot-password">Forgot Password?</Link>
            </div>
          </FormGroup>
         <Row>
         <Col lg='5' xl='5' md='5' xs='12'>
         <Route
              render={({ history }) => (
                <Button.Ripple color="primary" type="submit" style={{ width: '8.5rem' }}>
                  Login
                </Button.Ripple>
              )}
            />
          </Col>
          <Col lg='7' xl='7' md='7' xs='12'>
          <div className="mt-2">

          <Link to={'/pages/register'}>

           New User Register Here..

          </Link>
        </div>
          </Col>
         </Row>
        

        </Form>

      </CardBody>
    </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.auth.login,
  };
};
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT);



