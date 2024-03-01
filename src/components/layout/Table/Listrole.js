import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";

// const Listrole = () => {
//   const [role, setRole] = useState([]);
//   const [activeRole, setactiveRole] = useState({});
//   const [pageNumber, setPageNumber] = useState(0);
//   const [rolesPerPage, setRolesPerPage] = useState(10);


//   const pagesVisited = pageNumber * rolesPerPage;

//   const pageCount = Math.ceil(role.length / rolesPerPage);

//   const displayRoles = role
//     .slice(pagesVisited, pagesVisited + rolesPerPage)
//     .map((id) => {
//       return (
//         <tr
//           key={id.RoleCode}
//           className={id.IsActive ? "active-row" : "deactive-row"}>
//           <td>{id.RoleCode} </td>
//           <td>{id.RoleName} </td>
//           <td>{id.Description} </td>
//           <td>{id.IsActive ? "True" : "False"}</td>
//           <td>
//             <Link to={"/userrole/" + id.RoleCode}>
//               <button className="btn btn-primary"> Edit </button>
//             </Link>
//           </td>
//           <td>
//             {id.IsActive && (
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 onClick={() => {
//                   handleDelete(id);
//                 }}>
//                 Delete
//               </button>
//             )}
//           </td>
//         </tr>
//       );
//     });

//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };
//   const handleRolesPerPageChange = (e) => {
//     setRolesPerPage(parseInt(e.target.value, 10));
//     setPageNumber(0); // Reset page number when changing roles per page
//   };

//   useEffect(() => {
//     axios
//       .get("http://localhost:7000/read")
//       .then((response) => {
//         setRole(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   function handleDelete(activeRole) {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this role?"
//     );

//     if (confirmDelete) {
//       axios
//         .post("http://localhost:7000/delete", activeRole)
//         .then(() => {
//           // Use setRole to update the state and trigger a re-render
//           setRole((prevRoles) => prevRoles.filter((role) => role.id !== activeRole.id));
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }

//   return (
//     <div>       
//       <Table>
//         <thead>
//           <tr>
//             <th>Role Code</th>
//             <th>Role Name</th>
//             <th>Role Description</th>
//             <th>IsActive</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>{displayRoles}</tbody>        
//       </Table>

//       <label className="paginations" >
//         Roles Per Page:
//         <select value={rolesPerPage} onChange={handleRolesPerPageChange}>
//           <option value={10}>10</option>
//           <option value={20}>20</option>
//           <option value={50}>50</option>
//           {/* <option value={All}>All</option> */}
//           {/* Add more options as needed */}
//         </select>
//         </label>
//       <ReactPaginate      
//         previousLabel={"Previous"}
//         nextLabel={"Next"}
//         pageCount={pageCount}
//         onPageChange={changePage}
//         containerClassName={"pagination"}
//         previousLinkClassName={"pagination__link"}
//         nextLinkClassName={"pagination__link"}
//         disabledClassName={"pagination__link--disabled"}
//         activeClassName={"pagination__link--active"}
//       />
//     </div>
//   );
// };

// export default Listrole;




// const Listrole = () => {
//   const [role, setRole] = useState([]);
//   const [activeRole, setactiveRole] = useState({});
//   const [pageNumber, setPageNumber] = useState(0);
//   const [rolesPerPage, setRolesPerPage] = useState(10);


//   const pagesVisited = pageNumber * rolesPerPage;
//   const pageCount = Math.ceil(role.length / rolesPerPage);
//   // const pageCount = response.data.totalPages
//   const displayRoles = role
//     .slice(pagesVisited, pagesVisited + rolesPerPage)
//     .map((id) => {
//       return (
//         <tr
//           key={id.RoleCode}
//           className={id.IsActive ? "active-row" : "deactive-row"}>
//           <td>{id.RoleCode} </td>
//           <td>{id.RoleName} </td>
//           <td>{id.Description} </td>
//           <td>{id.IsActive ? "True" : "False"}</td>
//           <td>
//             <Link to={"/userrole/" + id.RoleCode}>
//               <button className="btn btn-primary"> Edit </button>
//             </Link>
//           </td>
//           <td>
//             {id.IsActive && (
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 onClick={() => {
//                   handleDelete(id);
//                 }}>
//                 Delete
//               </button>
//             )}
//           </td>
//         </tr>
//       );
//     });

//     const handlePageChange = (selectedPage) => {
//       setPagination({ ...pagination, page: selectedPage.selected + 1 });
//     };

//     const [pagination, setPagination] = useState({
//       page: 1,
//       pageSize: 10,
//       sortField: "RoleCode",
//       sortOrder: "asc",
//     });
    
//     useEffect(() => {
//       axios
//         .get("http://localhost:7000/read", { params: pagination })
//         .then((response) => {
//           setRole(response.data.roles);
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }, [pagination]);  


//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };
//   const handleRolesPerPageChange = (e) => {
//     setRolesPerPage(parseInt(e.target.value, 10));
//     setPageNumber(0); // Reset page number when changing roles per page
//   };

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:7000/read")
  //     .then((response) => {
  //       setRole(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);



//   function handleDelete(activeRole) {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this role?"
//     );

//     if (confirmDelete) {
//       axios
//         .post("http://localhost:7000/delete", activeRole)
//         .then(() => {
//           // Use setRole to update the state and trigger a re-render
//           setRole((prevRoles) => prevRoles.filter((role) => role.id !== activeRole.id));
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     }
//   }

//   return (
//     <div>       
//       <Table>
//         <thead>
//           <tr>
//             <th>Role Code</th>
//             <th>Role Name</th>
//             <th>Role Description</th>
//             <th>IsActive</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>{displayRoles}</tbody>        
//       </Table>

//      <label className="paginations" >
//         Roles Per Page:
//         <select value={rolesPerPage} onChange={handleRolesPerPageChange}>
//           <option value={10}>10</option>
//           <option value={20}>20</option>
//           <option value={50}>50</option>     
//           </select>
//         </label>
//            <ReactPaginate
//         previousLabel={"Previous"}
//         nextLabel={"Next"}
//         pageCount={pageCount}       
//         onPageChange={handlePageChange}
//         containerClassName={"pagination"}
//         previousLinkClassName={"pagination__link"}
//         nextLinkClassName={"pagination__link"}
//         disabledClassName={"pagination__link--disabled"}
//         activeClassName={"pagination__link--active"}
//           />
//     </div>
//   );
// };




const Listrole = () => {
  const [role, setRole] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeRole, setactiveRole] = useState({});

  const fetchData = async (page, size) => {
    try {
      const response = await axios.get(`http://localhost:7000/read?page=${page}&pageSize=${size}`);
      setRole(response.data.role);
      setTotalPages(response.data.totalPages);
      setCurrentPage(page);
    } catch (error) {
      console.error('Error fetching roles:', error);
    }
  };

  useEffect(() => {
    fetchData(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      fetchData(newPage, pageSize);
    }
  };

  const handlePageSizeChange = (newPageSize) => {
    setPageSize(newPageSize);
    setCurrentPage(1); // Reset to the first page when changing page size
  };


  function handleDelete(activeRole) {
        const confirmDelete = window.confirm(
          "Are you sure you want to delete this role?"
        );
    
        if (confirmDelete) {
          axios
            .post("http://localhost:7000/delete", activeRole)
            .then(() => {
              // Use setRole to update the state and trigger a re-render
              setRole((prevRoles) => prevRoles.filter((role) => role.id !== activeRole.id));
            })
            .catch((err) => {
              console.log(err);
            });
        }
      }

  return (
    <div>  
         <Table>
        <thead>
          <tr>
            <th>Role Code</th>
            <th>Role Name</th>
            <th>Role Description</th>
            <th>IsActive</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody> 
          {role.map((role) => (
            <tr key={role.RoleCode}>
              <td>{role.RoleCode}</td>
              <td>{role.RoleName}</td>
              <td>{role.Description}</td>
              <td>{role.IsActive ? 'True' : 'False'}</td>
              <td>
                <button className="btn btn-primary">Edit</button>
                {role.IsActive && (
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(role.id)}
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <label>
        Page Size:
        <select value={pageSize} onChange={(e) => handlePageSizeChange(e.target.value)}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value="all">All</option>
        </select>
      </label>

  
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
   
  );
};

export default Listrole;













