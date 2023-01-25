import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark ">
        <div class="container-fluid">
          <Link class="navbar-brand text-white" to="/">
            Home
          </Link>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link class="nav-link active text-white" to="/Record">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
