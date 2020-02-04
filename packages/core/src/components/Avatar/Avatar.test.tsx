import { render } from '@test-utils';
import React from 'react';
import { Avatar } from './Avatar';

describe('Avatar component', () => {
    it('should render with default props', () => {
        const { container } = render(<Avatar>M</Avatar>);
        expect(container).toMatchSnapshot();
    });

    it('should render with size', () => {
        const { container } = render(<Avatar size="M">M</Avatar>);
        expect(container).toMatchSnapshot();
    });

    it('should render with size and image', () => {
        const { container } = render(
            <Avatar size="XL">
                <img src="http://dummurl" />
            </Avatar>
        );
        expect(container).toMatchSnapshot();
    });
});
