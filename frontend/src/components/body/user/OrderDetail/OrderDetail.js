import React, { useState }  from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import cat1 from '../../../../assets/img/categories/cat1.jpg'
import './OrderDetail.css'
const OrderDetail = () => {

    return(
        <> 
            <Row>
            <Col sm={7}>
                <h4>Chi tiết đơn hàng</h4>
                <hr />

                <div class="d-flex">
                <Form.Label class="mr-auto">Mã đơn hàng: </Form.Label>
                <Form.Label>0000000001</Form.Label>
                </div>

                <div class="d-flex">
                <Form.Label class="mr-auto">Người nhận:</Form.Label>
                <Form.Label>Nguyễn Văn A</Form.Label>
                </div>

                <div class="d-flex">
                <Form.Label class="mr-auto">Trạng thái: </Form.Label>
                <Form.Label>Đang giao</Form.Label>
                </div>

                <div class="d-flex">
                <Form.Label class="mr-auto">SĐT nhận hàng: </Form.Label>
                <Form.Label>0912277611</Form.Label>
                </div>

                <div class="d-flex">
                <Form.Label class="mr-auto">Địa chỉ nhận hàng: </Form.Label>
                <Form.Label>123/456 Nguyễn Thị Minh Khai, phường Đa Kao, quận 1, TP.HCM</Form.Label>
                </div>

                <div class="d-flex">
                <Form.Label class="mr-auto">Phương thức thanh toán: </Form.Label>
                <Form.Label>Momo</Form.Label>
                </div>

                <div class="d-flex font-weight-bold">
                <Form.Label class="mr-auto">Tổng tiền: </Form.Label>
                <Form.Label>300.000.000đ</Form.Label>
                </div>
                </Col>

                <Col  sm={5} >
                <h4>Danh sách sản phẩm</h4>
                <hr />
                {Array.from({ length: 3 }).map((_, idx) => (
                    <div>
                        <Row >
                            <Col sm={5} className="Information">
                            <Image src={cat1} width='150' height='150'/>
                            </Col>
                            <Col sm={7} >
                            <div>
                                <h6>Tên sản phẩm</h6>
                                <p>Giày Thể Thao Nike Court Borough Low 2 GS 'White' BQ5448-118 Màu Trắng có thiết kế trẻ trung.</p>
                                <p>Số lượng: 0</p>
                                <p>Giá tiền: 100.000.000đ</p>       
                            </div>
                            </Col>
                    </Row>
                    <hr />
                    </div>                    
                 ))}
                </Col>
            </Row>
            <div className="text-center">
                <Button variant="primary">
                    Quay lại
                </Button>
            </div>
        </>
    )
}

export default OrderDetail
