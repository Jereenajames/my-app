import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";
import { useParams } from "react-router-dom";

export const Details = () => {
  let id = useParams().id;
  console.log(id, "789456");
  const [oldvalue, setoldvalue] = useState({});
  useEffect(() => {
    axios
      .post("http://localhost:7000/oldvalue", { RoleCode: id })
      .then((response) => {
        console.log(response.data, "oldvalue");
        setoldvalue(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Formik
        initialValues={oldvalue}
        enableReinitialize
        onSubmit={(value) => {
          console.log(value);
          axios
            .post("http://localhost:7000/update", value)
            .then((response) => {
              console.log(response, "response");
              window.alert(response.data);
              window.location.replace("/userrole");
            })
            .catch((err) => {
              console.log(err, "err");
            });          
            
        }}>
        {({ errors, touched }) => (
          <Form>
            <Row className="form-row rolecode">
              <Col>
                <label>Role Code</label>{" "}
              </Col>

              <Col>
                <span className="inputbox">
                  <Field
                    name="RoleCode"
                    placeholder="Upadete Role Code"
                    disabled
                  />
                </span>
              </Col>
              <Col>
                <p>
                  {" "}
                  {errors.RoleCode && touched.RoleCode && errors.RoleCode}{" "}
                </p>
              </Col>
            </Row>

            <Row className="form-row RoleName">
              <Col>
                <label>Role Name</label>{" "}
              </Col>

              <Col>
                <span className="inputbox">
                  <Field name="RoleName" placeholder="Upadete Role Name" />
                </span>
              </Col>
              <Col>
                <p>
                  {" "}
                  {errors.RoleName && touched.RoleName && errors.RoleName}{" "}
                </p>
              </Col>
            </Row>
            <Row className="form-row description">
              <Col>
                <label>Description</label>{" "}
              </Col>
              <Col>
                <span className="inputbox">
                  <Field name="Description" placeholder="Update Description" />
                </span>
              </Col>
              <Col>
                <p>
                  {" "}
                  {errors.Description &&
                    touched.Description &&
                    errors.Description}{" "}
                </p>
              </Col>
            </Row>

            <Row className="form-row description">
              <Col>
                <label>IsActive</label>{" "}
              </Col>
              <Col>
                <span className="inputbox">
                  <Field type="checkbox" name="IsActive" />
                </span>
              </Col>
              <Col>
                <p>
                  {" "}
                  {errors.Description &&
                    touched.Description &&
                    errors.Description}{" "}
                </p>
              </Col>
            </Row>
            <button
              type={"button"} class="btn btn-danger"
              onClick={() => {
                window.location.replace("/userrole");
              }}>
              Cancel
            </button>
            <button type="submit" class="btn btn-primary" onClick={() => {
                window.location.replace("/userrole");
              }}>Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
