import React from "react";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import axios from "axios";

// function validateReq(value) {
//   let error;
//   if (!value) {
//     error = "Require";
//   }
//   return error;
// }

// export const CreateRole = () => {
//   const [emptyVal, setemptyVal] = useState({
//     RoleName: "",
//     Description: "",
//   });

//   return (
//     <>
//       <Formik
//         initialValues={emptyVal}
//         enableReinitialize
//         onSubmit={(value) => {
//           console.log(value);
//           axios
//             .post("http://localhost:7000/create", value)
//             .then((response) => {
//               console.log(response, "response");
//               window.alert("Role Created");
//               window.location.reload();
//             })
//             .catch((err) => {
//               console.log(err, "err");
//             });
//         }}>
//         {({ errors, touched }) => (
//           <Form>
//             <Row className="form-row RoleName">
//               <Col>
//                 <label>Role Name</label>{" "}
//               </Col>

//               <Col>
//                 <span className="inputbox">
//                   <Field
//                     name="RoleName"
//                     validate={validateReq}
//                     placeholder="Role Name"
//                   />
//                 </span>
//               </Col>
//               <Col>
//                 <p>
//                   {" "}
//                   {errors.RoleName && touched.RoleName && errors.RoleName}{" "}
//                 </p>
//               </Col>
//             </Row>
//             <Row className="form-row description">
//               <Col>
//                 <label>Description</label>{" "}
//               </Col>
//               <Col>
//                 <span className="inputbox">
//                   <Field
//                     name="Description"
//                     validate={validateReq}
//                     placeholder="Description"
//                   />
//                 </span>
//               </Col>
//               <Col>
//                 <p>
//                   {" "}
//                   {errors.Description &&
//                     touched.Description &&
//                     errors.Description}{" "}
//                 </p>
//               </Col>
//             </Row>
//             <button type="submit" class="btn btn-primary">
//               Submit
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </>
//   );
// };

function validateReq(value) {
  let error;
  if (!value) {
    error = "Require";
  }
  return error;
}

export const CreateRole = () => {
  const [emptyVal, setemptyVal] = useState({
    RoleName: "",
    Description: "",
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isRoleNameExist, setIsRoleNameExist] = useState(false);

  return (
    <>
      <Formik
        initialValues={emptyVal}
        enableReinitialize
        onSubmit={(value) => {
          console.log(value);

          axios
            .post("http://localhost:7000/checkRoleName", value)
            .then((response) => {
              if (response.data == "failed") {
                console.log("Create Rolee");
                axios
                  .post("http://localhost:7000/create", value)
                  .then((val) => {
                    console.log(val.data, "response");
                    window.alert("Role Created");
                    window.location.reload();
                  })
                  .catch((err) => {
                    console.log(err, "err");
                  });
              } else {
                window.alert(response.data);
                window.location.reload();
              }
              return response.data;
            })
            .then((result) => {
              console.log(result, "reusasusg");
            });
        }}>
        {({ errors, touched }) => (
          <Form>
            <Row className="form-row RoleName">
              <Col>
                <label>Role Name</label>{" "}
              </Col>

              <Col>
                <span className="inputbox">
                  <Field
                    name="RoleName"
                    validate={validateReq}
                    placeholder="Role Name"
                  />
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
                  <Field
                    name="Description"
                    validate={validateReq}
                    placeholder="Description"
                  />
                </span>
              </Col>
              <Col>
                <p>
                  {errors.Description &&
                    touched.Description &&
                    errors.Description}
                </p>
              </Col>
            </Row>
            {/* <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>        */}

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export const UpdateRole = () => {
  return "update";
};
