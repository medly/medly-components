import { render } from '@test-utils';
import React from 'react';
import { HeadCell } from './HeadCell';

describe('HeadCell', () => {
    const onSortChange = jest.fn();
    it('should render head cell of cards table properly', () => {
        const { container } = render(
            <table>
                <HeadCell sortField="RxInfo" onSortChange={onSortChange} column={{ title: 'Demo', field: 'demo' }} />
            </table>
        );
        expect(container).toMatchSnapshot();
    });
});
