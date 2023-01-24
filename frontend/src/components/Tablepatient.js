import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from "axios";
// import { useQuery } from "react-query";

// const fetchUsers = async () => {
//   const res = await fetch("http://localhost:8080/api/csv/read");
//   console.log(res.json())
//   return res.json();
// };

// console.log(fetchUsers)
const Tablepatient = () => {
  // const { data, status } = useQuery("users", fetchUsers);
  // console.log(data)
  const [dataUser, setDataUser] = useState(null)

  // useEffect(() => {
  //   axios.get("http://localhost:8080/api/csv/read").then((response) => {
  //     console.log(response.data)
  //     setData(response);
  //   });
  // }, []);

  

  useEffect(() => {
    const getRecords = async () => {
      try {
        const { data } = await axios.get(`http://localhost:8080/api/csv/read`)
        console.log(data)
        setDataUser(data)
      } catch(error) {
        console.log(error)
      }
    }

    getRecords()
  }, []);

    return (
        <>
    
          <Table striped bordered hover>
            <thead>
              <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">date of birth</th>
              <th scope="col">gender</th>
              <th scope="col">address</th>
              <th scope="col">phone number</th>
              <th scope="col">email</th>
              </tr>
            </thead>
            <tbody>
            </tbody>
          </Table>
        
      </>
    );
}


export default Tablepatient;