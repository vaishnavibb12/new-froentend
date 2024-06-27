import React, { useEffect, useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const AllEmployees = () => {
  const [data, setData] = useState([]);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:1000/employees/deleteEmployee/${id}`
      );
      console.log("Data deleted:", response.data);
      toast.error("Employee Deleted...");
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:1000/employees");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [handleDelete]);

  return (
    <>
      <ToastContainer />
      <div className=" p-10 flex items-center justify-center">
        <div className="overflow-x-auto container">
          <table className="table table-zebra">
            {/* head */}
            <thead className=" bg-orange-600 text-white">
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Lsat Nmae</th>
                <th>Email Id</th>
                {/* <th>Update</th> */}
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {data.map((e, index) => {
                return (
                  <tr key={e._id}>
                    <th>{index + 1}</th>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.email}</td>
                    {/* <td className="update text-center">
                      <Link to={"/updateEmployess"}>
                        {" "}
                        <TfiWrite id={e._id} />
                      </Link>
                    </td> */}
                    <td className="delete text-center">
                      <RiDeleteBin5Line onClick={() => handleDelete(e._id)} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllEmployees;
