import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import logoHeader from '../../assets/logoHeader.svg'

import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';

import '../style.css'

const HeaderGuest = () => {
    return (
		<>
		<Navbar expand='lg' bg='primary' variant='dark' className='shadow d-flex justify-content-between' >
			<Navbar.Brand className='font-weight-bolder mr-0'>
				<img
						src={logoHeader}
						alt='Logo'
						width='60'
						height='60'
						className='mr-2 ml-0'
				/>
				HUIMITU
			</Navbar.Brand>

			<Navbar.Toggle aria-controls='basic-navbar-nav' />

			<Navbar.Collapse id='basic-navbar-nav' className="ml-5">
				<Nav className='mr-1'>
					<Nav.Link
						className='text-white'
						to='/male'
						as={Link}
					>
						Nam
					</Nav.Link>
					<Nav.Link
						className=' text-white'
						to='/female'
						as={Link}
					>
						Nữ
					</Nav.Link>
					<Nav.Link
						className=' text-white'
						to='/unisex'
						as={Link}
					>
						Unisex
					</Nav.Link>
				</Nav>
				
             <InputGroup className=" d-flex w-50 mx-auto">
               <Form.Control
                 placeholder="Tìm kiếm sản phẩm"
                 aria-label="search"
                 className="me-2 mb-1 mt-1 mr-2  "
				
                />

                     <Button
						variant='primary mr-2'
						className='font-weight-bolder text-white'>
						<i class="fa fa-search fa-2x" aria-hidden="true"></i>
					</Button>
            
            </InputGroup>

			 
				<Nav className="ml-auto">                   
                    <Link to='/login'>
					<Button
						variant='warning'
						className='font-weight-bolder mr-2'
						style={{width:130, height:40}}>
						Đăng nhập
					</Button>
					</Link>
					<Link to='/register'>
					<Button
						variant='warning '
						className='font-weight-bolder mr-2'
						style={{width:130, height:40}}>
						Đăng ký
					</Button>
					</Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		</>
	)
}

export default HeaderGuest
