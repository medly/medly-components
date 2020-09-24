import { render } from '@test-utils';
import React from 'react';
import { Tab } from './Tab';
import { Props } from './types';

const renderer = ({ id = 'dummy', label = 'Add', hide = false, disabled = false, active = false }: Partial<Props>) =>
    render(<Tab {...{ id, label, hide, disabled, active }}>Content for the add panel</Tab>);

describe('Tab', () => {
    it('should render active state properly', () => {
        const { container } = renderer({ active: true });
        expect(container).toMatchSnapshot();
    });

    it('should render disabled state properly', () => {
        const { container } = renderer({ disabled: true });
        expect(container).toMatchSnapshot();
    });
});
