import React, { useState }  from 'react'
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Favourite from '../Favourite/Favourite';
import ManageOrder from '../ManageOrder/ManageOrder';

const Manage = () => {
    return(
        <> 
          <Tab.Container defaultActiveKey="first">
            <Row className="mt-4" >
                <Col sm={2} style={{marginLeft:'-35px'}}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Đơn hàng</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Yêu thích</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={11}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                    <ManageOrder />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Favourite />
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>

        </>
    )
}

export default Manage
