import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import {Col, Row} from "react-bootstrap";
import axios from 'axios';
import {isEmpty, isEmail, isLength, isMatch} from '../../utils/Validation.js'
import {ErrorMessage, SuccessMessage} from '../../utils/AlertMessage'
import { apiUrl } from '../../constants';
import Header from '../../header/Header.js';




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



const Register = () => {
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


  return (
   
     <>
            <Header />
                <h1 className="shadow-md text-success mt-5 p-3 text-center rounded">Đăng ký</h1>
                {err && ErrorMessage(err)}
                {success && SuccessMessage(success)}
                <Row >
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg rounded-lg">
                    
                        <Form  onSubmit={handleSubmit}>
                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Email (*)</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Nhập email" 
                                id="email" 
                                value={email} 
                                name="email"
                                className='mr-1'  
                                onChange={handleChangeInput}/>
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Họ và tên (*)</Form.Label>
                                <Form.Control 
                                type="text" 
                                placeholder="Nhập họ và tên"
                                id="name" 
                                value={name} 
                                name="name"  
                                onChange={handleChangeInput} />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Mật khẩu (*)</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Nhập mật khẩu của bạn"
                                id="password" 
                                value={password} 
                                name="password"  
                                onChange={handleChangeInput} />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Xác nhận mật khẩu (*)</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Nhập lại mật khẩu" 
                                id="cf_password" 
                                value={cf_password} 
                                name="cf_password"  
                                onChange={handleChangeInput}
                                />
                            </Form.Group>

                            <Form.Group>
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
                            <Form.Group>
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
                            <Form.Group>
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
                            <Button variant="success btn-block" type="submit" className='font-weight-bolder'>
                                Đăng ký
                            </Button>
                        </Form>
                        <p className='mt-2'>
			            	Đã có tài khoản?
			              	<Link to='/login'>
			         		<Button variant='info '  className='font-weight-bolder mt-2 ml-2'>
					    	Đăng nhập
				        	</Button>
				            </Link>
			            </p>
                       
                    </Col>
                </Row>
               
       
        </>

 
  )
}

export default Register