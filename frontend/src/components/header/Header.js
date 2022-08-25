import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import InputGroup from 'react-bootstrap/InputGroup';
import logoHeader from '../../assets/logoHeader.svg'
import signin from '../../assets/signin.svg'
import { Button } from 'react-bootstrap';

import '../style.css'


const Header = () => {
    return (
		<Navbar expand='lg' bg='primary' variant='dark' className='shadow' >
			<Navbar.Brand className='font-weight-bolder '>
				<img
						src={logoHeader}
						alt='Logo'
						width='60'
						height='60'
						className='mr-2'
				/>
				HUIMITU
			</Navbar.Brand>

			<Navbar.Toggle aria-controls='basic-navbar-nav' />

			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
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
						to='/Unisex'
						as={Link}
					>
						Unisex
					</Nav.Link>
				</Nav>

             <InputGroup className=" d-flex mr-10  w-50">
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

			 
				<Nav>
                    <Button
						variant='primary '
						className='font-weight-bolder text-white mr-2 '>
						<i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
					</Button>
                    <DropdownButton 
					   
                        variant='md mt-1'
						className='font-weight-bolder  mr-2 '
						title='Tùy chọn'>
							
                       <Dropdown.Item href="#/action-1">
					   <i class="fa fa-heart mr-2" aria-hidden="true"></i>
						Sản phẩm yêu thích
						</Dropdown.Item>
                       <Dropdown.Item href="#/action-2">
					   <i class="fa fa-history mr-2" aria-hidden="true"></i>
						Lịch sử đặt hàng
						</Dropdown.Item>
                       <Dropdown.Item href="#/action-3">
					   <i class="fa fa-pencil-square-o mr-2" aria-hidden="true"></i>
						Chỉnh sửa thông tin
						</Dropdown.Item>
                    </DropdownButton>
					<Link to='login'>
					<Button
						variant='warning '
						className='font-weight-bolder mr-2'>
						<img
							src={signin}
							alt='singin'
							width='25'
							height='25'
							className='mr-2'
						/>
						Đăng nhập
					</Button>
					</Link>

				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Header
