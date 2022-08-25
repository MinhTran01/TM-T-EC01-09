import React from 'react'
import { Container } from 'react-bootstrap';
import ProductDetail from '../../components/body/user/ProductDetail/ProductDetail';
import Footer from '../../components/footer/Footer';
import HeaderHome from '../../components/headerHome';


const ProductDetailPage = () => {
    return(
        <>
            <HeaderHome/>
            <Container>
                <ProductDetail />
            </Container>
            <Footer />
        </>
    )
}

export default ProductDetailPage 

