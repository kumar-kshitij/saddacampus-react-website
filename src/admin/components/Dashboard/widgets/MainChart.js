import React from 'react';
import { Line } from 'react-chartjs-2';
import {
	Button,
	ButtonGroup,
	ButtonToolbar,
	Card,
	CardBody,
	CardFooter,
	CardTitle,
	Col,
	Progress,
	Row,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

//Random Numbers
const random = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

let elements = 27;
let data1 = [];
let data2 = [];
let data3 = [];

for (let i = 0; i <= elements; i++) {
	data1.push(random(50, 200));
	data2.push(random(80, 100));
	data3.push(65);
}

const chartData = {
	labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: hexToRgba(brandInfo, 10),
			borderColor: brandInfo,
			pointHoverBackgroundColor: '#fff',
			borderWidth: 2,
			data: data1,
		},
		{
			label: 'My Second dataset',
			backgroundColor: 'transparent',
			borderColor: brandSuccess,
			pointHoverBackgroundColor: '#fff',
			borderWidth: 2,
			data: data2,
		},
		{
			label: 'My Third dataset',
			backgroundColor: 'transparent',
			borderColor: brandDanger,
			pointHoverBackgroundColor: '#fff',
			borderWidth: 1,
			borderDash: [8, 5],
			data: data3,
		},
	],
};

const opts = {
	tooltips: {
		enabled: false,
		custom: CustomTooltips,
		intersect: true,
		mode: 'index',
		position: 'nearest',
		callbacks: {
			labelColor: function(tooltipItem, chart) {
				return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
			}
		}
	},
	maintainAspectRatio: false,
	legend: {
		display: false,
	},
	scales: {
		xAxes: [
		{
			gridLines: {
				drawOnChartArea: false,
			},
		}],
		yAxes: [
		{
			ticks: {
				beginAtZero: true,
				maxTicksLimit: 5,
				stepSize: Math.ceil(250 / 5),
				max: 250,
			},
		}],
	},
	elements: {
		point: {
			radius: 0,
			hitRadius: 10,
			hoverRadius: 4,
			hoverBorderWidth: 3,
		},
	},
};

export default class MainChart extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			radioSelected: 2
		};
	}

	onRadioBtnClick = (radioSelected) => {
		this.setState({ radioSelected });
	}

	render(){
		return(
			<Col>
				<Card>
					<CardBody>
						<Row>
							<Col sm="5">
								<CardTitle className="mb-0">Traffic</CardTitle>
								<div className="small text-muted">November 2015</div>
							</Col>
							<Col sm="7" className="d-none d-sm-inline-block">
								<Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
								<ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
									<ButtonGroup className="mr-3" aria-label="First group">
										<Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
										<Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
										<Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
									</ButtonGroup>
								</ButtonToolbar>
							</Col>
						</Row>
						<div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
							<Line data={chartData} options={opts} height={300} />
						</div>
					</CardBody>
					<CardFooter>
						<Row className="text-center">
							<Col sm={12} md className="mb-sm-2 mb-0">
								<div className="text-muted">Visits</div>
								<strong>29.703 Users (40%)</strong>
								<Progress className="progress-xs mt-2" color="success" value="40" />
							</Col>
							<Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
								<div className="text-muted">Unique</div>
								<strong>24.093 Users (20%)</strong>
								<Progress className="progress-xs mt-2" color="info" value="20" />
							</Col>
							<Col sm={12} md className="mb-sm-2 mb-0">
								<div className="text-muted">Pageviews</div>
								<strong>78.706 Views (60%)</strong>
								<Progress className="progress-xs mt-2" color="warning" value="60" />
							</Col>
							<Col sm={12} md className="mb-sm-2 mb-0">
								<div className="text-muted">New Users</div>
								<strong>22.123 Users (80%)</strong>
								<Progress className="progress-xs mt-2" color="danger" value="80" />
							</Col>
							<Col sm={12} md className="mb-sm-2 mb-0 d-md-down-none">
								<div className="text-muted">Bounce Rate</div>
								<strong>Average Rate (40.15%)</strong>
								<Progress className="progress-xs mt-2" color="primary" value="40" />
							</Col>
						</Row>
					</CardFooter>
				</Card>
			</Col>
		);
	}
}
