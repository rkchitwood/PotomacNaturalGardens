import { Link } from 'react-router-dom'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

export default function NavBar() {

  return (
    <Navbar expand="md" className="border-bottom w-100">
        <NavbarBrand tag={Link} to="/">
        Potomac Natural Gardens
        </NavbarBrand>
        <Nav className="d-flex flex-row">
            <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/gallery">Gallery</NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/contact">Contact</NavLink>
            </NavItem>    
        </Nav>
    </Navbar>
  )
}
