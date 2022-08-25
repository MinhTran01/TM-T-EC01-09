import React from 'react'
import NavbarSex from '../../components/NavBar'
import Container from 'react-bootstrap/Container';
import ProductDisplay from '../../components/productDisplay';
import HeaderHome from '../../components/headerHome';
import Outstanding from '../../components/outstanding';
import Banner from '../../components/banner/banner';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Footer from '../../components/footer/Footer';
import Slogun from '../../components/Slogun/Slogun';
import ProductTop from '../../components/productTop/productTop';

const HomePage = () => {
    return(
        <>
            <HeaderHome/>
            <NavbarSex />
            <div>
                <Outstanding className="p-5"/>
                <Slogun className="pb-2"/>
                {/* <Row >
                    <Col xs={1} className ="align-self-center"> 
                        <Banner />
                    </Col>
                    <Col md={12}>
                        <ProductDisplay/>
                    </Col>
                    <Col xs={1} className ="align-self-center">
                        <Banner/>
                    </Col>
                </Row> */}
                
                <div className="d-inline-flex pb-5">
                    <Banner className ="align-self-center"/>
                    <ProductDisplay />
                    <Banner className ="align-self-center"/>
                </div>
                <ProductTop />

            </div>
            <Footer />
        </>
    )
}

export default HomePage 

