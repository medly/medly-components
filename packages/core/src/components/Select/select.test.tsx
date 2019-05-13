import { TestUtils } from '@medly-components/utils';
import 'jest-styled-components';
import React from 'react';
import Select from './Select';

describe('Select component', () => {
    it('should render correctly with all the props given', () => {
        const { container } = TestUtils.render(
            <Select fullWidth label="Role" labelPosition="bottom" required description="We will never share your email with anyone">
                <option value="0">Admin</option>
                <option value="1">Pharmacist</option>
                <option value="2">Covered Entity</option>
            </Select>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when fullWidth & required props are falsy', () => {
        const { container } = TestUtils.render(
            <Select label="Role" description="We will never share your email with anyone">
                <option value="0">Admin</option>
                <option value="1">Pharmacist</option>
                <option value="2">Covered Entity</option>
            </Select>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when label and description are not given', () => {
        const { container } = TestUtils.render(
            <Select labelPosition="end">
                <option value="0">Admin</option>
                <option value="1">Pharmacist</option>
                <option value="2">Covered Entity</option>
            </Select>
        );
        expect(container).toMatchSnapshot();
    });
});
