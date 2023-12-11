import "./Nav.css"
import { Button, Offcanvas } from 'react-bootstrap';
// import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { BsBellFill, BsBookmark, BsCart2, BsSearch } from "react-icons/bs";
import { IoMdCart } from "react-icons/io";
import { FaBookmark } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from 'react-router-dom';



const Navigation = () => {

  return (
    <Navbar fixed="fixed" expand="lg" className=" top-0  navbar ">
      <div className="container d-flex justify-content-between  ">
        <div className=" ">
          <img
            className="w-75"
            src="/src/assets/HobbyCue Logo.png"
            alt="Logo"
          />
        </div>

        {/* Form */}
        <div className="input-group subscribe-form">
          <input
            type="search"
            placeholder="Search here"
            aria-describedby="button-addon5"
            className="form-control"
          />
          <div className="input-group-append">
            <button
              id="button-addon5"
              type="submit"
              className="btn btn-primary"
            >
              <BsSearch />
            </button>
          </div>
        </div>
        <BsSearch className="d-lg-none" />
        <BsBellFill className="icon d-lg-none" />
        <Navbar.Toggle aria-controls="navbarScroll" className=" hambuger-icon " />
        <Navbar.Collapse>
          <Nav
            className=" d-flex gap-4 justify-content-between align-items-center "
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <MdExplore className="explore_icon" />
            <NavDropdown title="Explore" id="nav-dropdown-explore">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <IoStar className="star_icon" />
            <NavDropdown title="Hobby" id="nav-dropdown-hobby">
              <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">
                Something else here
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            {/* Icons */}
            <FaBookmark className="icon" />
            <BsBellFill className="icon" />
            <IoMdCart className="icon" />

            <Navbar.Text className="justify-end">
              <Link to="/signIn" className="">
                <Button className="signInBtn">Sign in</Button>
              </Link>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Navigation;