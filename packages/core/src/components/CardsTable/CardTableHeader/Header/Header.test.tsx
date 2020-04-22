import { render } from '@test-utils';
import React from 'react';
import { Header } from './Header';

describe('Header', () => {
    it('should render header of cards table properly', () => {

        const onSortChange = jest.fn();
        const { container } = render(<Header 
            sortField='RxInfo'
            field='RxInfo'
            onSortChange={onSortChange}
            enableSorting={true}
            title='Hello'

         />);
        expect(container).toMatchSnapshot();
    });
});
