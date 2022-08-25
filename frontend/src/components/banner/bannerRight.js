import React, { useState }  from 'react'
import bannerRight from '../../assets/img/banner/banner-right.png'
import './banner.css'
import { Image } from 'react-bootstrap'
const BannerRight = () => {
    const click =useState(false);
    return(
        <>
            <a href="https://www.traveloka.com/vi-vn/flight">
                <div className="bannerSet pr-1" >
                    <Image src={bannerRight} style={{width:320, height:510}}/>
                </div>

            </a>
        </>
    )
}

export default BannerRight

