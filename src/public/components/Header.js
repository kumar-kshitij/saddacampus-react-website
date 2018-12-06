import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default class Header extends React.Component {
	constructor(props){
		super(props);
		this.state = { dropdownOpen: false };
	}
	componentDidMount(){
		window.addEventListener("click", (event) => {
			if(!event.target.matches('#profile-options')){
				this.setState({
					dropdownOpen: false
				});
			}
		});
	}
	toggle = () => {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		});
	}
	componentWillUnmount() {
		window.removeEventListener("click", (event) => {
			if(!event.target.matches('#profile-options')){
				this.setState({
					dropdownOpen: false
				});
			}
		});
	}
	render(){
		return (
			<Navbar color="light" light expand="sm" sticky={(this.props.isSticky ? 'top' : '')} className={"bg-white" + (this.props.hasBorderBottom ? " border-bottom" : "")} style={{ boxShadow: (this.props.hasShadow ? '0px 8px 6px -8px #555' : 'none') }}>
				<Container>
					<NavbarBrand href="/" style={{ fontWeight: 'bold' }}>
						<h2 style={{ fontFamily: 'Bebas' }}>SADDACAMPUS</h2>
					</NavbarBrand>
					<Nav className="ml-auto" navbar style={{ flexDirection: 'row' }}>
						<NavItem>
							<NavLink to="/" className="nav-link">
								<img className="img-fluid" width="30" src="/assets/images/svg/home.svg" />
							</NavLink>
						</NavItem>
						&nbsp;&nbsp;
						<NavItem>
							<NavLink to="/help" className="nav-link">
								<img className="img-fluid" width="30" src="/assets/images/svg/questions-circular-button.svg" />
							</NavLink>
						</NavItem>
						&nbsp;&nbsp;
						<NavItem>
							<div className="nav-link" style={{ position: 'relative' }}>
								<img id="profile-options" className="img-fluid" width="30" src="/assets/images/svg/user.svg" onClick={this.toggle} />
								<div style={{ position: 'absolute', top: '100%', display: (this.state.dropdownOpen ? 'block' : 'none'), minWidth: '150px', overflow: 'auto', zIndex: 1, backgroundColor: '#fff', boxShadow: '0 2px 6px 0 #ccc' }}>
									<div style={{ padding: '5px 10px' }}>Header</div>
									<div style={{ padding: '5px 10px' }}>Header</div>
									<div style={{ padding: '5px 10px' }}>Header</div>
								</div>
							</div>
						</NavItem>
					</Nav>
				</Container>
			</Navbar>
		);
	}
}
