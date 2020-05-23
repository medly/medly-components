import { fireEvent, render } from '@test-utils';
import React from 'react';
import Tab from './Tab';
import { Tabs } from './Tabs';

describe('Tabs', () => {
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
        const mockOnchange = jest.fn();
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
});
