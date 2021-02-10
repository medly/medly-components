import { render } from '@test-utils';
import React from 'react';
import Header from './';

describe('Drawer Header Test', () => {
    it('should render text if string is passed', () => {
        const { container } = render(<Header>Demo Header</Header>);
        expect(container).toMatchSnapshot();
    });

    it('should render component if its passed', () => {
        const { container } = render(
            <Header>
                <div>Render DIV</div>
            </Header>
        );
        expect(container).toMatchSnapshot();
    });
});
