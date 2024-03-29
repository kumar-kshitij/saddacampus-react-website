import React from 'react';
import NumberForm from './forms/NumberForm.js';
import OtpForm from './forms/OtpForm.js';
import ProfileSettings from './forms/ProfileSettings.js';
import ErrorBoundary from '../ErrorBoundary';
import Typewriter from './Typewriter';
import { Row, Col, Container, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class LoginSection extends React.Component{
	constructor(){
		super();
		this.state = {
			loading: false,
			NumberForm: true,
			OtpForm: false,
			ProfileSettings: false,
			country_code: '',
			number: '',
			otp: '',
			message: '',
			// isOpen: false,
			dropdownOpen: false,
			windowHeight: 650,
			windowWidth: 650
		}
	}
	componentDidMount(){
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions);
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
			// isOpen: !this.state.isOpen,
			dropdownOpen: !this.state.dropdownOpen
		});
	}
	changeState = (newState) => {
		this.setState(() => newState);
	}
	updateDimensions = () => {
		this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
		window.removeEventListener("click", this.updateDimensions);
	}

    render(){
        return(
			<section style={{ 'minHeight': this.state.windowHeight+'px' }}>
				<Row className="remove-extra-space">
					<Col md={7} className="remove-extra-space">
						<Container>
							<Navbar color="light" light expand="lg" className="bg-white">
								<NavbarBrand href="/" style={{ fontWeight: 'bold' }}>
									<h1 style={{ fontFamily: 'Bebas' }}>SADDACAMPUS</h1>
								</NavbarBrand>
								<Nav className="ml-auto" navbar style={{ flexDirection: 'row' }}>
									<NavItem>
										<Link to="/" className="nav-link">
											<img className="img-fluid" width="30" src="assets/images/svg/home.svg" />
										</Link>
									</NavItem>
									&nbsp;&nbsp;
									<NavItem>
										<Link to="/help" className="nav-link">
											<img className="img-fluid" width="30" src="assets/images/svg/questions-circular-button.svg" />
										</Link>
									</NavItem>
									&nbsp;&nbsp;
									<NavItem>
										<div className="nav-link" style={{ position: 'relative' }}>
											<img id="profile-options" className="img-fluid" width="30" src="assets/images/svg/user.svg" onClick={this.toggle} />
											<div style={{ position: 'absolute', top: '100%', display: (this.state.dropdownOpen ? 'block' : 'none'), minWidth: '150px', overflow: 'auto', zIndex: 1, backgroundColor: 'rgba(255,255,255,0.9)', boxShadow: '0 2px 6px 0 #ccc' }}>
												<div style={{ padding: '5px 10px' }}>Header</div>
												<div style={{ padding: '5px 10px' }}>Header</div>
												<div style={{ padding: '5px 10px' }}>Header</div>
											</div>
										</div>
									</NavItem>
								</Nav>
							</Navbar>
							<div className="jumbotron bg-white">
								<h1 style={{ fontSize: '44px', fontFamily: 'Lato, Black', marginBottom: '3%' }}>
									Making college life
									<br />
									<Typewriter strings={["easier...", "smarter...", "better..."]} typeSpeed={130} backSpeed={50} color={'#0578EB'} />
								</h1>
								<p style={{ fontSize: '18px', lineHeight: '20px', margin: '5% 0', paddingRight: '35%', fontFamily: 'Lato, Regular' }}>Saddacampus is one step solution for all your college needs from services like food delivery and exciting college specific deals at the tap of your fingers sitting in your hostel rooms.</p>
								{this.state.loading &&
									<table style={{ 'marginBottom': '1%' }}>
										<tbody>
											<tr>
												<td><div id="sync"></div></td>
												<td>
													<h5 style={{ 'color': '#555' }}>&nbsp; Loading...</h5>
												</td>
											</tr>
										</tbody>
									</table>
								}
								<ErrorBoundary>
									{this.state.NumberForm && <NumberForm changeState={this.changeState} />}
									{this.state.OtpForm && <OtpForm changeState={this.changeState} message={this.state.message} country_code={this.state.country_code} number={this.state.number}/>}
									{this.state.ProfileSettings && <ProfileSettings country_code={this.state.country_code} number={this.state.number} />}
								</ErrorBoundary>
							</div>
						</Container>
					</Col>
					<Col md={5} className="remove-extra-space">
						<img className="img-fluid" src="./assets/images/image.jpg" alt="" style={{ 'height': this.state.windowHeight+'px' }} />
					</Col>
				</Row>
			</section>
        );
    }
}
