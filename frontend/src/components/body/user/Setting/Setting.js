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

const initialState = {
  name: '',
  email: '',
  password: '',
  cf_password: '',
  address:'',
  dob:'',
  phone:'',
  err: '',
  success: ''
}


const Setting = () => {
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

    const [user, setUser] = useState(initialState)

    const {name, email, password,cf_password, address,dob, phone,err, success} = user

    const handleChangeInput = e => {
        const {name, value} = e.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async e => {
        e.preventDefault()
        if(isEmpty(name) || isEmpty(password))
                return setUser({...user, err: "Please fill in all fields.", success: ''})

        if(!isEmail(email))
            return setUser({...user, err: "Invalid emails.", success: ''})

        if(isLength(password))
            return setUser({...user, err: "Password must be at least 6 characters.", success: ''})
        
        if(!isMatch(password, cf_password))
            return setUser({...user, err: "Password did not match.", success: ''})

        try {
            const res = await axios.post(`${apiUrl}/auth/register`, {
                name, email, password, address, dob,phone
            })

            setUser({...user, err: '', success: res.data.msg})
        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }

    return(
        <> 
            <Row>
                <Col sm={7}>
                <div className="mt-3">
                    <h4>Thông tin cá nhân</h4>
                    <hr />

                    {err && ErrorMessage(err)}
                    {success && SuccessMessage(success)}

                    <div className="mx-3">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label className='font-weight-bolder'>Họ và tên (*)</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Nhập họ và tên"
                                id="name" 
                                value={name} 
                                name="name"  
                                onChange={handleChangeInput} />
                            </Form.Group>

                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label className='font-weight-bolder'>Email</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Nhập email"
                                id="email"
                                value={email} 
                                name="email" 
                                onChange={handleChangeInput}/>
                            </Form.Group>

                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label className='font-weight-bolder'>Ngày sinh (*)</Form.Label>
                                <Form.Control 
                                type="date" 
                                placeholder="Chọn ngày sinh" 
                                id="dob" 
                                value={dob} 
                                name="dob"  
                                onChange={handleChangeInput}
                                />
                            </Form.Group>

                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label className='font-weight-bolder'>Địa chỉ (*)</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Nhập địa chỉ" 
                                id="address" 
                                value={address} 
                                name="address"  
                                onChange={handleChangeInput}
                                />
                            </Form.Group>

                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label className='font-weight-bolder'>Số điện thoại(*)</Form.Label>
                                <Form.Control 
                                type="number" 
                                placeholder="Nhập số điện thoại"
                                id="phone" 
                                value={phone} 
                                name="phone"  
                                onChange={handleChangeInput}
                                 />
                            </Form.Group>
                        </Form>
                         
                    </div>
                </div>
                
                <div className="mt-3">
                    <h4>Thay đổi mật khẩu</h4>
                    <hr />
                    <div className="mx-3">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label className='font-weight-bolder'>Mật khẩu cũ</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Nhập mật khẩu cũ"
                                id="password" 
                                value={password} 
                                name="password"  
                                onChange={handleChangeInput} />
                            </Form.Group>
                            
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label className='font-weight-bolder'>Mật khẩu mới</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Nhập mật khẩu mới" 
                                id="password" 
                                value={cf_password} 
                                name="password"  
                                onChange={handleChangeInput}
                                />
                            </Form.Group>

                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label className='font-weight-bolder'>Nhập lại mật khẩu</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Nhập lại mật khẩu" 
                                id="cf_password" 
                                value={cf_password} 
                                name="cf_password"  
                                onChange={handleChangeInput}
                                />
                            </Form.Group>
                        </Form>
                    </div>
                </div>

                <div className="text-center">
                    <Button variant="primary">
                        Lưu
                    </Button>
                </div>
                </Col>

                <Col  sm={5} >
                <h4>WishList</h4>
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
                </Col>

            </Row>
        </>
    )
}

export default Setting
