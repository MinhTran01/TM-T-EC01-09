import React, { useState }  from 'react'
import { Alert, Image } from 'react-bootstrap'
import './Slogun.css'
const Slogun = () => {
    return(
        <>
            <div className="welcome-section" id="callout">
                <Alert className="mx-auto text-center p-5" style={{width:800}}>
                    <Alert.Heading style={{color: '#78c2ad', fontSize: '50px', fontWeight: 'bolder'}}>HUIMITU SHOP</Alert.Heading>
                    <p style={{fontSize: '30px'}}>Mang đến sản phẩm tốt nhất cho bạn</p>
                </Alert>
            </div>
        </>
    )
}

export default Slogun

