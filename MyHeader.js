import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../css/myheader.css';
const MyHeader = () => {
    return (
        <>
            <Navbar collapsOnSelect expand="lg" style={{ height: "60px", backgroundColor: "#0B0B45" }}>
                <img
                    className='rounded-circle border-light m-2'
                    src="logo1.jpeg"
                    style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "30px"
                    }}
                />
                <Navbar.Brand className='text-light'>
                    BazarHub
                </Navbar.Brand>
                <Navbar.Toggle aria-controles='responsive-nevbar-nev'
                    style={{
                        background: 'yellow',
                        marginRight: '10px'
                    }}

                />
                <Navbar.Collapse
                    id='responsive-nevbar-nev'>
                    <Nav className='mr-auto'>
                        <NavLink to="/About">
                            <label className='btn btn-success'>
                                About</label>
                        </NavLink>
                    </Nav>

                    <Nav className='mr-auto'>
                        <NavLink to="/">
                            <label className='btn btn-primary' >
                                Home</label>
                        </NavLink>
                    </Nav>

                    <NavDropdown title="all form's" id='nav-dropdown-tile-form' >
                        <NavDropdown.Item>
                            <NavLink to="/Stateform">
                                <label className='logo'>Stateform</label>
                            </NavLink>

                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to="/Areaform">
                                <label className='logo'>Areaform</label>

                            </NavLink>

                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to="/Cityform">
                                <label className='logo'>Cityform</label>

                            </NavLink>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <NavLink to="/Registration">
                                <label className='logo'>Registration</label>

                            </NavLink>
                        </NavDropdown.Item>

                    </NavDropdown>

                    <NavDropdown title="all report's" id='nav-dropdown-tile-report'>
                        <NavDropdown.Item>
                            <Nav className='mr-auto'>
                                <NavLink to="/Report">
                                    <label className='btn btn-success'>
                                        Report</label>
                                </NavLink>
                            </Nav>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Nav className='mr-auto'>
                                <NavLink to="/Statereport">
                                    <label className='btn btn-success'>
                                        Statereport</label>
                                </NavLink>
                            </Nav>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Nav className='mr-auto'>
                                <NavLink to="/Cityreport">
                                    <label className='btn btn-success'>
                                        Cityreport</label>
                                </NavLink>
                            </Nav>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Nav className='mr-auto'>
                                <NavLink to="/Areareport">
                                    <label className='btn btn-success'>
                                        Areareport</label>
                                </NavLink>
                            </Nav>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>


            </Navbar>
        </>

    );
}
export default MyHeader;