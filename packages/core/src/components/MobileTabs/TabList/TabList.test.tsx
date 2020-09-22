import { fireEvent, render, screen } from '@test-utils';
import React from 'react';
import { Tab } from '../Tab/Tab';
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
        ),
    keyboardNavigation = (active: string, label: string, key: string, onChange = jest.fn()) => {
        const { container } = renderer(active, onChange);
        fireEvent.focus(screen.getByText(label));
        fireEvent.keyDown(container, { key });
    };

describe('TabList', () => {
    const mockOnChange = jest.fn();
    afterEach(() => mockOnChange.mockClear());

    it('should render properly', () => {
        const { container } = renderer();
        expect(container).toMatchSnapshot();
    });

    it('should call onChange prop on click on any tab', () => {
        renderer('tab1', mockOnChange);
        fireEvent.click(screen.getByText('Edit'));
        expect(mockOnChange).toBeCalledWith('tab2');
    });

    it('should call onChange prop with expected data on pressing right arrow key', () => {
        keyboardNavigation('tab1', 'Add', 'ArrowRight', mockOnChange);
        expect(mockOnChange).toBeCalledWith('tab2');
    });

    it('should call onChange prop with first tab id on pressing right arrow key and last tab is active', () => {
        keyboardNavigation('tab2', 'Add', 'ArrowRight', mockOnChange);
        expect(mockOnChange).toBeCalledWith('tab1');
    });

    it('should call onChange prop with expected data on pressing left arrow key', () => {
        keyboardNavigation('tab2', 'Add', 'ArrowLeft', mockOnChange);
        expect(mockOnChange).toBeCalledWith('tab1');
    });

    it('should call onChange prop with last tab id on pressing left arrow key and last tab is active', () => {
        keyboardNavigation('tab1', 'Add', 'ArrowLeft', mockOnChange);
        expect(mockOnChange).toBeCalledWith('tab2');
    });

    it('should call onChange prop with expected data on pressing Home key', () => {
        keyboardNavigation('tab2', 'Add', 'Home', mockOnChange);
        expect(mockOnChange).toBeCalledWith('tab1');
    });

    it('should call onChange prop with expected data on pressing End arrow key', () => {
        keyboardNavigation('tab1', 'Add', 'End', mockOnChange);
        expect(mockOnChange).toBeCalledWith('tab2');
    });
});
