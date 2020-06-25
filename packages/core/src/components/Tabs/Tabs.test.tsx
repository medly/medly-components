import { fireEvent, render } from '@test-utils';
import React from 'react';
import Tab from './Tab';
import { Tabs } from './Tabs';

describe('Tabs', () => {
    const mockOnchange = jest.fn();
    it('should render properly without any prop', () => {
        const { container } = render(
            <Tabs>
                <Tab id="tab1" label="Add">
                    Content for the add panel
                </Tab>
                <Tab id="tab2" label="Edit">
                    Content for the edit panel
                </Tab>
            </Tabs>
        );
        expect(container).toMatchSnapshot();
    });

    it('should not render when there is no children', () => {
        const { container } = render(<Tabs />);
        expect(container).toMatchSnapshot();
    });

    it('should hide the tab if hide prop is given', async () => {
        const { queryByText } = render(
            <Tabs defaultActive="tab2">
                <Tab id="tab1" label="Add" hide>
                    Content for the add panel
                </Tab>
                <Tab id="tab2" label="Edit">
                    Content for the edit panel
                </Tab>
            </Tabs>
        );
        expect(queryByText('Content for the add panel')).toBeNull();
    });

    it('should select expected tab on click on any tab, when only defaultActive prop is given', async () => {
        const { getByText, queryByText } = render(
            <Tabs defaultActive="tab1">
                <Tab id="tab1" label="Add">
                    Content for the add panel
                </Tab>
                <Tab id="tab2" label="Edit">
                    Content for the edit panel
                </Tab>
            </Tabs>
        );
        fireEvent.click(getByText('Edit'));
        expect(queryByText('Content for the edit panel')).toBeInTheDocument();
    });

    it('should call onChange prop with expected tab id', () => {
        const { getByText } = render(
            <Tabs active="tab1" onChange={mockOnchange}>
                <Tab id="tab1" label="Add">
                    Content for the add panel
                </Tab>
                <Tab id="tab2" label="Edit">
                    Content for the edit panel
                </Tab>
            </Tabs>
        );
        fireEvent.click(getByText('Edit'));
        expect(mockOnchange).toBeCalledWith('tab2');
    });

    it('should render with count if count is passed', () => {
        const { getByText, queryByText } = render(
            <Tabs defaultActive="tab1" onChange={mockOnchange}>
                <Tab id="tab1" label="Add" count={30} secondaryLabel="Details for tab1">
                    Content for the add panel
                </Tab>
                <Tab id="tab2" label="Edit" count={40} secondaryLabel="Details for tab1">
                    Content for the edit panel
                </Tab>
            </Tabs>
        );

        expect(getByText('30')).toBeInTheDocument();
        expect(queryByText('Details for tab1')).toBeNull();
    });

    it('should render details only when tabSize is Large', () => {
        const { getByText } = render(
            <Tabs defaultActive="tab1" onChange={mockOnchange} tabSize="L">
                <Tab id="tab1" label="Add" count={30} secondaryLabel="Details for tab1">
                    Content for the add panel
                </Tab>
                <Tab id="tab2" label="Edit" count={40} secondaryLabel="Details for tab2">
                    Content for the edit panel
                </Tab>
            </Tabs>
        );
        expect(getByText('30')).toBeInTheDocument();
        expect(getByText('Details for tab1')).toBeInTheDocument();
    });
});
