import { render } from '@test-utils';
import React from 'react';
import { NoResult, Row } from './Row.styled';

describe('Row', () => {
    it('should render row properly', () => {
        const { container } = render(<Row>Dummy</Row>);
        expect(container).toMatchSnapshot();
    });

    it('should render NoResult properly', () => {
        const { container } = render(<NoResult>Dummy</NoResult>);
        expect(container).toMatchSnapshot();
    });
});
