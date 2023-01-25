import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { useQuery } from "react-query";

const fetchUsers = async () => {
  const res = await fetch("/api/csv/read");
  return res.json();
};

const Record = () => {
  const { data } = useQuery("users", fetchUsers);
  return (
    <>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th scope="col">ID</th>
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
          {data?.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.first_Name}</td>
              <td>{user.last_Name}</td>
              <td>{user.dob}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>{user.phone_number}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Record;
