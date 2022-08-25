import React, { useState }  from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import cat1 from '../../../../assets/img/categories/cat1.jpg'
import AdjustAmount from '../../../adjustAmount/adjustAmount';
import './Cart.css'

const Cart = () => {
    

    return(
        <> 
            <Row>
                <Col  md={8.75}>
                <h4>Giỏ hàng</h4>
                <hr />
                {Array.from({ length: 3 }).map((_, idx) => (
                    <div>
                        <Row className="Information">
                            <Col sm={4}>
                            <Image src={cat1} width='200' height='200'/>
                            </Col>
                            <Col sm={9} >
                            <div>
                                <h5>Tên sản phẩm</h5>
                                <h7>Mô tả</h7>
                                <p>Giày Thể Thao Nike Court Borough Low 2 GS 'White' BQ5448-118 Màu Trắng có thiết kế trẻ trung.</p>
                                <p className="d-inline-flex ">
                                    <AdjustAmount/>
                                </p>
                                <p>
                                <Button variant="link" className="text-danger border-right">Xóa </Button>
                                <Button variant="link">Yêu thích </Button>
                                </p>                      
                            </div>
                            </Col>
                    </Row>
                    <hr />
                    </div>                    
                 ))}
                </Col>
                <Col md={{ span: 3.75, offset: 1 }}>
                <h4>Hóa đơn</h4>
                <hr />
                <Form.Label>Địa chỉ giao hàng:</Form.Label>
                <Form.Control className='mb-2'
                   placeholder="Vui lòng nhập địa chỉ giao hàng"
                />

                <div class="d-flex">
                <Form.Label class="mr-auto">Tổng tiền: </Form.Label>
                <Form.Label>300.000.000đ</Form.Label>
                </div>

                <div class="d-flex">
                <Form.Label class="mr-auto">Phí giao hàng:</Form.Label>
                <Form.Label>0đ</Form.Label>
                </div>

                <div class="d-flex">
                <Form.Label class="mr-auto">Khuyến mãi: </Form.Label>
                <Form.Label>-0đ</Form.Label>
                </div>

                <div class="d-flex">
                <Form.Label class="mr-auto">Thuế:</Form.Label>
                <Form.Label>0đ</Form.Label>
                </div>

                <div class="d-flex text-danger font-weight-bold">
                <Form.Label class="mr-auto">Thành tiền: </Form.Label>
                <Form.Label>300.000.000đ</Form.Label>
                </div>

                <div className="d-grid gap-2 mt-3 ">
                    <Button variant="danger" size="lg" className="m-1 w-100">
                        Thanh toán qua Momo
                    </Button>
                    <Button variant="info" size="lg" className="m-1 w-100">
                        Thanh toán qua Paypal
                    </Button>
                </div>
                </Col>
                

            </Row>
        </>
    )
}

export default Cart
