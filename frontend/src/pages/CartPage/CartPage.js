import React from 'react'
import { Container } from 'react-bootstrap';
import Cart from '../../components/body/user/Cart/Cart';
import Footer from '../../components/footer/Footer';
import HeaderHome from '../../components/headerHome';


const CartPage = () => {
    return(
        <>
            <HeaderHome/>
            <Container>
                <Cart />
            </Container>
            <Footer />
        </>
    )
}

export default CartPage 

