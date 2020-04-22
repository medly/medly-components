import { render } from '@test-utils';
import React from 'react';
import { HeadCell } from './HeadCell';

describe('HeadCell', () => {
    it('should render head cell of cards table properly', () => {

        const onSortChange = jest.fn();
        const { container } = render(<HeadCell
            sortField='RxInfo'
            field='RxInfo'
            onSortChange={onSortChange}
            enableSorting={true}
            title='Hello'

         />);
        expect(container).toMatchSnapshot();
    });
});
