import { render } from '@test-utils';
import React from 'react';
import { Row } from './Row.styled';

describe('Row', () => {
    it('should render row properly', () => {
        const { container } = render(<Row disabled={true} withLightTheme={true} >Dummy</Row>);
        expect(container).toMatchSnapshot();
    });
});
