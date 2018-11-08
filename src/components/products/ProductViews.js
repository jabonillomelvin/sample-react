import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import ProductGrid from './ProductGrid';


class ProductViews extends Component {
    render() {
        return (
            <Grid style={{marginTop: '20px'}}>
                <Row className="show-grid">
                    <h1>Products</h1>
                    <ProductGrid />
                    
                </Row>
            </Grid>
        );
    }
}

export default ProductViews;