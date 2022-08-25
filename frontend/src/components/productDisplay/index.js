import React from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import cat1 from '../../assets/img/categories/cat1.jpg'
import Pagination from 'react-bootstrap/Pagination';
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './productDisplay.css'
const ProductDisplay = () => {
    return (
        <>
            <Container className="ml-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Row className="g-4 pb-3 d-inline-flex justify-content-md-center">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col className="text-center" md="auto" style={{width:200, paddingLeft:'10px', paddingRight:'10px'}}>
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
                    </Row>
                ))}
            
                <Pagination className="justify-content-center">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item native>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Container>
        </>
    )
}

export default ProductDisplay


