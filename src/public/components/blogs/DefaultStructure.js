import React from 'react';
import { Row, Col } from 'reactstrap';

import Header from './Header';
import CategoryNavbar from './CategoryNavbar';
import MainPage from './MainPage';
import Sidebar from './Sidebar';

const DefaultStructure = () => (
	<div>
		<Header />
		<CategoryNavbar />
		<Row className="remove-extra-space">
			<Col md={9} className="remove-extra-space">
				<MainPage />
			</Col>
			<Col md={3} className="remove-extra-space">
				<Sidebar />
			</Col>
		</Row>
	</div>
);

export default DefaultStructure;
