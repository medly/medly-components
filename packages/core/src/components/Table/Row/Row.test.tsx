import { TestUtils } from '@medly-components/utils';
import React from 'react';

import { NoResult, Row } from './Row.styled';

describe('Row', () => {
    it('should render row properly', () => {
        const { container } = TestUtils.render(<Row>Dummy</Row>);
        expect(container).toMatchSnapshot();
    });

    it('should render NoResult properly', () => {
        const { container } = TestUtils.render(<NoResult>Dummy</NoResult>);
        expect(container).toMatchSnapshot();
    });
});
