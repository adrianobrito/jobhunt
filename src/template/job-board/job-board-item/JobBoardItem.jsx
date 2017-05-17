import React, { Component} from 'react'
import { Row, Col } from 'react-bootstrap';
import './JobBoardItem.css'

class JobBoardItem extends Component {

	get categoryColors () {
		return {
			'development' : '#63b9d4',
			'qa'		  : '#bc92d6',
			'infra'		  : '#e3cd4f',
			'management'  : '#86bfb7'
		};		
	}

	colorFor(category) {
		return this.categoryColors[category];
	}
	
	render() {
		let { title, company, category} = this.props.job;
		let itemStyle = {
			backgroundColor : this.colorFor(category.id)
		};

		return (
			<div className="JobBoardItem-container" style={itemStyle}>
				<Row>
					<Col xs={10}>
						<p className="JobBoardItem-category">{category.name}</p>
						<h3 className="JobBoardItem-title">{title}</h3>
						<p className="JobBoardItem-company">{company}</p>
					</Col>
					<Col xs={2}>
						<p>Há 2 dias</p>
						<p>Fortaleza</p>
					</Col>
				</Row>
			</div>		
		);
	}

}

export default JobBoardItem;