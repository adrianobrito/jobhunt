import React from 'react';
import { Grid } from 'react-bootstrap';
import JobBoardItem from './job-board-item/JobBoardItem'
import './JobBoard.css'

let job1 = {
	title 	 : 'Security Analyst',
	company  : 'E-CORP',
	postedAt : '01/01/2017',
	category : { 
		id : 'development',
		name: 'Development'
	},
};

let job2 = {
	title 	 : 'Neural Network Specialist',
	company  : 'Pied Piper',
	postedAt : '01/01/2017',
	category : { 
		id : 'infra',
		name: 'Infra'
	},
};

const JobBoard = () => (
	<Grid className='JobBoard-Container'>
		<JobBoardItem job={job1}/>
		<JobBoardItem job={job2}/>
	</Grid>
);

export default JobBoard;