import { TestUtils } from '@medly-components/utils';
import React from 'react';
import Avatar from './Avatar';

describe('Avatar component', () => {
    it('should render with default props', () => {
        const { container } = TestUtils.render(<Avatar>M</Avatar>);
        expect(container).toMatchSnapshot();
    });

    it('should render with size', () => {
        const { container } = TestUtils.render(<Avatar size="M">M</Avatar>);
        expect(container).toMatchSnapshot();
    });

    it('should render with size and image', () => {
        const { container } = TestUtils.render(
            <Avatar size="XL">
                <img src="http://dummurl" />
            </Avatar>
        );
        expect(container).toMatchSnapshot();
    });
});
