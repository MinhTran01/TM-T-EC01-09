import React from 'react'
import { Container } from 'react-bootstrap';
import Manage from '../../components/body/user/Manage/Manage';
import ManageOrder from '../../components/body/user/ManageOrder/ManageOrder';
import Setting from '../../components/body/user/Setting/Setting';
import Footer from '../../components/footer/Footer';
import HeaderHome from '../../components/headerHome';


const ManagePage = () => {
    return(
        <>
            <HeaderHome/>
            <Container>
                <Manage />
            </Container>
            <Footer />
        </>
    )
}

export default ManagePage 

