import React, { useState }  from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const AdjustAmount = () => {
      const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

      function increment() {
        //setCount(prevCount => prevCount+=1);
        setCount(function (prevCount) {
          return (prevCount += 1);
        });
      }

      function decrement() {
        setCount(function (prevCount) {
          if (prevCount > 0) {
            return (prevCount -= 1); 
          } else {
            return (prevCount = 0);
          }
        });
      }
   return (
        <>
        
            <Row>
                <Col style={{textAlign: 'left'}}>
                    <Form.Label>Số lượng :</Form.Label>
                    <p>
                        <div className="d-inline-flex">
                        <Button variant="outline-dark" onClick={decrement}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                              <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                            </svg>
                        </Button>
                        <Form.Control readOnly  placeholder={count} className="w-25 mx-1 text-center"/>
                        <Button variant="outline-dark"onClick={increment}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        </Button>
                        </div>
                    </p>
                </Col>
                <Col style={{textAlign: 'left'}}>
                    <Form.Label>Giá :</Form.Label>
                        <p>1.000.000 VNĐ</p>
                </Col>
            </Row>
        </>

  )
}

export default AdjustAmount
