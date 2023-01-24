import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
    return (
      <>
      <br/>
      <h2 className="mb-3">Import CSV File to MySQL database</h2><form action="/api/csv/upload" method="post" enctype="multipart/form-data">
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              name="file"
              accept="csv" />
          </div>
            <input type="submit" className="btn btn-dark" value="Store File" />
      </form>
    </>      

    );
}


export default Home;
