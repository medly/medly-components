import { RemoveCircleIcon } from '@medly-components/icons';
import { cleanup, render } from '@test-utils';
import React from 'react';
import { Button } from '../..';
import { TablePropsContext } from '../TableProps.context';
import { ActionBar } from './ActionBar';

describe('ActionBar component', () => {
    const getButtonElement = (text: string) => (
        <Button size="S" variant="solid">
            <RemoveCircleIcon size="S" />
            {text}
        </Button>
    );
    const renderer = (props: any = { selectedRowIds: [1], actions: [getButtonElement('Lorem')] }) => {
        return render(
            <TablePropsContext.Provider value={{ ...props }}>
                <ActionBar />
            </TablePropsContext.Provider>
        );
    };

    afterEach(cleanup);

    it('should render correctly with all the default props', () => {
        const { container, getByText } = renderer();
        expect(container).toMatchSnapshot();
        expect(getByText('Lorem')).toBeInTheDocument();
        expect(getByText('1 Rows Selected')).toBeInTheDocument();
    });

    it('should not render Action bar with passed parameters', () => {
        const actionElements = [getButtonElement('Test1'), getButtonElement('Test2')];
        const { container, getByText } = renderer({ actions: actionElements, selectedRowIds: [1, 2] });
        expect(getByText('Test1')).toBeInTheDocument();
        expect(getByText('Test2')).toBeInTheDocument();
        expect(getByText('2 Rows Selected')).toBeInTheDocument();
        expect(container).toMatchSnapshot();
    });
});
