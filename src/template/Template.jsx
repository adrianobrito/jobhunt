import React from 'react';
import NavTemplate from './nav-template/NavTemplate'
import Filter from './filter/Filter'
import JobBoard from './job-board/JobBoard'

const Template = () => (     
	<div>
		<NavTemplate/>
		<Filter/>
		<JobBoard/>	
	</div> 
)

export default Template 