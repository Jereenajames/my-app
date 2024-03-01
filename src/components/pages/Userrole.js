import React from "react";
import { useState } from "react";
import RoleForm from "../layout/formik/RoleFormik";
import { Col, Row, Form, InputGroup, Button } from "react-bootstrap";
import { Nav, Tab } from "react-bootstrap";
import { UpdateRole, CreateRole } from "../layout/formik/RoleFormik";
import Listrole from "../layout/Table/Listrole";
import RoleDataTable from "../layout/Table/RoleDataTable";

function Roles() {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="link-1">
        <Nav fill variant="tabs" defaultActiveKey="link-1">
          <Nav.Item>
            <Nav.Link eventKey="link-1"> List of Roles</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2"> Create Role</Nav.Link>
          </Nav.Item>

          {/* <Nav.Item>
            <Nav.Link eventKey="link-3"> Update RoleCode</Nav.Link>
          </Nav.Item> */}
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="link-1">
            {/* Content for Update User tab */}
            <Listrole />
            {/* <RoleDataTable /> */}
          </Tab.Pane>
          <Tab.Pane eventKey="link-2">
            {/* Content for Create User tab */}
            <CreateRole />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
}

export default Roles;
