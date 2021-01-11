import { fireEvent, render, screen } from '@test-utils';
import React from 'react';
import Tab from './Tab';
import { Tabs } from './Tabs';
import { Props } from './types';

const renderer = ({
    defaultActive = 'tab1',
    active = undefined,
    onChange = jest.fn(),
    tabSize = 'S',
    tabStyle = 'CLOSED',
    tabBackground = 'WHITE',
    forceRender = false
}: Props) =>
    render(
        <Tabs {...{ defaultActive, active, onChange, tabSize, tabStyle, tabBackground, forceRender }}>
            <Tab id="tab1" label="Add" count={30} helperText="Details for tab1">
                Content for the add panel
            </Tab>
            <Tab id="tab2" label="Edit">
                Content for the edit panel
            </Tab>
            <Tab id="tab2" label="Delete" hide>
                Content for the delete panel
            </Tab>
            <Tab id="tab4" label="Disabled" disabled>
                Content for the disabled panel
            </Tab>
        </Tabs>
    );

describe('Tabs', () => {
    it('should render properly', () => {
        const { container } = renderer({});
        expect(container).toMatchSnapshot();
    });

    it('should hide the tab if hide prop is given', () => {
        const { container } = render(
            <Tabs>
                <Tab id="tab2" label="Delete" hide>
                    Content for the delete panel
                </Tab>
            </Tabs>
        );
        expect(screen.queryByText('Content for the delete panel')).toBeNull();
        expect(container).toBeEmptyDOMElement();
    });

    it('should not render anything if there is no children', () => {
        const { container } = render(<Tabs />);
        expect(container).toBeEmptyDOMElement();
    });

    it('should select expected tab on click on any tab, when active prop is not passed', async () => {
        const mockOnchange = jest.fn();
        renderer({ onChange: mockOnchange });
        fireEvent.click(screen.getByText('Edit'));
        expect(mockOnchange).toBeCalledWith('tab2');
        expect(screen.queryByText('Content for the edit panel')).toBeInTheDocument();
    });

    it('should render all tabs when forceRender prop is true', async () => {
        renderer({ forceRender: true });
        expect(screen.queryByText('Content for the add panel')).toBeInTheDocument();
        expect(screen.queryByText('Content for the edit panel')).toBeInTheDocument();
        expect(screen.queryByText('Content for the delete panel')).toBeInTheDocument();
        expect(screen.queryByText('Content for the disabled panel')).toBeInTheDocument();
    });

    it('should render only the active tab when forceRender prop is false', async () => {
        renderer({});
        expect(screen.queryByText('Content for the add panel')).toBeInTheDocument();
        expect(screen.queryByText('Content for the edit panel')).toBeNull();
        expect(screen.queryByText('Content for the delete panel')).toBeNull();
        expect(screen.queryByText('Content for the disabled panel')).toBeNull();
    });
});
