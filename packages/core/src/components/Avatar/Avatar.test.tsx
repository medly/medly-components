import { defaultTheme } from '@medly-components/theme';
import { render } from '@test-utils';
import React from 'react';
import { Avatar } from './Avatar';

describe('Avatar component', () => {
    it('should render with default theme', () => {
        const { container } = render(<Avatar>M</Avatar>);
        expect(container).toMatchSnapshot();
    });

    it('should render with all the props given', () => {
        const { container } = render(
            <Avatar
                size="M"
                textColor={defaultTheme.colors.green[500]}
                bgColor={defaultTheme.colors.green[100]}
                hoverBgColor={defaultTheme.colors.green[400]}
                hoverTextColor={defaultTheme.colors.white}
                hoverImgShadowColor="rgba(96, 120, 144, 0.35)"
                hoverTextShadowColor="rgba(0, 128, 0, 0.35)"
                pressedBgColor="rgba(96, 120, 144, 0.65)"
                pressedTextColor="rgba(0, 128, 0, 0.65)"
                onClick={jest.fn()}
            >
                M
            </Avatar>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render with default hover and pressed states', () => {
        const { container } = render(
            <Avatar
                size="M"
                textColor={defaultTheme.colors.green[500]}
                bgColor={defaultTheme.colors.green[100]}
                onClick={jest.fn()}
            >
                M
            </Avatar>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render with not-allowed cursor when it is disabled', () => {
        const { container } = render(
            <Avatar size="M" disabled>
                M
            </Avatar>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <Avatar size="L" onClick={jest.fn()}>
                <img src="http://dummurl" />
            </Avatar>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render avatar without hover and pressed states', () => {
        const { container } = render(
            <Avatar
                size="M"
                textColor={defaultTheme.colors.green[500]}
                bgColor={defaultTheme.colors.green[100]}
                hoverBgColor={defaultTheme.colors.green[400]}
                hoverTextColor={defaultTheme.colors.white}
                hoverImgShadowColor="rgba(96, 120, 144, 0.35)"
                hoverTextShadowColor="rgba(0, 128, 0, 0.35)"
                pressedBgColor="rgba(96, 120, 144, 0.65)"
                pressedTextColor="rgba(0, 128, 0, 0.65)"
            >
                M
            </Avatar>
        );
        expect(container).toMatchSnapshot();
    });
});
