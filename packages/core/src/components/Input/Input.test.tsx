import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Input from './Input';

describe('Input component', () => {
    it('should render correctly with all the props given', () => {
        const { container } = TestUtils.render(
            <Input
                id="email-input"
                type="email"
                fullWidth
                label="Email Address"
                labelPosition="top"
                required
                placeholder="Enter Email Address"
                description="We will never share your email with anyone"
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when fullWidth & required props are falsy', () => {
        const { container } = TestUtils.render(
            <Input
                type="email"
                label="Email Address"
                labelPosition="left"
                placeholder="Enter Email Address"
                description="We will never share your email with anyone"
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when label and description are not given', () => {
        const { container } = TestUtils.render(<Input id="email-input" type="email" placeholder="Enter Email Address" />);
        expect(container).toMatchSnapshot();
    });

    it('should render correctly when it is disabled', () => {
        const { container } = TestUtils.render(<Input id="email-input" disabled placeholder="Enter Email Address" />);
        expect(container).toMatchSnapshot();
    });
});
