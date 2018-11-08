import React, {Component} from 'react';
import {Col, Thumbnail, Button } from 'react-bootstrap';
import thumbnail from './thumbnaildiv.png';

class ProductGrid extends Component {
    
    render() {
        return (
            <div>
                <Col sm={3} md={3}>
                    <Thumbnail src={thumbnail} alt="242x200">
                        <h3>Safeguard</h3>
                        <p>Description</p>
                        <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col sm={3} md={3}>
                    <Thumbnail src={thumbnail} alt="242x200">
                        <h3>Perla</h3>
                        <p>Description</p>
                        <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col sm={3} md={3}>
                    <Thumbnail src={thumbnail} alt="242x200">
                        <h3>Bioderm</h3>
                        <p>Description</p>
                        <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col sm={3} md={3}>
                    <Thumbnail src={thumbnail} alt="242x200">
                        <h3>Topgel</h3>
                        <p>Description</p>
                        <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                </Col>
                <Col sm={3} md={3}>
                    <Thumbnail src={thumbnail} alt="242x200">
                        <h3>Mx3</h3>
                        <p>Description</p>
                        <p>
                        <Button bsStyle="primary">Button</Button>
                        &nbsp;
                        <Button bsStyle="default">Button</Button>
                        </p>
                    </Thumbnail>
                </Col>
            </div>
        );
    }
}

export default ProductGrid;