import { defaultTheme } from '@medly-components/theme/src';
import { render } from '@test-utils';
import React from 'react';
import Text from '../../Text';
import { Title } from './Title';

describe('Title component', () => {
    const handleToggleMock = jest.fn(),
        renderTitle = () =>
            render(
                <Title isActive={false} onToggle={handleToggleMock}>
                    <Text>Hello</Text>
                </Title>
            );
    it('should render properly', () => {
        const { container } = renderTitle();
        expect(container).toMatchSnapshot();
    });

    it('should change background color when provided', () => {
        const { container } = render(
            <Title isActive={true} onToggle={handleToggleMock} bgColor={defaultTheme.colors.communityBlue[100]}>
                <Text>Hello</Text>
            </Title>
        );
        expect(container).toMatchSnapshot();
    });
});
