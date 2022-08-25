import React from 'react'
import HeaderGuest from "../../components/headerGuest"
import NavbarSex from '../../components/NavBar'
import Container from 'react-bootstrap/Container';
import ProductDisplay from '../../components/productDisplay';
import Outstanding from '../../components/outstanding';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/banner';
import Slogun from '../../components/Slogun/Slogun';
import ProductTop from '../../components/productTop/productTop';
import BannerRight from '../../components/banner/bannerRight';

const GuestPage = () => {
    return(
        <>
            <HeaderGuest />
            <NavbarSex />
            <div>
                <Outstanding />
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
                    <Banner/>
                    <ProductDisplay />
                    <BannerRight/>
                </div>
                <ProductTop />
            </div>
            <Footer />
        </>
    )
}

export default GuestPage 

