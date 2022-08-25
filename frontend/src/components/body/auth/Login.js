import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom'
import {Col, Container,  Row} from "react-bootstrap";
import googleIcon from '../../../assets/googleIcon.svg'
import facebookIcon from '../../../assets/facebookIcon.svg'
import axios from 'axios'
import {ErrorMessage, SuccessMessage} from '../../utils/AlertMessage'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from '../../constants';
import Header from '../../header/Header';


const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}


const Login = () => {
    const [user, setUser] = useState(initialState)
    

    const {email, password, err, success} = user
    
    const handleChangeInput = event => {
        const {name, value} = event.target
        setUser({...user, [name]:value, err: '', success: ''})
    }
    
    const handleSubmit = async event => {
        event.preventDefault()
        try {
            const res = await axios.post(`${apiUrl}/auth/login`, {email, password})
            setUser({...user, err:'', success:res.data.msg})
            
            localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, true)
            

        } catch (err) {
            err.response.data.msg && 
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }



   
  
   return (
   
     <>
            <Header />
            <Container>
                <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">Đăng nhập</h1>
                {err && ErrorMessage(err)}
                {success && SuccessMessage(success)}
                <Row className="mt-3">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-lg rounded-lg">
                    
                        <Form onSubmit={handleSubmit}>
                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Email</Form.Label>
                                <Form.Control 
                                type="email" 
                                placeholder="Nhập email"
                                id="email"
                                value={email} 
                                name="email" 
                                onChange={handleChangeInput}/>
                            </Form.Group>

                            <Form.Group >
                                <Form.Label className='font-weight-bolder'>Mật khẩu</Form.Label>
                                <Form.Control 
                                type="password" 
                                placeholder="Password" 
                                id="password"
                                value={password} 
                                name="password"
                                onChange={handleChangeInput}/>
                            </Form.Group>
                           

                            <Button variant="success btn-block" type="submit" className='font-weight-bolder'>
                                Đăng nhập
                            </Button>
                            <p>
                            
                               <Link to="/forgot_password" className='mt-2' >Quên mật khẩu?</Link>
                           </p>
                        </Form>
                        <p className='mt-3 mb-2  text-center'>
			            	Hoặc đăng nhập bằng

                        </p>
                       <p>
			              	<Link to='#'>
			         		<Button variant='outline-dark ' size='lg' className=' mt-2 ml-4 pr-4 pl-4 mr-3'>
                             <img
							    src={googleIcon}
							    alt='googleIcon'
							    width='25'
							    height='25'
							    className='mr-2'
						/>
                        Google  
				        	</Button>
				            </Link>

                            <Link to='#'>
			         		<Button variant='outline-dark '  size='lg' className='mt-2 ml-2 '>
                             <img
							    src={facebookIcon}
							    alt='facebookIcon'
							    width='25'
							    height='25'
							    className='mr-2'
						/>
                               Facebook
				        	</Button>
				            </Link>
			            </p>

                        <p >
			            	Chưa có tài khoản ?
			              	<Link to='/register'>
			         		<Button variant='info '  className='font-weight-bolder mt-2 ml-2'>
                                Đăng ký
				        	</Button>
				            </Link>
			            </p>
                       
                    </Col>
                </Row>
               
            </Container>
        </>


  )
}

export default Login