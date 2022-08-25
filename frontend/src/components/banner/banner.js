import React, { useState }  from 'react'
import bannerleft1 from '../../assets/img/banner/banner-left-1.jpg'
import bannerleft2 from '../../assets/img/banner/banner-left-2.jpg'
import Card from 'react-bootstrap/Card'
import './banner.css'
const Banner = () => {
    const click =useState(false);
    return(
        <>
            <a href="https://www.hcmus.edu.vn/">
                <div className="bannerSet" >
                    <Card className="border-0 mx-1">
                        <Card.Img variant="top" className="img-fluid" src={bannerleft1} style={{height:180}}  />
                        <Card.Body>
                            <Card.Title> Trường ĐH Khoa Học Tự Nhiên </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">ĐHQG TP.HCM</Card.Subtitle>
                            <Card.Text>Khoa Công Nghệ Thông Tin</Card.Text>
                        </Card.Body>
                        <Card.Img variant="bottom" className="img-fluid" src={bannerleft2} style={{height:180}}/>
                    </Card> 
                    <div className="overlay">
                        <div className="information">Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM trở thành một trường đại học hàng đầu tại Việt Nam và Đông Nam Á về đào tạo, nghiên cứu khoa học, công nghệ nền tảng của kinh tế tri thức và kinh tế số.</div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Banner

