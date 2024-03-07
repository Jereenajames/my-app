import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";

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
        console.log(confirmDelete, "confirmDelete");
    
        if (confirmDelete) {
          axios
            .post("http://localhost:7000/delete", activeRole)
            .then((response) => {
              console.log(response.data, "MAdela");
              window.location.reload();
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
              <th> Role Code</th>
              <th> Role Name</th>
              <th> Role Description</th>
              <th>IsActive</th>
              <th>Actions</th>
            </thead>
    
               <tbody>
    
              {Boolean(role)
                ? role.map((id) => {
                    return (
                      <tr
                        key={id.RoleCode}
                        className={id.IsActive ? "active-row" : "deactive-row"}>
                        <td>{id.RoleCode} </td>
                        <td>{id.RoleName} </td>
                        <td>{id.Description} </td>
                        <td> {id.IsActive ? "True" : "False"}</td>
                        <td>
                          <Link to={"/userrole/" + id.RoleCode}>
                            <button class="btn btn-primary"> Edit </button>
                          </Link>
                        </td>
    
                        <td>
                          {id.IsActive && (
                            <button
                              type="button"
                              className="btn btn-danger"
                              onClick={() => {
                                handleDelete(id);
                              }}>
                              Delete
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })
                : ""}
            </tbody>
          </Table>
      <label>
        Page Size:
        <select className="pagination" value={pageSize} onChange={(e) => handlePageSizeChange(e.target.value)}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>        
        </select>
      </label>

  <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous Page
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next Page
        </button>
      </div>
      </div>
   
  );
};

export default Listrole;













