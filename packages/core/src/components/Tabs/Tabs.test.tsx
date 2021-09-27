import { fireEvent, render, screen } from '@test-utils';
import React from 'react';
import Tab from './Tab';
import { Tabs } from './Tabs';
import { TabsProps, Variant } from './types';

const renderer = ({
    defaultActive = 'tab1',
    active = undefined,
    onChange = jest.fn(),
    tabSize = 'S',
    tabBackground = 'WHITE',
    forceRender = false,
    hidePanel = false,
    variant = 'flat'
}: TabsProps) =>
    render(
        <Tabs {...{ defaultActive, active, onChange, tabSize, tabBackground, forceRender, hidePanel, variant }}>
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
    test.each(['flat', 'outlined', 'solid'])('should render properly with %s tab variant', variant => {
        const { container } = renderer({ variant } as { variant: Variant });
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

    it('should not render tabPanel if hidePanel prop is given', () => {
        renderer({ hidePanel: true });
        expect(screen.queryByText('Content for the add panel')).not.toBeInTheDocument();
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
