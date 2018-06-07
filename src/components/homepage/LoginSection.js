import React from 'react';
import NumberForm from './forms/NumberForm.js';
import OtpForm from './forms/OtpForm.js';
import ProfileSettings from './forms/ProfileSettings.js';
import "../../scripts/typewriter.js";

const typewriterStyle = {
	"color": "#e8c900"
};

const loaderStyle = {
	"color": "#555"
};

export default class LoginSection extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			NumberForm: false,
			OtpForm: false,
			ProfileSettings: true
		}
	}
    render(){
        return(
			<section className="section-gap">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 about-left">
							<div className="jumbotron bg-white">
								<h1 className="display-4">Making college life <span className="wrap typewrite" data-period="2000" data-type='[ "easier...", "smarter...", "better..."]' style={typewriterStyle}></span></h1>
								<br/>
								<table id="loader">
									<tbody>
										<tr>
											<td><div id="sync"></div></td>
											<td>
												<h5 style={loaderStyle}>&nbsp; Loading <span className="wrap typewrite" data-period="500" data-type='[ "..."]'></span></h5>
											</td>
										</tr>
									</tbody>
								</table>
								<br />
								<NumberForm display={this.state.NumberForm} />
								<OtpForm display={this.state.OtpForm} />
								<ProfileSettings display={this.state.ProfileSettings} />
							</div>
						</div>
						<div className="col-lg-6 about-right">
							<img className="img-fluid" src="./assets/images/image.jpg" alt=""/>
						</div>
					</div>
				</div>
			</section>
        );
    }
}