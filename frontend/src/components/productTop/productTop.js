import React, { useState }  from 'react'
import { Alert, Button, Image } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import cat1 from '../../assets/img/categories/cat1.jpg'
import { Link } from 'react-router-dom'

import '../Slogun/Slogun.css'
import '../productDisplay/productDisplay.css'

const ProductTop = () => {
    const [selected, setSelected] = useState(false);

    const radios = [
        { name: 'item1', value: '1' },
        { name: 'item2', value: '2' },
        { name: 'item3', value: '3' },
        { name: 'item4', value: '4' },
        { name: 'item5', value: '5' },
      ];

    return(
        <>
            <div className="welcome-section" id="callout">
                <Alert className="mx-auto text-center p-5" style={{width:800}}>
                    <Alert.Heading style={{color: 'black', fontSize: '50px', fontWeight: 'bolder'}}>TOP ITEMS</Alert.Heading>
                    <p style={{fontSize: '30px'}}>Sản phẩm bán chạy nhất trong tháng</p>
                </Alert>
            </div>

            <Row className="g-4 pb-3 d-inline-flex justify-content-md-center">
               
                <Button 
                    className="my-auto mr-3"
                    id="toggle-check"
                    type="checkbox"
                    variant="outline-primary"
                    checked={selected}
                    value="1"
                    onChange={(e) => setSelected(e.currentTarget.selected)}
                    style={{width: 50, height: 50}}
                >
                    <i className="fa fa-angle-left"  style={{fontSize:'25px'}}></i>
                </Button>

                {Array.from({ length: 5 }).map((_, idx) => (
                   
                   <Col className="text-center" md="auto" style={{width:200, paddingLeft:'5px', paddingRight:'5px'}}>
                        <Link to='/productdetail'>
                            <Card className="product-display">
                                <Card.Img variant="top" src={cat1} width="150" height="170" />
                                <Card.Body style={{height:80}} >
                                <Card.Title className="mb-0" style={{fontSize:'18px'}}>Product 1</Card.Title>
                                <Card.Text className="mt-1">
                                120.000VNĐ
                                </Card.Text>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>

                 ))}

    
                <Button 
                    className="my-auto ml-3"
                    id="toggle-check"
                    type="checkbox"
                    variant="outline-primary"
                    checked={selected}
                    value="1"
                    onChange={(e) => setSelected(e.currentTarget.selected)}
                    style={{width: 50, height: 50}}
                >
                    <i className="fa fa-angle-right"  style={{fontSize:'25px'}}></i>
                </Button>

            </Row>
    
        </>
    )
}

export default ProductTop

