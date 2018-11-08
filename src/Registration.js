import React, {Component} from 'react';
import { Grid, Row, Col, FormGroup, ControlLabel, FormControl, ButtonToolbar, Button } from 'react-bootstrap';

class Registraion extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleChange = this.handleChange.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birth_date: '',
            address: '',
        };
    }
    
    getValidationState(length) {
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }
    
    handleChange(e) {
        let stateKey = e.target.name;
        this.setState({ [stateKey]: e.target.value });
    }
    
    clearForm(e) {
        this.setState({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birth_date: '',
            address: '',
        });
    }

    render() {
        const gridInstance = (
            <Grid style={{marginTop: '20px'}}>
              <Row className="show-grid">
                <Col sm={12} md={6} className='pull-right'>
                    <h1>Registration</h1>
                    <div className='well' style={{paddingBottom: '50px'}}>
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
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState(this.state.first_name.length)}
                        >
                        <ControlLabel>First name</ControlLabel>
                        <FormControl
                            type="text"
                            name='first_name'
                            value={this.state.first_name}
                            placeholder="First Name"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState(this.state.last_name.length)}
                        >
                        <ControlLabel>Last name</ControlLabel>
                        <FormControl
                            type="text"
                            name='last_name'
                            value={this.state.last_name}
                            placeholder="Last name"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState(this.state.birth_date.length)}
                        >
                        <ControlLabel>Birth date</ControlLabel>
                        <FormControl
                            type="text"
                            name='birth_date'
                            value={this.state.birth_date}
                            placeholder="Birth date"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        </FormGroup>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState(this.state.address.length)}
                        >
                        <ControlLabel>Address</ControlLabel>
                        <FormControl
                            type="text"
                            name='address'
                            value={this.state.address}
                            placeholder="Address"
                            onChange={this.handleChange}
                        />
                        <FormControl.Feedback />
                        </FormGroup>
                        <ButtonToolbar className='pull-right'>
                            <Button bsStyle="info">Register</Button>
                            <Button bsStyle="danger" onClick={this.clearForm}>Clear</Button>
                        </ButtonToolbar>
                        
                    </form>
                    </div>
                </Col>
              </Row>
          </Grid>);
          
        return gridInstance;
    }
}

export default Registraion;