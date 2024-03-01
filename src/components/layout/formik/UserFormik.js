import React ,{useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Row,Col,Container,Button} from 'react-bootstrap';
import { useFormik } from 'formik';


function validateEmail(value) {
  let error;
  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
}


function validateReq(value){
  let error;
  if (value === 'admin') {
    error = 'Nice try!';
  }else if(!value){
    error = 'Required';
  }
  return error;
}

export const CreateUser = () => {
  return(
    <>
    <Formik
       initialValues={{
         userid : "",
         title : '',
         firstname : '',
         lastname : '',
         email: '',
         password : '',
         mobileno : '',
         roleid : '',
         department : '',
         designation : '',
         createdby : '',
         
       }}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched, isValidating }) => (
    
         <Form>

          <Row className='form-row userid'>
            <Col> <label> UserID </label> </Col> 
            <Col>
                  <span classname="inputbox" >
                        <Field name="userid" validate={validateReq} placeholder=" User Id"  />
                  </span>
            </Col>
            <Col>
                  <p>{errors.userid && touched.userid && errors.userid }</p>
            </Col>
          </Row>

          <Row className='form-row title'>
            <Col> <label> Title </label> </Col> 
            <Col>
                  <span classname="inputbox" >
                        <Field name="title" validate={validateReq} placeholder="title"  />
                  </span>
            </Col>
            <Col>
                  <p>{errors.title && touched.title && errors.title }</p>
            </Col>
          </Row>

          <Row className='form-row firstname'>
            <Col> <label> First </label> </Col> 
            <Col>
                  <span classname="inputbox" >
                        <Field name="firstname" validate={validateReq} placeholder="firstname"  />
                  </span>
            </Col>
            <Col>
                  <p>{errors.firstname && touched.firstname && errors.firstname }</p>
            </Col>
          </Row>

          <Row className='form-row lastname'>
            <Col> <label> Lastname </label> </Col> 
            <Col>
                  <span classname="inputbox" >
                  <Field name="lastname" validate={validateReq}  placeholder = 'lastname'/>
                  </span>
            </Col>
            <Col>
                  <p>{errors.lastname && touched.lastname &&  errors.lastname}</p>
            </Col>
          </Row>

          <Row className='form-row email'>
            <Col> <label>Email </label> </Col> 
            <Col>
                  <span classname="inputbox" >
                        <Field name="email" validate={validateEmail} placeholder="email"  />
                  </span>
            </Col>
            <Col>
                  <p>{errors.email && touched.email && errors.email }</p>
            </Col>
          </Row>

          <Row className='form-row password'>
            <Col> <label> Password </label> </Col> 
            <Col>
                  <span classname="inputbox" >
                        <Field name="password" type="password" validate={validateReq} placeholder="password"  />
                  </span>
            </Col>
            <Col>
                  <p>{errors.password && touched.password && errors.password }</p>
            </Col>
          </Row>

          <Row className='form-row mobileno'>
            <Col> <label> Mobileno </label> </Col> 
            <Col>
                  <span classname="inputbox" >
                  <Field name="mobileno" validate={validateReq}  placeholder = 'mobileno'/>
                  </span>
            </Col>
            <Col>
                  <p>{errors.mobileno && touched.mobileno &&  errors.mobileno}</p>
            </Col>
          </Row>

          <Row className='form-row roleid'>
            <Col> <label> roleid </label> </Col> 
            <Col>
                  <span classname="inputbox" >
                  <Field name="roleid" validate={validateReq}  placeholder = 'roleid'/>
                  </span>
            </Col>
            <Col>
                  <p>{errors.roleid && touched.roleid &&  errors.roleid}</p>
            </Col>
          </Row>

          <Row className='form-row department'>
            <Col> <label> department </label> </Col> 
            <Col>
                  <span classname="inputbox" >
                  <Field name="department" validate={validateReq}  placeholder = 'department'/>
                  </span>
            </Col>
            <Col>
                  <p>{errors.department && touched.department &&  errors.department}</p>
            </Col>
          </Row>

          <Row className='form-row designation'>
            <Col> <label> designation </label> </Col> 
            <Col>
                  <span classname="inputbox" >
                  <Field name="designation" validate={validateReq}  placeholder = 'designation'/>
                  </span>
            </Col>
            <Col>
                  <p>{errors.designation && touched.designation &&  errors.designation}</p>
            </Col>
          </Row>

          <Row className='form-row createdby'>
            <Col> <label> createdby </label> </Col> 
            <Col>
                  <span classname="inputbox" >
                  <Field name="createdby" validate={validateReq}  placeholder = 'createdby'/>
                  </span>
            </Col>
            <Col>
                  <p>{errors.createdby && touched.createdby &&  errors.createdby}</p>
            </Col>
          </Row>
 
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
    </>
  )
 
}

export default function UpdateUser() {
  return (
    <div>UpdateUser</div>
    
  )
}
