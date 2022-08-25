import React from 'react'
import NavbarSex from '../../components/NavBar'
import ProductDisplay from '../../components/productDisplay';
import HeaderHome from '../../components/headerHome';
import Outstanding from '../../components/outstanding';
import Banner from '../../components/banner/banner';
import Footer from '../../components/footer/Footer';
import Slogun from '../../components/Slogun/Slogun';
import ProductTop from '../../components/productTop/productTop';
import ViewProducts from '../../components/ViewProducts/ViewProducts';

const ViewProductsPage = () => {
    return(
        <>
            <HeaderHome/>
            <NavbarSex />
            <div className="d-inline-flex pb-5 mt-5 ml-4" >
                    <ViewProducts />
            </div>
            <Footer />
        </>
    )
}

export default ViewProductsPage 

