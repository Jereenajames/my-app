
// import DataTable from "react-data-table-component";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import ReactPaginate from "react-paginate";

// const RoleDataTable = () => {
//     const [role, setRole] = useState([]);
//     useEffect(() => {
//         axios
//           .get("http://localhost:7000/read")
//           .then((response) => {
//             setRole(response.data);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }, []);

//       function handleDelete(activeRole) {
//         const confirmDelete = window.confirm(
//           "Are you sure you want to delete this role?"
//         );
    
//         if (confirmDelete) {
//           axios
//             .post("http://localhost:7000/delete", activeRole)
//             .then(() => {
//               // Use setRole to update the state and trigger a re-render
//               setRole((prevRoles) => prevRoles.filter((role) => role.id !== activeRole.id));
//             })
//             .catch((err) => {
//               console.log(err);
//             });
//         }
//       }
    
  // const columns = [
  //   {
  //     name: "RoleCode",
  //     selector: (row) => row.RoleCode,
  //   },
  //   {
  //     name: "RoleName",
  //     selector: (row) => row.RoleName,
  //   },
  //   {
  //       name: "RoleDescription",
  //       selector: (row) => row.RoleDescription,
  //     },
  //     {
  //       name: "IsActive",
  //       selector: (row) => row.IsActive,
  //     },
  //     {
  //       name: "Actions",
  //       selector: (row) => row.Actions,
  //     },
  // ];

  // const data = [
  //   {
  //     id: 1,
  //     title: "Beetlejuice",
  //     year: "1988",
  //   },
  //   {
  //     id: 2,
  //     title: "Ghostbusters",
  //     year: "1984",
  //   },
  // ];

//   const columns = [
//     { name: "Role Code", selector: "RoleCode", sortable: true },
//     { name: "Role Name", selector: "RoleName", sortable: true },
//     { name: "Role Description", selector: "Description", sortable: true },
//     { name: "IsActive", selector: "IsActive", sortable: true },
//     {
//       name: "Actions",
//       cell: (row) => (
//           return (
//           <tr
//             key={id.RoleCode}
//             className={id.IsActive ? "active-row" : "deactive-row"}>
//             <td>{id.RoleCode} </td>
//             <td>{id.RoleName} </td>
//             <td>{id.Description} </td>
//             <td>{id.IsActive ? "True" : "False"}</td>
//             <td>
//               <Link to={"/userrole/" + id.RoleCode}>
//                 <button className="btn btn-primary"> Edit </button>
//               </Link>
//             </td>
//             <td>
//               {id.IsActive && (
//                 <button
//                   type="button"
//                   className="btn btn-danger"
//                   onClick={() => {
//                     handleDelete(id);
//                   }}>
//                   Delete
//                 </button>
//               )}
//             </td>
//           </tr>
//         );
//       }); 
       
//       ),
//     },
//   ];
  
// //   return (
// //     <div>
// //       <br />
// //       {/* {console.log(response.data)} */}
// //       <DataTable columns={columns} data={data} pagination />
// //     </div>
// //   );
// // };

// return (
//   <div>
//     <DataTable
//       columns={columns}
//       data={role}
//       pagination
//       paginationPerPage={rolesPerPage}
//       paginationRowsPerPageOptions={[5, 10, 15]} // Add more options as needed
//     />
//   </div>
// );
// export default RoleDataTable;
