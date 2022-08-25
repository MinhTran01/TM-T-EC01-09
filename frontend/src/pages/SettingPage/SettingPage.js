import React from 'react'
import { Container } from 'react-bootstrap';
import Setting from '../../components/body/user/Setting/Setting';
import Footer from '../../components/footer/Footer';
import HeaderHome from '../../components/headerHome';


const SettingPage = () => {
    return(
        <>
            <HeaderHome/>
            <Container>
                <Setting />
            </Container>
            <Footer />
        </>
    )
}

export default SettingPage 

