import React from 'react';
import { Grid } from 'react-bootstrap';
import JobBoardItem from './job-board-item/JobBoardItem'
import './JobBoard.css'

const JobBoard = () => (
	<Grid className='JobBoard-Container'>
		<JobBoardItem/>
		<JobBoardItem/>
		<JobBoardItem/>
		<JobBoardItem/>
	</Grid>
);

export default JobBoard;