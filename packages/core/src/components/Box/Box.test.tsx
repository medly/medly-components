import { render } from '@test-utils';
import React from 'react';
import { Box } from './Box';

describe('Box', () => {
	it('should render properly', () => {
		const { container } = render(<Box />);
		expect(container).toMatchSnapshot();
	})
})
