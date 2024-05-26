import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Header from './components/Header'
import Input from './components/Input'

const App = () => {
  return (
    <div>
      <Header />
      <Container className='mt-5'>
        <Row>
          <Col>
            <Input />
          </Col>
        </Row>
      </Container>

    </div>
  )
}

export default App
