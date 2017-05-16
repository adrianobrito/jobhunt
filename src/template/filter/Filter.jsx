import React from 'react'
import { Grid, Tabs, Tab } from 'react-bootstrap';
import './Filter.css'

const Filter = () => (
	<Grid>
		<Tabs id='filterTabs' defaultActiveKey={1} bsStyle='pills' className='Filter-Tabs'>
			<Tab eventKey={1} title="Todas as Vagas"></Tab>
			<Tab eventKey={2} title="Desenvolvimento"></Tab>
			<Tab eventKey={3} title="Qualidade"></Tab>
			<Tab eventKey={4} title="Suporte"></Tab>
			<Tab eventKey={5} title="Gestão"></Tab>
		</Tabs>
	</Grid>		
);

export default Filter