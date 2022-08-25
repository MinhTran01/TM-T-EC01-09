import React, { useState }  from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



import cat1 from '../../../../assets/img/categories/cat1.jpg'
import cat2 from '../../../../assets/img/categories/cat-2.jpg'
import cat3 from '../../../../assets/img/categories/cat-3.jpg'
import cat4 from '../../../../assets/img/categories/cat-4.jpg'

import './ProductDetail.css'
import FormLabel from 'react-bootstrap/esm/FormLabel';
import { Link } from 'react-router-dom';

const ProductDetail = () => {

      const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

      function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
          return (prevCount += 1);
        });
      }

      function decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1); 
          } else {
            return (prevCount = 0);
          }
        });
      }

   return (
        <>
          <h2>Tên sản phẩm</h2>
          <Row>
            <Col>
            <h4 class="text-left">Hình ảnh</h4>
            <hr />
            <Carousel variant="dark" className="ProductDetial">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cat1}
                  alt="First slide"
                  height='350'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cat2}
                  alt="Second slide"
                  height='350'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cat3}
                  alt="Third slide"
                  height='350'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={cat4}
                  alt="Four slide"
                  height='350'
                />
              </Carousel.Item>
            </Carousel>


            <div>
              <Row className="mx-auto w-100 px-2">
                 <Col className="px-0">
                    <Image variant="top" src={cat1} width='100' height='100'/>
                 </Col>
                 <Col className="px-0">
                    <Image variant="top" src={cat2} width='100' height='100'/>
                 </Col>
                 <Col className="px-0">
                    <Image variant="top" src={cat3} width='100' height='100'/>
                 </Col>
                 <Col className="px-0">
                    <Image variant="top" src={cat4} width='100' height='100'/>
                 </Col>
              </Row>
            </div>
            </Col>
            <Col>
              <Row>
                <Col>
                <h4 class="text-left">Mô tả</h4>
                <hr />
                <p class="text-left"> Giày Thể Thao Nike Court Borough Low 2 GS 'White' BQ5448-118 Màu Trắng có thiết kế trẻ trung, năng động đến từ thương hiệu Nike nổi tiếng của Mỹ. Mẫu giày được làm từ chất liệu cao cấp, bền đẹp trong suốt quá trình sử dụng.</p>
                </Col>
              </Row>
              <Row>
                <Col>
                <hr />
                    <div className="FormSelect">
                      <Row>
                        <Col>
                            <Form.Label >Size :</Form.Label>
                            <Form.Control as="select">
                              <option>Chọn</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <Form.Label>Màu :</Form.Label>
                            <Form.Control as="select">
                              <option>Chọn</option>
                              <option value="1">Trắng</option>
                              <option value="2">Đen</option>
                              <option value="3">Đỏ</option>
                            </Form.Control>
                        </Col>
                        <Col>
                            <FormLabel>Yêu thích : </FormLabel>
                            <p className="like">
                              <i className="fa fa-heart" style={{fontSize:'35px'}}></i>
                            </p>
                        </Col>
                      </Row>
                      <Row className="mt-2">
                        <Col>
                            <Form.Label>Số lượng :</Form.Label>
                            <p>
                              <div className="d-inline-flex">
                                <Button variant="outline-dark" onClick={decrement}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                </svg>
                                </Button>
                                <Form.Control readOnly  placeholder={count} className="w-25 mx-1 text-center"/>
                                <Button variant="outline-dark"onClick={increment}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                </svg>
                                </Button>
                              </div>
                            </p>
                        </Col>
                        <Col>
                            <Form.Label>Giá :</Form.Label>
                            <p>1.000.000 VNĐ</p>
                        </Col>
                      </Row>
                      <Row className="mt-4">
                        <Col>
                              <Button variant="primary" size="lg" className="mx-auto">
                                  Thêm vào giỏ hàng
                              </Button>
                        </Col>
                      </Row>
                    </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </>

  )
}

export default ProductDetail
