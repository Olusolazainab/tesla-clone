import React from 'react';
import styled from 'styled-components';
import Section from './Section';
function ModelY() {
	return (
		<Container>
			
			<Section 
				title='Model Y'
				description='Order Online for Touchless Delivery'
				backgroundImg='model-y.jpg'
				leftBtnText='Custom order'
				rightBtnText='Existing inventory'
				/>
			
		</Container>
	);
}

export default Home;

const Container = styled.div`
	height: 100vh;
`;
