import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import UserForm from '../layout/formik/UserFormik'
import {Nav,Tab} from 'react-bootstrap';
import UpdateUser, {CreateUser} from '../layout/formik/UserFormik'

function FormExample() {
 return(
  <>
  <Tab.Container id="left-tabs-example" defaultActiveKey="link-1">
   <Nav fill variant="tabs" defaultActiveKey="link-1">
      <Nav.Item>
        <Nav.Link eventKey="link-1"> Create User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2"> Update User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3"> Delete User</Nav.Link>
      </Nav.Item>
    </Nav>
    <Tab.Content>
            <Tab.Pane eventKey="link-1">
              {/* Content for Create User tab */}
              <CreateUser/>
            </Tab.Pane>
            <Tab.Pane eventKey="link-2">
              {/* Content for Update User tab */}
              <UpdateUser/>
            </Tab.Pane>
            <Tab.Pane eventKey="link-3">
              {/* Content for Delete User tab */}
              <p>Delete User Content Goes Here</p>
            </Tab.Pane>
          </Tab.Content>
    </Tab.Container>
  </>
 )
}

export default FormExample;