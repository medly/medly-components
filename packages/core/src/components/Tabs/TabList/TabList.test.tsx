import { fireEvent, render } from '@test-utils';
import React from 'react';
import Tab from '../Tab';
import { TabList } from './TabList';

const renderer = (active = 'tab1', onChange = jest.fn()) =>
    render(
        <TabList active={active} onChange={onChange}>
            <Tab id="tab1" label="Add">
                Content for the add panel
            </Tab>
            <Tab id="tab2" label="Edit">
                Content for the edit panel
            </Tab>
        </TabList>
    );

describe('Tab', () => {
    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should call onChange prop on click on any tab', () => {
        const mockOnChange = jest.fn();
        const { getByText } = renderer('tab1', mockOnChange);
        fireEvent.click(getByText('Edit'));
        expect(mockOnChange).toBeCalledWith('tab2');
    });

    it('should call onChange prop with expected data on pressing right arrow key', () => {
        const mockOnChange = jest.fn();
        const { container, getByText } = renderer('tab1', mockOnChange);
        fireEvent.focus(getByText('Add'));
        fireEvent.keyDown(container, { key: 'ArrowRight' });
        expect(mockOnChange).toBeCalledWith('tab2');
    });

    it('should call onChange prop with first tab id on pressing right arrow key and last tab is active', () => {
        const mockOnChange = jest.fn();
        const { container, getByText } = renderer('tab2', mockOnChange);
        fireEvent.focus(getByText('Add'));
        fireEvent.keyDown(container, { key: 'ArrowRight' });
        expect(mockOnChange).toBeCalledWith('tab1');
    });

    it('should call onChange prop with expected data on pressing left arrow key', () => {
        const mockOnChange = jest.fn();
        const { container, getByText } = renderer('tab2', mockOnChange);
        fireEvent.focus(getByText('Add'));
        fireEvent.keyDown(container, { key: 'ArrowLeft' });
        expect(mockOnChange).toBeCalledWith('tab1');
    });

    it('should call onChange prop with last tab id on pressing left arrow key and last tab is active', () => {
        const mockOnChange = jest.fn();
        const { container, getByText } = renderer('tab1', mockOnChange);
        fireEvent.focus(getByText('Add'));
        fireEvent.keyDown(container, { key: 'ArrowLeft' });
        expect(mockOnChange).toBeCalledWith('tab2');
    });

    it('should call onChange prop with expected data on pressing Home key', () => {
        const mockOnChange = jest.fn();
        const { container, getByText } = renderer('tab2', mockOnChange);
        fireEvent.focus(getByText('Add'));
        fireEvent.keyDown(container, { key: 'Home' });
        expect(mockOnChange).toBeCalledWith('tab1');
    });

    it('should call onChange prop with expected data on pressing left arrow key', () => {
        const mockOnChange = jest.fn();
        const { container, getByText } = renderer('tab1', mockOnChange);
        fireEvent.focus(getByText('Add'));
        fireEvent.keyDown(container, { key: 'End' });
        expect(mockOnChange).toBeCalledWith('tab2');
    });
});
