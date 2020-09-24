import { fireEvent, render, screen } from '@test-utils';
import React from 'react';
import Tab from './Tab';
import { Tabs } from './Tabs';
import { Props } from './types';

const renderer = ({ defaultActive = 'tab1', active = undefined, onChange = jest.fn() }: Props) =>
    render(
        <Tabs {...{ defaultActive, active, onChange }}>
            <Tab id="tab1" label="Add">
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
});
