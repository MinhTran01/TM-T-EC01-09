import React, { useState }  from 'react'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {isEmpty, isEmail, isLength, isMatch} from '../../../utils/Validation.js'
import {ErrorMessage, SuccessMessage} from '../../../utils/AlertMessage'
import { apiUrl } from '../../../constants';

import cat1 from '../../../../assets/img/categories/cat1.jpg'
import { Link } from 'react-router-dom';

const Favourite = () => {
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

    return(
        <> 
            <div style={{width:'500px'}}>
                <h4>Các sản phẩm yêu thích</h4>
                <hr />
                {Array.from({ length: 3 }).map((_, idx) => (
                    <Link  to='/productdetail'>
                        <Row >
                            <Col sm={5} className="Information">
                            <Image src={cat1} width='150' height='150'/>
                            </Col>
                            <Col sm={7} >
                            <div>
                                <h6>Tên sản phẩm</h6>
                                <p className='pb-2'>Giày Thể Thao Nike Court Borough Low 2 GS 'White' BQ5448-118 Màu Trắng có thiết kế trẻ trung.</p>
                            
                                <div className="d-inline-flex ">
                                        <p className="mr-2">Số lượng: </p>
                                        <Button size="sm" variant="outline-dark" onClick={decrement}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                                        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                        </svg>
                                        </Button>
                                        <Form.Control size="sm" readOnly  placeholder={count} className="w-25 mx-1 text-center"/>
                                        <Button size="sm" variant="outline-dark"onClick={increment}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                        </svg>
                                        </Button>
                                </div>
                                <p>Giá tiền: 100.000.000đ</p>   
                                <div className="text-center">
                                <Button variant="link" className="text-danger border-right" size="sm">Xóa</Button>
                                <Button variant="link" className="text-warning" size="sm">Thêm vào giỏ hàng</Button>
                                </div>   
                            </div>
                            </Col>
                    </Row>
                    <hr />
                    </Link>                    
                 ))}
          </div>

           
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
        </>
    )
}

export default Favourite
