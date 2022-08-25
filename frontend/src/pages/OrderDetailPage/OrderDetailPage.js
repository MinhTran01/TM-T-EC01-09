import React from 'react'
import { Container } from 'react-bootstrap';
import OrderDetail from '../../components/body/user/OrderDetail/OrderDetail';
import Footer from '../../components/footer/Footer';
import HeaderHome from '../../components/headerHome';


const OrderDetailPage = () => {
    return(
        <>
            <HeaderHome/>
            <Container>
                <OrderDetail />
            </Container>
            <Footer />
        </>
    )
}

export default OrderDetailPage 

