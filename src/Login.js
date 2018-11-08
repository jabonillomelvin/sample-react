import React, {Component} from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button } from 'react-bootstrap';

class Login extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
    
        this.state = {
            email: '',
            password: '',
        };
    }
    
    getValidationState(length) {
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }
    
    handleChange(e, key) {
        let stateKey = e.target.name;
        this.setState({ [stateKey]: e.target.value });
    }
    
    render() {
          const gridInstance = (
            <Grid style={{marginTop: '150px'}}>
              <Row className="show-grid"  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Col sm={12} md={6} className='well'>
                    <form>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState(this.state.email.length)}
                        >
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="text"
                            name='email'
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup
                            controlId="formPassword"
                            validationState={this.getValidationState(this.state.password.length)}
                        >
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            name='password'
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        </FormGroup>
                        <ButtonToolbar className='pull-right'>
                            <Button bsStyle="link">Not a member?</Button>
                            <Button bsStyle="info">Login</Button>
                        </ButtonToolbar>
                        
                    </form>
                </Col>
              </Row>
          </Grid>);
          
        return gridInstance;
    }
}

export default Login;