import { render } from '@test-utils';
import React from 'react';
import Checkbox from '../../../Checkbox';
import Text from '../../../Text';
import TableCell from './Cell';
import { Cell } from './Styled/Cell.styled';

describe('Cell', () => {
    it('should render text properly', () => {
        const { container } = render(
            <Cell tableSize="M">
                <Text>Dummy</Text>
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render frozen text properly', () => {
        const { container } = render(
            <Cell frozen tableSize="M">
                <Text>Dummy</Text>
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should not render text if hidden property is given', () => {
        const { container } = render(
            <Cell hidden tableSize="M">
                <Text>Dummy</Text>
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render checkbox properly', () => {
        const { container } = render(
            <Cell tableSize="M">
                <Checkbox label="Dummy" />
            </Cell>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render tooltip properly', () => {
        const { container } = render(
            <TableCell
                data="hello"
                rowId="1"
                rowData={{}}
                tableSize="M"
                hiddenDivRef={{ current: jest.fn() }}
                dottedFieldName="title"
                config={{ title: 'Hello', field: 'hello' }}
            />
        );
        expect(container).toMatchSnapshot();
    });
});
