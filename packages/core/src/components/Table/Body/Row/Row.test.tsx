import { render } from '@test-utils';
import React from 'react';
import { NoResultRow, NoResultCell, Row } from './Row.styled';

describe('Row', () => {
    it('should render row properly', () => {
        const { container } = render(<Row>Dummy</Row>);
        expect(container).toMatchSnapshot();
    });

    it('should render NoResult properly', () => {
        const { container } = render(
            <NoResultRow>
                <NoResultCell>Dummy</NoResultCell>
            </NoResultRow>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render NoResult with Card design also', () => {
        const { container } = render(
            <NoResultRow showRowWithCardStyle>
                <NoResultCell>Dummy</NoResultCell>
            </NoResultRow>
        );
        expect(container).toMatchSnapshot();
    });
});
