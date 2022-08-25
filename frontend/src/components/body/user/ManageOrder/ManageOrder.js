import React, { useState }  from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';


const ManageOrder = () => {

    return(
        <> 
            <div className="text-center">
                    <Row className="font-weight-bold pt-4 align-middle">
                        <Col>Mã đơn hàng</Col>
                        <Col>Người nhận</Col>
                        <Col>Trạng thái</Col>
                        <Col>SĐT nhận hàng</Col>
                        <Col xs={3}>Địa chỉ nhận hàng</Col>
                        <Col>Phương thức thanh toán</Col>
                        <Col>Tổng</Col>
                    </Row>
                <hr className="border border-primary"/>
                    {Array.from({ length: 3 }).map((_, idx) => (
                        <div>
                            <Row >
                                <Col>0000000001</Col>
                                <Col>Nguyễn Văn A</Col>
                                <Col>Đang giao</Col>
                                <Col>0912277611</Col>
                                <Col xs={3}>123/456 Nguyễn Thị Minh Khai, phường Đa Kao, quận 1, TP.HCM</Col>
                                <Col >Momo</Col>
                                <Col>300.000.000đ</Col>
                            </Row>
                            <Row>
                                <div className="ml-auto p-2">
                                    <Button variant="link" className="text-danger border-right" size="sm">Xóa</Button>
                                    <Button variant="link" className="text-warning" size="sm">Xem chi tiết</Button>
                                </div>   
                            </Row>
                        <hr />
                        </div>                    
                    ))}
                    
                    <div className="mx-auto" style={{width:167}}>
                        <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                            </li>
                        </ul>
                        </nav>
                    </div>
            </div>
        </>
    )
}

export default ManageOrder
