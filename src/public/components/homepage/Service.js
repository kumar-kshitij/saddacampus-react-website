import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => (
	<div className="col-lg-3">
		<div className="single-service">
			<div className="imgWithHeading">
				<div className="thumb">
					<img className="img-fluid" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="" style={{ 'borderRadius': '0', 'borderBottom': '3px solid #fff', 'height': '175px' }} />
				</div>
				<Link to={props.link} className="imgHeading"><h4>{props.serviceName}</h4></Link>
			</div>
			<p className="lnr">{props.serviceDescription}</p>
		</div>
	</div>
);

export default Service;
