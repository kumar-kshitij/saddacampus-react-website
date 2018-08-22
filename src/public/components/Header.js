import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
	constructor(){
		super();
		this.state = { dropdownOpen: false };
	}
	toggle = () => {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}
	render(){
		return (
			<Navbar color="light" light expand="lg" sticky="top" className="bg-white border-bottom" style={{ boxShadow: '0px 8px 6px -7px #ccc' }}>
				<Container>
					<NavbarBrand href="/" style={{ fontWeight: 'bold' }}>
						<img src="/assets/images/brand/16-9.png" width="75" className="d-inline-block" alt="" />
						 &nbsp;&nbsp; SADDACAMPUS
					</NavbarBrand>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink to="/" className="nav-link">
								<img className="img-fluid" width="30" src="assets/images/svg/home.svg" />
							</NavLink>
						</NavItem>
						&nbsp;&nbsp;
						<NavItem>
							<NavLink to="/help" className="nav-link">
								<img className="img-fluid" width="30" src="assets/images/svg/questions-circular-button.svg" />
							</NavLink>
						</NavItem>
						&nbsp;&nbsp;
						<NavItem>
							<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
								<DropdownToggle caret className="profile-dropdown-btn">
									<img className="img-fluid" width="30" src="assets/images/svg/user.svg" />
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem header>Header</DropdownItem>
									<DropdownItem disabled>Action</DropdownItem>
									<DropdownItem>Another Action</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Another Action</DropdownItem>
								</DropdownMenu>
							</ButtonDropdown>
						</NavItem>
					</Nav>
				</Container>
			</Navbar>
		);
	}
}
